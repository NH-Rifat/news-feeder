import "./App.css";
import Page from "./Page";
import { CategoryProvider, SearchProvider } from "./provider";
import NewsProvider from "./provider/NewsProvider";

function App() {
    return (
        <>
            <SearchProvider>
                <CategoryProvider>
                    <NewsProvider>
                        <Page />
                    </NewsProvider>
                </CategoryProvider>
            </SearchProvider>
        </>
    );
}

export default App;
