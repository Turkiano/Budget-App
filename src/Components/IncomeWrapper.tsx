import { ChangeEvent, FormEvent, useState } from "react";
import { Dayjs } from "dayjs";

import { IncomeForm } from "./IncomeForm";

import { formData } from "../App";

type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

type IncomeWrapperProps = {
  titleSection: string;
  inputs: formData[];
  incomes: any;
  setIncomes: any;
};
export function IncomeWrapper({
  titleSection,
  inputs,
  incomes,
  setIncomes,
}: IncomeWrapperProps) {
  console.log(incomes);

  // const [source, setSource] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')
  const [input, setInput] = useState<Income>({
    id: +new Date(),
    source: "",
    amount: 0,
    date: "",
  });

  //Here to declare the variables, using arrow function
  const handelChange = (e: any) => {
    if (e.target) {
      let inpuSource = e.target.value;
      const name = e.target.name;

      // setSource(source)
      setInput({ ...input, [name]: inpuSource });
    } else {
      setInput({ ...input, date: e.toDate().toLocaleDateString() });
    }
  };

  // const hadelChangeAmount = (e: any) => {
  //   let inputAmount = e.target.value;

  //   setInput({ ...input, amount: inputAmount });
  // };

  // const handleChangeDate = (value: Dayjs | null) => {
  //   if (value) {
  //     setInput({ ...input, date: value.toDate().toLocaleDateString() });
  //   }
  // };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log("testing handle submit");

    let newIncome = {
      id: +new Date(),
      source: input.source,
      amount: +input.amount,
      date: input.date,
    };

    setIncomes([...incomes, newIncome]);
  };

  return (
    <>
      <h3>{titleSection}</h3>

      <IncomeForm
        inputs={inputs}
        buttonSection={titleSection}
        // handelChageSource={handelChangeSource}
        // hadelChangeAmount={hadelChangeAmount}
        handelChange={handelChange}
        // handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />

      {/* <Demo></Demo> button example */}

      {/* this line to print the html elements (newIncome) */}
      <ul>
        {incomes.map((income: any) => {
          return (
            <li key={income.id}>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
