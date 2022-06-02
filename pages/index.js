import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import GraphQlForm from "../components/graphqlForm";
import MySqlForm from "../components/mysqlForm";
import { addEmployeeModel } from "../graphql/queries";
import FormInputs from "../components/formInputs";
import moment from "moment";
import LoadingEffect from "../components/loadingEffect";
import JsonForm from "../components/jsonForm";

const Home = () => {
  const [fieldValidation, setFieldValidation] = useState(true);
  const [isActivatedRefetch, setIsActivatedRefetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [final2, setFinal2] = useState(false);
  const [final3, setFinal3] = useState(false);
  const [done, setDone] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);
  const [addEmployee] = useMutation(addEmployeeModel);
  const [form, setForm] = useState({
    name: "",
    age: "",
    available: false,
    birthday: "",
    name_model: "",
    quantity: 0,
  });

  const [error, setError] = useState({
    name: "",
    age: "",
    birthday: "",
    name_model: "",
    quantity: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setLoading2(false);
      setDone2(true);
      setLoading3(false);
      setDone3(true);
    }, 500);
  }, [loading, loading2, loading3]);

  useEffect(() => {
    setTimeout(() => {
      setDone(false);
      setDone2(false);
      setDone3(false);
    }, 500);
  }, [done, done2, done3]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const handleToggle = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let validationError = {
      name: "",
      age: "",
      birthday: "",
      name_model: "",
      quantity: "",
    };
    if (form.name === "") {
      validationError.name = "Please fill up the Name field";
      valid = false;
    }
    if (form.age === "") {
      validationError.age = "Please fill up the Age field";
      valid = false;
    }
    if (form.birthday === "") {
      validationError.birthday = "Please fill up the birthday field";
      valid = false;
    }
    if (form.name_model === "") {
      validationError.name_model = "Please fill up the Model Name field";
      valid = false;
    }
    setError(validationError);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsActivatedRefetch(isActivatedRefetch ? false : true);
      setLoading(true);
      addEmployee({
        variables: {
          name: form.name,
          age: parseInt(form.age),
          birthday: moment(form.birthday),
          available: form.available,
          name_model: form.name_model,
          quantity: parseInt(form.quantity),
        },
      });
    }
  };

  const handleSubmitMySql = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading2(true);
      setFinal2(true);
      fetch("/api/postUser", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          age: parseInt(form.age),
          available: form.available,
          birthday: moment(form.birthday),
          name_model: form.name_model,
          quantity: parseInt(form.quantity),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsActivatedRefetch(isActivatedRefetch ? false : true);
        });
    }
  };

  const handleSubmitJson = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading3(true);
      setFinal3(true);
      fetch("/api/postToJson", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          age: parseInt(form.age),
          available: form.available,
          birthday: moment(form.birthday),
          name_model: form.name_model,
          quantity: parseInt(form.quantity),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsActivatedRefetch(isActivatedRefetch ? false : true);
        });
    }
  };

  return (
    <div className="container mx-auto pt-36">
      <div>
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <FormInputs
                handleChange={handleChange}
                handleToggle={handleToggle}
                error={error}
              />
              {fieldValidation ? (
                ""
              ) : (
                <div className="text-sm text-red-500">
                  {" "}
                  Please fill all the fields
                </div>
              )}
            </div>
            <div className="px-4 py-3 bg-gray-50 flex justify-end sm:px-6">
              <LoadingEffect loading={loading} done={done} />
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Send
              </button>
            </div>
            <GraphQlForm isActivatedRefetch={isActivatedRefetch} />
            <div className="px-4 py-3 bg-gray-50 flex justify-end sm:px-6">
              <LoadingEffect loading={loading2} done={done2} />
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => {
                  handleSubmitMySql(e);
                }}
              >
                Send
              </button>
            </div>
            {final2 ? (
              <MySqlForm isActivatedRefetch={isActivatedRefetch} />
            ) : (
              ""
            )}
            {/* <MySqlForm isActivatedRefetch={isActivatedRefetch} /> */}
            <div className="px-4 py-3 bg-gray-50 flex justify-end sm:px-6">
              <LoadingEffect loading={loading3} done={done3} />
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => {
                  handleSubmitJson(e);
                }}
              >
                Send
              </button>
            </div>
            {final3 ? <JsonForm isActivatedRefetch={isActivatedRefetch} /> : ""}
            {/* <JsonForm isActivatedRefetch={isActivatedRefetch} /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
