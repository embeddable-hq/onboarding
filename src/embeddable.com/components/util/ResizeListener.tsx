import React, { ReactNode, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

type Props = {
  children: ReactNode; 
  onResize: (width: number, height: number) => void;
  debounce: number;
}

type Size = {
  width: number;
  height: number;
}

export default (props: Props) => {
  const ref = React.useRef(null);
  const [size, setSize] = useState<Size | null>(null)
  const [finalSize] = useDebounce(size, props.debounce);

  useEffect(() => {
    if(finalSize) {
      props.onResize(finalSize.width, finalSize.height)
    }
  }, [finalSize])

  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      setSize({width: entry.contentRect.width, height: entry.contentRect.height})
    })
  })

  useEffect(() => {
    if(ref.current) {
      resizeObserver.observe(ref.current);
      return () => {
        resizeObserver.disconnect();
      }
    }
  }, [])

  return (
      <div 
        style={{ width: '100%', height: '100%'}}
        ref={ref}
        >{props.children}</div>
    )
}