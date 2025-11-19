import { WorkItem, ServiceItem, ArchiveItem } from './types';
import React from 'react';
import { FaInstagram, FaDribbble, FaBehance, FaLinkedin, FaWhatsapp, FaEnvelope, FaFigma, FaGithub, FaBuffer } from 'react-icons/fa';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Archives', href: '#archives' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  { id: 1, title: 'Social Media Graphics' },
  { id: 2, title: 'Branding Product' },
  { id: 3, title: 'Publication Design' },
  { id: 4, title: 'E-book Design' },
  { id: 5, title: 'Create Logo' },
  { id: 6, title: 'AI Creative' },
];

// Using Picsum for placeholders as requested
export const WORKS: WorkItem[] = [
  {
    id: 1,
    title: 'Social Media Post',
    description: 'Visual exploration and creative design developed for digital brands and products.',
    image: 'https://picsum.photos/1200/800?random=1'
  },
  {
    id: 2,
    title: 'Branding',
    description: 'Identity systems that speak louder than words.',
    image: 'https://picsum.photos/1200/800?random=2'
  },
  {
    id: 3,
    title: 'Logo Design',
    description: 'Minimalist and memorable marks for modern businesses.',
    image: 'https://picsum.photos/1200/800?random=3'
  },
  {
    id: 4,
    title: 'Layouting',
    description: 'Structured aesthetics for publications and web interfaces.',
    image: 'https://picsum.photos/1200/800?random=4'
  },
  {
    id: 5,
    title: 'AI Creative',
    description: 'Pushing boundaries with generative art and design.',
    image: 'https://picsum.photos/1200/800?random=5'
  },
];

export const ARCHIVES: ArchiveItem[] = [
  { id: 1, image: 'https://picsum.photos/600/600?random=10' },
  { id: 2, image: 'https://picsum.photos/600/600?random=11' },
  { id: 3, image: 'https://picsum.photos/600/600?random=12' },
  { id: 4, image: 'https://picsum.photos/600/600?random=13' },
  { id: 5, image: 'https://picsum.photos/600/600?random=14' },
  { id: 6, image: 'https://picsum.photos/600/600?random=15' },
];

export const LOGO_ICONS = [
  <FaBehance key="1" />,
  <FaFigma key="2" />,
  <FaGithub key="3" />,
  <FaBuffer key="4" />,
  <FaDribbble key="5" />,
];

export const SOCIALS = [
  { name: 'Instagram', url: '#', icon: <FaInstagram /> },
  { name: 'Dribbble', url: '#', icon: <FaDribbble /> },
  { name: 'Behance', url: '#', icon: <FaBehance /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
];