import { Button, TextField } from "@mui/material";
import exp from "constants";
import { useState } from "react";

type savingProps = {
  setTotalSaving: any;
  incomes: any;
  expenses: any;
  totalSaving: number;
};

export function Saving({
  setTotalSaving,
  incomes,
  expenses,
  totalSaving,
}: savingProps) {
  const totalIncomes = incomes.reduce(
    (acc: number, curr: any) => acc + curr.amount,
    0
  );
  const totalExpenses = expenses.reduce(
    (acc: number, curr: any) => acc + curr.amount,
    0
  );
  const balance = totalIncomes - totalExpenses - totalSaving;

  const [tValue, setTvalue] = useState(0);
  const handleChange = (e: any) => {
    setTvalue(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTotalSaving(tValue);
  };
  return (
    <div className="Saving">
      <p>Balance: {balance}</p>
      <p>Transfer to Saving Accont</p>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="saving"
          placeholder="Type your target here"
          onChange={handleChange}
        ></TextField>

        <Button variant="contained" type="submit">
          Set Target
        </Button>
      </form>
    </div>
  );
}
