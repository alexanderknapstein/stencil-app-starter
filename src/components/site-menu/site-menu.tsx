import { Component } from '@stencil/core';

@Component({
    tag: 'site-menu',
    styleUrl: 'site-menu.scss'
})
export class SiteMenu {

    toggleMenu() {
    }

    render() {
        return (
            <div>
                <ul class="menu-list">
                    <li>
                        <stencil-route-link url="/dialogforum" onClick={() => this.toggleMenu()}>
                            Dialogforum
        </stencil-route-link>
                    </li>
                    <li>
                        <stencil-route-link url="/veranstaltungen" onClick={() => this.toggleMenu()}>
                            Veranstaltungen
        </stencil-route-link>
                    </li>
                    <li>
                        <stencil-route-link url="/dokumente" onClick={() => this.toggleMenu()}>
                            Dokumente
        </stencil-route-link>
                    </li>
                </ul>
            </div>
        );
    }
}
