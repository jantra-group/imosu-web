import { ProductCard } from "./ProductCard";

interface ProductListProps {
      grid: string;
}
export function ProductList({grid}: ProductListProps) {
      return (
            <div className={`grid ${grid} gap-10`}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
            </div>
      )
}