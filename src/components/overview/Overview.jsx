import "./overview.css";
export function Overview(props) {
    const{url} = props;
  return (
    <div className="container">
      <div className="row py-2 no-gutters">
        <div className="col-md-7 mx-auto text-left col-12">
          <h1 className="fs-1">Overview</h1>
          <p className="fs-4">
            SWITCH UAV is a fixed wing and VTOL hybrid UAV. SWITCH UAV features
            advanced flight time, higher safety and simple operation with
            additional fail-safe redundancies. It is used for long range, high
            endurance, high altitude last mile surveillance and security
            operations.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto my-5">
            <video  className="droneVideo" src={url} muted preload="preload" autoPlay loop></video>
        </div>
      </div>
    </div>
  );
}
