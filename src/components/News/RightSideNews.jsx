/* eslint-disable react/prop-types */
import { getDateTime } from "../../utils/getDateTime";
export default function RightSideNews({ rightSideNews }) {
    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                {rightSideNews?.map((news) => (
                    <div key={news?.title}>
                        <a
                            href={news?.url}
                            target="_blank"
                            className="col-span-12 md:col-span-8"
                        >
                            {news?.urlToImage && (
                                <img
                                    className="w-full mt-6"
                                    src={news?.urlToImage}
                                    alt="thumb"
                                />
                            )}
                            <div className="col-span-12 md:col-span-4">
                                <div>
                                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
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
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
