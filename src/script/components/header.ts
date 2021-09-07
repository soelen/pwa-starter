import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'PWA Starter';

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav a {
        margin-left: 10px;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <sl-dropdown>
        <sl-button slot="trigger" caret>
          <sl-icon name="translate"></sl-icon>
        </sl-button>
        <sl-menu>
          <sl-menu-item checked>German</sl-menu-item>
          <sl-menu-item disabled>English</sl-menu-item>
        </sl-menu>
      </sl-dropdown>

        <nav>
          <a href="./">Home</a>
          <a href="./about">About</a>
        </nav>
      </header>
    `;
  }
}
