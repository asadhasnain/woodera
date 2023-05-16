import styled from "styled-components";

const Announcement = styled.div`
                    background-color: red;
                    `;


export interface  AnnouncementBarProps {
  message: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({message}) => {

  return (
        <Announcement data-testid="announcement-bar">
            {message}
        </Announcement>
        );

};