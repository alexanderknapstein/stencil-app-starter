/*! Built with http://stenciljs.com */
const { h } = window.App;

class NodeFullComponent {
    constructor() {
        this.subtitle = 'Demo Subtitle, bitte im Datensatz einpflegen';
    }
    // private subtype: string;
    componentWillLoad() {
        if (this.data) {
            if (this.data.title) {
                this.title = this.data.title;
            }
            if (this.data.subtitle) {
                this.subtitle = this.data.subtitle;
            }
            // if(this.data.type) {
            //     this.type = this.data.type;
            // }
            if (this.data.changed) {
                this.changedDate = this.data.changed;
            }
            // if(this.data.class) {
            //     this.class = this.data.class;
            // }
            // if(this.data.text) {
            //     this.text = this.data.text;
            // }
            if (this.data.field_headerimage && this.data.field_headerimage.value &&
                this.data.field_headerimage.value.length) {
                this.headerimage = this.data.field_headerimage;
            }
            if (this.data.field_teaser && this.data.field_teaser.value &&
                this.data.field_teaser.value.length) {
                this.teaser = this.data.field_teaser;
            }
            // this.subtype = this.data.subtype;
        }
    }
    render() {
        return [
            h("header", { class: { 'elevate': true, '--with-image': this.headerimage } },
                h("div", { class: "elevate-content" },
                    h("div", { class: "container" },
                        h("h2", { class: "teaser__title" }, this.title),
                        this.subtitle
                            ? h("p", { class: "subtitle" }, this.subtitle)
                            : null)),
                this.headerimage
                    ? h("div", { class: "elevate-image" },
                        h("image-component", { prefix: "styles/headerimage/public/", data: this.headerimage }))
                    : null),
            h("div", { class: "main-content" },
                this.teaser
                    ? h("body-component", { data: this.teaser, class: "teaser" })
                    : null,
                h("body-component", { data: this.data.body, class: "main" })),
            h("div", { class: "footer" },
                h("div", { class: "read-more" },
                    h("a", { href: 'https://dev.b31.hosting.il8.de/node/' + this.data.nid }, "NID")),
                h("div", { class: "meta" }, this.changedDate
                    ? h("p", { class: "date" }, this.changedDate)
                    : null))
        ];
    }
    static get is() { return "node-full"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        }
    }; }
    static get style() { return "\n[data-node-full-host] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  [data-node-full-host]   h1[data-node-full], [data-node-full-host]   h2[data-node-full], [data-node-full-host]   h3[data-node-full], [data-node-full-host]   h4[data-node-full], [data-node-full-host]   .title[data-node-full], [data-node-full-host]   .subtitle[data-node-full] {\n    font-family: 'Merriweather', serif; }\n[data-node-full-host] {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  [data-node-full-host]   h1[data-node-full], [data-node-full-host]   h2[data-node-full], [data-node-full-host]   h3[data-node-full], [data-node-full-host]   h4[data-node-full], [data-node-full-host]   .title[data-node-full], [data-node-full-host]   .subtitle[data-node-full] {\n    font-family: 'Merriweather', serif; }\n\nbody[data-node-full] {\n  margin: 0;\n  padding: 0; }\n\n[data-node-full-host] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.elevate[data-node-full] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  \@media screen and (min-width: 900px) {\n    .elevate-content[data-node-full] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .container[data-node-full]   .elevate-content.--with-image[data-node-full] {\n        padding: 10px 10px 0 0; }\n      .--opened[data-node-full]   .elevate-content[data-node-full] {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .--opened[data-node-full]   .elevate-content[data-node-full]   .container[data-node-full] {\n          padding: 10px 10px 28% 0; }\n    .elevate-image[data-node-full] {\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      .--opened[data-node-full]   .elevate-image[data-node-full] {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; } }\n  \@media screen and (min-width: 1200px) {\n    .elevate-content[data-node-full] {\n      width: 50%; }\n    .elevate-image[data-node-full] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; } }\n\n.main-content[data-node-full] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.footer[data-node-full] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n"; }
}

export { NodeFullComponent as NodeFull };
