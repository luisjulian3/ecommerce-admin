'use client'

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
    indicatorName: string;
    indicatorId: string;
}


export const ApiList: React.FC<ApiListProps> = ({
    indicatorName,
    indicatorId
}) => {

    const params = useParams()
    const origin = useOrigin()

    const baseUrl = `${origin}/api/${params.storeId}`
    return(
        <>
        <ApiAlert title="GET" variant="public" description={`${baseUrl}/${indicatorName}`} />
        <ApiAlert title="GET" variant="public" description={`${baseUrl}/${indicatorName}/${indicatorId}`} />
        <ApiAlert title="POST" variant="admin" description={`${baseUrl}/${indicatorName}`} />
        <ApiAlert title="DELETE" variant="public" description={`${baseUrl}/${indicatorName}/${indicatorId}`} />
        </>
    )
}