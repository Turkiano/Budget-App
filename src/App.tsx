
import { Grid } from '@mui/material';
import './App.css';
import { IncomeWrapper } from './Components/IncomeWrapper';

function App() {

const test = [1, 2, 3, 4, 5]
const test2 = [...test, 6, 7 ]

console.log(test);

  return (
    <div className="App">
     <h1>Budget App</h1>
     <Grid container justifyContent="space-around">
     <Grid item spacing={3} xs={3}>
     <IncomeWrapper titleSection = "Income"   />
         
        </Grid>
        <Grid item spacing={3} xs={3}>
        <IncomeWrapper titleSection = "Expense" />
          
        </Grid>
        <Grid item spacing={3} xs={3}>
        <IncomeWrapper titleSection = "Target" />
          
        </Grid>
      </Grid>
    

    </div>
  )
  }



export default App
