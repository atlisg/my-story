import { MyMilestonesPage } from './app.po';

describe('my-milestones App', () => {
  let page: MyMilestonesPage;

  beforeEach(() => {
    page = new MyMilestonesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
