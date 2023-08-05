import "./payLoad1.css";
export function PayLoad1(props) {
  const{h1,h2,url}  = props;
  return (
    <div className="row payload1">
      <div className="col-md-4 col-sm-6 payloadflex">
        <div className="payload1box">
        <div className="row ">
          <div className="col-md-12">
            <p className=" payload1heading">{h1}</p>
            <p className="fs-5">Optical Zoom</p>
          </div>
        </div>
        </div>
        <div className="payload1box">
        <div className="row">
          <div className="col-md-12">
            <p className="payload1heading">{h2}</p>
            <p className="fs-5">Target Detection Range</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="col-md-8 col-sm-6">
        <video
          src={url}
          autoplay="autoplay"
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
