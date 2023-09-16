import React from 'react';
import { dataSetForBasicData } from '../../ImportFiles';

const OpeningTimingDetails = () => {
  const businessesTiming = dataSetForBasicData.businessesTiming;
  const offDays = dataSetForBasicData.offDays;

  const getOpeningHoursString = (offDays) => {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const formattedOffDays = offDays.map((day) => day.toLowerCase());

    return (
      <div>
        {daysOfWeek.map((day) => (
          <div key={day}>
            {formattedOffDays.includes(day) ? (
              <h6 className='opening-timining-line-space'>
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}</strong> : Closed
              </h6>
            ) : (
              <h6 className='opening-timining-line-space'>
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}</strong> : {businessesTiming.OpeningTime} AM - {businessesTiming.ClosingTime} PM
              </h6>
            )}
          </div>
        ))}
      </div>
    );
  };

  const openingTimingHours = getOpeningHoursString(offDays);

  return (
    <>
      <div>{openingTimingHours}</div>
    </>
  );
};

export default OpeningTimingDetails;
