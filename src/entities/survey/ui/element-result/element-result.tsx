import { SurveyTitle } from "../survey-title";
import { SurveyText } from "../survey-text";
import { SurveyOptions } from "../survey-options";
import { SurveyResult } from "../survey-result";

import { resetSurvey } from "@/entities/survey/model";
import { useAppDispatch } from "@/shared/lib";
import { SurveyElement, SurveyOption } from "@/entities/survey/types";

interface PropsType {
    element: SurveyElement;
    onSubmit: (option: SurveyOption) => void;
}

export const ElementResult = ({ element, onSubmit }: PropsType) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (option: SurveyOption) => {
        dispatch(resetSurvey());
        onSubmit(option);
    }

    return (
        <>
            <SurveyTitle title={element.title} />
            <SurveyText text={element.text} />
            <SurveyOptions options={element.options} onSubmit={handleSubmit} />
            <SurveyResult />
        </>
    )
}