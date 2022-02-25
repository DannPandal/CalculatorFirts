import './style.scss'
import React, { useState, useEffect } from "react";
import Button from '../Button/Button';

const Calculator = () => {

    
    const [resultado,setResultado] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [operation, setOperation] = useState('');
    // const [isStateOperation,setIsStateOperation] = useState(false)
    // const [isStateEqual,setIsStateEqual] = useState(false)
    const [isFirstValue, setIsFirstValue] = useState(true);

    //Siempre se ejecuta al incio
    // useEffect( () => {
    //     setResultado(value1)
    // }, [resultado])


    
    const changeSignal = () => {
        // console.log("change")
        setResultado(resultado*-1)
        value2 === 0 ? setValue1(value1*-1) : setValue2(value2*-1)
        // console.log(value2)
        // console.log(value1)
    }

    const handleAssignValue = (val) => {
        // if(isFirstValue === true){
        //     console.log("primer valor agregado")
        //     setValue1(val);
        //     setIsFirstValue(prevState => !prevState );
        // }
        // else if (isFirstValue === false) {
        //     console.log("segundo valor agregado")
        //     setValue2(val)
        //     setIsFirstValue(prevState => !prevState);
        // }
        // if (isFirstValue) {
        //     if (!isStateOperation){
        //         newValue = float(str(value1) + str(val))
        //         setValue1(newValue)
        //     }
            
        // }else{
        //     setValue2(val)
        // } 
        isFirstValue ? console.log("primero") : console.log("segundo") 
        isFirstValue ? setValue1(val) : setValue2(val)
        setIsFirstValue(prevState => !prevState);
        console.log(val)
        setResultado(val);
    }

    // const handleOperation = (signo) =>{
    //     setOperation(signo);
    //     setIsStateOperation(true);
    //     setIsFirstValue(false);
    // }

    const handleExecuteOperation = () => {
        console.log("ENTRAR AL EJECUTAR OPERACION")
        
        if(!!value2 & !!value1 & !!operation){
            console.log("EJECUTAR LA OPERACION")
            
            let resul = 0
            // lanzo
            switch(operation){
                case '+':
                    // handleSum(value1,value2);
                    resul = value1+value2;
                    break;
                case '-':
                    resul = value1-value2
                    //handleResta(value1,value2);
                    break;
                case 'x':
                    resul = value1*value2
                    //handleMul(value1,value2);
                    break;
                case '/':
                    resul = value1/value2
                    // handleDiv(value1,value2);
                    break;
                case '%':
                    resul = value1*(value2/100)
                    // handleDiv(value1,value2);
                    break;
                default:
                    break;
            }
            setResultado(resul);
            setValue1(resul);
            setValue2(0);
            setIsFirstValue(false)
            
            console.log(resul);

        }
        else if (isFirstValue) {
            console.log("no ejecuta")
        }
    }

    const reset = () => {
        setValue1(0);
        setValue2(0);
        setResultado(0);
        setOperation('');
        setIsFirstValue(true);
    }

    return (
        <div className="contenedor">
            
            <div className="contenedor__resultado">
                <div>{resultado || 0}</div>
            </div>
            <div className="contenedor__buttons">
            <Button className="item" title="AC" evClick={ () => reset()}  />
                <Button className="item" title="+/-" evClick={ () => changeSignal()} />
                <Button className="item" title="%" evClick={ () => setOperation('%')} />
                <Button className="item" title="/" evClick={ () => setOperation('/')}  />

                <Button className="item" title="7" evClick={ () => handleAssignValue(7)} />
                <Button className="item" title="8" evClick={ () => handleAssignValue(8)} />
                <Button className="item" title="9" evClick={ () => handleAssignValue(9)} />
                <Button className="item" title="-" evClick={ () => setOperation('-')} />
                <Button className="item" title="4" evClick={ () => handleAssignValue(4)} />
                <Button className="item" title="5" evClick={ () => handleAssignValue(5)} />
                <Button className="item" title="6" evClick={ () => handleAssignValue(6)} />
                <Button className="item" title="x" evClick={ () => setOperation('x')} />
                <Button className="item" title="1" evClick={ () => handleAssignValue(1)} />
                <Button className="item" title="2" evClick={ () => handleAssignValue(2)} />
                <Button className="item" title="3" evClick={ () => handleAssignValue(3)} />

                <div className="boton" onClick={ () => handleAssignValue(0)} >0</div>
                <Button className="item" title="+" evClick={ () => setOperation('+')} />
                <Button className="item" title="." />
                <Button className="item" title="=" evClick={ () => handleExecuteOperation()} />
                
            </div>
        </div>
    );
};

export default Calculator