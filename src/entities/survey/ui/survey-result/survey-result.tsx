import { useAppSelector } from "@/shared/lib";

export const SurveyResult = () => {
    const savedAnswers = useAppSelector(state => state.survey.savedAnswers);

    return (
        <ul>
            {savedAnswers.map(answer => (
                <li key={answer.name}>
                    <b>{answer.title}</b>
                    <p>{answer.value}</p>
                </li>
            ))}
        </ul>
    )
}