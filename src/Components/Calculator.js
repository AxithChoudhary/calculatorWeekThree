import React,{useState} from 'react'
import './Calculator.css';


function Calculator() {

    const [calc,setCalc]=useState("")

    const ops=["/","*","-","+","."]

    const updateCalc=value=>{
        if(
            ops.includes(value) && calc===""||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc+value);
    }
    const calculate=()=>{
        setCalc(eval(calc).toString())
    }

    const deleteBtn=()=>{
        if (calc==""){
            return ;
        }
        const value=calc.slice(0,-1)
        setCalc(value)
    }
    const clearBtn=()=>{
        const value=""
        setCalc(value)
    }


  return (
    <div>
        <div class="calculator">
            <div class="display">
                {calc || '0'}
            </div>
            <div class="operator">
                <div className='delAcBtn'>
                    <button class="arthButton" onClick={deleteBtn}>DEL</button>
                    <button class="arthButton" onClick={clearBtn}>AC</button>
                </div>
                <div className='operatorArthBtn'>
                    <button class="arthButton" onClick={()=>updateCalc('+')}>+</button>
                    <button class="arthButton" onClick={()=>updateCalc('-')}>-</button>
                    <button class="arthButton" onClick={()=>updateCalc('*')} >*</button>
                    <button class="arthButton" onClick={()=>updateCalc('/')}>/</button>
                </div>
                
            </div>
            <div class="numbers">
                <button class="number" onClick={()=>updateCalc('1')}>1</button>
                <button class="number" onClick={()=>updateCalc('2')}>2</button>
                <button class="number" onClick={()=>updateCalc('3')}>3</button>
                <button class="number" onClick={()=>updateCalc('4')}>4</button>
                <button class="number" onClick={()=>updateCalc('5')}>5</button>
                <button class="number" onClick={()=>updateCalc('6')}>6</button>
                <button class="number" onClick={()=>updateCalc('7')}>7</button>
                <button class="number" onClick={()=>updateCalc('8')}>8</button>
                <button class="number" onClick={()=>updateCalc('9')}>9</button>
                <button class="number" onClick={()=>updateCalc('0')} >0</button>
                <button class="number" onClick={()=>updateCalc('.')}>.</button>
                <button class="number" onClick={ calculate }>=</button>
            </div>
        </div>


    </div>
  )
}

export default Calculator