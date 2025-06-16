import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "../vanta/rings"; // Your local file

const VantaRings = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          color: 0x0077ff,
          backgroundColor: 0x1a1a1a,
           backgroundAlpha: 1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen absolute top-0 left-0 -z-100" />;
};

export default VantaRings;
