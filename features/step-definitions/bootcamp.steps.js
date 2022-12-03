const { Given, When, Then } = require("@wdio/cucumber-framework");

const homeUrl = "https://www.newegg.com/";
const searchField = '[type="search"]';
const searchButton = 'button[class="ico ico-search"]';
const shopLogo = '[class="header2021-logo"]';

Given("I open the home page", async () => {
  await browser.url(homeUrl);
});

Given("I close the promo banner if it appears", async () => {
  try {
    await $('[title="Tech Bells Ringing"]').isDisplayed();
  } catch (err) {
    await browser.refresh(err);
  }
});

When("I entry the {word} in the search bar top middle", async (request) => {
  await $(searchField).click;
  await $(searchField).setValue(request);
});

When(`I click the search`, async () => {
  await $(searchButton).click();
});

Then("Check that at least one item appears", async () => {
  const listItems = await $$("div.item-info");
  await expect(listItems).toBeElementsArrayOfSize({ gte: 1 });
});

When("I open {string} tab", async (tab) => {
  await $(`#trendingBanner_720202=${tab}`).click();
});

When("I click on Shop logo top right", async () => {
  await $(shopLogo).click();
});

Then("I check that the main page opened", async () => {
  await expect(browser).toHaveUrl(homeUrl);
});
