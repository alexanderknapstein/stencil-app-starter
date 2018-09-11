import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'page-node-tree-page',
    styleUrl: 'page-node-tree-page.scss'
})
export class PageNodeTreePage {

    @Prop() data: any;

    render() {
      let arbeitsgruppen = null;
      if(this.data.arbeitsgruppen) {
        arbeitsgruppen = <teaser-group data={this.data.arbeitsgruppen}></teaser-group>
      };
      return [
          <div class="cover">
              <section-title>Das Expertenforum</section-title>
              <h1 class="title">{this.data.title}</h1>
              {this.data.subtitle
                ?<p class="summary">{this.data.subtitle}</p>
                :<p class="summary">The most famous psychology study of all time was a sham. Why can’t we escape the Stanford Prison Experiment?</p>
              }
          </div>,
          <div class="container">
              <body-component data={this.data.body}></body-component>
          </div>,
          arbeitsgruppen
      ];
    }
}