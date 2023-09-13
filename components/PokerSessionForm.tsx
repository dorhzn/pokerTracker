"use client";
import { FormState, SessionInterface } from "@/common.types";
import FormField from "./FormField";
import { useState } from "react";

type Props = {
  type: string;
  session: SessionInterface;
};

const PokerSessionForm = ({ type, session }: Props) => {
  const [form, setForm] = useState<FormState>({
    date: "",
    initialAmount: 0,
    finalAmount: 0,
    profit: 0,
    host: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleStateChange = (fieldName: string, value: string) => {};

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <FormField
        title="pokerSessionDate"
        state={form.date}
        placeholder="pokerSessionDate"
        setState={(value) => handleStateChange("pokerSessionDate", value)}
        type="date"
      />
      <FormField
        title="initialAmount"
        state={form.initialAmount}
        placeholder="initialAmount"
        setState={(value) => handleStateChange("initialAmount", value)}
        type="number"
      />

      <FormField
        title="finalAmount"
        state={form.finalAmount}
        placeholder="finalAmount"
        setState={(value) => handleStateChange("finalAmount", value)}
        type="number"
      />

      <FormField
        title="profit"
        state={form.profit}
        placeholder="profit"
        setState={(value) => handleStateChange("profit", value)}
        type="number"
        disabled={true}
      />

      <FormField
        title="host"
        state={form.host}
        placeholder="host"
        setState={(value) => handleStateChange("host", value)}
      />
    </form>
  );
};

export default PokerSessionForm;
