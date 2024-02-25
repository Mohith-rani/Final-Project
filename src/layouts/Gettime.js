import React, { useState, useEffect } from 'react';
import image3 from './image3.jpg';
import first_img from './first_img.jpg';

export default function MyComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [photo, setPhoto] = useState(first_img);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update currentTime every second
    }, 1000);

    // Update photo based on condition
    const updatePhoto = () => {
      if (currentTime.getMinutes() === 50) {
        setPhoto(image3);
      } else {
        setPhoto(first_img);
      }
    };

    updatePhoto(); // Initial update
    const intervalIdPhoto = setInterval(updatePhoto, 1000 * 60); // Check every minute

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdPhoto);
    };
  }, [currentTime]); // Run effect whenever currentTime changes

  return (
    <div>
      <img src={photo} alt="Current Photo" />
    </div>
  );
}
