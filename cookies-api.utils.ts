
/** Привожу объект в строку, для записи в куки
 *  формат: { [key]:[value], ... } */
export const objectToStringForCookie = <T>(object: T): string => {
    const entriesList = Object.entries(object as [string]);
    const entriesListLength = entriesList?.length;

    if (!entriesListLength) {
        return "";
    }

    return entriesList.reduce((acc, curr, index) => {
        const isFirst = index === 0;
        const isLast = index === entriesListLength - 1;

        return (
            acc +
            (isFirst ? "{" : ",") +
            curr.reduce((acc, curr, index) => {
                const isFirst = index === 0;

                return acc + (isFirst ? "" : ":") + curr;
            }) +
            (isLast ? "}" : "")
        );
    }, "");
};