import { HubsPage } from './app.po';

describe('hubs App', () => {
  let page: HubsPage;

  beforeEach(() => {
    page = new HubsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
