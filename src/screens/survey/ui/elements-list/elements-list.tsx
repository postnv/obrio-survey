import { useRouter } from "next/navigation";

import css from './styles.module.css';

import { ElementDefault, ElementInfo, ElementResult } from "@/entities/survey/ui";
import { SurveyElement, SurveyOption } from "@/entities/survey/types";

const ELEMENTS = {
    ranking: ElementDefault,
    boolean: ElementDefault,
    option: ElementDefault,
    info: ElementInfo,
    end: ElementResult,
}

interface PropsType {
    elements: SurveyElement[];
}

export const ElementsList = ({ elements }: PropsType) => {
    const router = useRouter();

    const handleSubmit = (option: SurveyOption) => {
        router.push(`/survey/${option.next}`);
    }

    return (
        <div className={css.list}>
            {elements.map(element => {
                const ElementComponent = ELEMENTS[element.type];

                return (
                    <div key={element.name} className={css.item}>
                        <ElementComponent element={element} onSubmit={handleSubmit}/>
                    </div>
                )
            })}
        </div>
    )
}