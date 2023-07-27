import "./info.css";
export function Info(props) {
  return (
    <div className="container text-center bg-white z-3 info p-1"  data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12 col-sm-12 target">
          <p>Over</p>
          <h2>300,000</h2>
          <p>Customer Missions</p>
        </div>
    
        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
          <p>Every</p>
          <h2>5 Mins</h2>
          <p>an ideaForge Flight Takes-off</p>
        </div>
      </div>
    </div>
  )
}

