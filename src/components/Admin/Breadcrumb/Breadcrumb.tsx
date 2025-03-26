import Link from "next/link";

interface BreadcrumbItem {
      label: string;
      href: string;
}

interface BreadcrumbProps {
      items: BreadcrumbItem[];
}
export function Breadcrumb({ items }: BreadcrumbProps) {
      return (
            <div className="flex">
                  {items.map((item, index) => (
                        <li className="flex items-center text-base leading-6 font-medium" key={index}>
                              {item.href ? (
                                    <Link href={item.href} className=" hover:text-primary-300">
                                          {item.label}
                                    </Link>
                              ) : (
                                    <span className="text-primary-500">{item.label}</span>
                              )}
                              {index < items.length - 1 && <span className="text-neutral-950 text-lg leading-6 font-semibold mx-3">&bull;</span>}
                        </li>
                  ))}
            </div>
      )
}