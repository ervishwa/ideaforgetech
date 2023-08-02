import "./capture.css";
export function Capture() {
  return (
    <div className="capture container">
        <div className="row">
            <div className="col-md-6 mx-auto text-center my-5">
                <h1 className="fw-bold">Captured on SWITCH</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <video src="https://ideaforgetech.com/uploads/Video/Costal%20area%20Serveillance%20s.mp4" autoplay="autoplay" loop muted ></video>
            </div>
        </div>
    </div>
  )
}

