import styled from 'styled-components';
import getStyle from '../../../utils/getStyle';
import { CARD_GAP, CARD_WIDTH } from '../constants';

export const TheGrid = styled('div')`
  display: grid;
  grid-column-gap: ${getStyle('sizes', CARD_GAP)};
  overflow: hidden;
  grid-row-gap: ${getStyle('sizes', CARD_GAP)};
  grid-template-columns: repeat(
    auto-fill,
    minmax(${getStyle('sizes', CARD_WIDTH + 2 * CARD_GAP)}, 1fr)
  );
`;
