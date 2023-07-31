import React from "react";
import "./switchUav.css";
import { Header } from "../../components/header/Header";
import { NavbarT } from "../../components/navbar/NavbarT";
import { DroneVideo } from "../../components/droneVideo/DroneVideo";
import { DroneInfo } from "../../components/droneInfo/DroneInfo";
import { Overview } from "../../components/overview/Overview";
import { Features } from "../../components/features/Features";
export function SwitchUav() {
  return (
    <>
      <NavbarT />
      <DroneVideo url="https://ideaforgetech.com/uploads/Video/Tempcover-SWITCHUAV.mp4" />
      <DroneInfo/>
      <Overview url="https://ideaforgetech.com/uploads/Video/Temp-Switch.mp4"/>
      <Features/>
    </>
  );
}
