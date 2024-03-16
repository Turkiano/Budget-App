import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";

import { IncomeWrapper } from "./Components/IncomeWrapper";
import { Target } from "./Components/Target";
import { Saving } from "./Components/Saving";

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
type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

function App() {
  const [totalSaving, setTotalSaving] = useState(0);
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpense] = useState<Income[]>([]);

  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} md={3}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            titleSection="Income"
            inputs={INCOME_INPUTS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <IncomeWrapper
            incomes={expenses}
            setIncomes={setExpense}
            titleSection="Expense"
            inputs={EXPENSE_INPUTS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Target totalSaving={totalSaving} />
        </Grid>
      </Grid>

      <Saving incomes={incomes} expenses={expenses} setTotalSaving={setTotalSaving} totalSaving={totalSaving} />
    </div>
  );
}

export default App;
