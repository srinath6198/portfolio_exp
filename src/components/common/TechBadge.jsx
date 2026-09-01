import React from 'react';
import './TechBadge.scss';
import { 
  FaReact, FaHtml5, FaSass, FaGitAlt, FaFigma, FaNodeJs, FaPython, FaDatabase 
} from 'react-icons/fa';
import { 
  IoLogoJavascript 
} from 'react-icons/io';
import { 
  SiNextdotjs, SiRedux, SiGreensock, SiFramer, SiVite, SiTypescript, 
  SiMongodb, SiMysql, SiExpress, SiFastapi, SiPostman, SiElectron, SiCapacitor 
} from 'react-icons/si';
import { 
  Layers, Palette, Smartphone, Sparkles, Cpu, Code, ExternalLink, Server 
} from 'lucide-react';
import { 
  VscCode 
} from 'react-icons/vsc';

// Icon resolver helper
export const getTechIcon = (name) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('react')) return <FaReact color="#61DAFB" />;
  if (normalized.includes('javascript') || normalized.includes('es6')) return <IoLogoJavascript color="#F7DF1E" />;
  if (normalized.includes('html')) return <FaHtml5 color="#E34F26" />;
  if (normalized.includes('sass') || normalized.includes('scss') || normalized.includes('css')) return <FaSass color="#CC6699" />;
  if (normalized.includes('next')) return <SiNextdotjs color="#ffffff" />;
  if (normalized.includes('redux') || normalized.includes('state')) return <SiRedux color="#764ABC" />;
  if (normalized.includes('gsap') || normalized.includes('motion')) return <SiGreensock color="#88CE02" />;
  if (normalized.includes('framer')) return <SiFramer color="#0055FF" />;
  if (normalized.includes('vite')) return <SiVite color="#646CFF" />;
  if (normalized.includes('git')) return <FaGitAlt color="#F05032" />;
  if (normalized.includes('figma')) return <FaFigma color="#F24E1E" />;
  if (normalized.includes('vscode') || normalized.includes('vs code')) return <VscCode color="#007ACC" />;
  if (normalized.includes('node')) return <FaNodeJs color="#339933" />;
  if (normalized.includes('express')) return <SiExpress color="#FFFFFF" />;
  if (normalized.includes('python')) return <FaPython color="#3776AB" />;
  if (normalized.includes('mongodb') || normalized.includes('mongo')) return <SiMongodb color="#47A248" />;
  if (normalized.includes('mongoose')) return <SiMongodb color="#880000" />;
  if (normalized.includes('mysql')) return <SiMysql color="#4479A1" />;
  if (normalized.includes('sql')) return <FaDatabase color="#336791" />;
  if (normalized.includes('rest api') || normalized.includes('rest')) return <SiFastapi color="#6366F1" />;
  if (normalized.includes('fastapi')) return <SiFastapi color="#009688" />;
  if (normalized.includes('postman')) return <SiPostman color="#FF6C37" />;
  if (normalized.includes('electron')) return <SiElectron color="#47848F" />;
  if (normalized.includes('capacitor')) return <SiCapacitor color="#119EFF" />;
  if (normalized.includes('layer') || normalized.includes('architecture')) return <Layers color="#818cf8" size={16} />;
  if (normalized.includes('design') || normalized.includes('palette')) return <Palette color="#c084fc" size={16} />;
  if (normalized.includes('responsive') || normalized.includes('smartphone')) return <Smartphone color="#38bdf8" size={16} />;
  if (normalized.includes('performance') || normalized.includes('cpu')) return <Cpu color="#34d399" size={16} />;
  if (normalized.includes('backend') || normalized.includes('server')) return <Server color="#339933" size={16} />;
  return <Code color="#94a3b8" size={16} />;
};

export const TechBadge = ({ name, icon = null, size = 'sm', className = '' }) => {
  return (
    <span className={`tech-badge size-${size} ${className}`}>
      <span className="badge-icon">{icon || getTechIcon(name)}</span>
      <span className="badge-name">{name}</span>
    </span>
  );
};
