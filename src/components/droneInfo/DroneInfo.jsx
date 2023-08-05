import "./droneinfo.css";
export function DroneInfo(props) {
  const{range,time,zoom}  = props;

  return (
    <div className="container">
      <div className="row m-auto text-center droneinfo">
        <div className="col-md-4 border_right">
          <p>Up to</p>
          <h1>{range}</h1>
          <p>Operation range</p>
        </div>
        <div className="col-md-4 border_right">
          <p>over</p>
          <h1>{time}</h1>
          <p>Flight Time at Msl(Mean Sea Lebel)</p>
        </div>
        <div className="col-md-4">
          <p>Zoom</p>
          <h1>{zoom}</h1>
          <p>Optical Zoom</p>
        </div>
      </div>
    </div>
  );
}
