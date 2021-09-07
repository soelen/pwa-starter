import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators';
import { RootState } from '../store/store';
import { PageElement } from './page-element';

@customElement('app-home')
export class AppHome extends PageElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return [ ...super.styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar .card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      button {
        cursor: pointer;
      }

      @media (min-width: 1200px) {
        #welcomeCard,
        #infoCard {
          width: 40%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        .card {
          --background-color: white;
        }
      }
    ` ];
  }

  @property( { type: Boolean, } ) drawer: boolean = false;

  stateChanged( state:RootState ) {
    state;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <div>
        <div id="welcomeBar">
          <div class="card" id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a
                href="https://github.com/pwa-builder/pwa-starter/blob/master/README.md"
                >README</a>.
            </p>

            <p>
              Welcome to the
              <a href="https://pwabuilder.com"
                >PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com"
                >PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft, Google Play
              and Samsung Galaxy stores!
            </p>

            ${'share' in navigator
              ? html`<sl-button @click="${this.share}"
                  >Share this Starter!</sl-button>`
              : null}

          </div>

          <div class="card" id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a
                  href="https://www.typescriptlang.org/"
                  >TypeScript</a>
              </li>

              <li>
                <a
                  href="https://lit.dev"
                  >lit</a>
              </li>

              <li>
                <a
                  href="https://www.fast.design/docs/components/getting-started"
                  >FAST Components</a>
              </li>

              <li>
                <a
                  href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
