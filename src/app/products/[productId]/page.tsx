import Button from "@/components/Button";
import Image from "next/image";

async function getSingleProduct(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { title, thumbnail } = await getSingleProduct(params.productId);

  return (
    <div>
      <h1>Product ID: {params.productId}</h1>
      <h2>{title}</h2>
      <Image src={thumbnail} alt={title} width={500} height={500} priority />
      <Button text="add to cart" />
    </div>
  );
}
