import React, { useState } from 'react'

export default function TextForm({ heading, theme }) {

    const [text, setText] = useState("Enter text here");

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleUpperCasebtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCasebtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearbtn = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopybtn = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveSpacesBtn = () => {
        let newString = text.replace(/\s+/g, ' ').trim();
        setText(newString);

    }

    return (
        <>
            <div className='container my-3' data-bs-theme={theme}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCasebtn}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCasebtn}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClearbtn}>Clear</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCopybtn}>Copy</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleRemoveSpacesBtn}>Remove Spaces</button>

            </div>
            <div className='container'>
                <h2>Text Summary</h2>
                <p> {text.split(" ").length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
            </div>
        </>
    )
}

