/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "../contexts";

const CategoryProvider = ({ children }) => {
    const [newsCategory, setNewsCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ newsCategory, setNewsCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;
