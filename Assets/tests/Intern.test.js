const Intern = require('../lib/intern')

describe("Intern", ()=> {
    it("should successfully return the correct name for a named engineer employee", () => {
        const intern = new Intern('Sally', '33', 'sally@test.com','University of Washington');
        expect(intern.getName()).toEqual("Sally")
    });
    it("should successfully return the correct employee ID for a intern employee", () => {
        const intern = new Intern('Sally', '33', 'sally@test.com','University of Washington');
        expect(intern.getId()).toEqual("33")
    });
    it("should successfully return the correct email address for a intern employee", () => {
        const intern = new Intern('Sally', '33', 'sally@test.com','University of Washington');
        expect(intern.getEmail()).toEqual('sally@test.com')
    });
    it("should successfully return the correct school for a intern employee", () => {
        const intern = new Intern('Sally', '33', 'sally@test.com','University of Washington');
        expect(intern.getSchool()).toEqual('University of Washington')
    });
    it("should successfully return the correct role for a named intern employee", () => {
        const intern = new Intern('Sally', '33', 'sally@test.com','University of Washington');
        expect(intern.getRole()).toEqual('Intern')
    });
    
})