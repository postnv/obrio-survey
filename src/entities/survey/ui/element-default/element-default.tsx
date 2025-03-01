import { SurveyTitle } from "../survey-title";
import { SurveyText } from "../survey-text";
import { SurveyOptions } from "../survey-options";

import { SurveyElement, SurveyOption } from "@/entities/survey/types";
import { useAppDispatch } from "@/shared/lib";
import { saveAnswer } from "@/entities/survey/model";

interface PropsType {
    element: SurveyElement;
    onSubmit: (option: SurveyOption) => void;
}

export const ElementDefault = ({ element, onSubmit }: PropsType) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (element: SurveyElement) => (option: SurveyOption) => {
        dispatch(saveAnswer({ ...element, value: option.text }));
        onSubmit(option);
    }

    return (
        <>
            <SurveyTitle title={element.title} />
            <SurveyText text={element.text} />
            <SurveyOptions options={element.options} onSubmit={handleSubmit(element)} />
        </>
    )
}