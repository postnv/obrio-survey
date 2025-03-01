import { loadSurvey } from "@/entities/survey/api";
import { SurveyScreen } from "@/screens/survey/survey";
import { getSurveyPage } from "@/entities/survey/lib";

export async function generateStaticParams()  {
    const survey = await loadSurvey();

    return survey.pages.map(page => ({ id: page.id }))
}

interface PropsType {
    params: Promise<{ id: string }>
}

export default async function Survey({ params }: PropsType) {
    const pageId = (await params).id;
    const survey = await loadSurvey();
    const page = getSurveyPage(survey, pageId)

    return <SurveyScreen page={page} />
};