const ProductSkeleton = () => {
  return (
    <ul className="space-y-3">
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index} className="h-7 animate-pulse bg-gray-600 rounded-md" />
      ))}
    </ul>
  );
};

export default ProductSkeleton;
