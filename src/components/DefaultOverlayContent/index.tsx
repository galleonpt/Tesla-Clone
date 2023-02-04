import { FC } from "react";
import { Container, Heading, Buttons } from "./styles";

interface IDefaultOverlayContentProps {
  label: string;
  description: string;
}

export const DefaultOverlayContent: FC<IDefaultOverlayContentProps> = ({
  label,
  description,
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};
