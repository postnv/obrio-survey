import { Survey, SurveyContext, SurveyPage } from "@/entities/survey/types";
import { SurveyAnswer } from "@/entities/survey/model";

export const getSurveyPage = (survey: Survey, pageId: string) => {
    const pageIdx = survey.pages.findIndex(page => page.id === pageId);

    return survey.pages[pageIdx];
}

export const getSurveyAnswer = (name: string, savedAnswers: SurveyAnswer[]) => savedAnswers.find(answer => answer.name === name);

export const getContext = (context: SurveyContext, savedAnswers: SurveyAnswer[]) => {
    const target = getSurveyAnswer(context.target, savedAnswers);

    if (!target) return context.key;

    switch (context.type) {
        case "value": return target.value;
        case "if": return target.value ? context.value : context.key;
        case "equals": return  target.value === context.equals ? context.value : context.key;
    }
}

export const fillContext = (page: SurveyPage, savedAnswers: SurveyAnswer[]) => {
    const json = JSON.stringify(page);

    if (!page.context) return page;

    const resultJson = page.context.reduce((result, context) => {
        return result.replaceAll(context.key, getContext(context, savedAnswers));
    }, json)

    return JSON.parse(resultJson) as SurveyPage;
}