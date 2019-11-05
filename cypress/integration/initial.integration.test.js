describe('Intro Cypress', () => {
	it('Access initial page', () => {
		cy.visit('localhost:3000');
	});

	context('Home Page', () => {
		context('Title Page', () => {
			it('Check title page', () => {
				cy.get('.header').contains('Intro Cypress React Recife');
				// cy.get('h1').contains('Intro Cypress React Recife');
			});
		});
		context('Skill context', () => {
			context('Empty state', () => {
				it('Check if the list is empty', () => {
					cy.get('.skill-list').contains('p', 'Empty List');
				});
				it('Check if Remove all button does not exist', () => {
					cy.get('button')
						.contains('Remove all')
						.should('not.exist');
				});
			});
			context('Add Skill', () => {
				context('Add React skill', () => {
					// it('Add React skill', () => {
					// 	cy.add_skill('React');
					// });
					it('Type new skill', () => {
						cy.get('.actions')
							.get('input[name=skill]')
							.type('React')
							.blur();

						cy.wait(200);
					});
					it('Clicks on Add Skill button', () => {
						cy.get('button')
							.contains('Add skill')
							.click();

						cy.wait(200);
					});
				});
				context('Add Cypress skill', () => {
					it('Type new skill', () => {
						cy.get('.actions')
							.get('input[name=skill]')
							.type('Cypress')
							.blur();

						cy.wait(200);
					});
					it('Clicks on Add Skill button', () => {
						cy.get('button')
							.contains('Add skill')
							.click();

						cy.wait(200);
					});
				});
				context('Remove all skills button', () => {
					it('Check if Remove all button exist', () => {
						cy.get('button')
							.contains('Remove all')
							.should('exist');
					});
				});
			});
			context('Remove all skills', () => {
				context('Remove all button', () => {
					it('Check if Remove all button exist', () => {
						cy.get('button')
							.contains('Remove all')
							.should('exist');
					});
					it('Clicks on Remove all button', () => {
						cy.wait(200);

						cy.get('button')
							.contains('Remove all')
							.click();
					});
					it('Check if empty list is visible', () => {
						cy.get('.skill-list').contains('p', 'Empty List');
					});
					it('Check if Remove all button does not exist', () => {
						cy.get('button')
							.contains('Remove all')
							.should('not.exist');
					});
				});
			});
		});
	});
});
