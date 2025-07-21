import React from 'react'
import Innerheader from '../innerheader/Innerheader'
import Leftpanelarch from './Leftpanelarch'
import Quescard from '../quesans/Quescard'

function Archivequelist() {
  return (
    <>
    <Innerheader />
    <div className="archive_flex">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Leftpanelarch />
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <Quescard />
                    </div>
                    <div className="col-md-6">                        
                        <Quescard />
                    </div>
                </div>              
                <div className="row">
                    <div className="col-md-6">
                        <Quescard />
                    </div>
                    <div className="col-md-6">                        
                        <Quescard />
                    </div>
                </div>              
                <div className="row">
                    <div className="col-md-6">
                        <Quescard />
                    </div>
                    <div className="col-md-6">                        
                        <Quescard />
                    </div>
                </div>              
                <div className="row">
                    <div className="col-md-6">
                        <Quescard />
                    </div>
                    <div className="col-md-6">                        
                        <Quescard />
                    </div>
                </div>              
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Archivequelist