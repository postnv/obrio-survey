'use client'

import { useRef } from 'react'
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react";

import { surveySlice } from "@/entities/survey/model";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [surveySlice.name],
}

const makeStore = () => {
    const rootReducer = combineReducers({
        [surveySlice.name]: surveySlice.reducer,
    })

    const store = configureStore({
        // 👇 ATTENTION: persistReducer broke infering RootState
        reducer: persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })

    return store;
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

interface PropsType {
    children: React.ReactNode
}

export const StoreProvider = ({ children }: PropsType) => {
    const storeRef = useRef(makeStore());
    const persistorRef = useRef(persistStore(storeRef.current));

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    )
}
