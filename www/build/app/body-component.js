/*! Built with http://stenciljs.com */
const { h } = window.App;

class BodyComponent {
    render() {
        // const result = [];
        console.log(this.data);
        if (this.data && (this.data.type === 'text_with_summary' ||
            this.data.type === 'text_long')) {
            const body = this.data.value.map((value) => {
                if (value.format === 'filtered_html') {
                    let str = value.value;
                    str = str.replace(/src="\//g, 'src="https://dev.b31.hosting.il8.de/');
                    return h("div", { class: "body text-with-summary", innerHTML: str });
                }
            });
            return body;
        }
        return;
    }
    static get is() { return "body-component"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 10px auto; }\n\n.body p, .body ul {\n  display: block;\n  max-width: 740px;\n  margin: 0 auto; }"; }
}

export { BodyComponent };
