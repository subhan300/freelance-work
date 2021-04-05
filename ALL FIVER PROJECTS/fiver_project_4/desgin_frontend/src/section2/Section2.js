import React from 'react'
import "./Section2.css"
function Section2() {
    return (
        <div className="section2 container">
            <div className="row ">
                <div className="col-12 ">
                     <div style={{display:"flex",justifyContent:"center"}}>
                        <hr style={{width:"46%",textAlign:"left",marginLeft:"0",border:"1px solid grey"}} />
                        <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                        <hr style={{width:"46%",textAlign:"left",marginLeft:"0",border:"1px solid grey"}} />
                     </div>

                     <div className="py-4 text-center">
                         <p style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px"}}>Anastasia<br></br>
                        <span style={{fontSize:"14px",color:"#EB5389",fontWeight:"bolder"}}> UI/UX Design & Development</span></p>
                        <button type="button" class="btn btn-danger" style={{fontWeight:"bold",fontSize:"18px"}}>Hire Me</button>
                     </div>

                     <p style={{fontWeight:"bold"}}>More by Anastasia</p>
                     <div className="row py-4">

                         <div className="col-md-3 col-12 py-2">
                            <img src="https://cdn.dribbble.com/users/4189231/screenshots/14803442/media/0eaa1b6816d1a87bf51c1b9836161aad.png?compress=1&resize=800x600" class="img-fluid" alt="Responsive image" />
                         </div>
                         <div className="col-md-3 col-12 py-2">
                            <img src="https://cdn.dribbble.com/users/4189231/screenshots/13927301/media/74e16840dedb786b615f3fd7d864fe8f.jpg?compress=1&resize=800x600" class="img-fluid" alt="Responsive image" />
                         </div>

                         <div className="col-md-3 col-12 py-2">
                            <img src="https://cdn.dribbble.com/users/4189231/screenshots/13385653/media/a66ea2b5ce92c0f9592aa02c5afc674b.png?compress=1&resize=800x600" class="img-fluid" alt="Responsive image" />
                         </div>

                         <div className="col-md-3 col-12 py-2">
                            <img src="https://cdn.dribbble.com/users/4189231/screenshots/12581578/media/8eba507019cd34c6a24133c3ca6b0b23.jpg?compress=1&resize=800x600" class="img-fluid" alt="Responsive image" />
                         </div>



                     </div>
                    

                </div>
            
                       
            
            </div>
        </div>
    )
}

export default Section2
