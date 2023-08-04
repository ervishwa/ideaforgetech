import "./threeSixty.css";
export function ThreeSixty() {
  return (
    <div className="container-fluid threesixty mt-5">
      <div className="row text-center">
        <div className="col-md-6 p-5 my-auto">
          <p className="fs-2 fw-boldest">Explore the Product </p>
        </div>
        <div className="col-md-6 p-5 text-start">
          <img src="https://ideaforgetech.com/_nuxt/img/360%20Degree@3x.2a9305c.png" alt="" />
          <div className="row text-center mt-2">
            <div className="col-md-6">
            <button className="threesixtybutton">View in 360°</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

