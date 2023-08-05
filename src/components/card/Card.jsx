import "./card.css";
export function Card(props) {
    const{heading,desc,url} = props;
  return (
    <div className="container card m-3">
        <div className="row">
            <div className="col-md-4 mx-auto">
                <img src={url} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mx-auto">
                <p>{heading}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mx-auto">
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

