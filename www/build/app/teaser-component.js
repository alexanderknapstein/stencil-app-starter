/*! Built with http://stenciljs.com */
const { h } = window.App;

class TeaserComponent {
    constructor() {
        this.subtitle = "Dies ist der Subtitle, der wird entfernt sobald ein Text einegegeben wurde..";
    }
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
            if (this.data.class) {
                this.class = this.data.class;
            }
            if (this.data.text) {
                this.text = this.data.text;
            }
        }
    }
    componentDidLoad() {
        // console.log({
        //     title: this.title,
        //     subtitle: this.subtitle,
        //     type: this.type,
        //     changedDate: this.changedDate,
        //     class: this.class,
        //     text: this.text
        // });
    }
    render() {
        return [
            h("div", { class: { 'teaser': true, 'hero': this.class == 'hero' } },
                h("header", null,
                    h("stencil-route-link", { url: this.data.url },
                        h("h2", { class: "teaser__title" }, this.title)),
                    this.subtitle
                        ? h("p", null, this.subtitle)
                        : null),
                this.text
                    ? h("div", null, this.text)
                    : null,
                this.changedDate
                    ? h("p", { class: "date" }, this.changedDate)
                    : null,
                h("il-icon", { name: "ic_visibility", fill: "#FFC900" }))
        ];
    }
    static get is() { return "teaser-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "imageData": {
            "type": "Any",
            "attr": "image-data"
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.teaser {\n  padding: 0 10px 0 0; }\n  .teaser.hero {\n    border-top: 1px solid #545250;\n    border-bottom: 8px solid #545250; }"; }
}

export { TeaserComponent };
