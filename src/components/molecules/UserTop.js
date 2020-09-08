import React from 'react';
import styled from 'styled-components';
import getStyle from 'utils/getStyle';
import Box from 'components/atoms/Box';
import { Avatar } from 'components/atoms/Avatar';
import { Typography } from 'components/atoms/Typography';
import { Text } from 'components/atoms/Text';

const StyledBox = styled(Box)`
  padding: ${getStyle('space', 2)};
  padding-top: ${getStyle('space', 6)};
`;

const Hgroup = styled('hgroup')`
  margin-left: ${getStyle('space', 1)};
`;

export const UserTop = ({ doc }) => {
  return (
    <StyledBox>
      <Avatar url={doc.get('avatar')} size="12" />
      <Hgroup>
        <Typography variant="h700">
          <Text doc={doc} path="firstName" />
          &nbsp;
          <Text doc={doc} path="lastName" />
        </Typography>
        <Typography variant="h300">
          <Text doc={doc} path="profession" />
        </Typography>
      </Hgroup>
    </StyledBox>
  );
};
