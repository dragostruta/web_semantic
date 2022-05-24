import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import moment from "moment";
import { Dialog, Transition } from "@headlessui/react";
import MySqlSubMenu from "./mysqlSubMenu";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MySqlForm = ({ isActivatedRefetch }) => {
  const { data, mutate, error } = useSWR("/api/fetchEmployees", fetcher);
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    mutate();
  }, [isActivatedRefetch]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Available
              </th>
              <th scope="col" className="px-6 py-3">
                Birthday
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => {
              return (
                <tr
                  className="bg-white border-b cursor-pointer"
                  key={employee.id}
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
                  <td className="px-6 py-4">
                    {employee.available ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    {moment(employee.birthday).format("DD-MM-YYYY")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <MySqlSubMenu
                        isActivatedRefetch={isActivatedRefetch}
                        employee={currentEmployee}
                      />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default MySqlForm;
