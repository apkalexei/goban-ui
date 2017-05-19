import { GobanUiPage } from './app.po';

describe('goban-ui App', () => {
  let page: GobanUiPage;

  beforeEach(() => {
    page = new GobanUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
