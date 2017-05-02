import { TerasysHubPage } from './app.po';

describe('terasys-hub App', () => {
  let page: TerasysHubPage;

  beforeEach(() => {
    page = new TerasysHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
