import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'teaser-group',
    styleUrl: 'teaser-group.scss'
})
export class TeaserGroup {

  @Prop() data: any;

  render() {
    return (
      <div>
        {this.data && this.data.length
          ? this.data.map((content: any) => { 
              return <teaser-component data={content} class={content.class} imageData={content.images}></teaser-component>
            })
          : null
        } 
      </div>
    );
  }
}
