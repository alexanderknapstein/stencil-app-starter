import { Component, Prop, State } from '@stencil/core';
import { IconRegistryService } from './resources/icon-registry-service';

@Component({
  tag: 'il-icon',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon {
  /**
   * Name of the icon to get from the registry
   */
  @Prop() name: string;
  /**
   * Size category to apply to the icon as css-class
   */
  @Prop({
    reflectToAttr: true,
    mutable: true
  }) size: string = '';
  @Prop({
    reflectToAttr: true,
    mutable: true
  }) color: string;
  @Prop({
    reflectToAttr: true,
    mutable: true
  }) active: boolean = false;
  @Prop() fill: string = '#000';
  /**
   * If url is passed as property, the icon inside the div is wrapped into an anchor to redirect to the given url.
   */
  @Prop() url: string;
  /**
   * If url is passed as property, an additional property called "target" can be passed to redirect the user to a specific target location, default is the same frame where the link was clicked.
   */
  @Prop() target: string = '_self';
  /**
   * Names of additional classes applied to the icon, separated by space
   */
  @Prop() classes: string = '';
  /**
   * The registry to get an icon from, defaults to an injector service
   */
  @Prop({connect: 'il-icon-registry'}) iconRegistryInjector: any;
  @State() iconRegistry: IconRegistryService;
  @Prop({ context: 'isServer' }) isServer!: boolean;

  componentWillLoad() {
    if(!this.isServer) {
      return this.iconRegistryInjector.create().then(dataService => {
        this.iconRegistry = dataService;
      });
    }
  }

  render() {
    const classes = this.size + ' ' + this.classes;
    if(this.iconRegistry) {
      return this.url ? <div class={['icon', classes].join(' ')}><a href={this.url} target={this.target} innerHTML={this.iconRegistry.getIcon(this.name)}></a></div> : <div class={['icon', classes].join(' ')} innerHTML={this.iconRegistry.getIcon(this.name)}></div>;
    } else {
      return;
    }
  }
}
