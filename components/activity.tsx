import React, { useState } from 'react';

function Activity(props: any) {
  const [activity, setActivity] = useState('');
  const handleActivitySubmit = () => {
    props.addActivity(props.currentColumn.id, props.currentCard.id, activity);
  };
  return (
    <>
      <div className="card-deatil-title">Activity</div>
      <textarea
        className="card-detail-activity"
        placeholder="Add Comment"
        onChange={(e) => setActivity(e.target.value)}
        value={activity}
      >
        {activity}
      </textarea>
      <div className="text-right">
        <button
          onClick={() => handleActivitySubmit()}
          className="complete-btn cursor-pointer bg-head-1 border-none"
        >
          Say it
        </button>
      </div>
      <div className="activity-log">
        {props.currentCard.activities.map((activity: any) => {
          let iconElement = null;
          const activityString = activity.activity.toString();
          switch (true) {
            case activityString.includes('checklist'):
              iconElement = <i className="text-orange far fa-list-alt"></i>;
              break;
            case activityString.includes('title'):
              iconElement = (
                <i className="text-purple fas fa-file-signature"></i>
              );
              break;
            case activityString.includes('complete'):
              iconElement = <i className="text-green far fa-check-circle"></i>;
              break;
            case activityString.includes('delete'):
              iconElement = <i className="text-red fas fa-file-signature"></i>;
              break;
            default:
              iconElement = <i className="text-yellow far fa-comment"></i>;
              break;
          }
          return (
            <div key={activity.id} className="activity-row display-flex">
              <div className="activity-icon">{iconElement}</div>
              <div className="text-grey activity-content">
                <div className="my-5px">{activity.createdAt.toString()}</div>
                <div className="my-5px">{activity.activity}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Activity;
