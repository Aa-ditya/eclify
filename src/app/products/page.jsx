export default async function Products() {
    const data = await fetch("https://fakestoreapi.in/api/products");
    const result = await data.json();
    console.log(result);

    // Check if result has the expected property with an array
    const products = result.products; // Change this to match the actual key in the object

    if (Array.isArray(products)) {
        return (
            <div className=" ml-[20%] my-10 ml-16">
                <div className=" flex flex-wrap gap-4">

                    {products.map((item) => (
                        <div className=" border rounded-lg flex flex-col items-center border-r-2 shadow-md h-[13rem] w-[18rem] mt-4 ">
                            <img src={item.image} className=" h-20 w-20" />
                            <p className="my-2">{item.title.slice(0, 30)}...</p>
                            <button className=" border rounded-lg px-6 py-2 bg-red-300">Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div>Error: Data is not in expected format.</div>;
    }
}
