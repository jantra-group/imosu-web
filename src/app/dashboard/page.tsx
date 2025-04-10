import { Table } from "@/components/Admin/Table/Table";
import { CgNotes } from "react-icons/cg";

export default function Dashboard() {
      const columns = [
            { key: "no", label: "No" },
            { key: "transactionNumber", label: "Nomor Transaksi" },
            { key: "total", label: "Total" },
            // { key: "carType", label: "Tipe Mobil" },
            // { key: "price", label: "Harga" },
            { key: "action", label: "Action" },
      ];

      const data = [
            {
                  no: 1,
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 2,
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 3,
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 4,
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
      ];

      return (
            <main className="p-5 w-full max-w-[1440px] flex justify-between gap-5 overflow-scroll">
                  <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] font-bold text-black">Dashboard</h1>
                        <p className="text-lg text-black">Recent Transactions</p>
                        <Table columns={columns} data={data} />
                  </div>

                  {/* Orders Card */}
                  <div className="bg-white rounded-xl shadow-custom-dark p-5 flex flex-col w-[250px] h-fit">
                        <div className="flex justify-between">
                              <p className="text-sm text-black">Orders</p>
                              <CgNotes size={32} color="#000000" />
                        </div>

                        <h1 className="text-6xl mt-3 font-extrabold text-primary-500">{data.length}</h1>
                  </div>
            </main>
      );
}
