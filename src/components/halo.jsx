import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "../vanta/halo"; // path to your halo.js

const VantaHalo = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
  setVantaEffect(
    HALO({
      el: vantaRef.current,
      THREE,
      baseColor: 0x1a1a1a,
      color2: 0xf2e735,
      backgroundColor: 0x1a1a1a, // can be any color when alpha is 0
      backgroundAlpha: 1, // 0 = fully transparent
      amplitudeFactor: 1.30,
      ringFactor: 1.2,
      rotationFactor: 1,
      size: 0.50,
      speed: 1.0,
    })
  );
}
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default VantaHalo;
