import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'components/atoms/Typography';
import { Badge } from 'components/atoms/Badge';

const StyledBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 536px;
  padding-top: 15px;
  border-radius: 32px;
  background: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  width: 45%;
  margin-bottom: 15px;
  text-align: center;
`;

const BadgeConteiner = styled('div')`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  flex: auto;
  border-top: 1px solid rgba(50, 0, 0, 0.1);
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
`;

const DEFAULT_BADGES_MOCK = [
  {
    label: 'Javascript',
    badgeColor: '#ffaabb',
    textColor: '#3C7EEC',
  },
  {
    label: 'React',
    badgeColor: '#D8E5FB',
    textColor: '#002233',
  },
  {
    label: 'NodeJs',
    badgeColor: '#D6FEC3',
    textColor: '#5AC377',
  },
];

export const SkillBar = ({ label, topBadges, badges }) => {
  return (
    <StyledBox>
      <Typography variant="h500">{label}</Typography>
      <StyledHeader>
        {topBadges.map((badgeItem) => (
          <Badge
            key={badgeItem.label}
            label={badgeItem.label}
            badgeColor={badgeItem.badgeColor}
            textColor={badgeItem.textColor}
          />
        ))}
      </StyledHeader>
      <BadgeConteiner>
        {badges.map((badgeLabel) => (
          <Badge
            key={badgeLabel}
            label={badgeLabel}
            badgeColor="#ccc"
            textColor="#333"
          />
        ))}
      </BadgeConteiner>
    </StyledBox>
  );
};

SkillBar.propTypes = {
  label: PropTypes.string,
  topBadges: PropTypes.array,
  badges: PropTypes.array,
};

SkillBar.defaultProps = {
  label: 'Top Skills',
  topBadges: DEFAULT_BADGES_MOCK,
  badges: [
    'Javascript',
    'Logitech',
    'Sunny day',
    'Jar of Jam',
    'Little kitten',
  ],
};
