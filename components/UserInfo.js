/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Error, UserRepos, UserData, ErrorPage, Spinner } from "../components";
import axios from "axios";

// import { mockUserData, mockLangData, mockRepoData } from '../utils';

const UserInfo = ({ username }) => {
  const [userData, setUserData] = useState();

  const [repos, setRepos] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const [cancelToken, setCancelToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);

    const source = axios.CancelToken.source();
    setCancelToken(source);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          cancelToken: source.token,
        }
      );

      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled:", error.message);
      } else if (error.response && error.response.status === 404) {
        setError({ active: true, type: 404 });
      } else {
        setError({ active: true, type: 400 });
      }

      setLoading(false);
    }
  };

  const getRepoData = async () => {
    setLoading(true);
    setError(null);
    setRepos(null);

    const source = axios.CancelToken.source();
    setCancelToken(source);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        {
          cancelToken: source.token,
        }
      );

      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled:", error.message);
      } else if (error.response && error.response.status === 404) {
        setError({ active: true, type: 404 });
      } else {
        setError({ active: true, type: 200 });
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      const debounceTimeout = setTimeout(() => {
        getUserData();
        getRepoData();
      }, 50);
      return () => {
        clearTimeout(debounceTimeout);

        if (cancelToken) {
          cancelToken.cancel("Request cancelled");
        }
      };
    }
  }, [username]);

  return (
    <main>
      {error && error.active ? (
        <ErrorPage error={error} />
      ) : (
        <div className="flex gap-4 p-2 mt-[3rem] justify-center flex-col items-center lg:flex-row lg:items-start ">
          {loading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              <UserData userData={userData} />
              <UserRepos repoData={repos} />
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default UserInfo;
