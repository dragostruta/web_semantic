import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const JsonSubMenu = ({ employee, isActivatedRefetch }) => {
  const { data, mutate, error } = useSWR(
    `/api/fetchFromJson?employee_id=${employee.id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [isActivatedRefetch]);

  if (!data) return "Loading";
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
        {data.map((employeeModel) => {
          return (
            <tr className="bg-white border-b" key={employeeModel.id}>
              <td className="px-6 py-4">{employeeModel.id}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
              >
                {employeeModel.Model.name}
              </th>
              <td className="px-6 py-4">{employeeModel.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default JsonSubMenu;
