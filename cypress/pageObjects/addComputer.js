
export default new class EditComputer{
    elements = {
        pageTitle: () => cy.get('#main'),
        computerName: () => cy.get('#name'),
        introducedField: () => cy.get('#introduced'),
        discontinuedField: () => cy.get('#discontinued'),
        companySelector: () => cy.get('#company'),
        errMessage: () => cy.get('.help-inline').contains('Failed to refine type'),
        createComputerBtn: () => cy.get('.actions > input[value="Create this computer"]'),
    }

    typeComputerName(computerName) {
        this.elements.computerName().type(computerName)
    }
    typeIntroducedDate(introducedDate) {
        this.elements.introducedField().type(introducedDate)
    }
    typeDiscontinuedDate(introducedDate) {
        this.elements.discontinuedField().type(introducedDate)
    }
    selectCompany(companyName) {
        this.elements.companySelector().select(companyName)
    }
    clickCreateComputerBtn() {
        this.elements.createComputerBtn().click()
    }

}