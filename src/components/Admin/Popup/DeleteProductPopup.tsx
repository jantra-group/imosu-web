interface DeleteProductPopupProps {
      onClose: () => void;
}

export function DeleteProductPopup({ onClose }: DeleteProductPopupProps) {
      return (
            <div className="bg-black bg-opacity-50 fixed w-full h-full z-50 inset-0 flex items-center justify-center">
                  <div className="flex flex-col gap-5 bg-white rounded-xl p-5">
                        <p className="font-extrabold text-lg text-black">Hapus</p>
                        <p className="text-sm text-black">Apakah kamu yakin ingin menghapus produk ini?</p>
                        <div className="flex gap-2 justify-end mt-5">
                              {/* Menutup Popup */}
                              <button
                                    className="border border-neutral-600 rounded-2xl text-black text-sm font-semibold px-10 hover:bg-neutral-600 hover:text-white py-2"
                                    onClick={onClose}
                              >
                                    Batal
                              </button>
                              <button
                                    className="bg-primary-500 rounded-2xl text-sm font-semibold px-10 text-white py-2"
                                    onClick={onClose}
                              >
                                    Hapus
                              </button>
                        </div>
                  </div>
            </div>
      )
}