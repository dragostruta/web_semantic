import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MySqlForm = () => {
  const { data, error } = useSWR("/api/fetchUsers", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;
  return (
    <>
      {" "}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Post
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {data.getUsers.map((user) => {
              return user.posts.map((post) => {
                return (
                  <tr className="bg-white border-b" key={post.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.age}</td>
                    <td className="px-6 py-4">{post.title}</td>
                  </tr>
                );
              });
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySqlForm;
