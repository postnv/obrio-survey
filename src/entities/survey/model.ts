import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SurveyElement } from "@/entities/survey/types";
import { findAllAndReplace } from "@/shared/lib";

export type SurveyAnswer = SurveyElement & { value: string }

export interface SurveyStateType {
    savedAnswers: SurveyAnswer[]
}

const initialState: SurveyStateType = {
    savedAnswers: []
}

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        saveAnswer: (state: SurveyStateType, action: PayloadAction<SurveyAnswer>) => {
            const answer = action.payload;

            if (state.savedAnswers.find(item => item.name === answer.name)) {
                state.savedAnswers = findAllAndReplace(state.savedAnswers, answer, (item) => item.name === answer.name);
            } else {
                state.savedAnswers.push(answer);
            }
        },
        resetSurvey: () => {
            return initialState;
        }
    }
})

export const { saveAnswer, resetSurvey } = surveySlice.actions;