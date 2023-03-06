import React from "react";
import { FaUserAlt } from "react-icons/fa";

function ErrorPage({ error }) {
  return (
    <>
      {error && (
        <div className="flex items-center justify-center h-[calc(100vh-72px)]">
          {error === 404 ? (
            <div className="flex flex-col items-center gap-2">
              <FaUserAlt className="text-[4rem]" />
              <p className="text-[1.5rem]">User Not Found</p>
            </div>
          ) : (
            <>
              <p>Oh no! Something went wrong. Try again later!</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ErrorPage;
