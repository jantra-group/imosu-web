import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface TableProps {
  columns: { key: string; label: string }[];
  data: any[];
}

export function Table({ columns, data }: TableProps) {
  return (
    <div className="rounded-xl shadow-custom-neutral overflow-y-auto overflow-scroll">
      <table className="w-full">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
}
