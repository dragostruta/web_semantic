import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, age, available, birthday, name_model, quantity } = req.body;

      const emplyees = await prisma.employees.findMany();
      const models = await prisma.models.findMany();
      const employee_model = await prisma.employee_model.findMany();

      let employee = await prisma.employees.findFirst({
        where: {
          name,
        },
      });
      if (!employee) {
        employee = await prisma.employees.create({
          data: {
            id: emplyees.length + 1,
            name,
            age,
            available,
            birthday,
          },
        });
      }
      let model = await prisma.models.findFirst({
        where: {
          name,
        },
      });

      if (!model) {
        model = await prisma.models.create({
          data: {
            id: models.length + 1,
            name: name_model,
            quantity: quantity,
          },
        });
      }

      let model_employee = await prisma.employee_model.findFirst({
        where: {
          employee_id: emplyees.length,
          model_id: models.length,
        },
      });

      if (!model_employee) {
        await prisma.employee_model.create({
          data: {
            id: employee_model.length,
            employee_id: emplyees.length,
            model_id: models.length,
          },
        });
      }

      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
