import { ReactNode } from "react";

import css from './styles.module.css';

interface PropsType {
    children: ReactNode;
}

export const BaseLayout = ({ children }: PropsType) => (
    <div className={css.layout}>
        <main className={css.main}>{children}</main>
    </div>
)