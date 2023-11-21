///<reference types="cypress" />
import {faker} from '@faker-js/faker'

describe('Use Faker API', () => {
    let data;
    beforeEach("Launch Application",()=>{
      cy.log("Opening browser")
      cy.visit('https://www.globalsqa.com/samplepagetest/')
      cy.fixture("testdata.json").then((tData)=>{
        data=tData;
      })
    })
  
  
  
    it('Form fill using faker api', () => {

    //File Upload
      cy.get("[name='file-553']").selectFile(data.filePath);

      //Text field
      cy.get("[name='g2599-name']").clear().type(faker.person.fullName());
      cy.get("#g2599-email").clear().type(faker.internet.email());
      cy.get("#g2599-website").clear().type(faker.internet.url());

      //Dropdown
      cy.get("#g2599-experienceinyears").select(data.experience)

      //Checkbox
      cy.get("[type='checkbox'][value='Automation Testing']").should('not.be.checked').check();
      cy.get("[type='checkbox'][value='Functional Testing']").should('not.be.checked').check();

      //Radio Button
      cy.get("[type='radio'][value='Graduate']").should('not.be.checked').check();

      //Alert Box
      cy.get("button[onclick='myFunction()']").click().then(()=>{
        cy.on("window:alert",(msg)=>{
            should(msg).equal(data.alerMsg1);
        });
        cy.on("window:confirm",()=>{
            return true
        });
        cy.on("window:alert",(msg)=>{
            should(msg).equal(data.alerMsg2);
        });
        cy.on("window:confirm",()=>{
            return true
        });
      });

      //Text area
      cy.get("#contact-form-comment-g2599-comment").clear().type(faker.lorem.paragraph());

      //button
      cy.get("[type='submit']").click();

      //validate the submssion message
      //should use case
      cy.get("[id='contact-form-2599']>h3").should('have.text',data.successMsg)

      //expect use case
      cy.get("[id='contact-form-2599']>h3").then((ele)=>{
        expect(ele.text()).equal(data.successMsg)
      })
      
    })
  })