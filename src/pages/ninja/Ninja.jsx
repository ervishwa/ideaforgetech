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

export function Ninja() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/NINJAUAVSmall(1).mp4" />
      <DroneInfo range="2 kms" time="20-25 min" zoom="10x" />
      <Overview
        url="https://ideaforgetech.com/uploads/Video/Temp-Ninja.mp4"
        desc="Ninja UAV is our lightest UAV, built for security and surveillance applications during day and night with swappable payloads. NINJA UAV provides versatility with its swappable payloads to conduct surveillance operations."
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
              h1="5X HD"
              h2="400 m"
              url="https://ideaforgetech.com/uploads/Video/Q6Day_4sec.mp4"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad2
              h1="320x240"
              h2="200 m"
              p1="Thermal Camera with 4X Digital Zoom"
              p2="Target Detection Range"
              url="https://ideaforgetech.com/uploads/Image/TH1A_320_Tau.4.png"
            />
          </div>
        </div>
      </div>
      <Capture
        name="NINJA"
        url="https://ideaforgetech.com/uploads/Video/Captured%20on%20Q4i-Traffic%20monitoring%20s.mp4"
      />
      <ThreeSixty />
      {/* <Usecase/> */}
      <ControlStation />
      <DroneFeature1
        url="https://ideaforgetech.com/uploads/Video/RightScreen-Take-offAreaCheck-SWITCH-com.mp4"
        heading="Take-off Area Check feature"
        desc="BlueFire Touch helps calculate actual operation area,
    considering terrain at the take-off location."
      />
      <Dronefeature2
        url="https://ideaforgetech.com/uploads/Video/LeftScreen-MapIntegration-SWITCH-com.mp4"
        heading="Custom Maps Integration"
        desc="Integrate custom maps to plan specific missions. BlueFire Touch
    supports a wide range of formats to help the operations."
      />
      <DroneFeature1
        url="https://ideaforgetech.com/uploads/Video/RightScreen-MissionReplay-SWITCH-com.mp4"
        heading="Mission Replay Feature"
        desc="Historical flight path and map view, combined with video output from the drone."
      />
      <Dronefeature2
        url="https://ideaforgetech.com/uploads/Video/LeftScreen-Annotation-SWITCH-com.mp4"
        heading="Real-time annotation"
        desc="Mark points of interest and share coordinates."
      />
      <Brochure
        url="https://ideaforgetech.com/uploads/Image/NinjaA4.png"
        desc="Conduct your surveillance operations with NINJA UAV."
      />
      <Footer />
    </>
  );
}
