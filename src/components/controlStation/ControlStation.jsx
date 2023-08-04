import "./controlStation.css";
export function ControlStation() {
  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-7 mx-auto text-center">
                <p className="fw-bolder" style={{fontSize:"70px"}}>BlueFire Touch Ground Control Station</p>
            </div>
        </div>
        
    </div>
    <div className="container-fluid stationpic mt-3">
        <div className="row">
            <div className="col-md-12">
            <img src="https://ideaforgetech.com/uploads/Image/GCS.png" alt="error" />
            </div>
        </div>
            
    </div>
    </>
  )
}

