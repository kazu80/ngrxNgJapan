import { NgrxNgJapanPage } from './app.po';

describe('ngrx-ng-japan App', () => {
  let page: NgrxNgJapanPage;

  beforeEach(() => {
    page = new NgrxNgJapanPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
