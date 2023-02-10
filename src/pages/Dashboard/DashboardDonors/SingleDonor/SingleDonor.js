import React from "react";

const SingleDonor = ({ data, setDonorAmount, donorAmount }) => {
  const {
    fullName,
    amount,
    email,
    address,
    cardHolderName,
    paymentType,
    image,
  } = data;

  return (
    <>
      <tr className="bg-white border-b-2 border-gray-500 ">
        {/* <td className="text-sm font-semibold ">
          <img
            className="ml-2 w-10 h-10 rounded-full object-cover"
            src={image}
            alt=""
          />
        </td> */}
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src={image}
                width="40"
                height="40"
                alt={fullName}
              />
            </div>
            <div className="font-medium text-slate-800">{fullName}</div>
          </div>
        </td>
        <td className="text-slate-800 font-semibold py-3">{address}</td>
        <td className="">{amount && amount.substring(0, 4)}</td>
        <td className="text-sm text-slate-800">24 january 2023</td>
        <td className="text-sm text-slate-800">Regular</td>
      </tr>
      {/* <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src={image}
                width="40"
                height="40"
                alt={fullName}
              />
            </div>
            <div className="font-medium text-slate-800">{fullName}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">{address}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">{amount}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">24 january 2023</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">24 january 2023</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="font-medium text-slate-800">{fullName}</div>
        </td>
      </tr> */}
    </>
  );
};

export default SingleDonor;
