import { ProgqaPage } from './app.po';

describe('progqa App', () => {
  let page: ProgqaPage;

  beforeEach(() => {
    page = new ProgqaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
