import css from './styles.module.css';

interface PropsType {
    title: string
}

export const SurveyTitle = ({ title }: PropsType) => <h1 className={css.title}>{title}</h1>