import db from "../../../db";

export const resolvers = {
  Query: {
    getEmployees: async () => {
      return db.employees;
    },
    getEmployeeModels: async () => {
      db.employee_model.map((item) => {
        const employee = db.employees.find((el) => el.id === item.employee_id);
        item.Employee = employee;
        const model = db.models.find((el) => el.id === item.model_id);
        item.Model = model;
        return item;
      });
      return db.employee_model;
    },
    getEmployeeModelsByEmployeeId: async (_, args) => {
      let results = db.employee_model.filter(
        (item) => item.employee_id == args.employee_id
      );
      results.map((item) => {
        const employee = db.employees.find((el) => el.id === item.employee_id);
        item.Employee = employee;
        const model = db.models.find((el) => el.id === item.model_id);
        item.Model = model;
        return item;
      });
      return results;
    },
  },
  Mutation: {
    addEmployeeModel: async (_, args) => {
      const { name, age, available, birthday, name_model, quantity } = args;

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
          quantity: quantity,
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
      };

      db.employee_model.push(newEmployeeModel);
      return newEmployeeModel;
    },
  },
};
