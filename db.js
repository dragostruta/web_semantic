module.exports = {
  models: [
    {
      id: 1,
      name: "rochie",
    },
    {
      id: 2,
      name: "sacou",
    },
    {
      id: 3,
      name: "pullover",
    },
    {
      id: 4,
      name: "tricou",
    },
    {
      id: 5,
      name: "pantaloni",
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
      quantity: 32,
    },
    {
      id: 2,
      employee_id: 1,
      model_id: 2,
      Employee: null,
      Model: null,
      quantity: 17,
    },
    {
      id: 3,
      employee_id: 1,
      model_id: 3,
      Employee: null,
      Model: null,
      quantity: 19,
    },
    {
      id: 4,
      employee_id: 2,
      model_id: 4,
      Employee: null,
      Model: null,
      quantity: 26,
    },
    {
      id: 4,
      employee_id: 3,
      model_id: 5,
      Employee: null,
      Model: null,
      quantity: 29,
    },
  ],
};
