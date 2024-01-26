import { forwardRef } from "react";

const Input = forwardRef(({ label, type, ...props }, ref) => {
  const labelClasses = "text-sm font-bold uppercase text-stone-500";
  const inputClasses =
    "w-full p-1 border-b-2 mb-4 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div className="flex flex-col items-start gap-2">
      {type !== "textarea" ? (
        <>
          <label className={labelClasses}>{label}</label>
          <input type={type} {...props} ref={ref} className={inputClasses} />
        </>
      ) : (
        <>
          <label className={labelClasses}>{label}</label>
          <textarea ref={ref} className={inputClasses}></textarea>
        </>
      )}
    </div>
  );
});

export default Input;
