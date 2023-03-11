import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <Subscribe>
          <Button>Subscribe</Button>
          <a>Already a subscriber?</a>
        </Subscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}){
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  & ${ActionGroup}{
    display: none;
  }

  @media (${QUERIES.tabletAndUp}){
     margin-top: 48px;
     margin-bottom: 72px;

  }

  @media (${QUERIES.laptopAndUp}){
    display: grid;
    margin-top: 8px;
    margin-bottom: 83px;


    grid-template-columns: 1fr auto 1fr;

    & ${ActionGroup}{
      display: flex;
    }
  }


`;


const Subscribe = styled.div`
    display: none;

    a{
      text-decoration: underline;
      font-size: 0.875rem;
    }


  @media (${QUERIES.laptopAndUp}){
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: end;
    text-align: center;gap: 8px;
  }
`;

export default Header;
