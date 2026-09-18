import React from 'react';

export const PalmLeafLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-85 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c473c" />
        <stop offset="40%" stopColor="#1e342b" />
        <stop offset="85%" stopColor="#0f1b16" />
        <stop offset="100%" stopColor="#080e0b" />
      </linearGradient>
      <linearGradient id="stemGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3d5c4e" />
        <stop offset="100%" stopColor="#14231d" />
      </linearGradient>
      <filter id="leafShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="10" dy="15" stdDeviation="15" floodColor="#000000" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#leafShadow)">
      {/* Central Stem */}
      <path
        d="M-40 680 Q180 480 420 120"
        stroke="url(#stemGrad1)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      
      {/* Left Fronds */}
      <path d="M40 560 C-10 460 30 380 180 430 C130 480 90 530 40 560Z" fill="url(#leafGrad1)" opacity="0.9" />
      <path d="M80 500 C10 390 60 310 230 370 C180 420 130 470 80 500Z" fill="url(#leafGrad1)" />
      <path d="M120 440 C50 320 110 240 280 310 C230 360 170 410 120 440Z" fill="url(#leafGrad1)" />
      <path d="M170 380 C100 250 170 170 330 250 C280 300 220 350 170 380Z" fill="url(#leafGrad1)" />
      <path d="M220 310 C160 180 230 110 370 190 C330 240 270 280 220 310Z" fill="url(#leafGrad1)" />
      <path d="M280 240 C230 120 300 60 410 140 C370 180 320 220 280 240Z" fill="url(#leafGrad1)" />
      <path d="M340 170 C310 80 370 30 440 90 C410 120 370 150 340 170Z" fill="url(#leafGrad1)" />

      {/* Right Fronds */}
      <path d="M100 580 C190 520 260 560 210 650 C150 630 120 610 100 580Z" fill="url(#leafGrad1)" opacity="0.75" />
      <path d="M140 520 C240 450 310 490 260 590 C200 570 160 550 140 520Z" fill="url(#leafGrad1)" opacity="0.8" />
      <path d="M190 450 C300 380 360 420 320 520 C250 500 210 480 190 450Z" fill="url(#leafGrad1)" />
      <path d="M240 380 C350 310 410 350 370 450 C310 430 270 410 240 380Z" fill="url(#leafGrad1)" />
      <path d="M300 300 C400 230 450 270 420 370 C360 350 320 330 300 300Z" fill="url(#leafGrad1)" />
      <path d="M360 220 C440 160 480 190 450 280 C410 260 380 240 360 220Z" fill="url(#leafGrad1)" />
    </g>
  </svg>
);

export const PalmLeafRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-85 scale-x-[-1] ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2c473c" />
        <stop offset="40%" stopColor="#1e342b" />
        <stop offset="85%" stopColor="#0f1b16" />
        <stop offset="100%" stopColor="#080e0b" />
      </linearGradient>
      <linearGradient id="stemGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3d5c4e" />
        <stop offset="100%" stopColor="#14231d" />
      </linearGradient>
      <filter id="leafShadow2" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-10" dy="15" stdDeviation="15" floodColor="#000000" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#leafShadow2)">
      <path
        d="M-40 680 Q180 480 420 120"
        stroke="url(#stemGrad2)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d="M40 560 C-10 460 30 380 180 430 C130 480 90 530 40 560Z" fill="url(#leafGrad2)" opacity="0.9" />
      <path d="M80 500 C10 390 60 310 230 370 C180 420 130 470 80 500Z" fill="url(#leafGrad2)" />
      <path d="M120 440 C50 320 110 240 280 310 C230 360 170 410 120 440Z" fill="url(#leafGrad2)" />
      <path d="M170 380 C100 250 170 170 330 250 C280 300 220 350 170 380Z" fill="url(#leafGrad2)" />
      <path d="M220 310 C160 180 230 110 370 190 C330 240 270 280 220 310Z" fill="url(#leafGrad2)" />
      <path d="M280 240 C230 120 300 60 410 140 C370 180 320 220 280 240Z" fill="url(#leafGrad2)" />
      <path d="M340 170 C310 80 370 30 440 90 C410 120 370 150 340 170Z" fill="url(#leafGrad2)" />

      <path d="M100 580 C190 520 260 560 210 650 C150 630 120 610 100 580Z" fill="url(#leafGrad2)" opacity="0.75" />
      <path d="M140 520 C240 450 310 490 260 590 C200 570 160 550 140 520Z" fill="url(#leafGrad2)" opacity="0.8" />
      <path d="M190 450 C300 380 360 420 320 520 C250 500 210 480 190 450Z" fill="url(#leafGrad2)" />
      <path d="M240 380 C350 310 410 350 370 450 C310 430 270 410 240 380Z" fill="url(#leafGrad2)" />
      <path d="M300 300 C400 230 450 270 420 370 C360 350 320 330 300 300Z" fill="url(#leafGrad2)" />
      <path d="M360 220 C440 160 480 190 450 280 C410 260 380 240 360 220Z" fill="url(#leafGrad2)" />
    </g>
  </svg>
);
