
import { log } from 'console';
import './App.css';
import { Button } from './Components/Button'
import { IncomeForm } from './Components/IncomeForm';
import { useState } from "react";
import Demo from './Demo';

type Income = {
  source: string,
  amount: number,
  date: string
}

function App() {

 // income = {source: "saalary", amount: 23223, date: " mmmm"}
 // incomes = [{income1}, {income2}]

  const [incomes, setIncomes] = useState<Income[]>([])

  const [source, setSource] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')


//Here to declare the variables, using arrow function
  const handelChangeSource = (e:any) => {
    let source = e.target.value; 

    setSource(source)
   
  }
  
  const hadelChangeAmount = (e:any) => {

    let amount = e.target.value;

    setAmount(amount)

  }
  

  const hadelChangeDate = (e:any) => {
    let date = e.target.value;
    // let name = e.target.name; 
    // console.log("name ", name)
    console.log(date);
    
    setDate(date)

  }
  const handeleSubmit = (e : any) => {
    e.preventDefault()
    console.log("testing handle submit")

    let newIncome = {
      source:source,
      amount:amount,
      date:date 

    }
    // having new object of income 
    // push this income to income array 
    
    console.log(newIncome);
    setIncomes([...incomes, newIncome])

  }

  return (
    <div className="App">
     <h1>Budget App</h1>
     
     {/* Here to pass the props to incomeForm */}
    <IncomeForm handelChageSource={handelChangeSource} hadelChangeAmount = {hadelChangeAmount} hadelChangeDate={hadelChangeDate} handeleSubmit={handeleSubmit}/>

    {/* <Demo></Demo> button example */}

    {/* this line to print the html elements (newIncome) */}
    <ul>
      {incomes.map((income) => {
        return (
          <li>
            <p>{income.source}</p>
            <p>{income.amount}</p>
            <p>{income.date}</p>
          </li>
        )
       })
      }
    </ul>
    </div>
  )
}

export default App;
