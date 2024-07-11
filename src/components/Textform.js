import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

   
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

  
   
const eachletterCapital = (event) => {
  let words = text.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  setText(words.join(" "));
  props.showAlert("Each letter convert into capital !", "success");
};

const handleBeautyClick = () => {
    // console.log(text);
    let pText = text.trim().split("");
    let newText = "";
    let pspace = false;
    let pstop = false;
    for (let i = 0; i < pText.length; i++) {
      let element = pText[i];
      if (element === "\n") {
        newText += element;
        continue;
       
      }

      if (
        i === 0 &&
        ((element >= "a" && element <= "z") ||
          (element >= "A" && element <= "Z"))
      ) {
        newText = newText + element.toUpperCase();
        continue;
      }

      // handle multiple space
      if (element === " ") {
        if (pspace) {
          continue;
        }
        newText += element;
        pspace = true;
        continue;
      }
      // else pspace=false

      //handle full stop
      if (element === ".") {
        if (pspace) {
          newText = newText.substring(0, newText.length - 1);
        }
        newText += element;
        pstop = true;
        pspace = false;
        continue;
      }

      if (
        (element >= "a" && element <= "z") ||
        (element >= "A" && element <= "Z")
      ) {
        if (pstop) {
          if (!pspace) {
            newText += " ";
          }
          newText += element.toUpperCase();
          pstop = false;
          pspace = false;
          continue;
        } else {
          newText += element.toLowerCase();
          pspace = false;
          continue;
        }
      } else {
        newText += element;
        pspace = false;
        pstop = false;
      }
    }
    // console.log(newText);
    setText(newText);
    props.showAlert("Text Formated!", "success");
  };

  const handleReplaceClick = () => {
    let search=prompt('Enter text to search');
    let replace=prompt('Enter text to replace the searched text');
    let newText = text.replace(search,replace);
    setText(newText);
    props.showAlert("word replaced!", "success");
  };
  
    const [text, setText] = useState(''); 
   
    return (
        <>
        <div className="container " style={{color: props.mode==='dark'?'white':'#003038'}}> 
        <br></br>
      
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#002535':'white', color: props.mode==='dark'?'white':'#003038'}} id="myBox" rows="8"></textarea>
            <br></br>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={eachletterCapital}>Each letter Capital</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBeautyClick}>Format Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReplaceClick}>Replace word</button>
              
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#003038'}}>
        <br></br>
        <br></br>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/* <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p> */}
            <br></br>
        <br></br>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}