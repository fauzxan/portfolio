'use client';
import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; // Import CSS module for styling

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-6 h-6 rounded-full bg-sky-200 dark:bg-indigo-900 pointer-events-none z-50" style={{ left: position.x, top: position.y }} />
  );
};

export default CustomCursor;
