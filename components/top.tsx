import React from 'react';

export default function Top(props: any) {
  return (
    <>
      <div className="top h-top">
        <div className="top-home">
          <i className="fas fa-home"></i>
        </div>
        <div className="top-title">{props.projectName}</div>
      </div>
    </>
  );
}
