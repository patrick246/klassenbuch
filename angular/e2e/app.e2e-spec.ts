import { KlassenbuchPage } from './app.po';

describe('klassenbuch App', () => {
  let page: KlassenbuchPage;

  beforeEach(() => {
    page = new KlassenbuchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
