import classNames from "classnames";

import css from './styles.module.css';

import { BackButton, Logo } from "@/shared/ui";
import { SurveyPage } from "@/entities/survey/types";

interface PropsType {
    page: SurveyPage;
}

export const SurveyHeader = ({ page }: PropsType) => {
    return (
        <header className={classNames(css.header)}>
            <div className={css.content}>
                <BackButton />
                <Logo variant={page.type === "info" ? 'white' : 'black'} />
            </div>
        </header>
    )
}