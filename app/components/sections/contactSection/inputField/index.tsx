import { InputFieldProps } from "./types";

export default function InputField({
  label,
  placeholder,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 h-[79px] items-start ">
      <label className="font-primary font-normal leading-[29px] text-base text-white whitespace-nowrap">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#070827] border border-primary flex flex-1 items-center min-h-0 overflow-hidden px-3.5 py-2.5 rounded-lg shadow-sm w-full text-base text-[#3d3d3d] font-primary placeholder:text-[#3d3d3d] focus:outline-none focus:shadow-[0_0_0_1px_#a3ffdc]"
      />
    </div>
  );
}
