import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ServiceCard from '../ServiceCard';
import ServiceHeader from './ServiceHeader';
import { Ribbon } from '../../molecules/Ribbon';
import Box from '../../atoms/Box';

export const PromoServicesPane = props => {
  const { docsMap, ids, slots, serviceCode } = props;

  return (
    <Droppable droppableId={serviceCode}>
      {(provided, snapshot) => (
        <Box column>
          <ServiceHeader {...props} />
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
                      <ServiceCard data={props.docsMap.get(id)} index={index} />
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
