import db from "@/lib/db"

interface DashboardPageProps {
    params: {storeId:string}
}

const DashboardPage = async ({params} : DashboardPageProps) => {

    const store = await db.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    return (
        <div>
            active store: {store?.name}
        </div>
    )
}

export default DashboardPage