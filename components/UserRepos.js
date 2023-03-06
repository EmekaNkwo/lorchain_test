import React, { useState, useEffect } from "react";
import { GoRepo } from "react-icons/go";
import ReactPaginate from "react-paginate";

const UserRepos = ({ repoData }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const count = 5;
  const endOffset = itemOffset + count;

  const items = repoData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repoData?.length / count);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setItemOffset(selectedPage * count);
  };

  return (
    <>
      <div className="m-2 lg:m-0">
        <header>
          <h2 className="text-[24px] font-medium lg:text-[32px] mt-3 lg:mt-0 ">
            Repositories ({repoData?.length}){" "}
          </h2>
        </header>

        <div className="my-2 flex flex-col gap-[1rem]">
          {items?.length > 0 ? (
            <>
              {items?.map((repo) => (
                <li key={repo?.id} className="list-none ">
                  <a
                    href={repo?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col gap-2 bg-white p-2 rounded-md lg:w-[400px] w-full">
                      <div className="flex items-center gap-2 ">
                        <GoRepo />
                        <h3 className="text-[24px] font-medium text-[#0064EB]">
                          {repo.name}
                        </h3>
                      </div>
                      <span className="font-normal text-[16px]">
                        {repo.description}
                      </span>
                    </div>
                  </a>
                </li>
              ))}

              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                className="flex gap-6 font-semibold mt-3 justify-center"
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={
                  "text-[#fff] w-[14px] bg-[#0064EB] text-center"
                }
              />
            </>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserRepos;
