import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "./assets/logo.png";
import lo from "./assets/vectorstock_21194996.jpg"

import kgg from "./assets/markus-spiske-MI9-PY5cyNs-unsplash.jpg"
import pgg from "./assets/Businessman5.jpg"
import bit from "./assets/vecteezy_business-background-with-bitcoin-icon-and-3d-finacial-data_.jpg"
export default function Features(){
    const [open,setOpen]=useState(false)
    const [close,setClose]=useState(false)
    const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

    return(
        <div>
            <section id="nav">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
 
 <a class="navbar-brand" href="#"><img src={logo} width="60" height="60" alt=""></img>Butterfly Tech &nbsp;&nbsp;</a>


 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
   <span class="navbar-toggler-icon"></span>
 </button>

 <div class="collapse navbar-collapse" id="collapsibleNavbar">
   <ul class="navbar-nav">
     <li class="nav-item">
       <a class="nav-link" href="#">Home</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#services">Services</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#pricing">Pricing</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#conatct">Contact-Us</a>
     </li>
   </ul>
 </div>
</nav>
            </section>
            <section id="hero">
            <div className="container-fluid" style={{
               
                
            }}>
                
                
                
                <div id="carouselExampleControls" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    
  </ol>
  <div class="carousel-inner"  >
    <div class="carousel-item active" style={{
        height:"34rem",
        backgroundSize:"cover",
        backgroundColor:"#777",
        backgroundPosition:"center",
        color:"black"
       
        
        
       
        
    }}>
        <div class="card bg-dark text-white" style={{maxwidth: "700px"}}>
  <img src={pgg} class="card-img" alt="Stony Beach" width="627" height="550"/>
  <div class="card-img-overlay" style= {{
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "var(--mdb-card-img-overlay-padding",
    borderradius: "var(--mdb-card-inner-border-radius)"
}} >
       <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h5 class="card-title">Software Development  </h5>
    <p class="card-text">
    we have aspiring team of software developers who best and enthusiast for any language.<br/>
        "Your Order will Be Serverd with your Best expectations"
     
    </p>
   
  </div>
</div>
      
    </div>
    <div class="carousel-item" style={{
         height:"34rem",
         backgroundSize:"cover",
         backgroundColor:"#777",
         backgroundPosition:"center",
         color:"black"
        
        
    }}>
        <div class="card bg-dark text-white" style={{maxwidth: "600px"}}>
  <img src={kgg} class="card-img" alt="Stony Beach" width="627" height="550"/>
  <div class="card-img-overlay" style= {{
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "var(--mdb-card-img-overlay-padding",
    borderradius: "var(--mdb-card-inner-border-radius)"
}} >
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h5 class="card-title">Best for Any kind of Web development </h5>
    <p class="card-text">
        we have aspiring team of web developers who best and enthusiast for any language.<br/>
        "Your Order will Be Serverd with your Best expectations"
     
    </p>
    <p class="card-text"></p>
  </div>
</div>
     
      
    </div>
    <div class="carousel-item" style={{
         height:"34rem",
         backgroundSize:"cover",
         backgroundColor:"#777",
         backgroundPosition:"center",
         color:"black"
        
        
    }}>
        <div class="card bg-dark text-white" style={{maxwidth: "600px"}}>
  <img src={bit} class="card-img" alt="Stony Beach" width="627" height="550"/>
  <div class="card-img-overlay" style= {{
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "var(--mdb-card-img-overlay-padding",
    borderradius: "var(--mdb-card-inner-border-radius)"
}} >
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h5 class="card-title">Bit-Coin mining </h5>
    <p class="card-text">
        we have aspiring team of Bitcoin Analysist which will help you to grow more "
     
    </p>
    <p class="card-text"></p>
  </div>
</div>
     
      
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{color:"black"}}></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                
            
            
            

                
            </div>

            </section>
           <section id="services">
           <div className="container-fluid" style={{backgroundColor:"#e8eefa"}}>
                <br/>
                <br/>
                <h1>Our Services</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                <div class="col-sm-4" align="center">
                <div class="icons"><h1><i class="bi bi-currency-bitcoin" style={{fontSize:"80px",color: "darkblue",height:"1rem"}}></i></h1> </div>
                <h2>Bit-coin Mining</h2>
               <p>We work on Bit-coin mining <br/>And Analyze the Bit-coin Market</p><br/><br/>
                    </div>
                    <br/>
                    <div class="col-sm-4" align="center">
                <div class="icons"><i class="bi bi-bar-chart-line-fill" style={{fontSize: "80px",color: "darkblue",height:"1rem"}}></i> </div>
                <h2>Data Analysis</h2>
               <p>We provide Analytic Services <br/>And Trade Market Analysis </p><br/><br/>
                    </div>
                    <div class="col-sm-4" align="center">
                <div class="icons"><i class="bi bi-code-slash" style={{fontSize: "80px",color: "darkblue"}}></i> </div>
                <h2>Web Development </h2>
               <p>We provide Website development services <br/>And Maintain the site</p><br/><br/>
                    </div>
                    <div class="col-sm-4" align="center">
                <div class="icons" ><i class="bi bi-bag" style={{fontSize: "80px",color: "darkblue"}}></i> </div>
                <h2>E-Commerce Site</h2>
               <p>We Create e Commerce webiste at any level of distributiuon <br/>Like B2B or B2C or etc</p><br/><br/>
                    </div>
                    <div class="col-sm-4" align="center">
                <div class="icons"><i class="bi bi-server" style={{fontSize: "80px",color: "darkblue"}}></i> </div>
                <h2>Database and Private Server</h2>
               <p>We provide database for your storage  <br/>And private server for your internal work etc</p><br/><br/>
                    </div>
                    <div class="col-sm-4" align="center">
                <div class="icons"><i class="bi bi-ethernet" style={{fontSize: "80px",color: "darkblue"}}></i> </div>
                <h2>Network</h2>
               <p>We provide network services  <br/>And manage these services</p><br/><br/>
                    </div>

                </div>
                
                

            </div>
           </section>
           <br/>
           
           <section id="testimonal">
            <div className="Container-fluid justify-content-center">
            <br/>
           <br/>
                <h1>Testimonial's</h1>
                
    <div class="card-deck">
        <div class="card justify-content-center">
        <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"  style={{width:"200px",marginLeft:"200px"}} />
            <div class="card-block">
                <h4 class="card-title">Alisha Tyson</h4>
                <p class="card-text">
                    "Best for website development. I started a business and i needed a website after so much research others were to costly.<br/>
                    so i contacted this company and i got best quotation for the site.. Thank you butterfly tech "<br/><br/><i class="fas fa-star fa-sm"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </p>
  
                
            </div>
        </div>
  
        <div class="card">
        <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"  style={{width:"200px",marginLeft:"200px"}} />
            <div class="card-block">
                <h4 class="card-title">Marie Smith</h4>
                <p class="card-text">
                  "The Best place for good trading Analysis and got good profit out-of-it!!!!!"
                  <br/><br/><i class="fas fa-star fa-sm"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </p>
  
               
            </div>
        </div>
  
        <div class="card">
        <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"  style={{width:"200px",marginLeft:"200px"}} />
            <div class="card-block">
                <h4 class="card-title">John Paul</h4>
                <p class="card-text">
                    "Best Services Ever......!!!!!"
                    <br/><br/><i class="fas fa-star fa-sm"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </p>
                  
                
            </div>
        </div>
    </div>
           
</div>

           


           </section>
           <br />
           <section id="pricing">
            <br/>
            <br/>
            <div className="Container">
                <h1>Pricing</h1>
                <br/>
                
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Data Analysis and Bitcoin trade</h4>

                        </div>
                        <div className="card-body">
                            
                            <h1 className="card-title pricing-card-title">Rs 4500<small className="text-muted">/mo</small></h1>
                            <h3>It Includes</h3>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Daily Analysis report</li>
                                <li>Bit coin trade investment</li>
                                <li> database and private serber</li>
                                <li>Free Services</li>
                                <li>24*7 Hotline</li>

                            </ul>
                            <button className="btn btn-outline-primary" onClick={handleShow}>Conatct Us</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">For Website and Database</h4>

                        </div>
                        <div className="card-body">
                            
                            <h1 className="card-title pricing-card-title">Rs 699<small className="text-muted">/mo</small></h1>
                            <h3>It Includes</h3>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Website Managment</li>
                                <li>Database Management</li>
                                <li>Free Services</li>
                                <li>24*7 Hotline</li>

                            </ul>
                            <button className="btn btn-outline-primary"  onClick={handleShow}>Conatct Us</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">For Website, database & private Server</h4>

                        </div>
                        <div className="card-body">
                            
                            <h1 className="card-title pricing-card-title">Rs 1200<small className="text-muted">/mo</small></h1>
                            <h3>It Includes</h3>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Website Managment</li>
                                <li>Database Management</li>
                                <li>Private server</li>
                                <li>Free Services</li>
                                <li>24*7 Hotline</li>

                            </ul>
                            <button className="btn btn-outline-primary" onClick={handleShow}>Conatct Us</button>
                        </div>
                    </div>
                </div>
                <>
     

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Conatct Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Enter your Name:<br/><input type="text" className="form-control" />
        Phone No: <br/><input type="number" className="form-control" /><br/>
        Email: <br/><input type="email" className="form-control" /><br/>
        service plan: <br/><input type="text" className="form-control" />

       
       
        
        </Modal.Body>
        
        
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>

            </div>
           </section>
           <section id="conatct">
            <div className="container-fluid " style={{backgroundImage:{lo}}}>
                <br/>
                <h1>Contact Us</h1>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                    <h1>Our Address</h1>
                <br/>
                <h3>123 ACB building, Newyork , USA</h3>
                    </div>
                    <div className="col-sm">
                    <h1>Our Contact Details</h1>
                <br/>
                <h4> For Careers: Hr@butterflytech.io</h4>
                <h4> For More Information: info@butterflytech.io</h4>
                    </div>
                </div>
                <button className="btn btn-outline-primary" onClick={handleShow}>Sign Up Today</button>

            </div>
           </section>
            
        </div>
    )
}