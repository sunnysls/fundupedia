import React from 'react'
import Innerheader from '../innerheader/Innerheader'
import MainQues from "../../assets/ques-1.jpg";
import Rightpanel from './Rightpanel';
import Quesbanner from './Quesbanner';
import { Link } from 'react-router';

function Mainques() {
  return (
    <>
        <Innerheader />
        
        <div className="mainques_flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mainques">
                            <form>
                            <figure>
                                <img src={MainQues} alt="" />
                            </figure>
                            {/* <button>Check Answer</button> */}                            
                            <Link to="/mainans">Check Answer</Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Rightpanel />
                    </div>
                </div>
            </div>
        </div>
        
        <Quesbanner />
    </>
  )
}

export default Mainques