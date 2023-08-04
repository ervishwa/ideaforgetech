
export function UsecaseVideo() {

    const videos = [{}]
    const [index,setIndex] = useState(0);
    const[url,setUrl] = useState(videos[0]);
     
   
  return (
     <div className="row">
        <div className="col-md-8">
            <video src={url}></video>
            <div className="row">
                <div className="col-md-12">
                    <button>X</button>
                    <button>Y</button>
                    <button>Z</button>
                    <button>A</button>
                    <button>B</button>
                </div>
            </div>
        </div>
     </div>
  )
}

