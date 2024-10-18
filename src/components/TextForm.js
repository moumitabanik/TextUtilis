import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClearText = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Box Cleared", "success")
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleCopyClick = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard- " + newText.value , "success" )
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white',color: props.mode === 'dark' ? 'white':'black'}} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-2"  style={{color: props.mode === 'dark' ? 'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} Characters</p>
            <p>{0.008*text.split("/\s+/").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above to preview it here"}</p>
        </div>
        </>
    )
}
