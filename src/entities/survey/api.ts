"use server"

import { Survey } from "@/entities/survey/types";

export const loadSurvey = async (): Promise<Survey> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/survey`, {
        cache: 'force-cache',
        next: { revalidate: 60 }
    });

    return await res.json() as Survey
}