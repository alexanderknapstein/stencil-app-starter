import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'node-full',
    styleUrl: 'node-full-component.scss',
    shadow: true,
})
export class NodeFullComponent {

    @Prop() data: any;

    private title: string;
    private subtitle: string = 'Demo Subtitle, bitte im Datensatz einpflegen';
    // private type: string;
    private changedDate: string;
    // private class: string;
    // private text: string;
    private headerimage: any;
    private teaser: any;
    // private subtype: string;

    componentWillLoad() {
        if(this.data) {
            if(this.data.title) {
                this.title = this.data.title;
            }
            if(this.data.subtitle) {
                this.subtitle = this.data.subtitle;
            }
            // if(this.data.type) {
            //     this.type = this.data.type;
            // }
            if(this.data.changed) {
                this.changedDate = this.data.changed;
            }
            // if(this.data.class) {
            //     this.class = this.data.class;
            // }
            // if(this.data.text) {
            //     this.text = this.data.text;
            // }
            if(this.data.field_headerimage && this.data.field_headerimage.value &&
              this.data.field_headerimage.value.length) {
                this.headerimage = this.data.field_headerimage
            }
            if(this.data.field_teaser && this.data.field_teaser.value &&
              this.data.field_teaser.value.length) {
                this.teaser = this.data.field_teaser;
            }
            // this.subtype = this.data.subtype;
        }
    }

    render() {
      return [
        <header class={{'elevate': true, '--with-image': this.headerimage}}>
          <div class="elevate-content">
            <div class="container">
              <h2 class="teaser__title">{this.title}</h2>
              {this.subtitle
                  ? <p class="subtitle">{this.subtitle}</p>
                  : null
              }
            </div>
          </div>
          {this.headerimage
            ? <div class="elevate-image">
                <image-component prefix="styles/headerimage/public/" data={this.headerimage}></image-component>
              </div>
            : null
          }
        </header>,
        <div class="main-content">
          {this.teaser
              ? <body-component data={this.teaser} class="teaser"></body-component>
              : null
          }
          <body-component data={this.data.body} class="main"></body-component>

          {/* {JSON.stringify(this.data, null, 2)} */}
        </div>,
        <div class="footer">
          <div class="read-more">
            <a href={'https://dev.b31.hosting.il8.de/node/' + this.data.nid}>NID</a>
          </div>
          <div class="meta">
            {this.changedDate
              ? <p class="date">{this.changedDate}</p>
              : null
            }
          </div>
        </div>
      ];
    }
}