
describe('Navigation', () => {
  it('should redirect to the mystop page', () => {
    // Start from index page
    cy.visit("/");

    // Page should have redirected to /mystop
    cy.url().should("include", "/mystop");

    // The new page should contain an h1 with "Target Your Ride"
    cy.get('h1').contains("Target Your Ride");
  });

  it('should have url parameters after loading stops list', () => {

    // ACTION: Select from route dropdown
    cy.get('#route')
      . click()
      .get('ul > li[data-value="5"]')
      .click();

    // ASSERTION: Direction dropdown is visiable
    cy.get('#direction').should('be.visible');

    // ACTION: Select from direction dropdown
    cy.get("#direction").click().get('ul > li[data-value="1"]').click();

    // ASSERTION: Stops list should be visible
    cy.get("#stopsListTable").should('be.visible');

    // ASSERTION: URL should have two parametes '/mystop/$param1/$param2'
    cy.url().should('include', '/mystop/5/1')

  });

  it('should not have url parameters after route has been selected', () => {

    // ACTION: Redirect to a URL with parameters
    cy.visit('/mystop/5/1');

    // ACTION: Select from the route dropdown
    cy.get("#route").click().get('ul > li[data-value="2"]').click();

    // ASSERTION: URL should not have any parameters '/mystop'
    cy.url().should("include", "/mystop");


  });
});