import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'body-component',
    styleUrl: 'body-component.scss'
})
export class BodyComponent {
    
    @Prop() data?: any;
    
    render() {
        // const result = [];
        console.log(this.data);
        if (this.data && (
          this.data.type === 'text_with_summary' ||
          this.data.type === 'text_long'
        )) {
            const body = this.data.value.map((value) => {
                if (value.format === 'filtered_html') {
                    let str = value.value;
                    str = str.replace(/src="\//g, 'src="https://dev.b31.hosting.il8.de/');
                    return <div class="body text-with-summary" innerHTML={str}></div>;
                }
            });
            return body;
        }
        return;
    }
}