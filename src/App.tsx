import React, { useEffect, useState, ChangeEvent } from "react";
import { AppContainer, Header, Subtitle, Input } from "./App.style";

import axios, * as others from "axios";
import { debounce } from "lodash";
import { RepoData } from "./types";

import RepoTable from "./components/RepoTable";
import Pagination from "./components/Pagination";

const rowsPerpage: number = 10;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repoData, setRepoData] = useState<Array<RepoData>>([]);
  const [filteredRepoData, setFilteredRepoData] = useState<Array<RepoData>>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    retrieveRepoData();
  }, []);

  const retrieveRepoData = async () => {
    try {
      setLoading(true);

      const res = await axios.get<any>("https://api.github.com/repositories");

      const resData = res.data.map((result: any) => ({
        repo_name: result.name,
        repo_url: result.html_url,
        repo_description: result.description,
        owner_profile: result.owner.avatar_url,
        owner_name: result.owner.login,
      }));

      setRepoData(resData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(`Issue with retrieving data: ${error}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    const handleSearchChange = debounce(() => {
      const res = repoData.filter((obj: any) =>
        JSON.stringify(obj).toLowerCase().includes(search.toLowerCase())
      );
      setLoading(false);
      setFilteredRepoData(res);
    }, 500);

    handleSearchChange();
  }, [search]);

  const lastRowIndex: number = currentPage * rowsPerpage;
  const firstRowIndex: number = lastRowIndex - rowsPerpage;
  const currentRepoData: any =
    search == ""
      ? repoData.slice(firstRowIndex, lastRowIndex)
      : filteredRepoData.slice(firstRowIndex, lastRowIndex);

  return (
    <AppContainer>
      <Header>Repo Information</Header>

      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Search for repo"
      />
      {loading ? (
        <Subtitle>Loading...</Subtitle>
      ) : (
        <>
          <RepoTable repoData={currentRepoData} />
          <Pagination
            totalRow={search == "" ? repoData.length : filteredRepoData.length}
            rowsPerPage={rowsPerpage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </AppContainer>
  );
};

export default App;
