import { Card } from "../../components/card/Card";
import { NavbarT } from "../../components/navbar/NavbarT";
import "./mappingApplication.css";
export function MappingApplication() {
  return (
    <>
    <NavbarT/>
    <div className="container-fluid mapping">
        <div className="row mappingbox1">
            <div className="col-6 mx-auto" style={{color:"white"}}>
                <p className="fs-1 fw-bold">Mapping & Surveying</p>
                <p>Our UAVs are forged to transform your business processes with accurate insights for in-depth project planning at reduced costs, time and manpower and enhanced personnel safety</p>
            </div>
        </div>
    </div>
    <div className="row ">
      <div className="col-md-8 mx-auto">
        <div className="row">
        <div className="col-md-4 mx-auto">
        <Card 
        heading="Land Survey" 
        desc="ideaForge’s UAV platforms are architected to deliver UAVs which meet the requirements of its customers."
        url="https://ideaforgetech.com/uploads/Image/Land%20Survey-Cover.jpg"
        />
        </div>
        <div className="col-md-4 mx-auto">
        <Card 
        heading="Land Survey" 
        desc="ideaForge’s UAV platforms are architected to deliver UAVs which meet the requirements of its customers."
        url="https://ideaforgetech.com/uploads/Image/Land%20Survey-Cover.jpg"
        />
        </div>
        <div className="col-md-4 mx-auto">
        <Card 
        heading="Land Survey" 
        desc="ideaForge’s UAV platforms are architected to deliver UAVs which meet the requirements of its customers."
        url="https://ideaforgetech.com/uploads/Image/Land%20Survey-Cover.jpg"
        />
        </div>
        </div>
      </div>
     
       
      

    </div>
    </>
  )
}

