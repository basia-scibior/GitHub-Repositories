import { useLocalStorage } from "react-use";
import { Category } from "../models/Category";

export const useCategories = () => {
  const [categories, setCategories] = useLocalStorage<Category[]>(
    "categories",
    ["React", "Java", "JS", "PHP"]
  );

  return [categories || [], setCategories] as const;
};
