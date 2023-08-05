import React, { useEffect, useState } from 'react';

const Status = ({ GroupData, showStatus }) => {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    if (showStatus && GroupData.rangeStart !== '' && GroupData.rangeEnd !== '') {
      fetchStatusData(GroupData.rangeStart, GroupData.rangeEnd);
    } else {
      setStatusData([]);
    }
  }, [showStatus, GroupData.rangeStart, GroupData.rangeEnd]);

  const fetchStatusData = (start, end) => {
    const statusPromises = [];
    for (let id = parseInt(start); id <= parseInt(end); id++) {
      statusPromises.push(fetch(`https://jsonplaceholder.typicode.com/todos/${id}`));
    }

    Promise.all(statusPromises)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        setStatusData(data);
      })
      .catch(error => {
        console.error('Error fetching status data:', error);
        setStatusData([]);
      });
  };

  return (
    <div className='w-[200px] rounded-lg bg-gray-300 mb-2 ml-4'>
      {showStatus && statusData.length > 0 ? (
        <div>
          {statusData.map((status, index) => (
            <div key={index} className='flex justify-between items-center w-full h-full'>
              <p className='m-2'>{`(${status.id})${status.completed}`}</p>
              {status.completed ? (
                <svg
                  className='w-6 h-6 text-green-500 m-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
              ) : (
                <svg
                  className='w-6 h-6 text-red-500 m-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Status;
