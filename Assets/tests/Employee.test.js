const Employee = require("../lib/Employee");



describe("Employee", ()=> {
    it("should successfully return the correct name for a named employee", () => {
        const employee = new Employee('Alex', '4', 'alex@test.com');
        expect(employee.getName()).toEqual("Alex")
    });
    it("should successfully return the correct employee ID for a named employee", () => {
        const employee = new Employee('Alex', '4', 'alex@test.com');
        expect(employee.getId()).toEqual("4")
    });
    it("should successfully return the correct email address for a named employee", () => {
        const employee = new Employee('Alex', '4', 'alex@test.com');
        expect(employee.getEmail()).toEqual('alex@test.com')
    });
    it("should successfully return the correct role for a named employee", () => {
        const employee = new Employee('Alex', '4', 'alex@test.com');
        expect(employee.getRole()).toEqual('Employee')
    });
    
})