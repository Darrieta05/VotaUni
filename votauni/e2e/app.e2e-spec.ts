import { VotauniPage } from './app.po';

describe('votauni App', () => {
  let page: VotauniPage;

  beforeEach(() => {
    page = new VotauniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
