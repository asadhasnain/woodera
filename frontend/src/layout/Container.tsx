import { ReactNode } from "react";
import styled from "styled-components";

const Root = styled.div`
                    background-color: green
                    `;


export interface  ContainerProps {
  children: ReactNode[] | ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children}) => {

  return (
        <Root data-testid="container">
          {children}
        </Root>
        );

};