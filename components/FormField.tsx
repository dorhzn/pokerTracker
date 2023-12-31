import React from "react";

type Props = {
  type?: string;
  title: string;
  state: string | number;
  placeholder: string;
  setState: (value: string) => void;
  disabled?: boolean;
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  disabled,
  setState,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>

      <input
        disabled={disabled || false}
        type={type || "text"}
        placeholder={placeholder}
        required
        value={state}
        className="form_field-input"
        onChange={(e) => setState(e.target.value)}
      ></input>
    </div>
  );
};

export default FormField;
