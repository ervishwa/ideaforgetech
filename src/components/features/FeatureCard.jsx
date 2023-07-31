import "./featureCard.css";
export function FeatureCard(props) {
    const{src,heading,desc} = props;
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12 p-3">
                <img className="featureIcon" src={src} alt="" />
                <h1 className="fs-5 fw-bolder">{heading}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

