import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";

export const globalStore = configureStore({
    reducer: {
        dataReducer
    },
});

export default globalStore;