"use client";

import React, { useRef, useEffect } from "react";
import { motionValue, propEffect, animate } from "motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  perspective = 1000,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // JavaScript data object target for Motion propEffect
  const tiltProps = useRef({
    rx: 0,
    ry: 0,
    gx: 50,
    gy: 50,
    go: 0,
  });

  // Motion values
  const rxVal = useRef(motionValue(0));
  const ryVal = useRef(motionValue(0));
  const gxVal = useRef(motionValue(50));
  const gyVal = useRef(motionValue(50));
  const goVal = useRef(motionValue(0));

  useEffect(() => {
    // Bind motion values to the tiltProps object properties via propEffect
    const cancelPropEffect = propEffect(tiltProps.current, {
      rx: rxVal.current,
      ry: ryVal.current,
      gx: gxVal.current,
      gy: gyVal.current,
      go: goVal.current,
    });

    // Directly apply 3D transformation during the frameloop without React re-render overhead
    const unsubscribeRx = rxVal.current.on("change", () => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${tiltProps.current.rx}deg) rotateY(${tiltProps.current.ry}deg)`;
      }
      if (glareRef.current && glare) {
        glareRef.current.style.opacity = `${tiltProps.current.go}`;
        glareRef.current.style.background = `radial-gradient(circle at ${tiltProps.current.gx}% ${tiltProps.current.gy}%, rgba(255, 230, 160, 0.4) 0%, transparent 60%)`;
      }
    });

    return () => {
      cancelPropEffect();
      unsubscribeRx();
    };
  }, [perspective, glare]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    // Smooth spring physics on tilt angles
    animate(rxVal.current, rotX, { type: "spring", stiffness: 350, damping: 25 });
    animate(ryVal.current, rotY, { type: "spring", stiffness: 350, damping: 25 });

    if (glare) {
      gxVal.current.set((x / rect.width) * 100);
      gyVal.current.set((y / rect.height) * 100);
      animate(goVal.current, 0.18, { duration: 0.15 });
    }
  };

  const handleMouseLeave = () => {
    animate(rxVal.current, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(ryVal.current, 0, { type: "spring", stiffness: 300, damping: 20 });
    if (glare) {
      animate(goVal.current, 0, { duration: 0.25 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
          style={{ opacity: 0 }}
        />
      )}
    </div>
  );
}
