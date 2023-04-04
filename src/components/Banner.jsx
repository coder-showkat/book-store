import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import readingBoy from "../assets/data.json";

const Banner = () => {
  return (
    <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
      <div className="flex flex-col justify-center items-start gap-y-6">
        <h5 className="bg-yellow-500 px-6 py-1 rounded-3xl text-black">
          ON SALE!
        </h5>
        <h1 className="text-5xl font-bold">
          A reader lives a <br />
          thousand lives <span className="text-blue-400">before he dies</span>
        </h1>
        <p className="text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/store"
            className="bg-blue-400 text-gray-900 px-6 flex items-center gap-x-2 py-2 rounded-md text-lg font-medium"
          >
            Visit store <ion-icon name="cart"></ion-icon>
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-md text-lg font-medium"
          >
            Learn more..
          </Link>
        </div>
      </div>

      <div>
        <Lottie animationData={readingBoy} />
      </div>
    </section>
  );
};

export default Banner;
