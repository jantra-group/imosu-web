import Image from "next/image";
type StatisticProps = {
      value: string;
      label: string;
};

const StatisticCard = ({ value, label }: StatisticProps) => (
      <div className="w-full h-full md:w-[130px] md:h-[125px] bg-primary-500 p-5 flex flex-col">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl font-robotoCondensed">{value}</h2>
            <p className="text-xs text-white mt-2">{label}</p>
      </div>
);

export function CoverageSection() {
      return (
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <Image src="/image/aboutus/peta-jawa.svg" alt="peta-jawa" width={550} height={362} />
                  <div className="flex flex-col gap-5 lg:gap-3 lg:max-w-[600px]">
                        <h3 className="text-2xl md:text-[32px] font-extrabold text-black">
                              Jangkauan Luas <br /> Hadir <span className="text-primary-500">di Seluruh Pulau Jawa</span>
                        </h3>
                        <p className="text-sm md:text-base text-black">
                              Dengan cabang yang tersebar strategis, layanan kami lebih dekat dan mudah diakses. Pastikan kendaraan Anda
                              selalu dalam kondisi prima dengan dukungan profesional terbaik dari iMosu, di mana pun Anda berada.
                        </p>
                        <div className="flex flex-row gap-3 md:gap-5">
                              <StatisticCard value="12" label="Years of Experience" />
                              <StatisticCard value="80" label="Office Worldwide" />
                              <StatisticCard value="100" label="Workers Employed" />
                        </div>
                  </div>
            </div>
      );
}
