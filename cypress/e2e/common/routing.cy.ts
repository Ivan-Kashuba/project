import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User not authenticated', () => {
        it('Open main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Open not existed route', () => {
            cy.visit('/not-valid-route');
            cy.get(selectByTestId('NotFound')).should('exist');
        });
    }); describe('User authenticated', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
