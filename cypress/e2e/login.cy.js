
describe('Orange HRM Login', () => {

  beforeEach("Open Browser",()=>{
    cy.log("Opening browser")
    cy.visit('/web/index.php/auth/login')
  })



  it('valid login', () => {
    cy.get("[name='username']").clear().type('Admin');
    cy.get("[name='password']").clear().type('admin123');
    cy.get("[type=submit").click();
    cy.get("[class*='topbar-header-breadcrumb-module']").should("have.text","Dashboard")
    
  })
})