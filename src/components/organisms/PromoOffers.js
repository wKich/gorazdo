import React, { useState, useEffect, useMemo } from 'react';
import Box from '../atoms/Box';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdAdd } from 'react-icons/md';
import ServiceCard from './ServiceCard';
import { useServices } from '../../hooks';
import getStyle from '../../utils/getStyle';
import { Ribbon } from '../molecules/Ribbon';
import { PromoServicesPane } from './Services/PromoServicesPane';

const AllFeatures = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  bottom: 0;
  width: ${getStyle('sizes', 16)};
  background-color: ${getStyle('colors', 'paper')};
  overflow-y: auto;
`;

const insertAtIndex = (arr, index, item) => {
  const shallowCopy = [...arr];
  shallowCopy.splice(index, 0, item);
  return shallowCopy;
};

const PromoOffers = props => {
  const [isDragStarted, setDragStarted] = useState(false);
  const [querySnapshot, loading, error] = useServices();
  const docsArray = useMemo(
    () =>
      querySnapshot
        ? querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        : [],
    [querySnapshot]
  );

  const docsMap = useMemo(
    () =>
      docsArray.reduce((map, item) => {
        map.set(item.id, item);
        return map;
      }, new Map()),
    [docsArray]
  );

  const [promo, setPromo] = useState({
    market: [],
    s: [],
    m: [],
    l: [],
    xl: [],
  });

  useEffect(() => {
    setPromo(prevState => ({
      ...prevState,
      market: docsArray.map(item => item.id),
    }));
  }, [docsArray]);

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
  const handleRemove = ({ draggableId, droppableId }) => {
    setPromo({
      ...promo,
      [droppableId]: promo[droppableId].filter(id => id !== draggableId),
    });
  };
  console.log(promo.market);
  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <Box alignItems="flex-start" justify="center">
        <PromoServicesPane
          isDragStarted={isDragStarted}
          serviceCode="s"
          slots={3}
          label="Basic"
          remove={handleRemove}
          docsMap={docsMap}
          ids={promo.s}
        />
        <PromoServicesPane
          isDragStarted={isDragStarted}
          serviceCode="m"
          remove={handleRemove}
          slots={4}
          label="Recommended"
          docsMap={docsMap}
          ids={promo.m}
        />
        <PromoServicesPane
          isDragStarted={isDragStarted}
          serviceCode="l"
          label="Pro"
          remove={handleRemove}
          slots={5}
          docsMap={docsMap}
          ids={promo.l}
        />
        <PromoServicesPane
          isDragStarted={isDragStarted}
          serviceCode="xl"
          remove={handleRemove}
          slots={6}
          label="Exclusive"
          docsMap={docsMap}
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
                        <ServiceCard data={docsMap.get(id)} />
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
