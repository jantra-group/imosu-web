export function Bear() {
      return (
            <div className="absolute right-0 bottom-[300px] transition-transform duration-700 ease-out translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="relative">
                        {/* badan */}
                        <div className="relative flex items-center justify-center w-[250px]">
                              <div className="relative top-0 flex items-center justify-center">
                                    <div className="absolute border border-neutral-700 bg-[#BE902E] w-[125px] h-[74px] rounded-t-full bottom-0"></div>
                                    <div className="absolute border-x border-t border-neutral-700 bg-primary-500 w-[125px] h-[10px] bottom-0 z-20"></div>
                              </div>
                              <div className="absolute border border-neutral-700 bg-[#BE902E] w-[210px] h-[20px] rounded-3xl top-0 z-20 "></div>
                        </div>
                        <div className="bg-primary-500 relative top-0 border border-neutral-700 left-0 w-[125px] h-[105px] mx-auto p-6">
                              <div className="w-4 h-4 rounded-full bg-neutral-800 left-5 absolute"></div>
                              <div className="w-4 h-4 rounded-full bg-neutral-800 right-5 absolute"></div>
                              <div className="w-[32px] h-[18px] rounded-t-1 rounded-b-full bg-neutral-800 absolute bottom-8 left-11"></div>
                        </div>

                        {/* left hand */}
                        <div className=" absolute left-0 w-[36px] h-[90px] bg-primary-500 border border-neutral-800 rounded-full top-10">
                              <div className="relative">
                                    <div className="w-[1px] h-[20px] absolute bg-neutral-800 left-3"></div>
                                    <div className="w-[1px] h-[20px] absolute bg-neutral-800 right-3"></div>
                              </div>
                        </div>

                        {/* right hand */}
                        <div className="absolute right-0 -rotate-90 w-[36px] h-[90px] bg-primary-500 border border-neutral-800 rounded-full top-10 z-50 
            transition-all duration-500 group-focus:right-[80px]">
                              <div className="relative">
                                    <div className="w-[1px] h-[20px] absolute bg-neutral-800 left-3 top-0"></div>
                                    <div className="w-[1px] h-[20px] absolute bg-neutral-800 right-3 top-0"></div>
                              </div>
                        </div>

                  </div>
            </div>
      );
}
