import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import SingleAdmin from "./SingleAdmin/SingleAdmin";

const DashboardAdmin = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();
  const {
    data: adminsData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://croudfunding-server-muradwahid.vercel.app/users`
      );
      const data = await res.json();
      return data;
    },
  });
  useEffect(() => {
    fetch(
      `https://croudfunding-server-muradwahid.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user?.email]);
  const handleMakeAdminRole = (id) => {
    if (currentUser?.role === "admin") {
      const userAdminData = {
        role: id?.role,
      };
      fetch(
        `https://croudfunding-server-muradwahid.vercel.app/users/${id?.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userAdminData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            refetch();
          }
        });
    }
  };
  const handleUserRoleDelete = ({ id, email }) => {
    if (currentUser?.role === "admin") {
      if (currentUser?.email !== email) {
        fetch(
          `https://croudfunding-server-muradwahid.vercel.app/userdelete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-full p-6 bg-[#04061a] overflow-x-scroll h-[100vh] flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        ></Circles>
      </div>
    );
  }

  return (
    <div className="pt-32 w-full  bg-[#F1F5F9]">
      <div className="mx-10">
        <div className="grid grid-cols-4 pl-16 w-full bg-gradient-to-t from-[#5562ee] via-[#404dbe] to-[#1c2aca] py-2 text-gray-300 font-bold">
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Action</p>
        </div>
        {adminsData?.map((singleAdmin) => (
          <SingleAdmin
            handleUserRoleDelete={handleUserRoleDelete}
            singleAdmin={singleAdmin}
            handleMakeAdminRole={handleMakeAdminRole}
            key={singleAdmin._id}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardAdmin;
