import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
    const location = useLocation()
    const queryString = useMemo(
        () => {
            const stringQuery = location.search;

            const query = {
                fieldName: stringQuery.replace("?", "").split("=")[0],
                value: stringQuery.replace("?", "").split("=")[1],
            };
            return query
        }, [location]
    )
    return queryString
} 