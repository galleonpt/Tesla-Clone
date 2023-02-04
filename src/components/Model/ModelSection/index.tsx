import { FC, HTMLAttributes, ReactNode, useRef, useEffect } from "react";
import useModel from "../useModel";
import { Container } from "./styles";

interface IModelSectionProps extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
  children?: JSX.Element;
}

const ModelSection: FC<IModelSectionProps> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [registerModel, modelName, overlayNode]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
