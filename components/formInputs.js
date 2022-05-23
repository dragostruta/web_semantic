import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const FormInputs = ({ handleChange, handleToggle, error }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    handleToggle("available", enabled);
  }, [enabled]);

  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md ring-1 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <span className=" text-red-500 font-semibold p-2">{error.name}</span>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="text"
          name="age"
          id="age"
          autoComplete="age"
          className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md ring-1 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <span className=" text-red-500 font-semibold p-2">{error.age}</span>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="post"
          className="block text-sm font-medium text-gray-700"
        >
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          autoComplete="birthday"
          className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md ring-1 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <span className=" text-red-500 font-semibold p-2">
          {error.birthday}
        </span>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="post"
          className="block text-sm font-medium text-gray-700"
        >
          Is availabale ?
        </label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-400" : "bg-red-500"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="post"
          className="block text-sm font-medium text-gray-700"
        >
          Model Name
        </label>
        <input
          type="text"
          name="name_model"
          id="name_model"
          autoComplete="name_model"
          className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md ring-1 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <span className=" text-red-500 font-semibold p-2">
          {error.name_model}
        </span>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="post"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="0"
          autoComplete="quantity"
          className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md ring-1 sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <span className=" text-red-500 font-semibold p-2">
          {error.quantity}
        </span>
      </div>
    </div>
  );
};

export default FormInputs;
