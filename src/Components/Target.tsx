import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

type TargetingProps = {
  totalSaving: any;
};

export function Target({ totalSaving }: TargetingProps) {
  const [target, setTarget] = useState(0);
  const [tValue, setTvalue] = useState(0);

  const handleChange = (e: any) => {
    setTvalue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTarget(Number(tValue));

    // console.log("testing handle submit"}
  };
  return (
    <div className="Target">
      <h3>Target</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="target"
          placeholder="Type your target here"
          onChange={handleChange}
        ></TextField>
        <Button variant="contained" type="submit">
          Set Target
        </Button>
      </form>
      <p> Current Saving: {totalSaving}</p>
      <p> Target: {target}</p>
      <p> Progress: {(totalSaving / target) * 100}%</p>
      <progress value={totalSaving / target} max="1"></progress>
    </div>
  );
}
