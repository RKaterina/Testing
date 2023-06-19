

// import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

// When("I navigate to Home page", () => {
//     cy.visit("https://bloomenty.com/nl/home");
//   });

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";
import HomePage_selectors from "../selectors/homePage_selectors.js";


const homePagePage = new HomePagePage();
const homePage_selectors = new HomePage_selectors();


before(() => {
    cy.visit("https://bloomenty.com/nl/home");
    cy.session("cookie", () => {
    });
});

When("I navigate to 'Home' page", () => {
    cy.visit("https://bloomenty.com/nl/home");
});

When("I should see that 'Cookies' page is displayed", () => {
    homePagePage.checkCookiesPageIsVisible();
});

When("I should see that 'Cookies' page is Not displayed", () => {
    homePagePage.checkCookiesPageIsNotVisible();
});

When("I should see that 'Cookies rules' is opened", () => {
    cy.get(homePage_selectors.cookieRules).should("be.visible")
});

When("I select 'Cookie page' link on the 'Cookies' page", () => {
    cy.get(homePage_selectors.modalCookie).invoke('removeAttr', 'target').click();
});

When("I press 'Cancel' button on the 'Cookies' page", () => {
    cy.get(homePage_selectors.cancelButtonCookie).click();
});

When("I select 'Vacancies' sub-menu", () => {
    cy.get(homePage_selectors.subMenuVacancies).click();
});

When("I clear all Cookies", () => {
    cy.clearCookies();
});

When("I refresh the page", () => {
    cy.reload();
});

When("I wait for 3 seconds", () => {
    cy.wait(3000);
});

Then("I should see {string} on the 'Cookies' page", (itemCookiesPage) => {
    cy.get(homePage_selectors.itemCookie).should("be.visible");
});

When("I press 'Back' button in the Browser", () => {
    cy.go("back");
});

When("I press 'Forward' button in the Browser", () => {
    cy.go("forward");
});

Then("I should see that 'CookiesPage' link is correct", () => {
    cy.get(homePage_selectors.modalCookie)
        .should("have.attr", "href", "/nl/official-docs#cookie-files")
});

When("I navigate to 'Vacancies' page", () => {
    cy.visit("https://bloomenty.com/nl/vacancies");
});

When("I press 'Accept' button on the 'Cookies' page", () => {
    cy.get(homePage_selectors.acceptButtonCookie).click();
});

When("I press 'Login' button on the 'Home' page", () => {
    cy.get(homePage_selectors.loginButtonHeader).click();
});