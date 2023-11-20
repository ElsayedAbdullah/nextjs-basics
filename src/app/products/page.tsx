import ProductSkeleton from "@/components/ProductSkeleton";
import Link from "next/link";
import { Suspense } from "react";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Products = async () => {
  const { products } = await getProducts();

  return (
    <>
      <h1 className="text-3xl">Latest Products</h1>
      <br />
      <Suspense fallback={<ProductSkeleton />}>
        {products.map(({ id, title }: { id: string; title: string }) => (
          <div key={id}>
            <Link href={`/products/${id}`}>
              ID: {id} {"=>"} {title}
            </Link>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default Products;
