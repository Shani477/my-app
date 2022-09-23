import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleToClear=(event)=>{
        let newText = '';
        setText(newText);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear</button>

    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
