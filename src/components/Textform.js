import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log('Upper case was clicked')
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLowClick=()=>{
        // console.log('Upper case was clicked')
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log('On change')
        setText(event.target.value)
    }

    const handleOnCapital=()=>{
        
        let newText=text.toLowerCase().split(" ")
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
          var newCpitlText=newText.join(" ")
        }
        setText(newCpitlText)
    }
    const handleOnSentence=()=>{
        
        let newText = text.toLowerCase().split(/(?<=\.)\s+/)
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        var newCpitlText=newText.join(" ")

        setText(newCpitlText)
    }
    const handleOnAlternate = () => {
        let newText = text.split("").map(char => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join("");
    
        setText(newText);
    }   

    const handleOnClear=()=>{
        let newText=""
        setText(newText)
    }
    const [text,setText]=useState('')
    return (
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea
                    className="form-control" value={text} onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleOnCapital}>Convert to Capitalise Text</button>
            <button className="btn btn-primary mx-2" onClick={handleOnSentence}>Convert to Sentence Case</button>
            <button className="btn btn-primary mx-2" onClick={handleOnAlternate}>Convert to Alternate Case</button>
            <button className="btn btn-primary my-2" onClick={handleOnClear}>Clear Text</button>
        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
