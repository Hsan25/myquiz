/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CustomSelect from "./Select";
import categorie from "../data/categories.json";
import { useNavigate } from "react-router-dom";
const Form: React.FC = () => {
  const navigate = useNavigate();

  type AmountOptions = {
    value: string;
    label: string;
  };

  const amountOptions: AmountOptions[] | string[] = Array.from({ length: 5 }, (_, idx) => {
    return {
      value: ((idx + 1) * 5).toString(),
      label: ((idx + 1) * 5).toString(),
    };
  }) as AmountOptions[];

  const categories: any = categorie.map((a) => ({
    value: a.id.toString(),
    label: a.name,
  }));
  categories.unshift({ value: "", label: "Random" });

  const difficulty: any = [
    { value: "", label: "Random" },
    { value: "easy", label: "easy" },
    { value: "medium", label: "medium" },
    { value: "hard", label: "hard" },
  ];

  const types = [
    { value: "", label: "Random" },
    { value: "multiple", label: "multiple" },
    { value: "boolean", label: "True or False" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const objFormData: any = Object.fromEntries(formData.entries());
    navigate("/question", { state: { params: objFormData } });
  };

  return (
    <>
      <div className="text-white py-5 text-lg text-center">
        Select the question option you want!
      </div>
      <form onSubmit={handleSubmit} className="pt-5 flex flex-col max-w-xl mx-auto">
        <div className="select sm:grid-cols-2  grid-cols-1 grid gap-3">
          <CustomSelect options={amountOptions} label="amount" />
          <CustomSelect options={categories} label="categories" />
          <CustomSelect options={difficulty} label="difficulty" />
          <CustomSelect options={types} label="type" />
        </div>
        <button
          type="submit"
          className="p-2 bg-purple-600 mt-10 ml-auto text-white hover:scale-105 transition-transform rounded">
          START
        </button>
      </form>
    </>
  );
};

export default Form;
