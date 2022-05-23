import { useQuery, useMutation, gql } from "@apollo/client";
import moment from "moment";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import { allEmployeeModelsQuery } from "../graphql/queries";

const GraphQlSubMenu = ({ employee }) => {
  const { data, error, loading } = useQuery(allEmployeeModelsQuery, {
    variables: {
      employeeId: employee.id,
    },
  });
  if (loading) return "Loading";

  if (error) return "error";

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3">
            Id
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        {data.getEmployeeModelsByEmployeeId.map((employeeModel) => {
          return (
            <tr className="bg-white border-b" key={employeeModel.id}>
              <td className="px-6 py-4">{employeeModel.Model.id}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
              >
                {employeeModel.Model.name}
              </th>
              <td className="px-6 py-4">{employeeModel.Model.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GraphQlSubMenu;
