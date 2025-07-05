"use client";

import React from 'react';
import { useTheme } from 'next-themes';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div className=' mb-10 dark:bg-black text-black dark:text-white'>
      hii
    </div>
  );
}
