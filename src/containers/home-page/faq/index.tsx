'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
      {
            question: "Apa keunggulan produk iMosu dibandingkan merek lain?",
            answer:
                  "iMosu menawarkan bushing suspensi berbahan poliuretan berkualitas tinggi yang 100% diproduksi di Indonesia dan didukung garansi seumur hidup.",
      },
      {
            question: "Kenapa harus memilih bushing poliuretan dari iMosu?",
            answer: "Bushing poliuretan iMosu lebih tahan lama, fleksibel, dan mampu menghadapi kerasnya kondisi jalan Indonesia dibandingkan bahan karet konvensional.",
      },
      {
            question: "Bagaimana proses klaim garansi di iMosu?",
            answer: "Hubungi layanan pelanggan kami dengan menyertakan bukti pembelian dan informasi produk untuk memproses klaim garansi dengan mudah.",
      },
      {
            question: "Apakah ada layanan konsultasi sebelum pembelian?",
            answer: "Tentu saja! Tim profesional kami siap memberikan rekomendasi produk terbaik sesuai kebutuhan kendaraan Anda.",
      },
      {
            question: "Di mana bisa mendapatkan produk iMosu?",
            answer: "Produk iMosu dapat dipesan secara online, melalui media sosial kami atau menghubungi 0811-1168-664.",
      },
];

export function FAQ() {
      const [openIndex, setOpenIndex] = useState<number | null>(null);

      const toggleFAQ = (index: number) => {
            setOpenIndex(openIndex === index ? null : index);
      };

      return (
            <div className="flex flex-col gap-4 md:gap-8">
                  <h3 className="text-2xl md:text-[32px] font-bold text-black text-center mb-4">FAQ</h3>
                  <div className="flex flex-col gap-5">
                        {faqs.map((faq, index) => (
                              <div key={index} className={`overflow-hidden shadow-md rounded-2xl ${openIndex === index ? "bg-primary-500 text-white" : "bg-[#EEEDED] text-black"}`}>
                                    {/* BUTTON */}
                                    <button
                                          className={`rounded-2xl w-full flex justify-between items-center p-5 text-left transition-all duration-300`}
                                          onClick={() => toggleFAQ(index)}
                                    >
                                          <p className="text-sm md:text-lg font-semibold">{faq.question}</p>
                                          {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                                    </button>

                                    {/* ANSWER (DENGAN ANIMASI SMOOTH) */}
                                    <div
                                          className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-32 opacity-100 px-5 py-3" : "max-h-0 opacity-0 p-0"
                                                } `}
                                    >
                                          <p className="overflow-hidden text-sm md:text-lg">{faq.answer}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}
