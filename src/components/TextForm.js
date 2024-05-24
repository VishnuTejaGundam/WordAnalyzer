import React,{useState} from 'react'
//when you create a new .js component in react then first enter rfc for react functional components
export default function TextForm(props) {

const handleUpClick = ()=>{
// console.log("Uppercase was clickked"+ text);
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to Uppercase ", "success");
}
const handleLoClick = ()=>{
    // console.log("Uppercase was clickked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", "danger");
    }

const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
}
const handleClear = (event)=>{
    // console.log("on change");
    setText('');
}
const handleCopy = (event)=>{
    // console.log("on change");
    navigator.clipboard.writeText(text).then(()=>alert("copies successfuly")).catch((error)=>alert("failed to copy"));
}
const handleInverse = (event)=>{
    let newText = '';
    for(let i=text.length-1; i>=0; i-- ){
        newText += text[i];
    }
    setText(newText);
}
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

    const[text, setText] = useState("");

//we have to use onChange because we are using a variable of useState so if we dont use onChange event then we cant able to enter the text in the text area
///
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-15">
        {/* <label htmlFor="myBox" className="form-label">Example area</label> */}

        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy The text</button>
        <button className="btn btn-primary mx-1" onClick={handleInverse}>Inverse Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>Handle Spaces</button>


      </div>
    </div>
    <div className="containe my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview it"}</p>

    </div>
    </>
  )
}
