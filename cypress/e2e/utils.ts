export const getByTestId = (selector: string) =>
  cy.get(`[data-cy-test="${selector}"]`)
