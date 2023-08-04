import "./dronefeature2.css";
export function Dronefeature2(props) {
  const { url, heading, desc } = props;
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6 dronefeature2video">
          <video
            src={url}
            autoplay="autoplay"
            loop="loop"
            muted="muted"
          ></video>
        </div>
        <div className="col-md-6 dronefeaturebox2">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p className="fw-bolder" style={{ fontSize: "40px" }}>
                {heading}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p className="fs-5 fw-light">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
