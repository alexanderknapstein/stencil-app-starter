import { Component } from '@stencil/core';


@Component({
    tag: 'section-title',
    styleUrl: 'section-title.scss',
    shadow: true
})
export class SectionTitle {

    render() {
        return (
            <div class="container">
                <p><slot/></p>
            </div>
        );
    }
}
