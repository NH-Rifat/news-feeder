import Footer from "./components/Footer";
import Heading from "./components/Heading";
import NewsBoard from "./components/News/NewsBoard";
import { useNewsContext } from "./contexts";

export default function Page() {
    const { loading } = useNewsContext();
    return (
        <>
            <Heading />
            {loading.state ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00d991]"></div>
                </div>
            ) : (
                <NewsBoard />
            )}
            <Footer />
        </>
    );
}
