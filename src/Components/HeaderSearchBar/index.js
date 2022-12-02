import React from "react";
import "./style.css";

// Assets SVG
import { CameraSearch } from "../../Assets/CameraSearch";
import { FocusSearch } from "../../Assets/FocusSearch";

function HeaderSearchBar({ search, setSearch }) {
  const searchInGoogle = (event) => {
    setSearch(event?.target.value);
    console.log(search);
  };
  return (
    <React.Fragment>
      <section>
        <img
          className="logo-busqueda"
          alt="google"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
      </section>
      <section className="searching-tools">
        <div className="search-bar">
          <FocusSearch className={"focus"} />
          <input
            className="center-bar"
            onChange={searchInGoogle}
            value={search}
          />
          <CameraSearch />
          <FocusSearch color={"#4285F4"} className={"focus-button"} />
          <button onClick={() => alert(search)}>hola gente</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export { HeaderSearchBar };
