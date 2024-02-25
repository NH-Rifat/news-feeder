import { useEffect, useState } from "react";
import { useCategoryContext, useSearchContext } from "../contexts";

export const useNewsQuery = () => {
    const [newsData, setNewsData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { newsCategory, setNewsCategory } = useCategoryContext();
    const { searchTerm } = useSearchContext();

    useEffect(() => {
        let ignore = false;

        setLoading(true);

        if (searchTerm) {
            fetch(`http://localhost:8000/v2/search?q=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    if (!ignore) {
                        setNewsData([...data.result]);
                        setLoading(false);
                        setNewsCategory("");
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        } else {
            fetch(
                newsCategory
                    ? `http://localhost:8000/v2/top-headlines?category=${newsCategory}`
                    : "http://localhost:8000/v2/top-headlines"
            )
                .then((response) => response.json())
                .then((data) => {
                    if (!ignore) {
                        setNewsData([...data.articles]);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        }

        return () => {
            ignore = true;
        };
    }, [newsCategory, searchTerm]);

    console.log(newsData);

    return { newsData, loading, error };
};
