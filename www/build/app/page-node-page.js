/*! Built with http://stenciljs.com */
const { h } = window.App;

class PageNodePage {
    constructor() {
        this.isOpened = false;
    }
    toggleOpenHandler() {
        this.isOpened = !this.isOpened;
    }
    render() {
        const result = [];
        if (this.data.articles) {
            const articles = this.data.articles.map((item) => {
                return h("teaser-component", { data: item });
            });
            if (this.isOpened) {
                result.push(h("div", { class: "main-content" },
                    h("node-full", { data: this.data }),
                    h("div", { class: "newspapergrid" }, articles)));
            }
            else {
                result.push(h("div", { class: "main-content" },
                    h("div", { class: "newspapergrid" },
                        h("hero-teaser-component", { data: this.data }),
                        articles)));
            }
        }
        else {
            result.push(h("div", { class: "main-content single" },
                h("node-full", { data: this.data })));
        }
        if (this.data.documents) {
            result.push(h("documents-list", { data: this.data.documents }));
        }
        return result;
    }
    static get is() { return "page-node-page"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "isOpened": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "toggleOpen",
            "method": "toggleOpenHandler"
        }]; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.main-content {\n  background-color: #FFF9E5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .main-content.single {\n    display: block; }\n  \@media screen and (min-width: 900px) {\n    .main-content {\n      padding: 0 65px; } }\n  \@media screen and (min-width: 1200px) {\n    .main-content {\n      padding: 0 95px; } }\n\n.newspapergrid {\n  display: block; }\n  \@media screen and (min-width: 1200px) {\n    .newspapergrid hero-teaser-component {\n      width: 75%;\n      float: right; }\n      .newspapergrid hero-teaser-component.opened {\n        width: 100%;\n        float: none; }\n    .newspapergrid teaser-component {\n      float: left;\n      width: 25%; } }\n\n.newspaper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-color: #FFF9E5; }\n  .newspaper hero-teaser-component {\n    width: 100%;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    \@media screen and (min-width: 900px) {\n      .newspaper hero-teaser-component {\n        width: 100%;\n        -webkit-box-ordinal-group: 1;\n            -ms-flex-order: 0;\n                order: 0; } }\n    \@media screen and (min-width: 1200px) {\n      .newspaper hero-teaser-component {\n        width: 75%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; } }\n  .newspaper teaser-component {\n    width: 100%;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    \@media screen and (min-width: 900px) {\n      .newspaper teaser-component {\n        width: 33.333333333%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; } }\n    \@media screen and (min-width: 1200px) {\n      .newspaper teaser-component {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        width: 25%; }\n        .newspaper teaser-component:nth-child(2) {\n          -webkit-box-ordinal-group: 1;\n              -ms-flex-order: 0;\n                  order: 0; } }"; }
}

export { PageNodePage };
