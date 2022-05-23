import { useQuery, useMutation, gql } from "@apollo/client";
import client from "../apollo-client";
import { allEmployeesQuery } from "../graphql/queries";
import GraphQlSubMenu from "./graphqlSubMenu";
import GraphQlMenu from "./graphqlMenu";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

const GraphQlForm = ({ isActivatedRefetch }) => {
  const { data, error, loading, refetch } = useQuery(allEmployeesQuery);
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    refetch();
  }, [isActivatedRefetch]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (loading) return "Loading";

  if (error) return "error";

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
            {data.getEmployees.map((employee) => {
              return (
                <GraphQlMenu
                  employee={employee}
                  openModal={openModal}
                  setCurrentEmployee={setCurrentEmployee}
                  key={employee.id}
                />
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
                      <GraphQlSubMenu employee={currentEmployee} />
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

export default GraphQlForm;
