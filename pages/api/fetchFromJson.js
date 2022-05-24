const fs = require("fs");

export default async function handler(req, res) {
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    let db = JSON.parse(data);
    const { employee_id } = req.query;
    const employeeModel = db.employee_model;
    const emplyees = db.employees;
    const models = db.models;
    let results = employeeModel.filter(
      (item) => item.employee_id == employee_id
    );
    results.map((el) => {
      let employee = emplyees.find((item) => item.id == el.employee_id);
      let model = models.find((item) => item.id == el.model_id);
      el.Employee = employee;
      el.Model = model;
      return el;
    });

    return res.status(200).json(await results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
