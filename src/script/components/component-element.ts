import { LitElement, css, CSSResultGroup } from 'lit';

export class ComponentElement extends LitElement {

  static get styles(): CSSResultGroup[] {
    return [ css`
      :host::selection,
      ::selection {
        background-color: var( --app-action );
      }
    `];
  }
}
