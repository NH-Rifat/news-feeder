import { useNewsContext } from "../../contexts";
import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";

export default function NewsBoard() {
    const { newsData } = useNewsContext();
    console.log(newsData);

    let leftSideNews;
    let rightSideNews;

    if (newsData.length > 0 && newsData.length === 1) {
        leftSideNews = newsData;
    } else if (newsData.length > 0 && newsData.length === 2) {
        leftSideNews = newsData.slice(0, 1);
        rightSideNews = newsData.slice(1, 2);
    } else {
        leftSideNews = newsData?.slice(0, (newsData.length / 3) * 2);
        rightSideNews = newsData?.slice(
            (newsData.length / 3) * 2,
            newsData.length
        );
    }

    return (
        <main className="my-10 lg:my-8">
            {newsData.length === 0 ? (
                <div className="text-3xl font-semibold text-center">
                    <h1>No Data Found😓</h1>
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-12 gap-8">
                    <LeftSideNews leftSideNews={leftSideNews} />
                    {rightSideNews && (
                        <RightSideNews rightSideNews={rightSideNews} />
                    )}
                </div>
            )}
        </main>
    );
}
