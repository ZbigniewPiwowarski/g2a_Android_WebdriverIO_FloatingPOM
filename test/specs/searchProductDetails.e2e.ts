import { expect } from "@wdio/globals";
import commonPage from "../pageobjects/common.page.ts";
import HomePage from "../pageobjects/home.page.ts";
import SearchPage from "../pageobjects/search.page.ts";
import SearchProductDetailsPage from "../pageobjects/searchProductDetails.page.ts";
import CartPage from "../pageobjects/cart.page.ts";
const CommonPage = new commonPage();

describe("Search product details page tests", () => {
  it("should go to product details of any game", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await SearchProductDetailsPage.cartButtonIsDisplayed();
  });

  it("should change 'Activation in' option to 'Angola'", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await SearchProductDetailsPage.tapActivationInOptions();
    await SearchProductDetailsPage.tapAngolaOption();

    await SearchProductDetailsPage.angolaOptionIsDisplayed();
  });

  it("should test 'Show other offers' button", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await CommonPage.scrollTextIntoView("Show other offers");
    await SearchProductDetailsPage.examineShowOtherOffersButton();
  });

  it("should test 'Read more' button", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await CommonPage.scrollTextIntoView("Read more");
    await SearchProductDetailsPage.examineReadMoreButton();
  });

  it("should test 'Show more offers from' button", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await CommonPage.scrollTextIntoView("Show more offers from");
    await SearchProductDetailsPage.examineShowMoreOffersFromButton();
  });

  it("should add the product to the Cart", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();

    await SearchProductDetailsPage.tapCartButton();
    await CommonPage.checkIfCartIconIsSelected();
    await CartPage.assertCartIsNotEmpty();
  });
});
