import { createContext, ReactNode, RefObject } from "react";

export interface ICarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: RefObject<HTMLElement>;
}

interface IModelsContext {
  wrapperRef: RefObject<HTMLElement>;
  registeredModels: ICarModel[];
  registerModel: (model: ICarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => ICarModel | null;
}

export default createContext<IModelsContext>({} as IModelsContext);
