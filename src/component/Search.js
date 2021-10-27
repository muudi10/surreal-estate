import React from "react";
import '../styles/Search.css';
export default function Search() {
  return (
    <div className="search m2">
      <form className="search-form m-2">
        <input type="text" placeholder="Search"  className="mr-1"/>
        <select name="area" className="" placeholder>
            <option value="This Area Only" selected = {true}>This Area Only</option>
              <option value="+0.25 miles" >+0.25 miles</option>
              <option value="+0.5 miles" >+0.5 miles</option>
              <option value="+1 mile" >+1 mile</option>
        </select>
        {/* <select name="bedrooms" placeholder="Any beeds"> */}
                      <select name="min" className="" placeholder="Minimum">
                          <option value="Select" selected = {true}> Select Minuimum bedrom </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select name="max" className="" placeholder="Maximum">
                <option value="Select" selected = {true}> Select Maximum bedrom </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
           
        {/* </select> */}
      </form>
    </div>
  );
}
