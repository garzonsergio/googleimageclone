import React, { useState } from "react";
import { HeaderSearchBar } from "../HeaderSearchBar";
import { MainSearchBar } from "../MainSearchBar";

function SearchBar() {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <React.Fragment>
      {activeSearch ? (
        <HeaderSearchBar />
      ) : (
        <MainSearchBar
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
        />
      )}
    </React.Fragment>
  );
}

export { SearchBar };
