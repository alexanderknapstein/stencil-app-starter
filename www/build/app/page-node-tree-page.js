/*! Built with http://stenciljs.com */
const { h } = window.App;

class PageNodeTreePage {
    render() {
        let arbeitsgruppen = null;
        if (this.data.arbeitsgruppen) {
            arbeitsgruppen = h("teaser-group", { data: this.data.arbeitsgruppen });
        }
        return [
            h("div", { class: "cover" },
                h("section-title", null, "Das Expertenforum"),
                h("h1", { class: "title" }, this.data.title),
                this.data.subtitle
                    ? h("p", { class: "summary" }, this.data.subtitle)
                    : h("p", { class: "summary" }, "The most famous psychology study of all time was a sham. Why can\u2019t we escape the Stanford Prison Experiment?")),
            h("div", { class: "container" },
                h("body-component", { data: this.data.body })),
            arbeitsgruppen
        ];
    }
    static get is() { return "page-node-tree-page"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\npage-node-tree-page {\n  display: block; }\n\n.cover {\n  text-align: center;\n  position: relative; }\n\n.title {\n  display: block;\n  margin: 1em auto; }\n\n.subtitle {\n  display: block;\n  margin: 1em auto; }\n\n.section-title {\n  position: absolute;\n  top: 10px; }"; }
}

class TeaserGroup {
    render() {
        return (h("div", null, this.data && this.data.length
            ? this.data.map((content) => {
                return h("teaser-component", { data: content, class: content.class, imageData: content.images });
            })
            : null));
    }
    static get is() { return "teaser-group"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\nteaser-group {\n  /* Component styles go here */ }"; }
}

export { PageNodeTreePage, TeaserGroup };
