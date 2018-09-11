import { Component, Prop, Listen, State } from '@stencil/core';


@Component({
    tag: 'page-node-page',
    styleUrl: 'page-node-page.scss'
})
export class PageNodePage {

    @Prop() data: any;
    @State() isOpened: boolean = false;

    @Listen('toggleOpen')
    toggleOpenHandler() {
      this.isOpened = !this.isOpened;
    }

    render() {
      const result = [];

      if (this.data.articles) {
        const articles = this.data.articles.map((item) => {
          return <teaser-component data={item}></teaser-component>;
        });
        
        if (this.isOpened) {
          result.push(
            <div class="main-content">
              <node-full data={this.data}></node-full>
              <div class="newspapergrid">
                {articles}
              </div>
            </div>
          );
        } else {
          result.push(
            <div class="main-content">
              <div class="newspapergrid">
                <hero-teaser-component data={this.data}></hero-teaser-component>          
                {articles}
              </div>
            </div>
          );
        }
      } else {
        result.push(
          <div class="main-content single">
            <node-full data={this.data}></node-full>
          </div>,
        );  
      }

      if (this.data.documents) {
        result.push(
          <documents-list data={this.data.documents}></documents-list>
        )
      }
      return result;
    }
}