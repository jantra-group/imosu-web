'use client';
import { useState } from "react";
import { DropdownInput } from "@/components/Admin/Form/DropdownInput";
import { RadioInput } from "@/components/Admin/Form/RadioInput";
import { TextInput } from "@/components/Admin/Form/TextInput";
import { UploadPhoto } from "@/components/Admin/Form/UploadPhoto";
import { FaX } from "react-icons/fa6";

export default function AddProductPage() {
      const [selectedBrand, setSelectedBrand] = useState(""); // State untuk merk mobil
      const [selectedType, setSelectedType] = useState(""); // State untuk tipe mobil
      const [carList, setCarList] = useState<string[]>([]); // Daftar kombinasi merk+tipe mobil

      const handleAddCar = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (selectedBrand && selectedType) {
                  setCarList((prev) => [...prev, `${selectedBrand} ${selectedType}`]); // Tambahkan merk + tipe
                  console.log("list", setCarList)
                  setSelectedBrand(""); // Reset dropdown setelah tambah
                  setSelectedType("");
            }
      };


      return (
            <main className="p-5 flex flex-col gap-3 max-w-[1440px] w-full overflow-scroll">
                  <h1 className="text-[32px] font-bold text-black">Tambah Produk</h1>
                  <form action="" className="flex flex-col gap-5 w-full">
                        <div className="flex gap-10 w-full">
                              <TextInput label="Nama Produk" columnType="input" type="text" placeholder="Masukkan nama produk" />
                              <TextInput label="Nomor SKU" columnType="input" type="text" placeholder="Masukkan nomor sku" />
                        </div>
                        <div className="flex gap-10 w-full">
                              <DropdownInput label="Kategori Produk" options={['Bushing Arm', 'Support', 'Stabilizer Bush']} />
                              <TextInput label="Harga Produk" columnType="input" type="text" placeholder="Masukkan harga produk" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                              <p className="text-base font-semibold text-black">Jenis Mobil</p>
                              <div className="flex gap-5 w-full items-center">
                                    <DropdownInput
                                          label="Merk Mobil"
                                          options={["Honda", "Toyota", "BMW", "Mercedes"]}
                                          value={selectedBrand}
                                          onValueChange={(value) => setSelectedBrand(value)}
                                    />
                                    <DropdownInput
                                          label="Tipe Mobil"
                                          options={["Civic", "Corolla", "320i", "C-Class"]}
                                          value={selectedType}
                                          onValueChange={(value) => setSelectedType(value)}
                                    />
                                    <button
                                          onClick={handleAddCar}
                                          className="bg-primary-500 text-white mt-5 text-sm rounded-lg py-2 px-8"
                                    >
                                          Add
                                    </button>
                              </div>
                        </div>

                        {/* Car List */}
                        <div className="flex flex-row gap-2">
                        {carList.map((car, index) => (
                                    <div
                                          key={index}
                                          className="bg-primary-500 text-xs gap-10 text-white py-2 px-4 rounded-lg flex justify-between items-center"
                                    >
                                          <span>{car}</span>
                                          <button
                                                onClick={() =>
                                                      setCarList((prev) => prev.filter((item) => item !== car))
                                                }
                                          >
                                                <FaX size={12} color="#FFFFFF"/>
                                          </button>
                                    </div>
                              ))}
                        </div>

                        <div className="flex gap-10 w-full">
                              <DropdownInput label="Merk Dagang" options={['Otosaka', 'Deimdra', 'Decatra']} />
                              <TextInput label="Jumlah Stok" columnType="input" type="text" placeholder="Masukkan jumlah stok" />
                        </div>

                        <RadioInput label="Status Produk" name="statusProduct" options={[
                              { label: 'Aktif', value: 'active' },
                              { label: 'Tidak Aktif', value: 'nonActive' }
                        ]} />

                        <UploadPhoto />
                        <TextInput label="Deskripsi Produk" type="text" columnType="textarea" placeholder="Masukkan deskripsi produk" />

                        <div className="flex justify-end gap-3 mt-5">
                              <button className="bg-white border border-neutral-400 text-base text-black py-2 px-20 rounded-lg">
                                    Batal
                              </button>
                              <button className="bg-decatra-500 hover:bg-decatra-700 text-base text-white py-2 px-16 rounded-lg">
                                    Simpan Produk
                              </button>
                        </div>
                  </form>
            </main >
      )
}