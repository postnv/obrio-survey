import classNames from "classnames";

import css from './styles.module.css';

import { OptionButton } from "@/shared/ui";
import { SurveyOption } from "@/entities/survey/types";

interface PropsType {
    options: SurveyOption[];
    onSubmit: (options: SurveyOption) => void;
    className?: string;
}

export const SurveyOptions = ({ options, onSubmit, className }: PropsType) => {
    const handleOptionClick = (option: SurveyOption) => () => onSubmit(option);

    return (
        <div className={classNames(css.options, className)}>
            {options.map(option => (
                <OptionButton key={option.text} onClick={handleOptionClick(option)}>{option.text}</OptionButton>
            ))}
        </div>
    )
}