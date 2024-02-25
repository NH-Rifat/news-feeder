export const getDateTime = (givenDate, news) => {
    let date;
    const currentDate = new Date();
    if (!givenDate) {
        date = new Date();
    } else {
        date = new Date(givenDate);
    }

    const isToday =
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();

    if (news) {
        if (isToday) {
            const hoursAgo = Math.floor(
                (currentDate - date) / (1000 * 60 * 60)
            );
            return `${hoursAgo} hours ago`;
        }
        const options = { year: "numeric", month: "short", day: "2-digit" };
        return date.toLocaleDateString("en-US", options);
    } else {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
    }
};
