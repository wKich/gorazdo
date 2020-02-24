import styled from 'styled-components';
import getStyle from '../../../utils/getStyle';

export const Content = styled.div`
  border-radius: ${getStyle('space', 3)};
  padding: ${getStyle('space', 3)};
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
