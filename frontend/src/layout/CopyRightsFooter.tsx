import styled from "styled-components";

const CopyRight = styled.p`
                    `;


export interface  CopyRightsFooterProps {
  message: string;
}

export const CopyRightsFooter: React.FC<CopyRightsFooterProps> = ({message}) => {

  return (
        <CopyRight data-testid="copyrights-footer">
            {message}
        </CopyRight>
        );

};