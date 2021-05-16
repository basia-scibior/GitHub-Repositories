import { FC } from "react";
import * as React from "react";
import { StyledCategory } from "./Category.styles";

interface CategoryProps {
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export const Category: FC<CategoryProps> = (props) => (
  <StyledCategory onClick={props.onClick}>
    {props.name}
    {props.isSelected && (
      <div
        onClick={(event) => {
          event.stopPropagation();
          props.onDelete?.();
        }}
      >
        X
      </div>
    )}
  </StyledCategory>
);
