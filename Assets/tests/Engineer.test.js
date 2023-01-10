const Engineer = require('../lib/engineer')

describe("Engineer", ()=> {
    it("should successfully return the correct name for a named engineer employee", () => {
        const engineer = new Engineer('Bobby', '3', 'bobby@test.com', 'bobbygithub');
        expect(engineer.getName()).toEqual("Bobby")
    });
    it("should successfully return the correct employee ID for a engineer employee", () => {
        const engineer = new Engineer('Bobby', '3', 'bobby@test.com', 'bobbygithub');
        expect(engineer.getId()).toEqual("3")
    });
    it("should successfully return the correct email address for a engineer employee", () => {
        const engineer = new Engineer('Bobby', '3', 'bobby@test.com', 'bobbygithub');
        expect(engineer.getEmail()).toEqual('bobby@test.com')
    });
    it("should successfully return the correct github profile name for a engineer employee", () => {
        const engineer = new Engineer('Bobby', '3', 'bobby@test.com', 'bobbygithub');
        expect(engineer.getGithub()).toEqual('bobbygithub')
    });
    it("should successfully return the correct role for a named engineer employee", () => {
        const engineer = new Engineer('Bobby', '3', 'bobby@test.com', 'bobbygithub');
        expect(engineer.getRole()).toEqual('Engineer')
    });
    
})