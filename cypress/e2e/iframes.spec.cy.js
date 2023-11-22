describe('Handle Iframes',()=>{

    it('interact with inframes',()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        cy.contains("An iFrame containing the TinyMCE WYSIWYG Editor").should('be.visible');

        cy.get("#mce_0_ifr").then($iFrame=>{
            const body = $iFrame.contents().find('body');
            cy.wrap(body).as("iFrameBody");
        });

        cy.get("@iFrameBody").find('p').clear();
        cy.get("@iFrameBody").find('p').type("Interaction with iframe is successful.")



    })

})