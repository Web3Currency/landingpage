
// Import React to resolve namespace issues in type definitions
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum BotState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING'
}