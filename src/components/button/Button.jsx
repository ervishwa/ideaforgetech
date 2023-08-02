import "./button.css";
export function Button(props) {
  const{style} = props;
  console.log(style.backgroundColor);
  return (
    <button className="button rounded-pill" style={{backgroundColor:`${style.backgroundColor}`,padding:`${style.padding}`,width:`${style.width}`}}>{props.text}</button>
  )
}

