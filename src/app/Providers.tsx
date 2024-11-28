'use client';

import React from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import useTheme from '@/hooks/useTheme';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme || ''}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Providers;
