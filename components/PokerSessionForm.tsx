"use client";
import { FormState, SessionInterface } from "@/common.types";
import FormField from "./FormField";
import { useState } from "react";
import Button from "./Button";
import { createNewPokerSession } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {
  type: string;
  session: SessionInterface;
};

const PokerSessionForm = ({ type, session }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    date: "",
    initialAmount: 0,
    finalAmount: 0,
    profit: 0,
    host: "",
  });

  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (type === "create") {
        await createNewPokerSession(form, session?.user?.id);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <FormField
        title="date"
        state={form.date}
        placeholder="pokerSessionDate"
        setState={(value) => handleStateChange("date", value)}
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
        state={form.finalAmount - form.initialAmount}
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
      <div className="flexStart w-full">
        <Button
          title="Create"
          type="submit"
          isSubmitting={isSubmitting}
          leftIcon={isSubmitting ? "" : "/plus.svg"}
        />
      </div>
    </form>
  );
};

export default PokerSessionForm;
