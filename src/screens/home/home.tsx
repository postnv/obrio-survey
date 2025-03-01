import { redirect } from "next/navigation";

import { loadSurvey } from "@/entities/survey/api";

export const HomeScreen = async () => {
    const survey = await loadSurvey();
    const firstPage = survey.pages[0];

    redirect(`/survey/${firstPage.id}`)
}