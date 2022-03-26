import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Failed to fetch')
import { useSelector } from 'react-redux'
function Nav() {
  const { error } = useSelector(state => state.books)
  return (
    <nav className=" text-white   ">
      <span className="sr-only">
        {
          error && notify()
        }
      </span>
      <div className='mx-auto mb-4 sm:max-w-5xl flex flex-initial items-center justify-between sm:px-8 h-12  '>
        <Link to="/">
          <img className="ml-4 sm:ml-0 w-12 h-12" src="/logo.svg" alt="logo.svg" />

        </Link>
      </div>

      <Toaster position="top-center" reverseOrder={false} />

    </nav>
  );
}

export default Nav;
