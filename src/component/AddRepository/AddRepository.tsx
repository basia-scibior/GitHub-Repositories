import { FC, useState } from "react";
import * as React from "react";
import { AddButton } from "../AddButton/AddButton";
import { useCategories } from "../../hook/useCategories";
import { Category } from "../Category/Category";
import { Container, CategoriesContainer } from "./AddRepository.styles";
import { Category as CategoryModel } from "../../models/Category";
import { Repository } from "../../models/Repository";

interface AddCategoryProps {
  repositoryCategory?: Repository["category"];
  onSelect: (category: CategoryModel) => void;
  onDelete: () => void;
}

export const AddRepository: FC<AddCategoryProps> = (props) => {
  const [categories] = useCategories();
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>();

  return (
    <Container>
      <AddButton onClick={() => setIsButtonClicked(!isButtonClicked)} />
      <CategoriesContainer>
        {isButtonClicked &&
          categories.map((category, index) => (
            <Category
              key={index}
              onClick={() => props.onSelect(category)}
              name={category}
              isSelected={props.repositoryCategory === category}
              onDelete={props.onDelete}
            />
          ))}
      </CategoriesContainer>
    </Container>
  );
};
