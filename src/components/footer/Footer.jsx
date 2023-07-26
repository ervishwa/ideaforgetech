import "./footer.css";
export function Footer() {
  return (
    <section className="footer bg-black text-light ">
    <div className="container-fluid py-5 border-1 border-light" >
     <div className="container-fluid mb-3">
       <div className="row">
         <div className="col-md-2">
           <div className="footerheading">
             <p className="fs-5 mb-4 fw-bolder">ideaForge</p>
           </div>
           <div className="footercontent" >
             <p className="fs-6 fw-lighter">About Us</p>
             <p className="fs-6 fw-lighter">Careers</p>
             <p className="fs-6 fw-lighter">Contact Us</p>
             <p className="fs-6 fw-lighter">Partner with Us</p>
             <p className="fs-6 fw-lighter">News & Media</p>
           </div>
         </div>
         <div className="col-md-2">
           <div className="footerheading">
             <p className="fs-5 mb-4 fw-bolder">Mapping</p>
           </div>
           <div className="footercontent">
             <p className="fs-6 fw-lighter">RYNO UAV</p>
             <p className="fs-6 fw-lighter">Q6 UAV</p>
             <p className="fs-6 fw-lighter">Mapping Application</p>
            
           </div>
         </div>
         <div className="col-md-2">
           <div className="footerheading">
             <p className="fs-5 mb-4 fw-bolder">Security & Surveillance</p>
           </div>
           <div className="footercontent">
             <p className="fs-6 fw-lighter">SWITCH UAV</p>
             <p className="fs-6 fw-lighter">NETRO V4 UAV</p>
             <p className="fs-6 fw-lighter">Q4i UAV</p>
             <p className="fs-6 fw-lighter">NINJA UAV</p>
             <p className="fs-6 fw-lighter">Security & Surveillance Applications</p>
           </div>
         </div>
         <div className="col-md-2">
           <div className="footerheading">
             <p className="fs-5 mb-4 fw-bolder">Software</p>
           </div>
           <div className="footercontent">
             <p className="fs-6 fw-lighter mb-5">BlueFire Live!™</p>
           </div>
           <div className="footerheading">
             <p className="fs-5 mb-4 fw-bolder">Resources</p>
           </div>
           <div className="footercontent">
             <p className="fs-6 fw-lighter">Blog</p>
             <p className="fs-6 fw-lighter">Smart Waste Managment</p>
           </div>
         </div>
         <div className="col-md-4">
           <div className="footerheading justify-content-between my-2" style={{display: "flex"}}>
             <i className="fa-brands fa-linkedin-in"></i>
             <i className="fa-brands fa-twitter"></i>
             <i className="fa-brands fa-facebook-f"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-youtube"></i>
           </div>
           <div className="footercontent mt-5">
             <p className="fs-5 mb-4 fw-bolder">Subscribe to our Newsletter</p>
             <div className="email bg-light" style={{display: "flex", justifyContent: "center",alignItems: "center" , gap: "8px" , borderRadius: "30px" ,color: "white"}}>
               <input type="email" className="form-control email" placeholder="Your Email Address"/>
               <i className="fa-sharp fa-solid fa-arrow-right p-2 mx-1" style={{color: "black" ,cursor: "pointer"}}></i>
             </div>
           </div>
         </div>
       </div>
       
     </div>
     <hr/>
     <div className="row text-center">
       <div className="col-md-6">
         <p className="fs-6 fw-lighter">Copyright © 2022 ideaForge Technology Ltd. All rights reserved.</p>
       </div>
       <div className="col-md-2">
         <p className="fs-6 fw-lighter">Privacy Policy | Site Map
         </p>
       </div>
     </div>
     </div>
   </section>
  )
}

