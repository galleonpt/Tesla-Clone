import { FC, useCallback, useRef, useState } from "react";
import ModelOverlay from "../ModelOverlay";
import ModelsContext, { ICarModel } from "../ModelsContext";
import { Container, OverlaysRoot } from "./styles";

const ModelsWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisteredModels] = useState<ICarModel[]>([]);

  const registerModel = useCallback((model: ICarModel) => {
    setRegisteredModels((prevState) => [...prevState, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((prevState) =>
      prevState.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item, index) => (
            <ModelOverlay key={index} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
