import { Component, Method } from '@stencil/core';
import { IconRegistryService } from './icon-registry-service'

const iconReg = new IconRegistryService();

@Component({
  tag: 'il-icon-registry'
})
export class IconRegistryInjector {
  @Method()
  create(): Promise<IconRegistryService> {
    return new Promise(resolve => {
      resolve(iconReg);
    });
  }
}
