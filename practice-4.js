describe('Beli', function () {
    it('TC-01 Beli', function () {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.url().should('include', 'www.demoblaze.com');
        cy.get('#login2').click();
        cy.get('#logInModal');
        cy.get('#loginusername').type('vio',{force:true}).should('have.value', 'vio');
        cy.get('#loginpassword').type('password.',{force:true}).should('have.value', 'password.');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#nameofuser').should('have.text', 'Welcome vio');
        cy.contains('HTC One M9',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.active > .nav-link',{force:true}).click();
        cy.contains('Laptops').click();
        cy.contains('Dell i7 8gb',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.active > .nav-link',{force:true}).click();
        cy.contains('Monitors').click();
        cy.contains('Apple monitor 24',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.col-lg-1 > .btn',{force:true}).click();
        cy.wait(3000);
        cy.get('#orderModalLabel',{force:true}).should('have.text', 'Place order');
        cy.get('#name',{force:true}).type('vio').should('have.value', 'vio');
        cy.get('#country',{force:true}).type('Indonesia').should('have.value', 'Indonesia');
        cy.get('#city',{force:true}).type('Malang').should('have.value', 'Malang');
        cy.get('#card',{force:true}).type('081234567890').should('have.value', '081234567890');
        cy.get('#month',{force:true}).type('August').should('have.value', 'August');
        cy.get('#year',{force:true}).type('2021').should('have.value', '2021');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',{force:true}).click();
        cy.get('.sweet-alert > h2',{force:true}).should('have.text', 'Thank you for your purchase!');
        cy.get('.confirm',{force:true}).click();
    })
})
