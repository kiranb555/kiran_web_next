'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#818cf8' },
      links: {
        color: '#818cf8',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 900 },
        value: 50,
      },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
    </div>
  );
};

export default ParticlesBackground;
