import React from "react";
import { NavbarT } from "../../components/navbar/NavbarT";
import { DroneVideo } from "../../components/droneVideo/DroneVideo";
import { DroneInfo } from "../../components/droneInfo/DroneInfo";
import { Overview } from "../../components/overview/Overview";
import { Features } from "../../components/features/Features";
import { TestingList } from "../../components/testinglists/TestingList";
import { PayLoad1 } from "../../components/payload/PayLoad1";
import { PayLoad2 } from "../../components/payload/PayLoad2";
import { Capture } from "../../components/captureView/Capture";
import { ThreeSixty } from "../../components/threesixtyview/ThreeSixty";
import { Usecase } from "../../components/usecase/Usecase";
import { ControlStation } from "../../components/controlStation/ControlStation";
import { DroneFeature1 } from "../../components/dronefeature/DroneFeature1";
import { Dronefeature2 } from "../../components/dronefeature/Dronefeature2";
import { Brochure } from "../../components/brochure/Brochure";
import { Footer } from "../../components/footer/Footer";

export function Ryno() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/RYNOUAV-Teaser.mp4" />
      <DroneInfo range="4 kms" time="40 mins" zoom="10x" />
      <Overview
        url="https://ideaforgetech.com/uploads/Video/Temp-RYNO.mp4"
        desc="RYNO UAV is our micro category survey-grade UAV. It is equipped with an advanced mapping payload and a state-of-the-art post processed kinematic (“PPK”) module. RYNO UAV can be used for mapping, land survey, mining area planning, construction and real estate."
      />
      <Features />

      <div className="container payloadContent">
        <div className="row py-2">
          <div className="col-md-8 col-12 mx-auto">
            <h1 className="fs-1 fw-bold">Payloads</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad1
              h1="10X HD"
              h2="800 m"
              url="https://ideaforgetech.com/uploads/Video/Ryno_4sec.mp4"
            />
          </div>
        </div>
       
      </div>
      <ThreeSixty />
      {/* <Usecase/> */}
      
      
      <Brochure
        url="https://ideaforgetech.com/uploads/Image/SoBOKoXmi7lMYEQRFIl5vL2gRvS73sxsThr1EUsK.png"
        desc="Conduct your mapping operations with RYNO UAV."
      />
      <Footer />
    </>
  );
}
