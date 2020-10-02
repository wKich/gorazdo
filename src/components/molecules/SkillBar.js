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
  box-shadow: 0px 0px 25px  rgba(0, 0, 0, 0.2);
  
`;

const StyledHeader = styled('div')`
display: flex;
justify-content: space-evenly;
height: auto;
width: 45%;
margin-bottom: 15px;
text-align: center;
`

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
`

export const SkillBar = ({ label }) => {
  return (
    <StyledBox>
      <Typography variant="h500">
       { label }
      </Typography>
         <StyledHeader>
         <Badge /> 
         <Badge label= 'React' badgeColor= '#D8E5FB' textColor= '#3C7EEC'/>
         <Badge label= 'NodeJS' badgeColor= '#D6FEC3' textColor= '#5AC377' />
         </StyledHeader>
           <BadgeConteiner>
           <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> 
           <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> 
           <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> <Badge /> 
           <Badge /> 
           </BadgeConteiner>
    </StyledBox>
  );
};

SkillBar.propTypes = {
  label: PropTypes.string,
};

SkillBar.defaultProps = {
  label: 'Top Skills',
};