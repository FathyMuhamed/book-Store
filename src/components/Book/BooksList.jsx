import React from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function BooksList({ isLoading, books, dispatch, deleteBook, getBookId }) {
  const notify = () => toast.success('Successfully');


  return (
    <div className="">
      <h2 className="text-xl mb-4" >Books List</h2>
      {isLoading ? "Loading...." :
        <ul className="flex flex-col sm:gap-4">
          {
            books.length > 0 ? books?.map(item =>
              <li key={item.id} className='w-full flex flex-row flex-initial justify-between items-center gap-0 sm:gap-4 h-12'>
                <div className=" text-md">{item.title}</div >
                <div className="flex">
                  <button
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    type='button'
                    onClick={() => {
                      getBookId(item.id)
                      notify();

                    }}
                  >
                    Read
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      dispatch(deleteBook(item.id));
                      notify();
                    }}
                    className='inline-flex ml-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Delete
                  </button>
                  <Toaster />

                </div>
              </li >) : <li className="w-3/4 mx-auto rounded-md text-center py-2 text-lg bg-indigo-50 shadow-sm">there is no books available</li>
          }
        </ul>
      }
    </div>
  );
}
