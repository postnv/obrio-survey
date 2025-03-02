"use client"

import classNames from "classnames";

import css from './styles.module.css';
import { ElementsList } from "./ui/elements-list";
import { SurveyHeader } from "./ui/survey-header";

import { SurveyPage } from "@/entities/survey/types";
import { useAppSelector } from "@/shared/lib";
import { fillContext } from "@/entities/survey/lib";

interface PropsType {
    page: SurveyPage
}

export const SurveyScreen = ({ page }: PropsType ) => {
    const savedAnswers = useAppSelector((state) => state.survey.savedAnswers)
    const surveyPage = fillContext(page, savedAnswers);

    return (
        <div className={classNames(css.page, {
            [css.info]: page.type === 'info'
        })}>
            <SurveyHeader page={page} />
            <ElementsList elements={surveyPage.elements} />
        </div>
    )
}