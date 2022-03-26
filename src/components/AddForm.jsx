import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from '../store/bookSlice';
import toast, { Toaster } from 'react-hot-toast';

function AddForm() {
  const dispatch = useDispatch();
  const inputForm = useRef();
  const notify = () => toast('Book add Successfully', {
    icon: '🥳',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = inputForm.current;
    const data = {
      id: Date.now(),
      title: target.title.value,
      price: target.price.value,
      description: target.description.value,
    }
    dispatch(insertBook(data));
    target.title.value = null;
    target.price.value = null;
    target.description.value = null;
    notify()
  }

  return (
    <div className='pb-4 max-w-screen-sm mx-3 sm:mx-auto mt-5 md:col-span-2  '>
      <h2 className="font-bold text-lg mb-2">Insert Book</h2>
      <form ref={inputForm} onSubmit={handleSubmit}>
        <div className='shadow overflow-hidden sm:rounded-md'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className='flex flex-col gap-6'>
              <div className=''>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium text-gray-700'>
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  required
                  autoComplete='given-name'
                  className='mt-1 outline-none text-lg py-2 pl-2 bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-gray-700'>
                  Price
                </label>
                <input
                  type='text'
                  name='price'
                  id='price'
                  required
                  autoComplete='given-name'
                  className='mt-1 outline-none py-2 pl-2 bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'>
                  Description
                </label>
                <input
                  type='text'
                  name='description'
                  id='description'
                  required
                  autoComplete='given-name'
                  className='mt-1 py-2 outline-none pl-2 bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Save

            </button>
            <Toaster />

          </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
