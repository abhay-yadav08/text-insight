import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success")

    }

    const handleOnChange = (event) => {
        // console.log("handle on changed");
        setText(event.target.value)
    }

    const handleClearClick = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("converted to upper case","success")
    }
    const [text, setText] = useState('enter text here');


    //setText("new text");
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'dark'}}>
                <label for="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} id="myBox" rows="10" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'dark'}}></textarea>

                <button className="btn-primary btn my-3 mx-2" onClick={handleUpClick}>convert to Uppercase</button>

                <button className="btn-primary btn my-3 mx-2" onClick={handleClearClick}>clear text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'dark'}}>
                <h3>your text summary</h3>
                <p>{text.split(" ").length} words , {text.length} characters</p>
                <p>{.008 * text.split(" ").length}minutes read</p>
                <h3>preview</h3>
                <p>{text.length>0?text:"enter something to preview"}</p>

            </div>
        </>

    )
}
