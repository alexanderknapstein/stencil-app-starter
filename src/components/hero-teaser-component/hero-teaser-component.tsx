import { Component, Prop, State, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'hero-teaser-component',
    styleUrl: 'hero-teaser-component.scss',
    shadow: true
})

export class HeroTeaserComponent {

    /**
     * The data property is the content structure which is needed to fill into the html elements inside the render() function
     */
    @Prop() data: any;
    @Event() toggleOpen: EventEmitter;
    /**
     * Here we provide the image data to show an image inside the teaser
     */
    @Prop() imageData: any;
    @State() isOpened: boolean = false;

    @Element() el: HTMLElement;
    /**
     * Prepare data to assign to internal variables to work with (before component is loaded)
     */
    private title: string;
    private subtitle: string = 'Demo Subtitle, bitte im Datensatz einpflegen';
    private type: string;
    private changedDate: string;
    private class: string;
    private text: string;
    private headerimage: any;
    private teaser: any;

    componentWillLoad() {
        if(this.data) {
            if(this.data.title) {
                this.title = this.data.title;
            }
            if(this.data.subtitle) {
                this.subtitle = this.data.subtitle;
            }
            if(this.data.type) {
                this.type = this.data.type;
            }
            if(this.data.changed) {
                this.changedDate = this.data.changed;
            }
            if(this.data.class) {
                this.class = this.data.class;
            }
            if(this.data.text) {
                this.text = this.data.text;
            }
            if(this.data.field_headerimage && this.data.field_headerimage.value &&
              this.data.field_headerimage.value.length) {
                this.headerimage = this.data.field_headerimage
            }
            if(this.data.field_teaser && this.data.field_teaser.value &&
              this.data.field_teaser.value.length) {
                this.teaser = this.data.field_teaser;
            }
        }
    }

    componentDidLoad() {
        console.log({
            title: this.title,
            subtitle: this.subtitle,
            type: this.type,
            changedDate: this.changedDate,
            class: this.class,
            text: this.text
        })
    }

    public open() {
      console.log("open da shit");
      // this.isOpened = !this.isOpened;
      this.toggleOpen.emit(this.isOpened);

      // this.el.setAttribute('class', this.el.getAttribute('class') + ' opened');
    }

    render() {
      if (this.isOpened === true) {
        return <node-full data={this.data}></node-full>
      } else {
        return [
          <div class={{'teaser': true, 'hero': true}}>
              <header class={{'elevate': true, '--with-image': this.headerimage, '--opened': this.isOpened}}>
                <div class="elevate-content">
                  <div class="container">
                    <h2 class="teaser__title">{this.title}</h2>
                    {this.subtitle
                        ? <p class="subtitle">{this.subtitle}</p>
                        : null
                    }
                    {this.teaser && !this.isOpened
                        ? <body-component data={this.teaser}></body-component>
                        : null
                    }
                  </div>
                </div>
                <div class="elevate-image">
                  {this.headerimage
                    ? <image-component prefix="styles/headerimage/public/" data={this.headerimage}></image-component>
                    : null
                  }
                </div>
              </header>

              <div class="main-content">
              {this.isOpened && this.teaser
                  ? <body-component data={this.teaser} class="teaser"></body-component>
                  : null
              }
              {this.isOpened
                  ? <body-component data={this.data.body} class="main"></body-component>
                  : null
              }
              </div>

              <div class="footer">
                <div class="read-more">
                  <il-icon onClick={this.open.bind(this)} name="ic_visibility" color="#FFC900"></il-icon>
                </div>
                <div class="meta">
                  {this.changedDate
                    ? <p class="date">{this.changedDate}</p>
                    : null
                  }
                </div>
              </div>
          </div>
        ];
      }
    }
}
