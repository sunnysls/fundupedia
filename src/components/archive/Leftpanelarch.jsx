import React from "react";
import { Link } from "react-router";

function Leftpanelarch() {
  return (
    <>
      <div className="leftPanel_flex">
        <form action="">
          <div className="field_wrap">
            <label for="" className="form-label">
              From
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              To
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              Subject
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Subject</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              Chapter
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Chapter</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              Topic
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Topic</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              FPR
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select FPR</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="field_wrap">                        
            <Link to="/archivequelist">Apply</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Leftpanelarch;
