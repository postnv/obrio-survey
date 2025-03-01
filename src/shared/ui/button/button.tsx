import { ReactNode } from "react";
import classNames from "classnames";

import css from "./styles.module.css";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  children,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(css.button, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
