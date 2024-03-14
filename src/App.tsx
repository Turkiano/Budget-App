import { Grid } from "@mui/material";
import "./App.css";

import { IncomeWrapper } from "./Components/IncomeWrapper";


export type formData = {
  name: string;
  id: string;
  label: string;
};
const INCOME_INPUTS: formData[] = [
  {
    name: "source",
    id: "source",
    label: "Income Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Income Amount",
  },
];
const EXPENSE_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Expense Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Expense Amount",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} md={3}>
          <IncomeWrapper titleSection="Income" inputs={INCOME_INPUTS} />
        </Grid>
        <Grid item xs={12} md={3}>
          <IncomeWrapper titleSection="Expense" inputs={EXPENSE_INPUTS} />
        </Grid>
        <Grid item xs={12} md={3}>
          <IncomeWrapper titleSection="Target" inputs={EXPENSE_INPUTS} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
