/* eslint-disable react-refresh/only-export-components */
import { APIServices } from "../services/api";
import { Category } from "../services/api-types";
import { CreateCategoryData } from "../validators/types";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface FetchAPIProps {
    createCategory: (data: CreateCategoryData) => Promise<void>
    fetchCategories: () => Promise<void>
    categories: Category[]
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps)

type FetchAPIProviderProps = {
    children: ReactNode;
}

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    const createCategory = useCallback(async (data: CreateCategoryData) => {
        await APIServices.createCategory(data)
    }, [])

    const fetchCategories = useCallback(async () => {
        const data = await APIServices.getCategories()
        setCategories(data)
    }, [])
    return (
        <FetchAPIContext.Provider value={{ categories, createCategory, fetchCategories }}>
            {children}
        </FetchAPIContext.Provider>
    )
}

export function useFetchAPI(): FetchAPIProps {
    return useContext(FetchAPIContext)
}
