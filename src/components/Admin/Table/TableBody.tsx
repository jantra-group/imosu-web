import Image from "next/image";
import { LuEye } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { LuTrash2 } from "react-icons/lu";

interface TableBodyProps {
      columns: { key: string; label: string }[];
      data: any[];
}

export function TableBody({ columns, data }: TableBodyProps) {
      return (
            <tbody className="bg-white">
                  {data.map((row, index) => (
                        <tr key={index} className="border-b">
                              {columns.map((col) => (
                                    <td key={col.key} className="py-2 px-4 text-xs text-black max-w-[250px]">
                                          {col.key === "action" ? (
                                                <div className="flex gap-5">
                                                      <button>
                                                            <LuEye size={20} color="#CC0000" />
                                                      </button>
                                                      <button>
                                                            <TbEdit size={20} color="#CC0000" />
                                                      </button>
                                                      <button>
                                                            <LuTrash2 size={20} color="#CC0000" />
                                                      </button>
                                                </div>
                                          ) : col.key === "photo" ? (
                                                <div className="w-[50px] h-[50px] relative">
                                                      <Image
                                                            src={row[col.key]}
                                                            alt="Product Image"
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="rounded-md"
                                                            unoptimized={true}
                                                      />
                                                </div>
                                          ) : (
                                                row[col.key]
                                          )}
                                    </td>
                              ))}
                        </tr>
                  ))}
            </tbody>
      );
}
