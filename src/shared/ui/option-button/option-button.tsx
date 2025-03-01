import classNames from "classnames";

import css from "./styles.module.css";

import { Button, ButtonProps } from "@/shared/ui";

export const OptionButton = ({ children, className, ...props }: ButtonProps) => (
    <Button {...props} className={classNames(css.optionBtn, className)}>
        {children}
    </Button>
);
