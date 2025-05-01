'use client';

import useCanvasCursor from '@/components/ui/hook/useCanvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();



  
  return <canvas id="canvas" className="pointer-events-none fixed inset-0 z-50" />;
};

export default CanvasCursor;



