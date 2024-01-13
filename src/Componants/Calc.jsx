import react , {useState} from "react";



function Calc() {
    const [input, setinput] = useState({input1 : ""   ,input2 : ""});
    const [ result , setResult ] = useState("")
    const [ error , setError] = useState("")

    console.log(error == "error")

    


    function resultDisplay(e) {
        const operator = e.target.value;
        if(Number.isNaN(parseFloat(input.input1)) || Number.isNaN(parseFloat(input.input2))) {
        
           setError("Error")
            setResult("input not valid num")
        }else{
            setError("Success!")
            switch (operator) {
                case "+":
                    setResult("Result : " + (parseFloat(input.input1) + parseFloat(input.input2)));
                    break;
                case "-":
                    setResult("Result : " +  (parseFloat(input.input1) - parseFloat(input.input2)));
                    break;
                case "*":
                    setResult("Result : " + (parseFloat(input.input1) * parseFloat(input.input2)));
                    break;
                case "/":
                    // Check for division by zero
                    setResult(parseFloat(input.input2) !== 0 ? parseFloat(input.input1) / parseFloat(input.input2) : "Error");
                    break;
                default:
                    // Handle unexpected operator values
                    setError("Error");
        }
        
        

        
}
        

    }

  return (
    <div className="main">
       <div className="inner">
       <label  htmlFor="num1">NUM 1</label>
        
        <input  type="text" value={input.input1}    id="num1" onChange={(e) => setinput({...input, input1 : e.target.value})}/>
         
        <label  htmlFor="num2">NUM 2</label>
               
        <input  type="text" value={input.input2}  id="num2"   onChange={(e) => setinput({...input, input2 : e.target.value})}/>
        <div className="btn">
           <button onClick={resultDisplay} value={"+"}>+</button>
           <button onClick={resultDisplay} value={"-"}>-</button>
           <button onClick={resultDisplay} value={"*"}>*</button>
           <button onClick={resultDisplay} value={"/"}>/</button>
        </div>
        

        <div className="displayError">
        <p className={`error ${error === "Success!" ? "blue" : "red"}`}>{error}</p>

        <p className="result">{result} </p>
        </div>
       </div>
    </div>
  )
}

export default Calc




