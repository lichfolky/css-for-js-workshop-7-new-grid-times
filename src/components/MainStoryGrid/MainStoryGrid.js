import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    gap: 0;    
    grid-template-columns:  2fr 1fr;
    justify-content: space-between;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {

    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child){
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-bottom: 1rem;
  }

  & > :not(:first-child){
    padding-top: 1rem;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} {
    ${StoryList}{
      display:grid;
      grid-template-columns:1fr 1fr 1fr 1fr;  
      gap:1rem;
        & > :not(:last-child){
          border-bottom: 0px solid ${COLORS.gray[300]};
          padding-bottom: 0;
        }

        & > :not(:first-child){
          padding-top: 0rem;
        }
      }
    }

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;

    ${StoryList}{
    display: flex;
    flex-direction: column;}
  }
  
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 1rem;
    padding-left: 16px;
  }
`;

export default MainStoryGrid;
