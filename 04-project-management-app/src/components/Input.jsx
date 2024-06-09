import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
    const inputClasses = "w-full border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={inputClasses} type="text" {...props} ref={ref}/>
      ) : (
        <input className={inputClasses} type="text" {...props} ref={ref}/>
      )}
    </p>
  );
});

export default Input;
