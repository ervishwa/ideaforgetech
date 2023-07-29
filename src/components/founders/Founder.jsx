import "./founder.css";
export function Founder(props) {
    const{name,position,info} = props;

  return (
    <div className="founder">
      <h1 className="founderName">{name}</h1>
      <p className="founderPosition">{position}</p>
      <p className="founderInfo">{info}</p>
    </div>
  )
}

