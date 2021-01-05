import React, { useEffect, useState } from 'react';
const PageNotFound = (props: any) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds === 0) {
      props.history.push('/');
    }
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds, props]);

  return (
    <div className="page-not-found-container">
      <h1 className="page-not-found-container__h1">This is 404 </h1>
      <button onClick={() => props.history.push('/')}>Go BaCk</button>
      <p className="page-not-found-container__p">Redirects to HOME after {seconds}</p>
    </div>
  );
};

export default PageNotFound;
