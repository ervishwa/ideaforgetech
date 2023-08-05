import React from "react";
import "./switchUav.css";
import { Header } from "../../components/header/Header";
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
import {Footer} from "../../components/footer/Footer";
export function SwitchUav() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/Tempcover-SWITCHUAV.mp4" />
      <DroneInfo range="15 Kms" time="120 mins" zoom="25x"/>
      <Overview url="https://ideaforgetech.com/uploads/Video/Temp-Switch.mp4" desc=" SWITCH UAV is a fixed wing and VTOL hybrid UAV. SWITCH UAV features
            advanced flight time, higher safety and simple operation with
            additional fail-safe redundancies. It is used for long range, high
            endurance, high altitude last mile surveillance and security
            operations." />
      <Features />
      <div className="container testing py-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-start">
            <h1 className="py-2 fw-bold">Testing</h1>
            <p className="fs-5">
              The SWITCH UAV has been tested for the internationally recognized
              military quality standard of JSS 55555* and MIL Standard 461E for
              EMI EMC. It is built to cater to the demanding surveillance
              operations in all terrains. This lightweight VTOL and fixed wing
              hybrid UAV have the large time-on-target compared to any other UAV
              in its class.
            </p>
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              *Please contact us for information on specific certificates
              available on SWITCH UAV.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8  mx-auto py-5">
            <div className="row">
              <div className="col-md-4 ">
                <TestingList text="VIBRATION TESTING" />
                <TestingList text="FLIGHT TESTING" />
                <TestingList text="CLIMATE CHAMBER" />
                <TestingList text="DROP TESTING" />
                <TestingList text="EXTREME ENVIRONMENT" />
                <TestingList text="EMI/EMC" />
                <TestingList text="IP53" />
                <TestingList text="SALT FOG" />
              </div>
              <div className="col-md-8 test">
                <img
                  src="https://ideaforgetech.com/uploads/Image/_DSC3254@2x.png"
                  alt="Error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container payloadContent">
        <div className="row py-2">
          <div className="col-md-8 col-12 mx-auto">
            <h1 className="fs-1 fw-bold">Payloads</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad1 h1="25x HD" h2="1000 m" url="https://ideaforgetech.com/uploads/Video/Switch_4sec%20(2).mp4"/>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad2 h1="640x480" h2="500 m" p1="Thermal Camera with 4X Digital Zoom" p2="Target Detection Range" url="https://ideaforgetech.com/uploads/Image/Switch%20Thermal.14.png"/>
          </div>
        </div>
      </div>
      <Capture name="SWITCH" url="https://ideaforgetech.com/uploads/Video/Costal%20area%20Serveillance%20s.mp4"/>
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
        url="https://ideaforgetech.com/uploads/Image/SwitchA4.png"
        desc="Conduct your surveillance operations with SWITCH UAV."
      />
      <Footer/>

    </>
  );
}
