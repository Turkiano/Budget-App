
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



//here to receive the props from the App.tsx component
export function IncomeForm({handelChageSource, hadelChangeAmount, hadelChangeDate, handeleSubmit} : any) {

    return (

    <form onSubmit={handeleSubmit}>
        <div>
        <TextField name='resource' id ='resource' label='What is the source?' variant="outlined"  placeholder='What is the source?'
        onChange={handelChageSource}/>
        </div>


        <div>
        <TextField name='amount' id ='amount' label='How much ?' variant="outlined"  placeholder='How much ?'
       onChange={hadelChangeAmount}/>
        </div>


        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker onChange={hadelChangeDate}/>
       </LocalizationProvider>
      
       </div>

        <Button variant="contained" type='submit'>Add income</Button>

    </form>
    )
}