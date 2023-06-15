import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: white;
  max-width: 300px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ProfileDescription = styled.div`
  padding: 30px 40px 0;
  color: black;
  padding-bottom: 30px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 80px;
  display: inline;
  margin-bottom: 12px;
`;

export const ProfileName = styled.h2`
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 12px;
`;

export const ProfileParagraph = styled.p`
  font-size: 0.8em;
  color: var(--secondary-text-light);
  margin-bottom: 6px;
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  border-top: solid;
  border-color: var(--border-color);
`;
