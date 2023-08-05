import { Link } from "react-router-dom"
export function CompanyInfo() {
  return (
    <section className="companyInfo my-5">
    <div className="container">
      <div className="row justify-content-center flex-column align-content-center gap-3">
        <div className="col-md-4 text-center" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
          <h1>ONE OF THE GLOBAL LEADERS IN UAV TECHNOLOGY</h1>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up" data-aos-once="false" data-aos-duration="800">
          <p>We are the pioneer and the pre-eminent market leader in the Indian Unmanned Aircraft Systems ("UAS") market
            with a market share of approximately 50% in fiscal 2022 (Source: 1Lattice Report). Our UAVs are equipped
            with industry leading specifications and capabilities, comparable to those of other established global
            players in the UAV industry.</p>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
          <button type="button" className="btn rounded-pill"><Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              Know More
            </Link></button>
        </div>
      </div>
    </div>
  </section>
  )
}

