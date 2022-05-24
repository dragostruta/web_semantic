const fs = require("fs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, age, available, birthday, name_model, quantity } = req.body;

      const data = fs.readFileSync("./db.json", "utf8");
      let db = JSON.parse(data);

      let newEmployee = db.employees.find((el) => el.name === name);
      let newModel = db.models.find((el) => el.name === name_model);

      if (!newEmployee) {
        newEmployee = {
          id: db.employees.length + 1,
          name,
          age,
          available,
          birthday,
        };
        db.employees.push(newEmployee);
      }

      if (!newModel) {
        newModel = {
          id: db.models.length + 1,
          name: name_model,
        };
        db.models.push(newModel);
      }

      let existingRelation = db.employee_model.find(
        (el) => el.employee_id === newEmployee.id && el.model_id === newModel.id
      );

      if (existingRelation) {
        return existingRelation;
      }

      let newEmployeeModel = {
        id: db.employee_model.length + 1,
        employee_id: newEmployee.id,
        model_id: newModel.id,
        Employee: null,
        Model: null,
        quantity: quantity,
      };

      db.employee_model.push(newEmployeeModel);

      const result = JSON.stringify(db);

      fs.writeFileSync("./db.json", result, "utf8");

      return res.status(200).json(name);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
