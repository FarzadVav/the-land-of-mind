import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

type InputLabelPropsT = Omit<ComponentProps<"label">, "htmlFor"> & {
  htmlFor: string;
  required?: boolean;
}

function InputLabel({ required, className, htmlFor, children, ...p }: InputLabelPropsT) {
  return (
    <label
      title={required ? "Required" : undefined}
      className={cn(
        "font-bold not-first:mt-6 mb-2",
        className
      )}
      {...p}
    >
      {children}
      {required ? null : (
        <>
          {" "}
          <span className="text-body text-foreground-thin">(optional)</span>
          {" "}
        </>
      )}
      {":"}
    </label>
  )
}

export default InputLabel;