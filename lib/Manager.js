// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
    super(officeNumber)
    ;(this.id = id),
      (this.name = name),
      (this.email = email),
      (this.officeNumber = officeNumber),
      (this.role = "Manager")
  }

  getRole() {
    return this.role
  }

  getOfficeNumber() {
    return this.officeNumber
  }
}

const e = new Manager("Will", 1, "test@test.com", "1")

module.exports = Manager
