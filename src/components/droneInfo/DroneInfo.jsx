import "./droneinfo.css";
export function DroneInfo() {
  return (
    <div className="container">
      <div className="row m-auto text-center droneinfo">
        <div className="col-md-4 border_right">
          <p>Up to</p>
          <h1>15 Kms</h1>
          <p>Operation range</p>
        </div>
        <div className="col-md-4 border_right">
          <p>over</p>
          <h1>120 mins</h1>
          <p>Flight Time at Msl(Mean Sea Lebel)</p>
        </div>
        <div className="col-md-4">
          <p>Zoom</p>
          <h1>25x</h1>
          <p>Optical Zoom</p>
        </div>
      </div>
    </div>
  );
}
