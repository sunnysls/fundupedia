import React from "react";

function Leftpanel() {
  return (
    <>
      <div className="leftPanel_flex">
        <form action="">
          <div className="field_wrap">
            <label for="" className="form-label">
              Exam
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Exam</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              Year
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
              Level
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Level</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="field_wrap">
            <label for="" className="form-label">
              Class
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Class</option>
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
              Formula/Concept
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Formula/Concept</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default Leftpanel;
