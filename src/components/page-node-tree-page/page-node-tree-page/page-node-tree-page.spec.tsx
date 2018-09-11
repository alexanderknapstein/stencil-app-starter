import { TestWindow } from '@stencil/core/testing';
import { PageNodeTreePage } from './page-node-tree-page';

describe('page-node-tree-page', () => {
  it('should build', () => {
    expect(new PageNodeTreePage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageNodeTreePageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageNodeTreePage],
        html: '<page-node-tree-page></page-node-tree-page>'
      });
    });

    // Write you Unit Tests here - https://stenciljs.com/docs/unit-testing

  });
});
