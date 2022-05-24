import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  try {
    const { employee_id } = req.query;
    const employeeModel = await prisma.employee_model.findMany();
    const emplyees = await prisma.employees.findMany();
    const models = await prisma.models.findMany();
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
