export interface SurveyOption {
    text: string;
    next: string;
}

export interface SurveyContextValue {
    type: 'value';
    key: string;
    target: string;
}

export interface SurveyContextIf {
    type: 'if';
    key: string;
    target: string;
    value: string;
}

export interface SurveyContextEquals {
    key: string;
    type: 'equals';
    target: string;
    equals: string;
    value: string
}

export type SurveyContext = SurveyContextValue | SurveyContextIf | SurveyContextEquals

export interface SurveyElement {
    type: "ranking" | 'boolean' | 'option' | 'info' | 'end'
    name: string;
    title: string;
    text?: string
    options: SurveyOption[];
}

export interface SurveyPage {
    id: string;
    type: 'default' | 'info';
    elements: SurveyElement[];
    context?: SurveyContext[];
}

export interface Survey {
    name: string;
    title: string;
    pages: SurveyPage[];
}