
describe('Handle Web UI Elements', () => {

    beforeEach("Launch Application",()=>{
      cy.log("Opening browser")
      cy.visit('https://www.globalsqa.com/samplepagetest/')
    })
  
  
  
    it('Form fill', () => {
    //File Upload
      cy.get("[name='file-553']").selectFile("cypress/fixtures/sampleImage.jpeg");

      //Text field
      cy.get("[name='g2599-name']").clear().type("Surajit Sarkar");
      cy.get("#g2599-email").clear().type("test@test.com");
      cy.get("#g2599-website").clear().type("http://myweb.com");

      //Dropdown
      cy.get("#g2599-experienceinyears").select("10+")

      //Checkbox
      cy.get("[type='checkbox'][value='Automation Testing']").should('not.be.checked').check();
      cy.get("[type='checkbox'][value='Functional Testing']").should('not.be.checked').check();

      //Radio Button
      cy.get("[type='radio'][value='Graduate']").should('not.be.checked').check();

      //Alert Box
      cy.get("button[onclick='myFunction()']").click().then(()=>{
        cy.on("window:alert",(msg)=>{
            should(msg).equal("Do you really fill rest of the form?");
        });
        cy.on("window:confirm",()=>{
            return true
        });
        cy.on("window:alert",(msg)=>{
            should(msg).equal("Good Luck. Go for it");
        });
        cy.on("window:confirm",()=>{
            return true
        });
      });

      //Text area
      cy.get("#contact-form-comment-g2599-comment").clear().type("Interacting with Cypress Text area...");

      //button
      cy.get("[type='submit']").click();

      //validate the submssion message
      //should use case
      cy.get("[id='contact-form-2599']>h3").should('have.text',"Message Sent (go back)")

      //expect use case
      cy.get("[id='contact-form-2599']>h3").then((ele)=>{
        expect(ele.text()).equal("Message Sent (go back)")
      })
      
    })
  })