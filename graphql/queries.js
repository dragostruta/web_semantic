import { gql, useMutation, useQuery } from "@apollo/client";

export const allUsersQuery = gql`
  query users {
    getUsers {
      id
      name
      age
      posts {
        id
        title
      }
    }
  }
`;

export const allEmployeesQuery = gql`
  query employees {
    getEmployees {
      id
      name
      age
      available
      birthday
    }
  }
`;

export const allEmployeeModelsQuery = gql`
  query ExampleQuery($employeeId: ID!) {
    getEmployeeModelsByEmployeeId(employee_id: $employeeId) {
      id
      employee_id
      model_id
      Model {
        id
        name
        quantity
      }
    }
  }
`;

export const addEmployeeModel = gql`
  mutation AddUser(
    $name: String
    $age: Int
    $available: Boolean
    $birthday: Date
    $name_model: String
    $quantity: Int
  ) {
    addEmployeeModel(
      name: $name
      age: $age
      available: $available
      birthday: $birthday
      name_model: $name_model
      quantity: $quantity
    ) {
      id
      employee_id
      model_id
      Employee {
        id
        name
        age
        available
        birthday
      }
      Model {
        id
        name
        quantity
      }
    }
  }
`;
