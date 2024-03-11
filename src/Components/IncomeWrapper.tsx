import { useState } from "react"
import { IncomeForm } from "./IncomeForm"
import { Dayjs } from "dayjs"


type Income = {
    source: string,
    amount: number,
    date: string
  }
  
export function IncomeWrapper () {
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
    
    const handleChangeDate = (value: {$d: Date}) => {
      
        setDate( new Date(value.$d).toLocaleDateString())
      
    }
    // const hadelChangeDate = (e:any) => {
    //   let date = e.target.value;
    //   // let name = e.target.name; 
    //   // console.log("name ", name)
    //   console.log(date);
      
    //   setDate(date)
  
    // }
    const handeleSubmit = (e : any) => {
      e.preventDefault()
      console.log("testing handle submit")
  
      let newIncome = {
        source:source,
        amount:amount,
        date:date 
  
      }

      setIncomes([...incomes, newIncome])

      console.log(newIncome);
      }

      return (
        <>
       
        <IncomeForm handelChageSource={handelChangeSource} hadelChangeAmount = {hadelChangeAmount} hadelChangeDate={handleChangeDate} handeleSubmit={handeleSubmit}/>

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
        </>
      )
       
}