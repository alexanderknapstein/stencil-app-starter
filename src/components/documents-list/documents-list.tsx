import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'documents-list',
    styleUrl: 'documents-list.scss'
})
export class DocumentsList {

    @Prop() data: any;

    render() {
      if (this.data && this.data.length) {
        console.log(this.data);
        const list = this.data.map((doc) => {
          return <document-teaser data={doc} class="teaser"></document-teaser>;
        });
        return <div class="documents-list">{list}</div>;
      };
    }
}