import { Component, Prop } from '@stencil/core';
import { DateTime } from 'luxon';

@Component({
    tag: 'document-teaser',
    styleUrl: 'document-teaser.scss'
})
export class DocumentTeaser {

    @Prop() data: any;

    private title: string;
    private subtitle: string = 'Subtitle, bitte einpflegen';
    private date: DateTime;
    private tags: Array<any> = [];
    private viewLink: string;
    private downloadLink: string;

    componentWillLoad() {
      if(this.data) {
        this.title = this.data.title;
        if (this.subtitle) {
          this.subtitle = this.data.subtitle;
        }
        if (this.data.field_date
          && this.data.field_date.value) {
            this.date = DateTime.fromFormat(this.data.field_date.value[0].value, 'yyyy-mm-dd HH:mm:ss');
        }
        if (this.data.field_document_file && this.data.field_document_file.value && 
          this.data.field_document_file.value.length
        ) {
          const src = this.data.field_document_file.value[0].uri;
          let replace = 'http://b31.verkehr-bodenseeraum.de/files/';
          this.viewLink = src.replace('public://', replace);          
          replace = 'http://b31.verkehr-bodenseeraum.de/system/files_force/';
          this.downloadLink = src.replace('public://', replace) + '?download=1'; 
        }
      }
    }

    render() {
      const tags = this.tags.map((tag) => {
        return <span>{'#'+ tag}</span>;
      }).join(',');
      console.log(tags);
      return [
        <div>
          <h3 class="title">{this.title}</h3>
          <div class="meta">
            <span class="date">{this.date.toFormat('dd.MM.yyyy')}</span>
            <div class="tags">
              {tags}
            </div>
          </div>
          <div class="subtitle">{this.subtitle}</div>
          <div class="downloads">
            <a class="view" href={this.viewLink}>Ansehen</a>
            <a class="view" href={this.downloadLink}>Herunterladen</a>
          </div>
        </div>
      ];
    }
}