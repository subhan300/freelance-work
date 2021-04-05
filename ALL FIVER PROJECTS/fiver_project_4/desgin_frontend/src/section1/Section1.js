import React from 'react'
import { IconName } from "react-icons/fa";
import "./Section1.css"
function Section1() {
    return (
        <div className="section1 py-4">
            <div className=" py-4">
                <div className="row py-4 text-center">
                    <div className="col-12 col-md-2" style={{color:"white"}}>subhan1</div>
                    <div className="col-12 col-md-8 ">
                        <div style={{display:"flex",justifyContent:"space-between"}}>

                            <div style={{display:"flex"}}>
                               <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                               <p style={{fontWeight:"bold",color:"black"}}>Food Delivery - Mobile App</p>
                            </div>


                           <div >
                                
                            <button  type="button" class="btn btn-light ">Like it</button>
                            {/* <button type="button" class="btn btn-light ">Like it</button> */}
                           </div>
                               

 
                        </div>
                        
                        
                        
                        
                        
                        
                        <div className="py-4">
                        <img src="https://cdn.dribbble.com/users/4189231/screenshots/13385653/media/a66ea2b5ce92c0f9592aa02c5afc674b.png?compress=1&resize=800x600" class="img-fluid" alt="Responsive image" />
                        </div>

                    <div className="py-4 text-left">
                           <p style={{fontFamily:"sans-serif",fontSize:"21px"}}>
                           Hi friends!
                            <br></br><br></br>
                            Some other screens from the food delivery app we are working on.Hope you<br></br> enjoyed it! Thanks for your likes and comments!
                            <br></br><br></br>
                            Wanna create something great?<br></br>
                            Feel free contact us - tino.agency@gmail.com
                           </p>
                    </div>


                  
                        
            


                    </div>
                    <div className="col-12 col-md-2 d-flex " style={{justifyContent:"flex-end"}} >

                    <div className="d-flex " id="right_icons" style={{flexDirection:"column",position:"fixed",}}>
                    <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                    <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                    <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                    <img style={{width:"60px"}} src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" alt="avatar" class="rounded-circle" />
                    
                    </div>


                            


                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Section1
