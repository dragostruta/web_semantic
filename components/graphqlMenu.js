import moment from "moment";

const GraphQlMenu = ({ employee, openModal, setCurrentEmployee }) => {
  return (
    <tr
      className="bg-white border-b cursor-pointer"
      onClick={() => {
        openModal();
        setCurrentEmployee(employee);
      }}
    >
      <td className="px-6 py-4">{employee.id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
      >
        {employee.name}
      </th>
      <td className="px-6 py-4">{employee.age}</td>
      <td className="px-6 py-4">{employee.available ? "Yes" : "No"}</td>
      <td className="px-6 py-4">
        {moment(employee.birthday).format("DD-MM-YYYY")}
      </td>
    </tr>
  );
};

export default GraphQlMenu;
