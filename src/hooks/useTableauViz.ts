import React from 'react';
import { Viz } from '../types';

declare global {
  interface Window {
    tableau: any;
  }
}

interface UseTableauVizArgs {
  vizElement: HTMLDivElement | null;
  vizUrl: string;
}

interface UseTableauViz {
  loading: boolean;
  viz?: Viz;
}

const useTableauViz = (args: UseTableauVizArgs): UseTableauViz => {
  const { vizElement, vizUrl } = args;
  const [loading, setLoading] = React.useState(false);
  const [viz, setViz] = React.useState<Viz | undefined>();

  React.useEffect(() => {
    if (vizElement) {
      setLoading(true);
    }
  }, [vizElement, setLoading]);

  React.useEffect(() => {
    if (vizElement && loading) {
      const options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: () => {
          setLoading(false);
        },
      };

      if (window.tableau) {
        setViz(new window.tableau.Viz(vizElement, vizUrl, options));
      }
    }
  }, [vizElement, vizUrl, loading, setLoading, setViz]);

  return {
    loading,
    viz,
  };
};

export default useTableauViz;
