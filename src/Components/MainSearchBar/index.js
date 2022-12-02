import React from "react";
import "./style.css";

// Assets SVG
import { CameraSearch } from "../../Assets/CameraSearch";
import { FocusSearch } from "../../Assets/FocusSearch";

function MainSearchBar({ activeSearch, setActiveSearch, search, setSearch }) {
  const searchInGoogle = (event) => {
    setSearch(event?.target.value);
    console.log(search);
  };

  return (
    <React.Fragment>
      <section className="logo">
        <img
          className="google"
          alt="google"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
      </section>
      <section className="searching-tools">
        <div className="search-bar">
          <FocusSearch className={"focus"} />
          <input className="center-bar" onChange={searchInGoogle} />
          <CameraSearch />
          <div className="search-button" onClick={() => setActiveSearch(true)}>
            <FocusSearch color={"#4285F4"} className={"focus-button"} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export { MainSearchBar };
