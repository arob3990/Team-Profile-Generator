const Manager = require('../lib/manager')

describe("Manager", ()=> {
    it("should successfully return the correct name for a named manager employee", () => {
        const manager = new Manager('Teresa', '6', 'teresa@test.com', '881A');
        expect(manager.getName()).toEqual("Teresa")
    });
    it("should successfully return the correct employee ID for a manager employee", () => {
        const manager = new Manager('Teresa', '6', 'teresa@test.com', '881A');
        expect(manager.getId()).toEqual("6")
    });
    it("should successfully return the correct email address for a manager employee", () => {
        const manager = new Manager('Teresa', '6', 'teresa@test.com', '881A');
        expect(manager.getEmail()).toEqual('teresa@test.com')
    });
    it("should successfully return the correct email address for a manager employee", () => {
        const manager = new Manager('Teresa', '6', 'teresa@test.com', '881A');
        expect(manager.getOfficeNumber()).toEqual('881A')
    });
    it("should successfully return the correct role for a named manager employee", () => {
        const manager = new Manager('Teresa', '6', 'teresa@test.com', '881A');
        expect(manager.getRole()).toEqual('Manager')
    });
    
})