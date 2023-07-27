import React from "react";
import { NavbarT } from "../../components/navbar/NavbarT";
import { Footer } from "../../components/footer/Footer";
import "./about.css";
import { Button } from "../../components/button/Button";
import { Info } from "../../components/info/Info";
export function About() {
  return (
    <div>
      <NavbarT />
      <div className="moto mt-5">
        <div className="moto_content">
          <div className="_content_text">
            <h1>We love pushing the limits of technology</h1>
          </div>
          <div className="_content_button">
            <Button text={"Contact Us"}></Button>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", top: "19px" }}>
        <Info />
      </div>
      <div className="container mt-5">
        <div className="row ms-auto">
          <div className="col-md-6 basic_info">
            <h1 className="fs-1">Overview</h1>
            <p className="fs-5">
              ideaForge is the pioneer and the pre-eminent market leader in the
              Indian unmanned aircraft systems (“UAS”) market (Source: 1Lattice
              Report). We had the largest operational deployment of indigenous
              UAVs across India, with an ideaForge manufactured drone taking off
              every five minutes for surveillance and mapping on an average. Our
              customers have completed over 300,000 flights using our UAVs. We
              ranked 7th globally in the dual-use category (civil and defense)
              drone manufacturers as per the report published by Drone Industry
              Insights in December 2022 (Source: 1Lattice Report).
            </p>
          </div>
        </div>
      </div>
      <div className="container office mt-5">
        <div className="row text-center">
          <div className="col-md-5 col-12 col-sm-6 text-start m-auto office_text">
            <p className="office_textp fs-5">
              Our UAVs are equipped with industry leading specifications and
              capabilities, comparable to those of other established global
              players in the UAV industry (Source: 1Lattice Report). Our
              capabilities like our indigenous design and technological ability
              to invent, design and deliver customer centric offerings allow us
              to design, develop, engineer and manufacture our UAVs in-house
              with a control on performance, reliability and autonomy.
            </p>
          </div>
          <div className="col-md-7 col-12 col-sm-6">
            <img
              src="https://ideaforgetech.com/_nuxt/img/About%20Us%20Page.6a3c7a9.jpg"
              alt="none"
            />
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-12">
            <p className="fs-5 text-start basic_info1">
              Our UAV platforms are architected with a ‘mission first’ approach
              i.e., to deliver UAVs which meet the requirements of our customers
              and which, we believe, can reliably sustain a large number of
              flights and are capable of being autonomously operated without
              special skills or training. In addition to being among the first
              few players in India to enter the UAV market, we also have the
              distinction of being the first company to indigenously develop and
              manufacture vertical take-off and landing (“VTOL”) UAVs in India
              in 2009. We have industry’s leading product portfolios targeted at
              civil and defence applications (dual use) (Source: 1Lattice
              Report)
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid founder mt-3">
        <div className="row text-end">
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-12">
                <img
                  src="https://ideaforgetech.com/_nuxt/img/ankit.c51f726.png"
                  alt=""
                />
                <img
                  src="https://ideaforgetech.com/_nuxt/img/vipul.3a6a859.png"
                  alt=""
                />
              </div>
              <div className="col-md-12">
                <img
                  src="https://ideaforgetech.com/_nuxt/img/Ashish.8631f96.png"
                  alt=""
                />
                <img
                  src="https://ideaforgetech.com/_nuxt/img/Rahul.2fba219.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12"></div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
