import React from "react";

function BookInfo({ info }) {
  return (
    <div className='border-l-2 pl-3'>
      <h2 className="text-xl mb-4">Book Details</h2>
      {
        Object.values(info).length ? <div className="text-md">
          <h3>Title: {info.title}</h3>
          <span>Price: {info.price}</span>
          <p>Description : {info.description}</p>

        </div> : <div className="w-full mx-auto rounded-md text-center py-2 text-lg bg-indigo-50 shadow-sm" role='alert'>
          There is no post selected yet. Please select!
        </div>
      }
    </div>
  );
}

export default BookInfo;
