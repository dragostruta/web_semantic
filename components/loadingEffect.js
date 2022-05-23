import { Transition } from "@headlessui/react";

const LoadingEffect = ({ loading, done }) => {
  return (
    <div className="pr-4 mt-2">
      <Transition.Root show={loading} as="div">
        <Transition.Child
          as="div"
          enter="ease-in-out duration-1500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-1500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {loading ? (
            <div className="w-5 h-5 border-t-transparent border-4 border-indigo-600 border-solid rounded-full animate-spin mt-1"></div>
          ) : (
            ""
          )}
        </Transition.Child>
      </Transition.Root>
      <Transition.Root show={loading} as="div">
        <Transition.Child
          as="div"
          enter="ease-in-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {done ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 transition duration-300 delay-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            ""
          )}
        </Transition.Child>
      </Transition.Root>
    </div>
  );
};

export default LoadingEffect;
