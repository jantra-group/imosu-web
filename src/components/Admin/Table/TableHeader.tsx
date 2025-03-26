interface TableHeaderProps {
      columns: { key: string; label: string }[];
    }
    
    export function TableHeader({ columns }: TableHeaderProps) {
      return (
        <thead className="bg-primary-300 sticky top-0 z-50">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="py-3 px-5 text-left font-semibold text-sm text-black">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
      );
    }
  