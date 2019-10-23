import { useState, useEffect } from "react";

const useLocation = () => {
  //Initializing state
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    // Getting the location
    window.navigator.geolocation.getCurrentPosition(position => setLatitude(position.coords.latitude), err => setErrorMessage(err.message));
  }, []);

  return [latitude, errorMessage];
};

export default useLocation;
