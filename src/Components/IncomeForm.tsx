import { Button } from "./Button";

//here to receive the props from the App.tsx component
export function IncomeForm({handelChageSource, hadelChangeAmount, hadelChangeDate, handeleSubmit} : any) {

    return (

    <form onSubmit={handeleSubmit}>
        <div>
        <label htmlFor="resource">Income Source</label>
        <input type='text' name='resource' id ='resource' placeholder='What is the source?'
        onChange={handelChageSource}/>  {/* // apply the props using the fuction onChange  */}
        </div>


        <div>
        <label htmlFor="amount">Income Amount</label>
        <input type='text' name='amount' id ='amount' placeholder='How much ?' onChange={hadelChangeAmount}/>
        </div>


        <div>
        <label htmlFor="date">Date</label>
        <input type='date' name='date' id ='date' placeholder='Type the date here' onChange={hadelChangeDate}/>
        </div>

        <Button label= 'add income' />
    </form>
    )
}