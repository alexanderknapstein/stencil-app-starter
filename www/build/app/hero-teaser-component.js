/*! Built with http://stenciljs.com */
const { h } = window.App;

class HeroTeaserComponent {
    constructor() {
        this.isOpened = false;
        this.subtitle = 'Demo Subtitle, bitte im Datensatz einpflegen';
    }
    componentWillLoad() {
        if (this.data) {
            if (this.data.title) {
                this.title = this.data.title;
            }
            if (this.data.subtitle) {
                this.subtitle = this.data.subtitle;
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
            if (this.data.field_headerimage && this.data.field_headerimage.value &&
                this.data.field_headerimage.value.length) {
                this.headerimage = this.data.field_headerimage;
            }
            if (this.data.field_teaser && this.data.field_teaser.value &&
                this.data.field_teaser.value.length) {
                this.teaser = this.data.field_teaser;
            }
        }
    }
    componentDidLoad() {
        console.log({
            title: this.title,
            subtitle: this.subtitle,
            type: this.type,
            changedDate: this.changedDate,
            class: this.class,
            text: this.text
        });
    }
    open() {
        console.log("open da shit");
        // this.isOpened = !this.isOpened;
        this.toggleOpen.emit(this.isOpened);
        // this.el.setAttribute('class', this.el.getAttribute('class') + ' opened');
    }
    render() {
        if (this.isOpened === true) {
            return h("node-full", { data: this.data });
        }
        else {
            return [
                h("div", { class: { 'teaser': true, 'hero': true } },
                    h("header", { class: { 'elevate': true, '--with-image': this.headerimage, '--opened': this.isOpened } },
                        h("div", { class: "elevate-content" },
                            h("div", { class: "container" },
                                h("h2", { class: "teaser__title" }, this.title),
                                this.subtitle
                                    ? h("p", { class: "subtitle" }, this.subtitle)
                                    : null,
                                this.teaser && !this.isOpened
                                    ? h("body-component", { data: this.teaser })
                                    : null)),
                        h("div", { class: "elevate-image" }, this.headerimage
                            ? h("image-component", { prefix: "styles/headerimage/public/", data: this.headerimage })
                            : null)),
                    h("div", { class: "main-content" },
                        this.isOpened && this.teaser
                            ? h("body-component", { data: this.teaser, class: "teaser" })
                            : null,
                        this.isOpened
                            ? h("body-component", { data: this.data.body, class: "main" })
                            : null),
                    h("div", { class: "footer" },
                        h("div", { class: "read-more" },
                            h("il-icon", { onClick: this.open.bind(this), name: "ic_visibility", color: "#FFC900" })),
                        h("div", { class: "meta" }, this.changedDate
                            ? h("p", { class: "date" }, this.changedDate)
                            : null)))
            ];
        }
    }
    static get is() { return "hero-teaser-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "el": {
            "elementRef": true
        },
        "imageData": {
            "type": "Any",
            "attr": "image-data"
        },
        "isOpened": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "toggleOpen",
            "method": "toggleOpen",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.elevate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  \@media screen and (min-width: 900px) {\n    .elevate-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      .elevate-content .container {\n        padding: 10px 10px 0 0; }\n      .--opened .elevate-content {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .--opened .elevate-content .container {\n          padding: 10px 10px 28% 0; }\n    .elevate-image {\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      .--opened .elevate-image {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; } }\n\n.main-content .teaser {\n  display: block;\n  margin: 2em 0 1em; }\n\n.main-content .main {\n  display: block;\n  margin: 1em 0; }\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 20px 0 0 0;\n  border-bottom: 8px solid red;\n  border-bottom: 8px solid #545250; }\n  .footer .read-more {\n    background: blue;\n    width: 33.33333%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .footer .meta {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 66.66667%;\n    background: red;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }"; }
}

class ImageComponent {
    // private width: number;
    // private height: number;
    componentWillLoad() {
        if (this.data) {
            if (this.data.value && this.data.value.length) {
                if (this.data.value[0]) {
                    const img = this.data.value[0];
                    // this.width = img.width;
                    // this.height = img.height;
                    const src = img.uri;
                    let replace = 'http://b31.verkehr-bodenseeraum.de/files/';
                    if (this.urlprefix) {
                        replace = replace + this.urlprefix;
                    }
                    this.src = src.replace('public://', replace);
                    this.src = '/assets/images/bild3.jpg';
                    console.log(this.src);
                }
            }
        }
    }
    render() {
        if (this.src) {
            return h("img", { src: this.src });
        }
    }
    static get is() { return "image-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "urlprefix": {
            "type": "Any",
            "attr": "urlprefix"
        }
    }; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\nimg {\n  width: 100%;\n  height: auto; }"; }
}

class SectionTitle {
    render() {
        return (h("div", { class: "container" },
            h("p", null,
                h("slot", null))));
    }
    static get is() { return "section-title"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n:host {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, 'sans-serif';\n  font-family: 'Roboto', sans-serif; }\n  :host h1, :host h2, :host h3, :host h4, :host .title, :host .subtitle {\n    font-family: 'Merriweather', serif; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\np {\n  display: inline-block;\n  padding: 0 15px;\n  position: relative;\n  border: 1px solid #545250;\n  margin: 0 5px; }\n\np:before,\np:after {\n  background: #545250;\n  content: \"\";\n  display: block;\n  height: 1px;\n  position: absolute;\n  top: 50%;\n  width: 400%; }\n\np:before {\n  right: 100%; }\n\np:after {\n  left: 100%; }\n\n.container {\n  overflow: hidden;\n  text-align: center; }"; }
}

// import { IconRegistryInjector } from '../icon/icon-registry-injector';
class App {
    componentWillLoad() {
        this.iconRegistryInjector.create().then((injector) => {
            injector.setIcon('test', 'huhu');
            // // set icons
            injector.setIcon('ic_arrow_forward', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" transform="translate(4 4)"/></svg>');
            // this.iconRegistry.setIcon('ic_assignment_turned_in', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM7 16L3 12L4.41 10.59L7 13.17L13.59 6.58L15 8L7 16Z" transform="translate(3 1)" /></svg>');
            // this.iconRegistry.setIcon('ic_check_box_outline_blank', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" transform="translate(3 3)" /></svg>');
            // this.iconRegistry.setIcon('ic_check_box', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" transform="translate(3 3)" /></svg>');
            // this.iconRegistry.setIcon('ic_email', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" transform="translate(2 4)" /></svg>');
            // this.iconRegistry.setIcon('ic_equalizer', '<svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" transform="translate(4 4.5)" /></svg>');
            // this.iconRegistry.setIcon('ic_event_busy', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.31 16L8.75 13.56L11.19 16L12.25 14.94L9.81 12.5L12.25 10.06L11.19 9L8.75 11.44L6.31 9L5.25 10.06L7.69 12.5L5.25 14.94L6.31 16ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z" transform="translate(3 1)" /></svg>');
            // this.iconRegistry.setIcon('ic_facebook', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V4H8C7.3 4 7 4.8 7 5.5V8H10V12H7V20H3V12H0V8H3V4C3 1.8 4.8 0 7 0H10Z" transform="translate(7 2)" /></svg>');
            // this.iconRegistry.setIcon('ic_get_app', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z" transform="translate(5 3)" /></svg>');
            // this.iconRegistry.setIcon('ic_group', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 0C9.3 0 8 1.3 8 3C8 4.7 9.3 6 11 6C12.7 6 14 4.7 14 3C14 1.3 12.7 0 11 0ZM5 2.2C3.6 2.2 2.5 3.3 2.5 4.7C2.5 6.1 3.6 7.2 5 7.2C5.9 7.2 6.7 6.7 7.1 6.1C6.4 5.2 6 4.2 6 3C6 2.8 6 2.6 6 2.4C5.7 2.3 5.4 2.2 5 2.2ZM17 2.2C16.6 2.2 16.3 2.3 16 2.4C16 2.6 16 2.8 16 3C16 4.1 15.6 5.2 14.9 6C15.3 6.7 16.1 7.1 17 7.1C18.4 7.1 19.5 6 19.5 4.6C19.5 3.2 18.4 2.2 17 2.2ZM11 8C9 8 5 9 5 11V13H17V11C17 9 13 8 11 8ZM3.7 9C2 9.3 0 10 0 11.3V13H3V11C3 10.2 3.3 9.5 3.7 9ZM18.3 9C18.7 9.6 19 10.2 19 11V13H22V11.3C22 10 20 9.3 18.3 9Z" transform="translate(1 6)" /></svg>');
            // this.iconRegistry.setIcon('ic_equalizer', '<svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" transform="translate(4 4.5)" /></svg>');
            // this.iconRegistry.setIcon('ic_help', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 17H9V15H11V17ZM13.07 9.25L12.17 10.17C11.45 10.9 11 11.5 11 13H9V12.5C9 11.4 9.45 10.4 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 5.9 11.1 5 10 5C8.9 5 8 5.9 8 7H6C6 4.79 7.79 3 10 3C12.21 3 14 4.79 14 7C14 7.88 13.64 8.68 13.07 9.25Z" transform="translate(2 2)" /></svg>');
            // this.iconRegistry.setIcon('ic_keyboard_arrow_up', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" transform="translate(18 16) rotate(-180)"  fill-opacity="0.7"/></svg>');
            // this.iconRegistry.setIcon('ic_menue', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" transform="translate(3 6)" /></svg>');
            // this.iconRegistry.setIcon('ic_place', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" transform="translate(5 2)" /></svg>');
            // this.iconRegistry.setIcon('ic_points', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C12 0.9 12.9 0 14 0C15.1 0 16 0.9 16 2C16 3.1 15.1 4 14 4C12.9 4 12 3.1 12 2ZM6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2ZM0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2C4 3.1 3.1 4 2 4C0.9 4 0 3.1 0 2Z" transform="translate(4 10)" /></svg>');
            // this.iconRegistry.setIcon('ic_remove_circle', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H2V5H18V8ZM18 12H11V10H18V12ZM18 16H11V14H18V16ZM9 16H2V10H9V16ZM18.33 1.67L16.67 0L15 1.67L13.33 0L11.67 1.67L10 0L8.33 1.67L6.67 0L5 1.67L3.33 0L1.67 1.67L0 0V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V0L18.33 1.67Z" transform="translate(2 3)" /></svg>');
            // this.iconRegistry.setIcon('ic_search', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" transform="translate(3 3)" /></svg>');
            // this.iconRegistry.setIcon('ic_today', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18ZM4 9H9V14H4V9Z" transform="translate(3 1)" /></svg>');
            // this.iconRegistry.setIcon('ic_twitter', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.9 2C20.1 2.3 19.3 2.6 18.4 2.7C19.3 2.2 20 1.3 20.3 0.3C19.5 0.8 18.5 1.1 17.6 1.4C16.8 0.5 15.7 0 14.4 0C12 0 10.1 1.9 10.1 4.3C10.1 4.6 10.1 5 10.2 5.3C6.7 5.1 3.5 3.4 1.4 0.8C1 1.4 0.8 2.2 0.8 2.9C0.8 4.4 1.6 5.7 2.7 6.5C2 6.5 1.3 6.3 0.8 6C0.8 8.1 2.3 9.8 4.2 10.2C3.8 10.3 3.5 10.4 3.1 10.4C2.8 10.4 2.6 10.4 2.3 10.3C2.8 12 4.4 13.2 6.3 13.3C4.8 14.5 3 15.1 1 15.1C0.7 15.1 0.3 15.1 2.38419e-08 15C1.8 16.3 4.1 17 6.5 17C14.4 17 18.7 10.5 18.7 4.8C18.7 4.6 18.7 4.4 18.7 4.2C19.6 3.6 20.3 2.9 20.9 2Z" transform="translate(1.59961 4)" /></svg>');
            // this.iconRegistry.setIcon('ic_unfold_more', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83ZM4.58977 15.17L1.41977 12L0.00976562 13.41L4.58977 18L9.17977 13.41L7.75977 12L4.58977 15.17Z" transform="translate(7.41016 3)" /></svg>');
            injector.setIcon('ic_visibility', '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" transform="translate(1 4.5)" /></svg>');
        });
    }
    componentDidLoad() {
    }
    render() {
        return [
            h("site-menu", null),
            h("div", { class: "root" },
                h("stencil-router", null,
                    h("stencil-route", { component: "site-loader" })))
        ];
    }
    static get is() { return "stencil-site"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "iconRegistryInjector": {
            "connect": "il-icon-registry"
        }
    }; }
    static get style() { return ""; }
}

export { HeroTeaserComponent, ImageComponent, SectionTitle, App as StencilSite };
