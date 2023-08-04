import "./dronefeature1.css";
export function DroneFeature1(props) {

  const{url,heading,desc} = props;

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6 dronefeaturebox1">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <p className="fw-bolder" style={{fontSize :"40px"}}>{heading}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 mx-auto" >
              <p className="fs-5 fw-light" >
               {desc}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 dronefeature1video">
          <video
            src={url}
            autoplay="autoplay"
            loop="loop"
            muted="muted"
          ></video>
        </div>
      </div>
    </div>
  );
}
