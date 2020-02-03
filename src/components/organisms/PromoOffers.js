import React, { useState } from 'react';
import Box from '../atoms/Box';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import data from './data';
import { color, variant } from 'styled-system';

const dataList = data.map(item => ({
  ...item,
  id: `id${item.id}`,
}));

const dataObj = dataList.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

const Header = styled(Box)`
  padding: 2rem;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const AllFeatures = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  bottom: 0;
  overflow-y: auto;
`;

const List = styled.div`
  min-height: 100px;
  background: rgba(0, 0, 0, 0.4);
`;

const PromoOffer = props => {
  return (
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <Box column>
          <Header>
            <code>[{props.id}]</code>
            {props.label}
          </Header>
          <List ref={provided.innerRef}>
            {props.ids.map((id, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <MiniCard {...dataObj[id]} index={index} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        </Box>
      )}
    </Droppable>
  );
};

const StyledMiniCardWrapper = styled('div')(
  variant({
    scale: 'cards',
    variants: {
      // magic
      unit1: {},
    },
  })
);
const StyledMiniCard = styled.div`
  /* background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  background-color: #8ec5fc;
  background-image: linear-gradient(-30deg, #8ec5fc 0%, #e0c3fc 100%); */

  width: 240px;
  position: relative;
  border-radius: 6px;
  padding: 12px;
  padding-top: 36px;
  font-size: 0.8em;
`;
const StyledIndex = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledId = styled.span`
  position: absolute;
  left: 6px;
  top: 6px;
  background-color: white;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-size: 0.5em;
  font-weight: bold;
  justify-content: center;
`;
const MiniCard = props => {
  const { albumId, id, title, url, thumbnailUrl, index } = props;
  return (
    <StyledMiniCardWrapper variant={`unit${albumId}`}>
      <StyledMiniCard>
        <p>{title}</p>
        {Number.isInteger(index) && <StyledIndex>{index + 1}</StyledIndex>}
        {<StyledId>{id}</StyledId>}
      </StyledMiniCard>
    </StyledMiniCardWrapper>
  );
};

const insertAtIndex = (arr, index, item) => {
  const shallowCopy = [...arr];
  shallowCopy.splice(index, 0, item);
  return shallowCopy;
};
const PromoOffers = props => {
  const [promo, setPromo] = useState({
    market: dataList.map(item => item.id),
    s: [],
    m: [],
    l: [],
    xl: [],
  });

  const handleDragEnd = props => {
    console.log(props);
    const { draggableId, source, destination } = props;
    if (source && destination) {
      setPromo({
        ...promo,
        [source.droppableId]: promo[source.droppableId].filter(
          id => id !== draggableId
        ),
        [destination.droppableId]: [
          ...new Set(
            insertAtIndex(
              promo[destination.droppableId],
              destination.index,
              draggableId
            )
          ),
        ],
      });
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box>
        <PromoOffer id="s" label="Basic" ids={promo.s} />
        <PromoOffer id="m" label="Recommended" ids={promo.m} />
        <PromoOffer id="l" label="Pro" ids={promo.l} />
        <PromoOffer id="xl" label="Exclusive" ids={promo.xl} />
      </Box>
      <AllFeatures>
        <Droppable droppableId="market">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <List>
                {promo.market.map((id, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <MiniCard {...dataObj[id]} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      </AllFeatures>
    </DragDropContext>
  );
};

export default PromoOffers;
