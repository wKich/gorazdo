import React from 'react';
import styled from 'styled-components';
import getStyle from '../../../utils/getStyle';
import Button from '../../atoms/Button';
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
  padding: 2rem;
  position: relative;
  width: ${getStyle('sizes', 16)};
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Korting = styled.div`
  width: ${getStyle('sizes', 4)};
  padding: ${getStyle('space', 2)};
  transform-origin: left center;
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  font-weight: bold;
  transform: rotateX(15deg);
  filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(80%)')};
  opacity: ${props => (props.active ? 1 : 0.5)};
  text-decoration: ${props => (props.active ? 'none' : 'strike-through')};
`;
const Slots = ({ slots, korting, ids }) => {
  const isKortingApplied = ids.length >= slots;
  if (isKortingApplied) {
    return <p>Your {korting}% discount is on!</p>;
  }
  return (
    <p>
      To get {korting}% discount. Pick <b>{slots} cards</b> to this promo-offer
    </p>
  );
};

const StyledOldPrice = styled('h5')`
  color: ${getStyle('colors', 'font', color => color.alpha(0.5))};
  text-decoration: ${props => props.isKortingApplied && 'strike-through'};
`;

const StyledPrice = styled('h4')``;

const Price = ({ korting, summ, isKortingApplied }) => {
  const youPay = isKortingApplied
    ? Math.floor((summ * (100 - korting)) / 100)
    : summ;
  return (
    <div>
      <StyledOldPrice isKortingApplied={isKortingApplied}>
        Total price is {summ}€
      </StyledOldPrice>
      <StyledPrice>You pay {youPay}€</StyledPrice>
    </div>
  );
};
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
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Slots slots={slots} korting={korting} ids={ids} />
      <Price
        korting={korting}
        summ={summ}
        isKortingApplied={isKortingApplied}
      />
      <Korting active={isKortingApplied} style={{ backgroundImage: gradient }}>
        {korting}%
      </Korting>

      <Button onClick={props.onClick}>Buy now</Button>
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
