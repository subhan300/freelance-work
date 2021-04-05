import React from 'react'
import "./Footer.css"
function Footer() {
    return (
     <div className="bg-light py-5" style={{zIndex:1}}>
            <div className="container bg-light py-3">
            <div className="row">
                <div className="col-md-2">
                    <p style={{color:"#EB5389"}}>dripple</p>
                    <p style={{fontSize:"14px",color:"darkslategrey"}}>
                    Dribbble is the world’s leading<br></br> community for creatives to share, grow,<br></br> 
                    and get hired.

                    </p>
                
                
                </div>
                <div className="col-md-2">
                    
                   <ul style={{listStyle:"none"}}>
                   <p>For Designer</p>
                    <li className="footer_mid_list">Go pro</li>
                   <li className="footer_mid_list">Explore Design</li>
                   <li className="footer_mid_list">Blog</li>
                   <li className="footer_mid_list">Code Of Product</li>
                   <li className="footer_mid_list">Freelance Project</li>
                   <li className="footer_mid_list">Code Of Product</li>
                   </ul>
                
                
                </div>
               
                <div className="col-md-2">
                    
                    <ul style={{listStyle:"none"}}>
                    <p>Hire Designer</p>
                     <li className="footer_mid_list">Go pro</li>
                    <li className="footer_mid_list">Explore Design</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Overtime Podcast</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Play off</li>
                    <li className="footer_mid_list">Meetup</li>
                    <li className="footer_mid_list">Code Of Product</li>
                    </ul>
                 
                 
                 </div>

                 <div className="col-md-2">
                    
                    <ul style={{listStyle:"none"}}>
                    <p>Company</p>
                     <li className="footer_mid_list">Go pro</li>
                    <li className="footer_mid_list">Explore Design</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Overtime Podcast</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Play off</li>
                    <li className="footer_mid_list">Meetup</li>
                    <li className="footer_mid_list">Code Of Product</li>
                    </ul>
                 
                 
                 </div>
                 <div className="col-md-2">
                    
                    <ul style={{listStyle:"none"}}>
                    <p>Directories</p>
                     <li className="footer_mid_list">Go pro</li>
                    <li className="footer_mid_list">Explore Design</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Overtime Podcast</li>
                    <li className="footer_mid_list">Blog</li>
                    <li className="footer_mid_list">Play off</li>
                    <li className="footer_mid_list">Meetup</li>
                    <li className="footer_mid_list">Code Of Product</li>
                    </ul>
                 
                 
                 </div>
                <div className="col-md-2 text-light">PART 1</div>

                
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-12 col-md-6">
            <p>© 2021 Dribbble. All rights reserved.</p>
            </div>
           
            <div className="col-12 col-md-6 d-flex" style={{justifyContent:"flex-end"}}>
         
            <p>15,418,059 shots dribbbled</p>
            </div>


        </div>
     </div>
    )
}

export default Footer
