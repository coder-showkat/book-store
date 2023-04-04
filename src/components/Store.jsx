import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Store = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data.books) setBooks(data.books);
  }, []);

  return (
    <section className="container mx-auto p-4 grid max-[450px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
      {books.map((book) => (
        <BookCard key={book.isbn13} book={book} />
      ))}
    </section>
  );
};

export default Store;
