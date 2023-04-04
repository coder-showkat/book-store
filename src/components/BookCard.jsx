import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const { isbn13, image, price, subtitle, title, url } = book;
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const getDetails = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div
      className="w-full shadow-2xl border-2 border-gray-700 bg-gray-900 overflow-hidden rounded-sm relative cursor-pointer hover:-top-2 top-0 duration-300"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => getDetails(isbn13)}
    >
      <img src={image} alt={title} className="w-full" />
      <div
        className={`absolute text-white overflow-hidden w-full left-0 top-0 bg-gray-950/90 duration-300 ${
          hover ? "h-full" : "h-0"
        }`}
      >
        <div className="h-full p-6 flex flex-col justify-between gap-y-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="hidden md:block">{subtitle}</p>
          <p className="mt-auto">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
