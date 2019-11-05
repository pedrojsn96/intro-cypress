Cypress.Commands.add('add_skill', skill => {
	cy.get('.actions')
		.get('input[name=skill]')
		.type(skill)
		.blur();

	cy.get('button')
		.contains('Add skill')
		.click();
});
