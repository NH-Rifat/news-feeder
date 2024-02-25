/* eslint-disable react/prop-types */
import { getDateTime } from "../../utils/getDateTime";
export default function LeftSideNews({ leftSideNews }) {
    const topNews = leftSideNews.find((news) => news.urlToImage !== null);
    const otherNews = leftSideNews.filter(
        (news) => news.title !== topNews.title
    );

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8 mt-6">
            <div className="col-span-12 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <a href="#">
                        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                            {topNews?.title}
                        </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                        {topNews?.description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                        {getDateTime(topNews?.publishedAt, "news")}
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <img
                        className="w-full"
                        src={topNews?.urlToImage}
                        alt="thumb"
                    />
                    <p className="mt-5 text-base text-[#5C5955]">
                        Illustration: {topNews?.source?.name}
                    </p>
                </div>
            </div>
            {otherNews?.map((news) => (
                <a
                    href={news?.url}
                    target="_blank"
                    key={news?.title}
                    className={`col-span-12 ${
                        news?.urlToImage
                            ? "grid grid-cols-12 gap-4 lg:col-span-8"
                            : "md:col-span-6 lg:col-span-4"
                    }`}
                >
                    <div
                        className={`col-span-12  ${
                            news?.urlToImage ? "md:col-span-6" : "md:col-span-4"
                        }`}
                    >
                        <div>
                            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                {news?.title}
                            </h3>
                        </div>
                        <p className="text-base text-[#292219]">
                            {news?.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            {getDateTime(news?.publishedAt, "news")}
                        </p>
                    </div>

                    {news?.urlToImage && (
                        <div className="col-span-12 md:col-span-6">
                            <img
                                className="w-full object-cover"
                                src={news?.urlToImage}
                                alt="thumb"
                            />
                        </div>
                    )}
                </a>
            ))}
        </div>
    );
}
