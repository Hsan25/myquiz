import categories from "../data/categories.json";

export const getCategory = (id: number) => {
  return categories.find((c) => c.id == id)?.name || '';
};
