/* eslint-disable react/prop-types */
import { NewsContext } from "../contexts";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
    const { newsData, loading, error } = useNewsQuery();

    return (
        <NewsContext.Provider value={{ newsData, loading, error }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
