import { SurveyTitle } from "../survey-title";
import { SurveyText } from "../survey-text";
import { SurveyOptions } from "../survey-options";
import css from './styles.module.css';

import { SurveyElement, SurveyOption } from "@/entities/survey/types";

interface PropsType {
    element: SurveyElement;
    onSubmit: (option: SurveyOption) => void;
}

export const ElementInfo = ({ element, onSubmit }: PropsType) => {
    return (
        <>
            <SurveyTitle title={element.title} />
            <SurveyText text={element.text} />
            <SurveyOptions className={css.options} options={element.options} onSubmit={onSubmit} />
        </>
    )
}