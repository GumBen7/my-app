import React from 'react';
import './App.css';

const Square = ({n} : {n : number}) => <>{n*n}<br/></>
const OnlyEven = ({arr} : {arr: number[]}) => <>{arr.filter(n => n % 2 === 0).join(', ')}<br/></>
const Temperature = ({t} : {t:number}) => <div style={t > 0 ? {color : "red"} : {color : "blue"}}>{t}<br/></div>

const toggleColor = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentColor = (event.target as HTMLButtonElement).style.backgroundColor;
    (event.target as HTMLButtonElement).style.backgroundColor = currentColor === 'red' ? 'green' : 'red';
}

function App() {
    return (
        <div className="App">
            <Square n={3}/>
            <OnlyEven arr={[14, 5, 6, 12, 21, 2]}/>
            <Temperature t={8}/>
            <button onClick={toggleColor}>
                Click on me!
            </button>
        </div>
    );
}


export default App;
