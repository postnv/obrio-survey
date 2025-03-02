"use server"

import { promises as fs } from 'fs'

import { Survey } from "@/entities/survey/types";

// lets pretend we have feature flag or process.env
export const loadSurvey = async (): Promise<Survey> => {
    const survey = process.env.SURVEY ?? 'astrology';
    const file = await fs.readFile(process.cwd() + `/public/surveys/${survey}.json`, 'utf8');

    return JSON.parse(file) as Survey;
}