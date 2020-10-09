import React from 'react';
import ICommonProps from './interfaces/icommonprops';

interface CardInfoProps extends ICommonProps {
  projectName: string;
  convertDate: (date: Date) => string;
}

function CardInfo(props: CardInfoProps) {
  return (
    <div className="card-detail-project-info">
      <div className="my-5px">{props.projectName}</div>
      <div className="font-12px my-5px">{props.currentColumn.title}</div>
      <div className="my-10px display-flex">
        <div className="circle-icon">
          <i className="fas fa-plus-circle"></i>
        </div>
        <div>
          <div className="my-5px">Created</div>
          <div className="font-12px my-5px">
            {props.convertDate(props.currentCard.createdAt)}
          </div>
        </div>
      </div>
      <div className="my-10px display-flex">
        <div className="circle-icon">
          <i className="fas fa-pen"></i>
        </div>
        <div>
          <div className="my-5px">Updated</div>
          <div className="font-12px my-5px">
            {props.convertDate(props.currentCard.updatedAt)}
          </div>
        </div>
      </div>
      <div className="my-10px display-flex">
        <div className="circle-icon">
          <i className="fas fa-link"></i>
        </div>
        <div>
          <div className="my-5px">Task ID</div>
          <div className="font-12px my-5px">{props.currentCard._id}</div>
        </div>
      </div>
    </div>
  );
}
export default CardInfo;
