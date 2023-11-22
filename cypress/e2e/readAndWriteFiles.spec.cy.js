describe('File Read and Write', () => {

    it('Write and Read a txt file', () => {
        let fileContent = "Hello, I am writting to file via cypress tests.";
        cy.writeFile("cypress/fixtures/test-io-file.txt", fileContent);
        cy.readFile("cypress/fixtures/test-io-file.txt").then(content=>{
            expect(content).to.be.eq(fileContent)
        })
        
    });
    it('Write and Read a json file', () => {
        let fileContent = {
            "empId":101,
            "empName":"Surajit Sarkar",
            "empDept":"QA-Autoamtion"
        };
        cy.writeFile("cypress/fixtures/empData.json", fileContent);
        cy.readFile("cypress/fixtures/empData.json").then(content=>{
            expect(JSON.stringify(content)).to.be.eq(JSON.stringify(fileContent))
        })
        
    });
    
});