import { Grid, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Button from "@mui/material/Button";
import { FormEvent } from "react";
import { formData } from "../App";

type IncomeFormProps = {
  handelChange: (key: any) => void;
  buttonSection: string;
  handleSubmit: (e: FormEvent) => void;
  inputs: formData[];
};

//here to receive the props from the App.tsx component
export function IncomeForm({
  // handelChageSource,
  // hadelChangeAmount,
  // handleChangeDate,
  handleSubmit,
  buttonSection,
  handelChange,
  inputs,
}: IncomeFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => {
        return (
          <TextField
            key={input.name}
            name={input.name}
            id={input.id}
            label={input.label}
            variant="outlined"
            onChange={handelChange}
            fullWidth
          />
        );
      })}

      {/* <TextField
        name="amount"
        id="amount"
        label="Income Amount"
        variant="outlined"
        onChange={handelChange}
        fullWidth
        margin="normal"
      /> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          onChange={handelChange}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
        />
      </LocalizationProvider>

      <Button variant="contained" type="submit">
        Add {buttonSection}
      </Button>
    </form>
  );
}
