import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useObserved = () => {
  const [view, setView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    !view && inView && setView(true);
  }, [inView]);

  return { ref, view };
};

export default useObserved;
