import { createContext, useContext } from "react";

export const NewsContext = createContext("");
export const CategoryContext = createContext("");
export const SearchContext = createContext("");

export function useNewsContext() {
    return useContext(NewsContext);
}

export function useCategoryContext() {
    return useContext(CategoryContext);
}

export function useSearchContext() {
    return useContext(SearchContext);
}
