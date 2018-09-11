import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'page-component',
  styleUrl: 'page-component.scss'
})
export class PageComponent {

  @Prop() doc: string;
  @State() data: any;
  @State() type: any;
  @State() subtype: any;
  @State() template: any;

  private url: string;

  componentWillLoad() {
    // this.checkPath();
    // return this.fetchContent();
  }

  checkPath() {
    if(window && window.location && window.location.pathname) {
      this.url = window.location.pathname;
    }    
  }

  fetchContent() {
    let path;
    // if (false && this.doc) {
    //   path = '/content/' + this.doc;
    // } else  
    if (this.url) {
      path = '/content' + this.url + '.json';
      path = 'http://localhost:3000/api/get?url=' + this.url.substr(1);
    }
    console.log(path);
    if (path !== undefined) {
      return fetch(path)
        .then((res) => res.json())
        .catch(err => console.log(err))
        .then((jsondata) => {
          console.log(jsondata);
          if (jsondata) {
            this.data = jsondata;
          }
        });
    }
  }

  render() {
    return (
      <div>
        {this.data 
          ?
          <div class="main-content"> 
            <component-loader data={this.data}></component-loader>
          </div>
          :null
        } 
      </div>
    );   
  }
}
