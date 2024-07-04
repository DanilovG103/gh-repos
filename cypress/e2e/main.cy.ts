import { getByTestId } from './utils'

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.github.com/graphql', {
      fixture: 'repositories.json',
    }).as('repositories')

    cy.visit('')
    cy.wait('@repositories')
  })

  it('should have search input', () => {
    getByTestId('search').should('exist')
  })

  it('should have repository list container', () => {
    getByTestId('repository-list').should('exist')
  })

  it('should have paginator if more 10 repositories', () => {
    getByTestId('paginator')
      .should('exist')
      .children()
      .should('have.length.at.least', 2)
  })
})
