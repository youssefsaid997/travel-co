"use client";
import React, { useEffect, useState } from "react";

function PeoplePage() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    setVal(1);
  }, [val]);
  return <div>{val}</div>;
}

export default PeoplePage;
