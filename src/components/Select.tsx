/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Select, { SingleValue } from "react-select";
const CustomSelect = ({ options, label }: { options: any; label: string }) => {
  const [selectedOptions, setSelectedOptions] = useState<any>();
  const handleChange = (newValue: SingleValue<string>) => {
    setSelectedOptions(newValue);
  };

  return (
    <>
      {options.length ? (
        <div className="text-black">
          <label htmlFor={label} className="text-white py-2 block">
            {label}
          </label>
          <Select
            value={selectedOptions}
            onChange={handleChange}
            defaultValue={options[0]}
            options={options}
            id={label}
            name={label == "categories" ? "category" : label}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomSelect;
