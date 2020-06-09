// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(id, name, email, github, role) {
    super(github)
    ;(this.id = id),
      (this.name = name),
      (this.email = email),
      (this.github = github),
      this.role = "Engineer"
  }

  getRole() {
    return this.role
  }

  getGithub() {
    return this.github
  }
}

const e = new Engineer("Will", 1, "test@test.com", "willhitch")

module.exports = Engineer
