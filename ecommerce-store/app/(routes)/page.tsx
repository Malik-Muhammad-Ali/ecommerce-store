import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: "true"});
    const billboard = await getBillboard("f887bb4b-d6ee-435f-8eb3-96c46986dff9");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title={"Featured Products"} products={products}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
