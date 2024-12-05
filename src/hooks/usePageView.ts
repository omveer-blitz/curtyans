import React from 'react';
import { useLocation } from 'react-router-dom';

const isClient = typeof window !== 'undefined';

export default () => {
  const [previousLocation, setPreviousLocation] = React.useState({});
  const [currentLocation, setCurrentlocation] = React.useState({});

  if(!isClient) return { previousLocation, currentLocation };

  const location = useLocation();
  React.useEffect(() => {
    setCurrentlocation(location);
    return () => {
      setPreviousLocation(location);
    }
  }, [location]);

  return { previousLocation, currentLocation };
}
