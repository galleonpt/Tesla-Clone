import { FC } from "react";
import { DefaultOverlayContent } from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";
import { Container, Spacer } from "./styles";

export const Page: FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <>
          <div>
            {[
              "Model One",
              "Model Two",
              "Model Three",
              "Model Four",
              "Model Five",
              "Model Six",
              "Model Seven",
            ].map((modelName, index) => (
              <ModelSection
                key={index}
                className="colored"
                modelName={modelName}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName}
                    description="Order Online for Delivery"
                  />
                }
              />
            ))}
          </div>

          <Spacer />

          <UniqueOverlay />
        </>
      </ModelsWrapper>
    </Container>
  );
};
