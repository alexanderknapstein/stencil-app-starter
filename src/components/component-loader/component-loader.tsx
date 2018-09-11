import { Component, Prop, State, Element } from '@stencil/core';


@Component({
  tag: 'component-loader',
  styleUrl: 'component-loader.scss'
})
export class ComponentLoader {

  @Prop() doc: string;
  @Prop() data: any;
  @State() type: any;
  @State() subtype: any;
  @State() template: any;
  @Element() el: HTMLElement;

  render() {
    if (this.data && this.data.field_template 
      && this.data.field_template.value
      && this.data.field_template.value[0]) {
        this.template = this.data.field_template.value[0].name;
      }

    this.el.innerHTML = '';
    if (this.data && this.data.nid) {
      if (this.template) {
        const element: any = document.createElement('page-node-' + this.template);
        element.data = this.data;
        this.el.appendChild(element);
      }
    }
    return;
  }
}
