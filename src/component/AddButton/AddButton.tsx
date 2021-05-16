import { FC } from "react";
import * as React from "react";
import { Button } from "./AddButton.styles";

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton: FC<AddButtonProps> = (props) => (
  <Button onClick={props.onClick}>+</Button>
);
