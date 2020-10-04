import React from 'react';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import { Avatar } from 'components/atoms/Avatar';
import { Typography } from 'components/atoms/Typography';
import { Text } from 'components/atoms/Text';

const StyledBox = styled(Box)`
  padding: ${(props) => props.theme.spacing(2)};
  padding-top: ${(props) => props.theme.spacing(6)};
`;

const Hgroup = styled('hgroup')`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

export const UserTop = ({ doc }) => {
  return (
    <StyledBox>
      <Avatar url={doc.get('avatar')} size="12" />
      <Hgroup>
        <Typography variant="h6">
          <Text doc={doc} path="firstName" />
          &nbsp;
          <Text doc={doc} path="lastName" />
        </Typography>
        <Typography variant="h3">
          <Text doc={doc} path="profession" />
        </Typography>
      </Hgroup>
    </StyledBox>
  );
};
