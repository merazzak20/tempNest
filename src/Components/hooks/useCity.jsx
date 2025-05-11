import React, { useRef, useState } from "react";

const useCity = () => {
  const [city, setCity] = useState("Dhaka");
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCity(inputRef.current.value);
  };
  return { city, inputRef, handleFormSubmit };
};

export default useCity;
