const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imageUrl: "",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      imageUrl: "",
      description: "A college on Staten Island",
    }),
    Student.create({
      firstName: "James",
      lastName: "Bond",
      email: "jamesbond@james.com",
      gpa: 4.0,
      campusId: 1,
    }),
  ]);
};

module.exports = seedDatabase;
