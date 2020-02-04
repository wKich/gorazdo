import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import Box from '../atoms/Box';
import WelcomeTitle from '../organisms/WelcomeTitle';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  z-index: 10;
  width: 100%;
  font-size: 1.25em;
  background-color: rgba(0, 0, 0, 0.4);
`;

const MenuButton = styled.button`
  padding: 1em;
  font-size: inherit;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const HeaderPlaceholder = styled.div`
  height: 5em;
`;
const Header = ({ children }) => {
  return (
    <>
      <HeaderPlaceholder />
      <FixedHeader>
        <Box fullHeight justify="space-between" alignItems="center">
          <Box>
            <MenuButton>
              <Box alignItems="center">
                <MdMenu />
                &nbsp;
                <span>Gorazdo</span>
                <b>studio</b>
              </Box>
            </MenuButton>
          </Box>
          <Box>Design</Box>
          <Box>for</Box>
          <Box>you</Box>
          <Box></Box>
        </Box>
      </FixedHeader>
    </>
  );
};

export default Header;
