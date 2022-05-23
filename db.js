module.exports = {
  models: [
    {
      id: 1,
      name: "rochie",
      quantity: 30,
    },
    {
      id: 2,
      name: "sacou",
      quantity: 15,
    },
    {
      id: 3,
      name: "pullover",
      quantity: 19,
    },
    {
      id: 4,
      name: "tricou",
      quantity: 50,
    },
    {
      id: 5,
      name: "pantaloni",
      quantity: 47,
    },
  ],
  employees: [
    {
      id: 1,
      name: "Truta Dragos Sebastian",
      age: 25,
      available: true,
      birthday: new Date("1997-06-12"),
    },
    {
      id: 2,
      name: "Neag Andrei Alexandru",
      age: 34,
      available: false,
      birthday: new Date("1988-06-15"),
    },
    {
      id: 3,
      name: "Pop Maria Simona",
      age: 36,
      available: true,
      birthday: new Date("1986-08-20"),
    },
  ],
  employee_model: [
    {
      id: 1,
      employee_id: 1,
      model_id: 1,
      Employee: null,
      Model: null,
    },
    {
      id: 2,
      employee_id: 1,
      model_id: 2,
      Employee: null,
      Model: null,
    },
    {
      id: 3,
      employee_id: 1,
      model_id: 3,
      Employee: null,
      Model: null,
    },
    {
      id: 4,
      employee_id: 2,
      model_id: 1,
      Employee: null,
      Model: null,
    },
    {
      id: 4,
      employee_id: 3,
      model_id: 1,
      Employee: null,
      Model: null,
    },
  ],
};
