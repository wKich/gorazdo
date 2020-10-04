import styled from 'styled-components';

import { CARD_GAP, CARD_WIDTH } from '../constants';

export const TheGrid = styled('div')`
  display: grid;
  grid-column-gap: ${(props) => props.theme.spacing(CARD_GAP)};
  overflow: hidden;
  grid-row-gap: ${(props) => props.theme.spacing(CARD_GAP)};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.theme.spacing(CARD_WIDTH + 2 * CARD_GAP)}, 1fr)
  );
`;
