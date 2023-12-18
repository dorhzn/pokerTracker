import React, { MouseEventHandler } from "react";
import Image from "next/image";
type Props = {
  title: string;
  type: "button" | "submit";
  isSubmitting?: boolean;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  type,
  isSubmitting,
  leftIcon,
  rightIcon,
  handleClick,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className="flexCenter gap-3 px-4 py-3"
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left" />}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right" />
      )}
    </button>
  );
};

export default Button;
