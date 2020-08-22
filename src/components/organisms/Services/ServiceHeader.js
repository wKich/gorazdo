import React, { useMemo } from 'react';
import styled from 'styled-components';
import getStyle from '../../../utils/getStyle';
import Button from '../../atoms/Button';
import Box from '../../atoms/Box';
const KORTING_MAP = {
  s: 15,
  m: 25,
  l: 30,
};

const KORTING_GRADIENT_MAP = {
  s: 'linear-gradient(to right, #f7971e, #ffd200)',
  m: 'linear-gradient(to right, #ff00cc, #333399)',
  l: 'linear-gradient(to right, #ee0979, #ff6a00)',
};

const DEFAULT_PRICE = 200;
const Header = styled.div`
  position: relative;
  padding: ${getStyle('space', 2)};
  width: ${getStyle('sizes', 16)};
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: ${getStyle('colors', 'card')};
`;

const Korting = styled.div`
  width: ${getStyle('sizes', 3)};
  padding: ${getStyle('space', 1)} ${getStyle('space', 3)};
  transform-origin: left center;
  position: absolute;
  border-radius: ${getStyle('sizes', 4)};
  right: 0;
  text-align: center;
  bottom: 100%;
  color: ${props => (props.active ? 'white' : 'rgba(255,255,255,.4)')};
  font-weight: bold;
  filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(80%)')};
`;

const KortingParagraph = styled('p')`
  font-size: 0.7em;
  opacity: 0.7;
  margin: 0;
`;

const Slots = ({ slots, korting, ids }) => {
  const isKortingApplied = ids.length >= slots;
  const text = useMemo(() => {
    if (!slots) {
      return "Call us, we'll calculate your personal discount!";
    }
    if (isKortingApplied) {
      return `Your ${korting}% discount is on!`;
    }
    return `To get ${korting}% discount. Pick ${slots} cards to this promo-offer`;
  }, [slots, isKortingApplied, korting]);

  return (
    <>
      <KortingParagraph>{text}</KortingParagraph>
    </>
  );
};

const StyledOldPrice = styled('span')`
  color: ${getStyle('colors', 'font', color => color.alpha(0.5))};
  text-decoration: ${props => props.isKortingApplied && 'strike-through'};
`;

const StyledPrice = styled('span')``;

const Price = ({ korting, summ, isKortingApplied }) => {
  const youPay = isKortingApplied
    ? Math.floor((summ * (100 - korting)) / 100)
    : summ;
  return (
    <React.Fragment>
      <StyledOldPrice isKortingApplied={isKortingApplied}>
        Total price is {summ}€
      </StyledOldPrice>
      <StyledPrice>You pay {youPay}€</StyledPrice>
    </React.Fragment>
  );
};

const Heading = styled('h3')`
  margin: 0;
`;

const ServiceHeader = props => {
  const { docsMap, ids, slots, serviceCode } = props;
  const summ = ids.reduce((summ, id) => {
    return summ + (docsMap.get(id).price || DEFAULT_PRICE);
  }, 0);
  const gradient = KORTING_GRADIENT_MAP[serviceCode];
  const korting = KORTING_MAP[serviceCode];

  const isKortingApplied = ids.length >= slots;
  return (
    <Header>
      <Box fullWidth justify="space-between">
        <Box column>
          <Heading>{props.label}</Heading>
          <p>{props.description}</p>
        </Box>
        <Box column alignItems="flex-end">
          <Price
            korting={korting}
            summ={summ}
            isKortingApplied={isKortingApplied}
          />
        </Box>
      </Box>
      <Box justify="space-between">
        <Slots slots={slots} korting={korting} ids={ids} />
        <Button onClick={props.onClick}>Buy now</Button>
      </Box>

      <Korting active={isKortingApplied} style={{ backgroundImage: gradient }}>
        {korting}%
      </Korting>
    </Header>
  );
};

ServiceHeader.defaultProps = {
  title: 'Basic',
  description: 'The best one to start',
  price: 1000,
  discount: 30,
  onClick: e => alert('Hooray!'),
};

export default ServiceHeader;
