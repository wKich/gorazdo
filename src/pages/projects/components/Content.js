import styled from 'styled-components';

export const Content = styled.div`
  border-radius: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(3)};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
`;
