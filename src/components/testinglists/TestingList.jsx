import "./testingList.css";

export function TestingList(props) {
  return (
    <div className='testlist'>
        <img src="https://ideaforgetech.com/_nuxt/img/check.bee3d13.png" className="testchq" alt="" />
        <span className="testlist_text">{props.text}</span>
    </div>
  )
}

