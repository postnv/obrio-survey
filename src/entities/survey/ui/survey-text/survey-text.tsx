import css from './styles.module.css';

interface PropsType {
    text?: string
}

export const SurveyText = ({ text }: PropsType) => {
    if (!text) return null;

    return <p className={css.text}>{text}</p>
}