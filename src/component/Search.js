import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search" />
        <select name="area" placeholder>
            <option value="This Area Only" selected = "true">This Area Only</option>
              <option value="+0.25 miles" >+0.25 miles</option>
              <option value="+0.5 miles" >+0.5 miles</option>
              <option value="+1 mile" >+1 mile</option>
        </select>
        {/* <select name="bedrooms" placeholder="Any beeds"> */}
                      <select name="min" placeholder="Minimum">
                          <option value="Select" Selected = "true"> Select Minuimum bedrom </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select name="max" placeholder="Maximum">
                <option value="Select" Selected = "true"> Select Maximum bedrom </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
           
        {/* </select> */}
      </form>
    </div>
  );
}
