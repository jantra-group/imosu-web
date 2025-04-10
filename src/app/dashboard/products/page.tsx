'use client';
import { useEffect, useState, useCallback } from "react"; // Import useCallback
import { Breadcrumb } from "@/components/Admin/Breadcrumb/Breadcrumb";
import { Table } from "@/components/Admin/Table/Table";
import { getProductsFromSupabase } from "@/actions/supabase/getProduct";
import { LoadingSkeleton } from "@/components/Skeleton/Loading";
import { SearchButton } from "@/components/Button/SearchButton";
import { HeroDropdown } from "@/components/Dropdown/HeroDropdown";
import { fetchCategories } from "@/actions/supabase/categories";
import { fetchCarBrand } from "@/actions/supabase/carBrand";
import { fetchCarType as fetchCarTypesFromServer } from "@/actions/supabase/carType"; // Rename to avoid conflict

export default function DashboardProductsPage() {
      const [categories, setCategories] = useState<string[]>([]);
      const [carBrand, setCarBrand] = useState<string[]>([]);
      const [carTypeOptions, setCarTypeOptions] = useState<string[]>([]); // Renamed for clarity
      const [selectedCategories, setSelectedCategories] = useState<string | null>(null);
      const [selectedCarBrand, setSelectedCarBrand] = useState<string | null>(null);
      const [selectedCarType, setSelectedCarType] = useState<string | null>(null);
      const [products, setProducts] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

      const breadcrumbItems = [
            { label: 'Dashboard', href: '' },
            { label: 'Semua Produk', href: '/dashboard/products' }
      ];

      const columns = [
            { key: "no", label: "No" },
            { key: "photo", label: "Foto Produk" },
            { key: "sku", label: "SKU" },
            { key: "productName", label: "Nama Produk" },
            { key: "carType", label: "Tipe Mobil" },
            { key: "price", label: "Harga" },
            { key: "action", label: "Action" },
      ];

      useEffect(() => {
            async function fetchData() {
                  setLoading(true);
                  try {
                        const categoriesData = await fetchCategories();
                        const carBrandData = await fetchCarBrand();

                        setCategories(categoriesData);
                        setCarBrand(carBrandData);

                        const initialCarTypes = await fetchCarTypesFromServer(null); // Fetch all initially or an empty array
                        setCarTypeOptions(initialCarTypes);

                        const data = await getProductsFromSupabase();
                        if (data && !data.error) {
                              const formattedProducts = data.map((product: any, index: number) => ({
                                    no: index + 1,
                                    photo: Array.isArray(product.image_product) && product.image_product.length > 0
                                          ? product.image_product[0]
                                          : '/image/product-detail/product-dummy.svg',
                                    sku: product.sku,
                                    productName: product.name_product,
                                    carType: product.car_type || "Tidak Ada Tipe Mobil",
                                    price: `Rp ${product.price_product.toLocaleString('id-ID').replace(/,/g, '.')}`,
                                    action: "Action",
                              }));
                              setProducts(formattedProducts);
                        } else {
                              setError(data?.error || "Gagal mengambil produk.");
                        }
                  } catch (err) {
                        setError("Terjadi kesalahan saat mengambil produk.");
                  } finally {
                        setLoading(false);
                  }
            }

            fetchData();
      }, []);

      // Fetch car types based on the selected car brand
      useEffect(() => {
            async function updateCarTypes() {
                  setLoading(true);
                  try {
                        const newCarTypes = await fetchCarTypesFromServer(selectedCarBrand);
                        setCarTypeOptions(newCarTypes);
                  } catch (error) {
                        console.error("Error fetching car types:", error);
                        setError("Gagal memperbarui daftar tipe mobil.");
                  } finally {
                        setLoading(false);
                  }
            }

            if (selectedCarBrand) {
                  updateCarTypes();
            } else {
                  setCarTypeOptions([]); // Or fetch all initially if you prefer
                  setSelectedCarType(null); // Reset selected type
            }
      }, [selectedCarBrand]);

      const handleCategoryChange = (value: string) => {
            setSelectedCategories(value);
            console.log("Kategori dipilih:", value);
      };

      const handleBrandChange = (value: string) => {
            setSelectedCarBrand(value);
            console.log("Merk dipilih:", value);
            setSelectedCarType(null); // Reset selected type when brand changes
      };

      const handleTypeChange = (value: string) => {
            setSelectedCarType(value);
            console.log("Tipe dipilih:", value);
      };

      const handleSearch = async () => {
            setLoading(true);
            try {
                  let filteredProducts = await getProductsFromSupabase();

                  // Filter berdasarkan kategori
                  if (selectedCategories) {
                        filteredProducts = filteredProducts.filter((product: any) =>
                              product.name_product?.toLowerCase().includes(selectedCategories.toLowerCase())
                        );
                  }

                  // Filter berdasarkan merk mobil
                  if (selectedCarBrand) {
                        filteredProducts = filteredProducts.filter((product: any) =>
                              product.car_brand?.toLowerCase().includes(selectedCarBrand.toLowerCase())
                        );
                  }

                  // Filter berdasarkan tipe mobil
                  if (selectedCarType) {
                        filteredProducts = filteredProducts.filter((product: any) =>
                              product.car_type?.toLowerCase().includes(selectedCarType.toLowerCase())
                        );
                  }

                  const formattedProducts = filteredProducts.map((product: any, index: number) => ({
                        no: index + 1,
                        photo: Array.isArray(product.image_product) && product.image_product.length > 0
                              ? product.image_product[0]
                              : '/image/product-detail/product-dummy.svg',
                        sku: product.sku,
                        productName: product.name_product,
                        carType: product.car_type || "Tidak Ada Tipe Mobil",
                        price: `Rp ${product.price_product.toLocaleString('id-ID').replace(/,/g, '.')}`,
                        action: "Action", // Ganti dengan aksi sesuai kebutuhan
                  }));

                  // Update state dengan produk yang sudah difilter
                  setProducts(formattedProducts);
            } catch (err) {
                  setError("Terjadi kesalahan saat melakukan pencarian produk.");
            } finally {
                  setLoading(false);
            }
      }


      return (
            <main className="p-5 flex flex-col gap-3 max-w-[1440px] w-full overflow-scroll scrollbar-hide">
                  <h1 className="text-[32px] font-bold text-black">Semua Produk</h1>
                  <Breadcrumb items={breadcrumbItems} />

                  <div className="flex gap-3 mb-5">
                        <HeroDropdown
                              placeholder="Kategori"
                              options={categories}
                              stylingCustom="border border-neutral-400 shadow-none bg-transparent rounded-xl"
                              value={selectedCategories}
                              onChange={handleCategoryChange}
                        />
                        <HeroDropdown
                              placeholder="Merk"
                              options={carBrand}
                              stylingCustom="border border-neutral-400 shadow-none bg-transparent rounded-xl"
                              value={selectedCarBrand}
                              onChange={handleBrandChange}
                        />
                        <HeroDropdown
                              placeholder="Tipe"
                              options={carTypeOptions} // Use the fetched and filtered car type options
                              stylingCustom="border border-neutral-400 shadow-none bg-transparent rounded-xl"
                              value={selectedCarType}
                              onChange={handleTypeChange}
                        />
                        <SearchButton onClick={handleSearch} />
                  </div>

                  <Table columns={columns} data={products} />
            </main>
      );
}