/// <reference types="redux-persist" />

declare global {
    export type Nullable<T> = T | null

    /**
     * ⚠️ FSD
     *
     * This is a hacky way to export Redux types inferred from @/app
     * and use them in @/shared/model/hooks.ts
     */
    declare type RootState = import('../src/app/store-provider').RootState
    declare type AppDispatch = import('../src/app/store-provider').AppDispatch
}

export {}