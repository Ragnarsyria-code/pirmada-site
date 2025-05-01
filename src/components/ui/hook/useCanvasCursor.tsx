'use client';

import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Line = {
  spring: number;
  friction: number;
  nodes: Node[];
};

type OscillatorOptions = {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
};

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor({ phase = 0, offset = 0, frequency = 0.001, amplitude = 1 }: OscillatorOptions) {
    this.phase = phase;
    this.offset = offset;
    this.frequency = frequency;
    this.amplitude = amplitude;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

const useCanvasCursor = () => {
  const pos = useRef({ x: 0, y: 0 });
  const lines = useRef<Line[]>([]);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const f = useRef(new Oscillator({ phase: Math.random() * 2 * Math.PI, amplitude: 85, frequency: 0.0015, offset: 285 }));

  const E = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  const createNode = (): Node => ({ x: pos.current.x, y: pos.current.y, vx: 0, vy: 0 });

  const updateLine = (line: Line) => {
    let e = line.spring;
    const first = line.nodes[0];
    first.vx += (pos.current.x - first.x) * e;
    first.vy += (pos.current.y - first.y) * e;

    for (let i = 1; i < line.nodes.length; i++) {
      const t = line.nodes[i];
      const prev = line.nodes[i - 1];

      t.vx += (prev.x - t.x) * e;
      t.vy += (prev.y - t.y) * e;
      t.vx += prev.vx * E.dampening;
      t.vy += prev.vy * E.dampening;

      t.vx *= line.friction;
      t.vy *= line.friction;
      t.x += t.vx;
      t.y += t.vy;

      e *= E.tension;
    }
  };

  const drawLine = (line: Line) => {
    if (!ctx.current) return;

    const c = ctx.current;
    const { nodes } = line;

    c.beginPath();
    c.moveTo(nodes[0].x, nodes[0].y);

    for (let i = 1; i < nodes.length - 2; i++) {
      const midX = (nodes[i].x + nodes[i + 1].x) / 2;
      const midY = (nodes[i].y + nodes[i + 1].y) / 2;
      c.quadraticCurveTo(nodes[i].x, nodes[i].y, midX, midY);
    }

    const penultimate = nodes[nodes.length - 2];
    const last = nodes[nodes.length - 1];
    c.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
    c.stroke();
    c.closePath();
  };

  const resizeCanvas = () => {
    if (ctx.current) {
      ctx.current.canvas.width = window.innerWidth;
      ctx.current.canvas.height = window.innerHeight;
    }
  };

  const onMove = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e && e.touches.length > 0) {
      pos.current.x = e.touches[0].clientX;
      pos.current.y = e.touches[0].clientY;
    } else if ('clientX' in e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    }
    e.preventDefault();
  };

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    ctx.current = canvas.getContext('2d');
    if (!ctx.current) return;

    const createLine = (): Line => {
      const spring = 0.4 + 0.025 * Math.random();
      const friction = E.friction + 0.01 * Math.random() - 0.002;
      const nodes = Array.from({ length: E.size }, createNode);
      return { spring, friction, nodes };
    };

    const render = () => {
      if (!ctx.current) return;
      const c = ctx.current;

      c.globalCompositeOperation = 'source-over';
      c.clearRect(0, 0, c.canvas.width, c.canvas.height);
      c.globalCompositeOperation = 'lighter';
      c.strokeStyle = `hsla(${Math.round(f.current.update())},50%,50%,0.2)`;
      c.lineWidth = 1;

      lines.current.forEach((line) => {
        updateLine(line);
        drawLine(line);
      });

      requestAnimationFrame(render);
    };

    lines.current = Array.from({ length: E.trails }, createLine);
    resizeCanvas();
    render();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchstart', onMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchstart', onMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
