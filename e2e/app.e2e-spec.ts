import { MoviedbPage } from './app.po';

describe('moviedb App', function() {
  let page: MoviedbPage;

  beforeEach(() => {
    page = new MoviedbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
