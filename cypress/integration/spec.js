describe('sticky elements', () => {
  describe('issue 565/571 with updated fixture', () => {
    before(() => {
      cy
        .viewport(400, 400)
        .visit("cypress/fixtures/issue-565-updated.html");
    });

    it('can click the first tr', () => {
      cy.get("td:first").click()
    });
  });

  describe('additional example with side panel', () => {
    before(() => {
      cy
        .viewport(400, 400)
        .visit("cypress/fixtures/sidepanel.html");
    });

    it('can click the first tr', () => {
      cy.get("td:first").click()
    });
  });

});