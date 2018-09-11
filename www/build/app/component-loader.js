/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentLoader {
    render() {
        if (this.data && this.data.field_template
            && this.data.field_template.value
            && this.data.field_template.value[0]) {
            this.template = this.data.field_template.value[0].name;
        }
        this.el.innerHTML = '';
        if (this.data && this.data.nid) {
            if (this.template) {
                const element = document.createElement('page-node-' + this.template);
                element.data = this.data;
                this.el.appendChild(element);
            }
        }
        return;
    }
    static get is() { return "component-loader"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "doc": {
            "type": String,
            "attr": "doc"
        },
        "el": {
            "elementRef": true
        },
        "subtype": {
            "state": true
        },
        "template": {
            "state": true
        },
        "type": {
            "state": true
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\ncomponent-loader {\n  display: block;\n  width: 100%; }"; }
}

class PageComponent {
    componentWillLoad() {
        // this.checkPath();
        // return this.fetchContent();
    }
    checkPath() {
        if (window && window.location && window.location.pathname) {
            this.url = window.location.pathname;
        }
    }
    fetchContent() {
        let path;
        // if (false && this.doc) {
        //   path = '/content/' + this.doc;
        // } else  
        if (this.url) {
            path = '/content' + this.url + '.json';
            path = 'http://localhost:3000/api/get?url=' + this.url.substr(1);
        }
        console.log(path);
        if (path !== undefined) {
            return fetch(path)
                .then((res) => res.json())
                .catch(err => console.log(err))
                .then((jsondata) => {
                console.log(jsondata);
                if (jsondata) {
                    this.data = jsondata;
                }
            });
        }
    }
    render() {
        return (h("div", null, this.data
            ?
                h("div", { class: "main-content" },
                    h("component-loader", { data: this.data }))
            : null));
    }
    static get is() { return "page-component"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "doc": {
            "type": String,
            "attr": "doc"
        },
        "subtype": {
            "state": true
        },
        "template": {
            "state": true
        },
        "type": {
            "state": true
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.main-content {\n  background-color: #FFF9E5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px; }\n\n.frontpage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-color: #FFF9E5; }\n  .frontpage teaser-component {\n    width: 100%;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    \@media screen and (min-width: 900px) {\n      .frontpage teaser-component {\n        width: 33.333333333%;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; }\n        .frontpage teaser-component.hero {\n          width: 100%;\n          -webkit-box-ordinal-group: 1;\n              -ms-flex-order: 0;\n                  order: 0; } }\n    \@media screen and (min-width: 1200px) {\n      .frontpage teaser-component {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        width: 25%; }\n        .frontpage teaser-component:nth-child(2) {\n          -webkit-box-ordinal-group: 1;\n              -ms-flex-order: 0;\n                  order: 0; }\n        .frontpage teaser-component.hero {\n          width: 75%;\n          -webkit-box-ordinal-group: 2;\n              -ms-flex-order: 1;\n                  order: 1; } }"; }
}

export { ComponentLoader, PageComponent };
