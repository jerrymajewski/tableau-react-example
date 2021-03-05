import React from 'react';
import { useTableauViz } from '../hooks';

interface Props {
  url: string;
}

const TableauViz: React.FC<Props> = ({ url }) => {
  const [loaded, setLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { loading, viz } = useTableauViz({
    vizElement: ref?.current,
    vizUrl: url,
  });

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  /* eslint-disable-next-line */
  console.log('TableauViz', loaded, loading, viz, ref);

  return (
    <div ref={ref}></div>
  );
};

export default TableauViz;
