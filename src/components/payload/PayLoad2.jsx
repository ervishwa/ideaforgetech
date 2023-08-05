import "./payLoad2.css";
export function PayLoad2(props) {
  const{h1,h2,p1,p2,url} = props;
  return (
    <div className="row playload2">
        <div className="col-md-4  col-sm-6 col-12 payloadflex">
        <div className="payload1box">
        <div className="row ">
          <div className="col-md-12">
            <p className=" payload1heading">{h1}</p>
            <p className="fs-5">{p1}</p>
          </div>
        </div>
        </div>
        <div className="payload1box">
        <div className="row">
          <div className="col-md-12">
            <p className="payload1heading">{h2}</p>
            <p className="fs-5">{p2}</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="col-md-8 col-sm-6 col-12">
        <div>
            <img src={url} alt="" />
        </div>
      </div>
    </div>
  )
}

