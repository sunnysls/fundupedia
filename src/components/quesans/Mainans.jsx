import React from 'react';
import AnsImg from "../../assets/ans.jpg";
import Innerheader from '../innerheader/Innerheader';
import Rightpanelfull from './Rightpanelfull';

function Mainans() {
  return (
    <>
        <Innerheader />

        <div className="mainAns_flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mainans">
                            <figure>
                                <img src={AnsImg} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Rightpanelfull />
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Mainans