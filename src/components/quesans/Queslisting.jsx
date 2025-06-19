import React from 'react';
import Innerheader from "../innerheader/Innerheader";
import Leftpanel from "../quesleftpanel/Leftpanel";
import Quescard from './Quescard';



function Queslisting() {
  return (
    <>
        <Innerheader />
        <div className="ques_flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Leftpanel />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                           <Quescard />
                           <Quescard />
                        </div>
                        <div className="row">
                           <Quescard />
                           <Quescard />
                        </div>
                        <div className="row">
                           <Quescard />
                           <Quescard />
                        </div>
                        <div className="row">
                           <Quescard />
                           <Quescard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Queslisting