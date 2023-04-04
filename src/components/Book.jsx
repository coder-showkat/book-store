import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Book = () => {
  const data = useLoaderData();
  const [book, setBook] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { authors, desc, image, publisher, year, rating, price, title, url } =
    book;

  useEffect(() => {
    if (data) setBook(data);
  }, []);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  if (book.title)
    return (
      <section className="container mx-auto p-4 my-12">
        <div className="border border-gray-600  grid grid-cols-1 md:grid-cols-2 gap-8 rounded-sm">
          <img src={image} alt={title} className="w-full" />
          <div className="flex flex-col gap-y-8 py-14 px-4">
            <h5 className="bg-yellow-500 text-sm w-fit px-6 py-1 rounded-3xl text-black">
              BRAND NEW
            </h5>
            <h1 className="text-5xl font-bold max-w-lg">{title}</h1>
            <div>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher}</p>
              <p>Year: {year}</p>
              <p>Rating: {rating}</p>
            </div>
            <p>
              {readMore ? desc : `${desc.slice(0, 100)}....`}
              <span
                onClick={readMoreHandler}
                className="text-blue-400 cursor-pointer block"
              >
                {readMore ? "Read less" : "Read more"}
              </span>
            </p>
            <div className="flex items-center gap-y-4">
              <a
                href={url}
                target="_blank"
                className="bg-blue-400 text-gray-900 px-6 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                Buy Now
              </a>
              <p className="px-4 py-2 rounded-md text-lg font-medium">
                Price: {price}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Book;
