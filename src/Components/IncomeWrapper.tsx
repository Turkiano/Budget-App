import { useState } from "react"
import { IncomeForm } from "./IncomeForm"


type Income = {
    source: string,
    amount: number,
    date: string
  }

  type IncomeWrapperProps = {
    titleSection: string
  }
export function IncomeWrapper ({titleSection}: IncomeWrapperProps) {
    const [incomes, setIncomes] = useState<Income[]>([])

    // const [source, setSource] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')
    const [input, setInput] = useState<Income>({ source: "", amount: 0, date: "", });
  
  //Here to declare the variables, using arrow function
    const handelChangeSource = (e:any) => {
      let inpuSource = e.target.value; 
  
      // setSource(source)
      setInput({ ...input, source : inpuSource, });
     
    }
    
    const hadelChangeAmount = (e:any) => {
  
      let inputAmount = e.target.value;
  

      setInput({ ...input, amount : inputAmount, });
      
    }
    
    const handleChangeDate = (value: {$d: Date}) => {
      
        // setDate( new Date(value.$d).toLocaleDateString())
        setInput({ ...input, date : new Date(value.$d).toLocaleDateString(), });
      
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
        source:input.source,
        amount:input.amount,
        date:input.date 
  
      }

      setIncomes([...incomes, newIncome])
      console.log(newIncome);
      }

      return (
        <>
       
       <h3>{titleSection}</h3>

        <IncomeForm buttonSection={titleSection} handelChageSource={handelChangeSource} hadelChangeAmount = {hadelChangeAmount} hadelChangeDate={handleChangeDate} handeleSubmit={handeleSubmit}/>

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