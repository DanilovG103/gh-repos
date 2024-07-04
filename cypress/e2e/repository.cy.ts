import { getByTestId } from './utils'

describe('Repository Page', () => {
  const repoId = 'abcde'

  const intercept = (fixture: string) => {
    cy.intercept('POST', 'https://api.github.com/graphql', {
      fixture,
    }).as('repository')

    cy.visit(`/repository/${repoId}`)
    cy.wait('@repository')
  }

  it('Should display the repository name and stars', () => {
    intercept('repository.json')

    getByTestId('repository-name')
      .should('be.visible')
      .and('contain', 'gh-repos')

    getByTestId('repository-stars').should('be.visible').and('contain', '0')
  })

  it('Should display repository description if it is not null', () => {
    intercept('repository-with-description.json')

    getByTestId('repository-description').should('exist')
  })

  it('Repository description should be hidden if it is not null', () => {
    intercept('repository.json')

    getByTestId('repository-description').should('not.exist')
  })

  it('Should show languages', () => {
    intercept('repository.json')

    getByTestId('repository-languages').should('exist')
  })

  it('Should hide block if repository empty', () => {
    intercept('empty-repository.json')

    getByTestId('repository-commit-date').should('not.exist')
    getByTestId('repository-languages').should('not.exist')
  })

  it('Should have user info', () => {
    intercept('repository.json')

    getByTestId('user-avatar').should('exist')
    getByTestId('user-name').should('exist')
  })

  it('Should have user link', () => {
    intercept('repository.json')

    getByTestId('user-name')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/DanilovG103')
  })
})
