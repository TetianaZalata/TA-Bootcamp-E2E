const { Given, When, Then } = require("@wdio/cucumber-framework");

const homeUrl = "https://www.newegg.com/";
const searchField = '[type="search"]';
const searchButton = 'button[class="ico ico-search"]';
const beastDealsTab = "#trendingBanner_720202 > span";
const shopLogo = '[class="header2021-logo"]';

Given("I open the home page", async () => {
  await browser.url(homeUrl);
  await browser.pause(3000);
});

Given("I close the promo banner if it appears", async () => {
  await browser.refresh();
});

When("I entry the {word} in the search bar top middle", async (request) => {
  await $(searchField).click;
  await $(searchField).setValue(request);
});

When(`I click the search`, async () => {
  await $(searchButton).click();
});

Then("Check that at least one item appears", async () => {
  const item = await $(`//*[@id="item_cell_32-350-881_1_0"]/div/div[1]/a`);
  await expect(item).toExist();
});

When("I open {string} tab", async (tab) => {
  await $(beastDealsTab).click();
});

When("I click on Shop logo top right", async () => {
  await $(shopLogo).click();
});

Then("I check that the main page opened", async () => {
  await expect(browser).toHaveUrl(homeUrl);
});
