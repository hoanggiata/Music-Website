import NewReleaseState from "./NewReleaseState";
export default async function NewRelease() {
    const respond = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getHome`);
    const result = await respond.json();
    const data = result.data.items.filter((item) => item.sectionType === "new-release");
    return (
        <div className="mt-5 pl-7 pr-7">
            <div className="mb-5 text-lg font-bold">
                <h1>{data[0].title}</h1>
                {/* <button>Tất cả</button> */}
            </div>
            <NewReleaseState data={data[0].items}/>
        </div>
    );
}