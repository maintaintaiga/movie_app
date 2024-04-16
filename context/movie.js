"use client";
import { createContext, useContext } from "react";

export const MovieContext = createContext(null);

export function useMovie() {
  return useContext(MovieContext);
}
