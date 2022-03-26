import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { getBooks, deleteBook } from "../../store/bookSlice";
function BookContainer() {
  const { isLoading, books } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const [singleBook, setSingleBook] = useState({})
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch])
  const getBookId = (bookName) => {
    const book = books.find(book => book.id === bookName)
    setSingleBook(prev => ({ ...prev, ...book }));
  }

  return (
    <div className="max-w-screen-md mx-auto " >
      <hr className='my-5' />
      <div className='grid gap-4 sm:grid-cols-2 grid-cols-1 mx-7 pb-6'>
        <BooksList isLoading={isLoading} books={books} dispatch={dispatch} deleteBook={deleteBook}
          getBookId={getBookId}
        />
        <BookInfo info={singleBook} />
      </div>
    </div>
  );
}

export default BookContainer;
