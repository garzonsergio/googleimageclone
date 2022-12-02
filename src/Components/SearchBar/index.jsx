import React from 'react'
import "./style.css"

// Assets SVG
import { CameraSearch } from '../../Assets/CameraSearch'
import { FocusSearch } from '../../Assets/FocusSearch'


function SearchBar() {
  return (
   <React.Fragment>
        <section className="logo">
            <img className="google" alt="google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
            {/* <span className="category-name">Imágenes</span> */}
        </section>
        <section className="searching-tools">
            <div className="search-bar">
                <FocusSearch  className={"focus"}/>

                <input className="center-bar"/>
                  <CameraSearch />
                  <FocusSearch  color={"#4285F4"} className={"focus-button"}/>           
            </div>
        </section>
   </React.Fragment>
  )
}

export {SearchBar}