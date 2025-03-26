interface TextInputProps {
  label: string;
  type: string;
  columnType: string; // Bisa "input" atau "textarea"
  placeholder: string;
}

export function TextInput({ label, type, placeholder, columnType }: TextInputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm text-[#191717] font-medium mb-1">{label}</label>

      {columnType === "input" ? (
        <input
          type={type}
          placeholder={placeholder}
          className="border px-3 py-2 text-sm rounded-lg w-full focus:outline-none"
        />
      ) : (
        <textarea
          rows={5}
          placeholder={placeholder}
          className="border px-3 py-2 text-sm rounded-lg w-full focus:outline-none"
        ></textarea>
      )}
    </div>
  );
}
