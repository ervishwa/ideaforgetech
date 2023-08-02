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
export function SwitchUav() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/Tempcover-SWITCHUAV.mp4" />
      <DroneInfo />
      <Overview url="https://ideaforgetech.com/uploads/Video/Temp-Switch.mp4" />
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
            <PayLoad1/>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 mx-auto ">
            <PayLoad2/>
          </div>
        </div>
      </div>
      <Capture/>
      <ThreeSixty/>
    </>
  );
}
