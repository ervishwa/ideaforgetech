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

export function Q6() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/Q6UAVforMapping-Small(1).mp4" />
      <DroneInfo range="10 Kms" time="60 Min" zoom="10x" />
      <Overview
        url="https://ideaforgetech.com/uploads/Video/Temp-Q6.mp4"
        desc="Q6 is our small category UAV and can be used for surveying and mapping. Its quadcopter design and high area coverage enable it to complete large-scale mapping projects quicker than our other UAVs."
      />
      

      <div className="container payloadContent">
        <div className="row py-2">
          <div className="col-md-8 col-12 mx-auto">
            <h1 className="fs-1 fw-bold">Payloads</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad1
              h1=">20 MP"
              h2="800 m"
              url="https://ideaforgetech.com/uploads/Video/Q6Mapping_4sec_1.mp4"
            />
          </div>
        </div>
       
      </div>
     
      <ThreeSixty />
      {/* <Usecase/> */}
      
      
      <Brochure
        url="https://ideaforgetech.com/uploads/Image/Q6Mapping.png"
        desc="Conduct your projects with ideaForge's state-of-the-art mapping drone, Q6 UAV."
      />
      <Footer />
    </>
  );
}
