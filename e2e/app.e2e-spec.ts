import { ShoppingUiServicePage } from './app.po';

describe('shopping-ui-service App', function() {
  let page: ShoppingUiServicePage;

  beforeEach(() => {
    page = new ShoppingUiServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
