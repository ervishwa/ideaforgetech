import "./brochure.css";
export function Brochure(props) {
  const { url, desc } = props;
  return (
    <div className="container-fluid mt-5 brochure">
      <div className="row">
        <div className="col-md-6 brochurebox1">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <p className="fw-bold" style={{fontSize:"50px"}}>Download</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <p className="fs-5">{desc}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <button className="rounded-pill">Download Brochure</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 brochurebox2 ">
          <img src={url} alt="" />
        </div>
      </div>
    </div>
  );
}
