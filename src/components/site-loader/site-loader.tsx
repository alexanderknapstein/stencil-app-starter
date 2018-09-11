import { Component, Prop, State, Element } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'site-loader',
  styleUrl: 'site-loader.scss'
})
export class SiteLoader {

  @Prop() match: MatchResults;
  @State() data: any;
  @Prop() urls: string[] = [];
  @Prop() history: RouterHistory;
  @Element() el: HTMLElement;
  private url: string;

  componentWillLoad() {
    if(this.checkPath()) {
      return this.fetchContents();
    }
  }

  componentWillUpdate() {
    if(this.checkPath()) {
      this.fetchContents();
    }
  }

  checkPath() {
    console.log("this.checkPath");
    if(window && window.location && window.location.pathname && window.location.pathname.length > 0) {
      if(this.url !== window.location.pathname) {
        this.url = window.location.pathname;
        return true;
      }
    }
    return false;
  }

  fetchContents() {
    // const documenturl = document.location.pathname;
    // console.log(documenturl);
    let path;
    if (this.url) {
      // path = 'http://localhost:3000/api/get?url=' + this.url;
      path = 'https://mlcl.b31.verkehr-bodenseeraum.de/api/get?url=' + this.url;
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
    /*
    const splitres = documenturl.split('/');
    let lang = 'en';
    if(splitres[1].length === 2) {
      lang = splitres[1];
    }
    const { config }: GlobalStoreState = this.store.getState();
    const staticContents: string[] = config.staticPaths;
    let fetchUrl = 'https://www.mydriver.com/api/v3/cms/page?uri=' + this.url;
    let staticCont: boolean = false;
    if(staticContents.indexOf(this.url) !== -1 ) {
      staticCont = true;
      fetchUrl = '/contents/' + this.url + '/index.json';
    }
    if(this.url) {
      return fetch(fetchUrl, {
        headers: {
          'Accept-Language': lang
        }
      })
      .then((res) => {
        if(res.status >= 400) {
          this.notfound();
          // this.push(`/en/chauffeur-service/london`);
        } else {
          return res.json()
          .then((jsondata) => {
            if(jsondata) {
              if(!staticCont && jsondata.data) {
                const keys = Object.keys(jsondata.data);
                if(keys.length > 0) {
                  this.data = this.formatData(jsondata.data[keys[0]]);
                } else {
                  // maybe redirect here?
                }
              } else if(staticCont) {
                this.data = jsondata;
              }
            }
          })
        }
      })
      .catch(err => console.log(err))
    }*/
  }

  formatData(resData: any): any {
    let headline;
    if (resData && resData.meta) {
      headline = resData.meta.headline;
    }
    const data: any = {
      type: resData.template,
      title: headline,
      url: this.url,
      body: resData.content.body,
      i18n: resData.alternateUrls,
      meta: resData.meta,
      breadcrumbs: resData.breadcrumbs,
      content: [],
      fields: {}
    };

    if(resData.image) {
      data.fields.headerImage = {};
      data.fields.headerImage.url = resData.image;
    }

    if(resData.pageListings) {
      data.content.push({
        type: 'page-listings',
        data: resData.pageListings
      })
    }
    console.log(data);
    return data;
  }

  createLinks() {
    if(this.data) {
      let links = [];
      for(const cat in this.data.pageListings) {
        for(const el of this.data.pageListings[cat]) {
          links.push(<stencil-route-link url={el.url}><button>
            {el.linkTitle}
          </button></stencil-route-link>)
        }
      }
      return links;
    }
  }

  createLangButtons() {
    if(this.data) {
      let links = [];
      for(const el in this.data.alternateUrls) {
        const lang = this.data.alternateUrls[el];
        links.push(<stencil-route-link url={lang.url}><button>
          {lang.locale}
        </button></stencil-route-link>)
      }
      return links;
    }
  }

  render() {
    if(this.data && this.data.type) {
      let comp = 'page-node-page';
      if (this.data.type === 'node' && this.data.template) {
        comp = 'page-node-' + this.data.template;
      } else {
        comp = 'page-node-page'; // + this.data.subtype;
      }
      // console.log(comp);
      const element: any = document.createElement(comp);
      element.data = this.data
      this.el.innerHTML = '';
      this.el.appendChild(element);
    }
    if(this.data && this.data.meta) {
      return (
        <h1>HELO WORLD NEW</h1>
      );
    } else {
      return;
    }
  }
}
