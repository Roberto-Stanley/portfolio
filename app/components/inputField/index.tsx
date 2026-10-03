import { twMerge } from "tailwind-merge";
import { InputFieldProps } from "./types";
import Text from "@/app/components/text";

export default function InputField({ label, error, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 items-start">
      <Text
        type="body"
        weight="medium"
        tag="label"
        className="text-content-primary"
      >
        {label}
      </Text>
      <input
        {...props}
        className={twMerge(
          "bg-background border border-primary flex flex-1 items-center min-h-0 overflow-hidden px-3.5 py-2.5 rounded-lg shadow-sm w-full text-base text-content-primary font-primary placeholder:text-decorative focus:outline-none focus:shadow-[0_0_0_1px_#a3ffdc]",
          error && "border-red-500"
        )}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}
