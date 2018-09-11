import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'teaser-component',
    styleUrl: 'teaser-component.scss',
    shadow: true
})

export class TeaserComponent {
    
    /**
     * The data property is the content structure which is needed to fill into the html elements inside the render() function
     */
    @Prop() data: any;

    /**
     * Here we provide the image data to show an image inside the teaser
     */
    @Prop() imageData: any;

    /**
     * Prepare data to assign to internal variables to work with (before component is loaded)
     */
    private title: string;
    private subtitle: string = "Dies ist der Subtitle, der wird entfernt sobald ein Text einegegeben wurde..";
    // private type: string;
    private changedDate: string;
    private class: string;
    private text: string;

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
            if(this.data.class) {
                this.class = this.data.class;
            }
            if(this.data.text) {
                this.text = this.data.text;
            }
        }
    }

    componentDidLoad() {
        // console.log({
        //     title: this.title,
        //     subtitle: this.subtitle,
        //     type: this.type,
        //     changedDate: this.changedDate,
        //     class: this.class,
        //     text: this.text
        // });
    }

    render() {
      return [
          <div class={{'teaser': true, 'hero': this.class == 'hero'}}>
              <header>
              <stencil-route-link url={this.data.url}>
                  <h2 class="teaser__title">{this.title}</h2>
                  </stencil-route-link>
                  {this.subtitle
                      ? <p>{this.subtitle}</p>
                      : null
                  }
              </header>
              {this.text
                  ? <div>{this.text}</div>
                  : null
              }
              {this.changedDate
                  ? <p class="date">{this.changedDate}</p>
                  : null
              }
              <il-icon name="ic_visibility" fill="#FFC900"></il-icon>
          </div>
      ];
    }
}