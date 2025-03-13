interface TabProps {
      categories: string[];
      activeCategory: string;
      onTabClick: (category: string) => void;
  }

  
export function ProductTab({ categories, activeCategory, onTabClick }: TabProps) {
      return (
            <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-between gap-3">
                        {categories.map((category) => (
                              <button key={category}
                                    className={`px-3 py-1 md:px-8 text-xs md:text-base ${activeCategory === category ? 'bg-primary-500 rounded-md text-white' : 'text-black'}`}
                                    onClick={() => onTabClick(category)}
                              >
                                    {category}
                              </button>
                        ))
                        }
                  </div>
            </div>
      )
}