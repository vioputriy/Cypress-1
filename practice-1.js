describe('', function(){
    it('tc-1',function(){
       cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('vio')
        cy.get('#lastName').type('yuwandika')
        cy.get('#userEmail').type('vioputriyuwan@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()
        cy.get('#userNumber').type('081111111111')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
        cy.get('#currentAddress').type('desa hijau')
        cy.get('#submit').click()
        cy.get('#genterWrapper').check()
    })
})





Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})
