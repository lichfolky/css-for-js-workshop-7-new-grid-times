import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 48px;
  display: grid;
  grid-template-columns: 1fr;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(2,1fr);

  }
`;

const MarketsSection = styled.section`
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2,1fr);

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4,1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3,1fr);

  }

`;


const SportsSection = styled.section`
  overflow-y: auto;
`;

const SportsStories = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid; 
  gap:1rem;
  width: 200%;
  padding-bottom:1rem;


`;

export default SpecialtyStoryGrid;
