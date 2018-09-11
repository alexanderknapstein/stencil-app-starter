import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'image-component',
    styleUrl: 'image-component.scss',
    shadow: true
})

export class ImageComponent {
    
    /**
     * The data property is the content structure which is needed to fill into the html elements inside the render() function
     */
    @Prop() data: any;
    @Prop() urlprefix: any;
    /**
     * Prepare data to assign to internal variables to work with (before component is loaded)
     */
    private src: string;
    // private width: number;
    // private height: number;

    componentWillLoad() {
        if(this.data) {
            if(this.data.value && this.data.value.length) {
                if (this.data.value[0]) {
                  const img = this.data.value[0];
                  // this.width = img.width;
                  // this.height = img.height;
                  const src = img.uri;
                  let replace = 'http://b31.verkehr-bodenseeraum.de/files/';
                  if (this.urlprefix) {
                    replace = replace + this.urlprefix;
                  }
                  this.src = src.replace('public://', replace);
                  this.src = '/assets/images/bild3.jpg';
                  console.log(this.src);
                }
            }
        }
    }

    render() {
      if (this.src) {
        return <img src={this.src}/>
      }
    }
}