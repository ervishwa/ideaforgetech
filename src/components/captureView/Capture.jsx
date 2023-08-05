import "./capture.css";
export function Capture(props) {
    const{name,url} = props;
  return (
    <div className="capture container">
        <div className="row">
            <div className="col-md-6 mx-auto text-center my-5">
                <h1 className="fw-bold">Captured on {name}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <video src={url} autoplay="autoplay" loop muted ></video>
            </div>
        </div>
    </div>
  )
}

