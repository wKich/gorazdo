import React, { useState } from 'react';
import Box from '../atoms/Box';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import data from './data';
import { color, layout, space, border, position } from 'styled-system';
import { MdAdd } from 'react-icons/md';
import ServiceCard from './ServiceCard';
import ServiceHeader from './Services/ServiceHeader';
import { useServices } from '../../hooks';

const dataList = data.map(item => ({
  ...item,
  id: `id${item.id}`,
}));

const dataObj = dataList.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

const AllFeatures = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  bottom: 0;
  overflow-y: auto;
`;

const StyledDiv = styled.div`
  ${color};
  ${position};
  ${layout};
  ${space};
  ${border};
`;

const Ribbon = props => {
  const { isEmpty, isDraggingOver, isDragStarted } = props;
  let opacity = 0;
  if (isEmpty) {
    if (isDragStarted) {
      opacity = 0.2;
    }

    if (isDraggingOver) {
      opacity = 1;
    }
  }
  return (
    <StyledDiv position="relative">
      <Placeholder opacity={opacity} />
      <Box column minHeight={8} width="20vw" bg="paper" {...props} />
    </StyledDiv>
  );
};

const Icon = styled(Box)`
  ${position};
  left: 0;
  top: 0;
  font-size: 3em;
`;

const insertAtIndex = (arr, index, item) => {
  const shallowCopy = [...arr];
  shallowCopy.splice(index, 0, item);
  return shallowCopy;
};

const StyledPlaceholder = styled(StyledDiv)`
  transition: opacity 200ms;
`;

const Placeholder = props => {
  return (
    <StyledPlaceholder
      position="absolute"
      p={5}
      width="100%"
      opacity={props.opacity}
    >
      <StyledDiv borderRadius="3" height="5" color="#999" border="dropbox">
        {props.children}
        <Icon
          position="absolute"
          fullHeight
          fullWidth
          alignItems="center"
          justify="center"
        >
          <MdAdd />
        </Icon>
      </StyledDiv>
    </StyledPlaceholder>
  );
};

const PromoOffer = props => {
  return (
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <Box column>
          <ServiceHeader title={props.label} />
          <div ref={provided.innerRef}>
            <Ribbon
              isDraggingOver={snapshot.isDraggingOver}
              isEmpty={props.ids.length === 0}
              isDragStarted={props.isDragStarted}
            >
              {props.ids.map((id, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ServiceCard data={dataObj[id]} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Ribbon>
          </div>
        </Box>
      )}
    </Droppable>
  );
};

const PromoOffers = props => {
  const [isDragStarted, setDragStarted] = useState(false);
  const [promo, setPromo] = useState({
    market: dataList.map(item => item.id),
    s: [],
    m: [],
    l: [],
    xl: [],
  });

  const [payload, loading, error] = useServices();
  console.log({ payload, loading, error });
  const onBeforeCapture = e => {
    console.log('onBeforeCapture', e);
    /*...*/
  };

  const onBeforeDragStart = e => {
    setDragStarted(true);
    console.log('onBeforeDragStart', e);
    /*...*/
  };

  const onDragStart = e => {
    console.log('onDragStart', e);
    /*...*/
  };
  const onDragUpdate = e => {
    console.log('onDragUpdate', e);
    /*...*/
  };
  const handleDragEnd = props => {
    console.log(props);
    setDragStarted(false);
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
    <DragDropContext
      onDragEnd={handleDragEnd}
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <Box>
        <PromoOffer
          isDragStarted={isDragStarted}
          id="s"
          label="Basic"
          ids={promo.s}
        />
        <PromoOffer
          isDragStarted={isDragStarted}
          id="m"
          label="Recommended"
          ids={promo.m}
        />
        <PromoOffer
          isDragStarted={isDragStarted}
          id="l"
          label="Pro"
          ids={promo.l}
        />
        <PromoOffer
          isDragStarted={isDragStarted}
          id="xl"
          label="Exclusive"
          ids={promo.xl}
        />
      </Box>
      <AllFeatures>
        <Droppable droppableId="market">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <Ribbon>
                {promo.market.map((id, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ServiceCard data={dataObj[id]} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Ribbon>
            </div>
          )}
        </Droppable>
      </AllFeatures>
    </DragDropContext>
  );
};

export default PromoOffers;
