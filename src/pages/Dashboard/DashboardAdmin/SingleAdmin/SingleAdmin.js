import React from 'react';

const SingleAdmin = ({ singleAdmin, handleMakeAdminRole, handleUserRoleDelete }) => {
  const {_id,name,email,image,role} = singleAdmin;
  return (
    <>
      {
        singleAdmin.role && <div className='grid grid-cols-4 w-full items-center  bg-gradient-to-t from-[#515ee9] via-[#2635b9] to-[#101ca1] mt-2 py-2 text-gray-200 pl-4 rounded-md'>
          <div className='flex items-center gap-4'>
            <img className='w-8 h-8 rounded-full object-cover' src={image} alt="" />
            <p>{name}</p>
          </div>
          <span>{email}</span>
          <p className='ml-5'><span className='capitalize'>{role}</span> {role === "author" && <span className='text-sm bg-blue-500 py-1 px-2 rounded-full ml-2 cursor-pointer' onClick={() => handleMakeAdminRole({id:_id,role})}>Make a Admin</span>}
            {role === "editor" && <span className='text-sm bg-blue-500 py-1 px-2 rounded-full ml-2 cursor-pointer' onClick={() => handleMakeAdminRole({ id: _id, role })}>Make a Author</span>}
          </p>
          <p className='ml-3'><button onClick={() => handleUserRoleDelete({ id: _id,email})} className='bg-gradient-to-t from-red-400 to-red-800 py-1 px-2 text-sm rounded-md transition-all translate hover:scale-110'>Delete</button></p>
        </div>
      }
    </>
  );
};

export default SingleAdmin;