import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators';

import './app-home';

import { connect } from 'pwa-helpers';
import { Router } from '@vaadin/router';

import '../components/header';
import store, { RootState } from '../store/store';
import { closeDrawer, openDrawer } from '../store/drawer';

@customElement('app-index')
export class AppIndex extends  connect( store )( LitElement )   {

  @property( { type: Boolean, } ) drawer: boolean = false;

  static get styles() {
    return css`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              await import('./app-about.js');
            },
          },
        ],
      } as any,
    ]);

    store.subscribe( () => this.stateChanged( store.getState() ) );
  }

  public stateChanged ( state:RootState ): void {
    this.drawer = state.ui.drawer.open;

  }

  render() {
    return html`
      <div>
        <app-header
          @open="${ () => store.dispatch( openDrawer() ) }"
        ></app-header>
        <sl-drawer
          ?open="${ this.drawer }"
          @sl-hide="${ () => store.dispatch( closeDrawer() ) }"
        >
          <a href="./">Home</a>
          <a href="./about">About</a>

        </sl-drawer>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
  }
}
