import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date

  type Employee {
    id: ID
    name: String
    age: Int
    available: Boolean
    birthday: Date
  }

  type Model {
    id: ID
    name: String
  }

  type EmployeeModel {
    id: ID
    employee_id: ID!
    model_id: ID!
    Employee: Employee
    Model: Model
    quantity: Int
  }

  type Query {
    getEmployees: [Employee]
    getEmployeeModels: [EmployeeModel]
    getEmployeeModelsByEmployeeId(employee_id: ID): [EmployeeModel]
  }

  type Mutation {
    addEmployeeModel(
      name: String
      age: Int
      available: Boolean
      birthday: Date
      name_model: String
      quantity: Int
    ): EmployeeModel
  }
`;
