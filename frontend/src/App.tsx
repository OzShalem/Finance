import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onClickSearch = async (e: FormEvent<HTMLButtonElement>) => {
      const result = await searchCompanies(search);
      if(typeof result === "string") {
        setServerError(result);
      } else if(Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(result);
    }
  return (
    <div className="App">
      <Search search={search} onClick={onClickSearch} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  );
}

export default App;