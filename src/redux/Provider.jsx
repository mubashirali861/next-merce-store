"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // assuming you import your Redux store

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
