import "./button.css";
export function Button(props) {
  return <button className="button rounded-pill">{props.text}</button>;
}
