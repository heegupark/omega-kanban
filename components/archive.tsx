import React from 'react';
import CardBody from './card-body';
import CardHead from './card-head';

function Archive(props: any) {
  return (
    <>
      <div className="column">
        <div className="card-box bg-grey-3">
          <CardHead column={props.archive} />
          <CardBody
            column={props.archive}
            setOpen={props.setOpen}
            setCardForOpen={props.setCardForOpen}
            convertDate={props.convertDate}
          />
        </div>
      </div>
    </>
  );
}
export default Archive;
