import React from 'react';
import QuoteIcon from "../../assets/quoteicon.svg";
import QuoteIconTwo from "../../assets/quoteicontwo.svg";

function Rightpanelfull() {
  return (
    <>
        <div className="doubtsform_flex">
            <form action="">
                <div className="doubtsheading_flex">
                    <div className="doubtstext">
                        Do you have any doubts
                        about the solution?
                    </div>
                    <div className="doubtIcon">
                        <img src={QuoteIcon} alt="" />
                    </div>
                </div>
                <div className="textarea">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Write Here...'></textarea>
                </div>
                <div className="quoteCta">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

        <div className="solvepyq_flex">
            <div className="solvepyqheading">
                Do you want to solve similar PYQs?
            </div>
            <p><a href="#">If yes, Click Here</a></p>
        </div>

        <div className="noformula">
            <div className="formulatext_area">
                <div className="formulaheading">
                    Problem with the formula?
                    <font>No worries!!</font>
                </div>
                <div className="formulaicon">
                    <img src={QuoteIconTwo} alt="" />
                </div>
            </div>
            <div className="formulaCta">
                <a href="#">Click Here Workbook</a>
            </div>
        </div>

        <div className="solvepyq_flex">
            <div className="solvepyqheading">
                Problem in revision? Mind Maps
            </div>
            <p><a href="#">Click Here</a></p>
        </div>

        <div className="jeequescard">
            <div className="jeeheading">
                JEE Main 2025 Chapterwise Questions
            </div>
            <div className="newtext_flex">
                <div className="newtool">New</div>
                <div className="newtext">
                    JEE Main 2025 Chapterwise 
                    Questions (January)
                </div>                
            </div>
            <ul>
                <li><a href="#">Physics</a></li>
                <li><a href="#">Chemistry</a></li>
                <li><a href="#">Mathematics</a></li>
            </ul>
        </div>
    </>
  )
}

export default Rightpanelfull