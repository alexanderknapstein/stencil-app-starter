/*! Built with http://stenciljs.com */
const { h } = window.App;

class FileComponent {
    componentWillLoad() {
        if (this.data) {
            if (this.data.title) {
                this.title = this.data.title;
            }
            if (this.data.type) {
                this.type = this.data.type;
            }
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
        console.log({
            title: this.title,
            type: this.type,
            changedDate: this.changedDate,
            class: this.class,
            text: this.text
        });
    }
    render() {
        return [
            h("div", { class: { 'teaser': true, 'hero': this.class == 'hero' } },
                h("header", null,
                    h("h2", { class: "teaser__title" }, this.title)),
                this.text
                    ? h("div", null, this.text)
                    : null,
                this.changedDate
                    ? h("p", { class: "date" }, this.changedDate)
                    : null)
        ];
    }
    static get is() { return "file-component"; }
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
    static get style() { return "\n\n"; }
}

export { FileComponent };
