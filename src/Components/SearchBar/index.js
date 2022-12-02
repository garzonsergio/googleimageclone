import React, { useState } from "react";
import { HeaderSearchBar } from "../HeaderSearchBar";
import { MainSearchBar } from "../MainSearchBar";

function SearchBar() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState();

  return (
    <React.Fragment>
      {activeSearch ? (
        <HeaderSearchBar search={search} setSearch={setSearch} />
      ) : (
        <MainSearchBar
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          search={search}
          setSearch={setSearch}
        />
      )}
    </React.Fragment>
  );
}

export { SearchBar };
