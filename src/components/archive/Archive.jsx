import React from 'react'
import Innerheader from '../innerheader/Innerheader'
import Leftpanelarch from './Leftpanelarch'

export default function Archive() {
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
                    <div className="arhive_description">
                        <p>The Joint Entrance Examination, JEE (Main) comprises of two papers. Paper 1 is conducted for admission to Undergraduate Engineering Programs (8.E. / 8. Tech.) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTls) and Institutions / Universities funded / recognized by participating State Governments. JEE (Main) is also an eligibility test for JEE (Advanced), which is conducted for admission to IITs. Paper 2 is conducted for admission to B. Arch and B. Planning courses in the country.</p>
                    </div>

                    <div className="archsubheading">Quick Links:</div>
                    <ul className="archUl">
                        <li><a href="#">Marks vs Percentile</a></li>
                        <li><a href="#">Cutoff for Advanced</a></li>
                        <li><a href="#">Formula Workbook-JEE</a></li>
                        <li><a href="#">Academic Clinic</a></li>
                        <li><a href="#">Red Book of PYQs</a></li>
                        <li><a href="#">Colleges by JEE Main</a></li>
                        <li><a href="#">PYQ Based Test Series</a></li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
