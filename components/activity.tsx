import React, { useState } from 'react';

function Activity(props: any) {
  const [activity, setActivity] = useState('');
  const handleActivitySubmit = () => {
    if (activity.trim().length > 0) {
      props.addActivity(props.currentColumn.id, props.currentCard.id, activity);
      props.updateDate(props.currentColumn.id, props.currentCard.id);
      setActivity('');
    }
  };
  const getTimeMsg = (updatedAt: any) => {
    const createdTime = new Date(updatedAt) as any;
    const currentTime = new Date() as any;
    const second = 60;
    const minute = 60;
    const hour = 24;
    const day = 30;
    const month = 12;
    let divider = 1;
    let timeMsg = '';
    let diff = (currentTime - createdTime) / 1000;
    if (diff <= second) {
      timeMsg = 'second';
    } else if (diff <= second * minute) {
      divider = second;
      timeMsg = 'minute';
    } else if (diff <= second * minute * hour) {
      divider = second * minute;
      timeMsg = 'hour';
    } else if (diff <= second * minute * hour * day) {
      divider = second * minute * hour;
      timeMsg = 'day';
    } else if (diff <= second * minute * hour * day * month) {
      divider = second * minute * hour * day;
      timeMsg = 'month';
    } else {
      divider = second * minute * hour * day * month;
      timeMsg = 'year';
    }
    diff /= divider;
    const displayTime = Math.abs(Math.round(diff));
    const plural = displayTime > 1 ? 's' : '';
    const timeMessage = `${displayTime} ${timeMsg}${plural} ago`;
    return timeMessage;
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
          className={`${
            activity.length < 1
              ? 'complete-btn-disabled'
              : 'complete-btn cursor-pointer'
          } border-none`}
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
                <div className="my-5px text-bolder">
                  {getTimeMsg(activity.createdAt)}
                </div>
                <div className="my-5px activity-log-content">
                  {activity.activity.split('||')[0]}
                  <b>{activity.activity.split('||')[1]}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Activity;
