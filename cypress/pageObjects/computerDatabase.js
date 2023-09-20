
export default new class ComputerDatabase{
    elements = {
        searchBox: () => cy.get('#searchbox'),
        commodore64: () => cy.get('.computers > tbody').children().contains(/^Commodore 64$/),
        computers: () => cy.get('.computers > tbody > tr > td > a'),
        nextBtn: () => cy.get('.next').contains('Next →'),
        addNewComputerBtn: () => cy.get('#add'),
        successUpdateMsg: () => cy.get('.alert-message'),
    }

    typeInSearchBox(computerName) {
        this.elements.searchBox().type(`${computerName}{enter}`)
    }
    clickCommodore64() {
        this.elements.commodore64().click()
    }
    clickNextBtn() {
        this.elements.nextBtn().click({force: true})
    }
    clickAddNewComputerBtn() {
        this.elements.addNewComputerBtn().click()
    }

}