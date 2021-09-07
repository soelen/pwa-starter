import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { getLocale, setLocaleFromLocalStorage } from '../locales/localization.js';

import { allLocales } from '../locales/locale-codes';

import { localized } from '@lit/localize';
import { ComponentElement } from './component-element.js';

@localized()
@customElement('lk-localepicker')
export class LkLocalepicker extends ComponentElement {

  static get styles() {
    return [
      ...super.styles,
      css`
      [active] {
        text-decoration: underline;
      }
      button {
        all: unset;
        cursor: pointer;
      }
    `]
  }

  render() {
    return html`
      ${ allLocales.map( locale => html`
        <button
          @click="${ () => this.localeChanged( locale ) }"
          ?active="${ getLocale() === locale }"
        >
        ${ locale.split( '-' )[0] }
        </button>
      `)}
    `;
  }

  localeChanged( locale: string ) {
    if ( locale !== getLocale()) setLocaleFromLocalStorage( locale );
  }
}
