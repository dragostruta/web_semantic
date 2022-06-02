import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, age, available, birthday, name_model, quantity } = req.body;

      const emplyees = await prisma.employees.findMany();
      const models = await prisma.models.findMany();
      const employee_models = await prisma.employee_model.findMany();

      let employee = emplyees.find((item) => item.name == name);

      if (!employee) {
        employee = await prisma.employees.create({
          data: {
            name,
            age,
            available,
            birthday,
          },
        });
      }

      let model = models.find((item) => item.name == name_model);

      if (!model) {
        model = await prisma.models.create({
          data: {
            name: name_model,
          },
        });
      }

      let model_employee = employee_models.find(
        (item) => item.employee_id == employee.id && item.model_id == model.id
      );

      if (!model_employee) {
        await prisma.employee_model.create({
          data: {
            employee_id: employee.id,
            model_id: model.id,
            quantity: quantity,
          },
        });
      }

      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
