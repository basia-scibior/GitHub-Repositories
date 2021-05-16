import { FC } from "react";
import * as React from "react";
import { Title } from "./CategoriesList.styles";
import { useCategories } from "../../hook/useCategories";
import { Category } from "../Category/Category";

export const CategoriesList: FC = (props) => {
  const [categories] = useCategories();

  return (
    <div>
      <Title>Categories</Title>
      {categories.map((category, index) => (
        <Category key={index} name={category} />
      ))}
    </div>
  );
};
