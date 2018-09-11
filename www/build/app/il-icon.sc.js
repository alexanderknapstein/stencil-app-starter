/*! Built with http://stenciljs.com */
const { h } = window.App;

class Icon {
    constructor() {
        /**
         * Size category to apply to the icon as css-class
         */
        this.size = '';
        this.active = false;
        this.fill = '#000';
        /**
         * If url is passed as property, an additional property called "target" can be passed to redirect the user to a specific target location, default is the same frame where the link was clicked.
         */
        this.target = '_self';
        /**
         * Names of additional classes applied to the icon, separated by space
         */
        this.classes = '';
    }
    componentWillLoad() {
        if (!this.isServer) {
            return this.iconRegistryInjector.create().then(dataService => {
                this.iconRegistry = dataService;
            });
        }
    }
    render() {
        const classes = this.size + ' ' + this.classes;
        if (this.iconRegistry) {
            return this.url ? h("div", { class: ['icon', classes].join(' ') },
                h("a", { href: this.url, target: this.target, innerHTML: this.iconRegistry.getIcon(this.name) })) : h("div", { class: ['icon', classes].join(' '), innerHTML: this.iconRegistry.getIcon(this.name) });
        }
        else {
            return;
        }
    }
    static get is() { return "il-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "classes": {
            "type": String,
            "attr": "classes"
        },
        "color": {
            "type": String,
            "attr": "color",
            "reflectToAttr": true,
            "mutable": true
        },
        "fill": {
            "type": String,
            "attr": "fill"
        },
        "iconRegistry": {
            "state": true
        },
        "iconRegistryInjector": {
            "connect": "il-icon-registry"
        },
        "isServer": {
            "context": "isServer"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "\n\n"; }
}

export { Icon as IlIcon };
