describe ('Test Suite untuk Study Case 2', function(){
    it ('TC-01 Isi nama dan email, lalu klik button “email me!”.', function (){cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('#et_pb_contact_name_0').type('vio').should('have.value', 'vio');
        cy.get('#et_pb_contact_email_0').type('vioputriyuwan@gmail.com').should('have.value', 'vioputriyuwan@gmail.com');
        cy.get('.et_pb_contact_submit').click();
        

    }),

    it('TC-02 Pilih Jenis Kelamin pada radio button', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[value="female"]').check().should('be.checked', 'female');
    }),

    it('TC-03 Pilih satu atau semua pada checkbox', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[value="Bike"]').check().should('exist');
    }),

    it('TC-04 Pilih dropdown Audi', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('select').select('audi').should('have.value', 'audi');
    }),

    it('TC-05 Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click();
        cy.get('.entry-title').should('have.text', 'Button success');
        
    })
})