import React from 'react';

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
}

export interface ArchiveItem {
  id: number;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}