import "./payLoad1.css";
export function PayLoad1() {
  return (
    <div className="row payload1">
      <div className="col-md-4 col-sm-6 payloadflex">
        <div className="payload1box">
        <div className="row ">
          <div className="col-md-12">
            <p className=" payload1heading">25x HD</p>
            <p className="fs-5">Optical Zoom</p>
          </div>
        </div>
        </div>
        <div className="payload1box">
        <div className="row">
          <div className="col-md-12">
            <p className="payload1heading">1000 m</p>
            <p className="fs-5">Target Detection Range</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="col-md-8 col-sm-6">
        <video
          src="https://ideaforgetech.com/uploads/Video/Switch_4sec%20(2).mp4"
          autoplay="autoplay"
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
