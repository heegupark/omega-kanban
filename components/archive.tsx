import React from 'react';
import CardBody from './card-body';
import CardHead from './card-head';
import IColumnProps from './interfaces/icolumnprops';

function Archive(props: IColumnProps) {
  return (
    <>
      <div className="column">
        <div className="card-box bg-grey-3">
          <CardHead {...props} dragHandleProps={undefined} />
          <CardBody {...props} />
        </div>
      </div>
    </>
  );
}
export default Archive;
