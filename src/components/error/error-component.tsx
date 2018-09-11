import { Component } from '@stencil/core';

@Component({
    tag: 'error-component'
})
export class ErrorComponent {
    
    render() {
        return <h2>Uuops, an error</h2>
    }
}