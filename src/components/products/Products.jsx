import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
export function Products() {
  return (
    <section className="products py-5">
      <h1
        className="text-center m-5"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="600"
      >
        Our Products
      </h1>
      <div className="cotainer-fluid">
        <div className="row">
          <div className="col-md-12 h-50 p1">
            <div className="row">
              <div
                className="col-md-8"
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-duration="600"
              >
                <img
                  src="https://ideaforgetech.com/_nuxt/img/SwitchA4@2x.2193fed.png"
                  alt=""
                />
              </div>
              <div className="col-md-4 m-auto text-center">
                <div className="text-center"></div>
                <h2
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="600"
                >
                  SWITCH UAV
                </h2>
                <button
                  type="button"
                  className="btn rounded-pill m-3"
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="600"
                >
                  <Link
                    to="/switch"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center pt-3 clash">
        <div
          className="col-md-6  netro py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/netrav4.a1ef09b.png"
            alt=""
          />
          <h1 data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
            NETRA V4 UAV
          </h1>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/netra"
              style={{ textDecoration: "none", color: "black" }}
            >
              Learn More
            </Link>
          </button>
        </div>
        <div
          className="col-md-6 ninja py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/ninja.c32652d.png"
            alt=""
          />
          <h1 data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
            NINJA UAV
          </h1>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/ninja"
              style={{ textDecoration: "none", color: "black" }}
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="row text-center pt-3 clash">
        <div
          className="col-md-6 q4i py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/Q4i.cf14941.png"
            alt=""
          />
          <h1 data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
            Q4i UAV
          </h1>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/q4i"
              style={{ textDecoration: "none", color: "black" }}
            >
              Learn More
            </Link>
          </button>
        </div>
        <div
          className="col-md-6 ryno py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/ryno.bb48b28.png"
            alt=""
          />
          <h1 data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
            RYNO UAV
          </h1>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/ryno"
              style={{ textDecoration: "none", color: "black" }}
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="row text-center justify-content-center py-3">
        <div
          className="col-md-6 Q6 py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/Q6UAV.c29b489.png"
            alt=""
          />
          <h1 data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
          Q6 UAV
          </h1>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/q6"
              style={{ textDecoration: "none", color: "black" }}
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="row text-center justify-content-center py-3">
        <div
          className="col-md-5 py-3"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="1000"
        >
          <p>
            Our UAVs have been designed to be able to handle all terrains and
            temperature conditions. Our UAVs have been used in extreme
            conditions, from very low temperature at high altitudes such as in
            Ladakh to very high temperatures such as in Thar desert, meaning
            that our UAVs have experienced some of the harshest environments in
            the world.
          </p>
          <button
            type="button"
            className="btn rounded-pill m-3"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              Know More
            </Link>
          </button>
        </div>
      </div>
      <div className="row text-center  py-3">
        <div
          className="col-md-6 testing"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="600"
        >
          <img
            src="https://ideaforgetech.com/_nuxt/img/Humid.2fde3f9.png"
            alt=""
          />
        </div>
        <div className="col-md-6  text-start testText">
          <div
            className="content text-start p-3 ms-3"
            style={{ width: "55%" }}
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="600"
          >
            <h3 className="h-100">
              Our drones have an ergonomic design and have been tested in
              extreme weather conditions to high altitudes across India from
              deserts to glaciers.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
