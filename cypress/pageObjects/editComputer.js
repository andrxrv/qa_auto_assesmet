
export default new class EditComputer{
    elements = {
        pageTitle: () => cy.get('#main'),
        computerName: () => cy.get('#name'),
        errMessage: () => cy.get('.help-inline').contains('Failed to refine type'),
        saveBtn: () => cy.get('.actions > input[value="Save this computer"]'),
    }

    clearComputerName(computerName) {
        this.elements.computerName().clear({force: true})
    }
    typeComputerName(computerName) {
        this.elements.computerName().type(`${computerName}`)
    }
    clickSaveBtn() {
        this.elements.saveBtn().click()
    }

}