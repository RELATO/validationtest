import { ValidationtestPage } from './app.po';

describe('validationtest App', () => {
  let page: ValidationtestPage;

  beforeEach(() => {
    page = new ValidationtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
