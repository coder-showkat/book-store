import {
  faArrowLeft,
  faFaceFrownOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-4">
      <FontAwesomeIcon
        className="text-yellow-600 text-7xl"
        icon={faFaceFrownOpen}
      />
      <h1 className="text-4xl font-semibold">{status || 404}</h1>
      <p className="text-lg text-gray-300">{error?.message || "Not found"}</p>
      <Link
        to="/"
        className="bg-blue-400 mt-6 text-gray-900 px-6 flex items-center gap-x-2 py-2 rounded-md text-lg font-medium"
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
