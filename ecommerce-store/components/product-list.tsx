import React from "react";

import {Product} from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string;
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id}>
                        <ProductCard key={product.id} data={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
