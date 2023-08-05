import "./applications.css";
import { Link } from "react-router-dom";
export function Applications() {
  return (
    <section className="application text-center">
    <div className="container-fluid py-5">
    <p className="fs-1" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">Applications</p>
    <div className="row  justify-content-evenly mt-5">
      <div className="col-md-9">
        <div className="row applications">
          <div className="col-md-6">
            <div className="card ap1" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
              <div className="card-body" style={{color: "white"}}>
                <h5 className="card-title" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">Mapping and Surveying</h5>
                <button type="button" className="btn rounded-pill m-3" data-aos="fade-up" data-aos-once="false" data-aos-duration="600"><Link
              to="/mapping"
              style={{ textDecoration: "none", color: "white" }}
            >
              Learn More
            </Link></button>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card ap2" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
              <div className="card-body" style={{color: "white"}}>
                <h5 className="card-title" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">Security and Surveillance</h5>
                <button type="button" className="btn rounded-pill m-3" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </section>
  )
}

