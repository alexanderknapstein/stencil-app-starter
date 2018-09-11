/*! Built with http://stenciljs.com */
const { h } = window.App;

class ErrorComponent {
    render() {
        return h("h2", null, "Uuops, an error");
    }
    static get is() { return "error-component"; }
}

export { ErrorComponent };
