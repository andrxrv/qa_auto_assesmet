import ComputerDatabase from '../pageObjects/computerDatabase'
import AddComputer from '../pageObjects/addComputer'
import EditComputer from '../pageObjects/editComputer'

beforeEach(() => {
    cy.visit('https://computer-database.gatling.io/computers')
})

describe('Edit Commodore 64 computer in the table', () => {
    beforeEach(() => {
        ComputerDatabase.typeInSearchBox('Commodore 64')
        ComputerDatabase.clickCommodore64()
        EditComputer.elements.pageTitle().should('contain', 'Edit computer')
    })

    it('failures a validation display', () => {
        EditComputer.clearComputerName()
        EditComputer.clickSaveBtn()
        EditComputer.elements.errMessage().should('contain', 'Failed to refine type')
    })

    it('checks valid data us updaded successfully', () => {
        EditComputer.typeComputerName(' Updated')
        EditComputer.clickSaveBtn()
        ComputerDatabase.elements.successUpdateMsg().should('contain', 'Computer Commodore 64 Updated has been updated')
    })
})


describe('Get a map of HP filtered computers', () => {
    it('returns the map of all HP computers', () => {
        ComputerDatabase.typeInSearchBox('HP')
        ComputerDatabase.elements.computers().each(($a, index) => {
            if($a.text() != '-') {
                cy.log(index, $a.text())
            }
        })
    })
})


describe('Filter IBM computers and get a list of last page', () => {
    it('returns the list of all IBM computers', () => {
        ComputerDatabase.typeInSearchBox('IBM')
        ComputerDatabase.clickNextBtn()
        ComputerDatabase.clickNextBtn()
        const LISTIBMS = ComputerDatabase.elements.computers().then(($array) => {
            const IbmComputers = Array.from($array, el => el.innerText)
            return IbmComputers
        }) 
        LISTIBMS.each((item) => {
            cy.log(item)
        })
    })
})


describe('Add a new computer', () => {
    it('fills text fields and create a new computer in the database successfully', () => {
        ComputerDatabase.clickAddNewComputerBtn()
        AddComputer.elements.pageTitle().should('contain', 'Add a computer')
        AddComputer.typeComputerName('test')
        AddComputer.typeIntroducedDate('2023-09-14')
        AddComputer.typeDiscontinuedDate('2023-09-15')
        AddComputer.selectCompany('Evans & Sutherland')
        AddComputer.clickCreateComputerBtn()
        ComputerDatabase.elements.successUpdateMsg().should('contain', 'Computer test has been created')
    })
})
