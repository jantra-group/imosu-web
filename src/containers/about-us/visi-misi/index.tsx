import Image from "next/image";

type VisionMissionCardProps = {
      title: string;
      description?: string;
      imageSrc: string;
      listItems?: string[];
};

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({ title, description, imageSrc, listItems }) => {
      return (
            <div
                  className="rounded-2xl p-6 md:p-10 relative bg-cover h-[400px] overflow-hidden cursor-pointer w-full shadow-lg"
                  style={{ backgroundImage: "url('/image/home/bg-card-shop.svg')" }}
            >
                  <h4 className="text-2xl md:text-[32px] text-white font-black">{title}</h4>
                  <div className="text-white mt-3 max-w-[480px]">
                        {listItems ? (
                              <ul className="list-decimal ps-5 text-sm md:text-base">
                                    {listItems.map((item, index) => (
                                          <li key={index}>{item}</li>
                                    ))}
                              </ul>
                        ) : (
                              <p className="text-base md:text-lg">{description}</p>
                        )}
                  </div>
                  <div className="absolute bottom-0 right-0 overflow-hidden">
                        <Image src={imageSrc} alt={title} width={title === "VISI" ? 200 : 160} height={title === "VISI" ? 200 : 160} className="w-fit h-fit opacity-80" />
                  </div>
            </div>
      );
};

export function VisiMisiSection() {
      return (
            <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2 text-center">
                        <h5 className="font-bold text-lg lg:text-2xl text-neutral-600">Driving Quality and Trust</h5>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                              Our Mission to Build Safer <br /> and Better <span className="text-primary-500">Automotive Solutions</span>
                        </h2>
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20">
                        <VisionMissionCard
                              title="VISI"
                              description="Menjadi pemimpin terdepan dalam penyediaan solusi otomotif berkualitas tinggi yang inovatif, aman, terpercaya, serta menciptakan pengalaman terbaik bagi pelanggan di Indonesia."
                              imageSrc="/image/aboutus/diamond.svg"
                        />

                        <VisionMissionCard
                              title="MISI"
                              imageSrc="/image/aboutus/goal.svg"
                              listItems={[
                                    "Menghadirkan produk otomotif premium dengan standar keamanan dan kenyamanan terbaik.",
                                    "Mengutamakan inovasi untuk performa dan daya tahan produk optimal.",
                                    "Memberikan layanan profesional, cepat, dan tepat demi kepuasan pelanggan.",
                                    "Menjalin hubungan saling menguntungkan dengan mitra bisnis melalui kepercayaan dan transparansi.",
                              ]}
                        />
                  </div>
            </div>
      );
}