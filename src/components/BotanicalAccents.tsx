import React from 'react';

export const PalmLeafLeft: React.FC<{ className?: string; isDark?: boolean }> = ({
  className = '',
  isDark = false,
}) => (
  <svg
    viewBox="0 0 500 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none transition-all duration-700 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`leafGrad1-${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {isDark ? (
          <>
            <stop offset="0%" stopColor="#254d42" />
            <stop offset="45%" stopColor="#18362e" />
            <stop offset="85%" stopColor="#0f221d" />
            <stop offset="100%" stopColor="#081411" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#4D5D38" />
            <stop offset="45%" stopColor="#3B492B" />
            <stop offset="85%" stopColor="#28331D" />
            <stop offset="100%" stopColor="#1E2716" />
          </>
        )}
      </linearGradient>
      <linearGradient id={`stemGrad1-${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {isDark ? (
          <>
            <stop offset="0%" stopColor="#c5a880" />
            <stop offset="100%" stopColor="#1a3830" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#5A6C44" />
            <stop offset="100%" stopColor="#2D3820" />
          </>
        )}
      </linearGradient>
      <filter id={`leafShadow-${isDark ? 'dark' : 'light'}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="8"
          dy="12"
          stdDeviation="12"
          floodColor={isDark ? '#000000' : '#354128'}
          floodOpacity={isDark ? 0.6 : 0.25}
        />
      </filter>
    </defs>
    <g filter={`url(#leafShadow-${isDark ? 'dark' : 'light'})`}>
      {/* Central Stem */}
      <path
        d="M-40 680 Q180 480 420 120"
        stroke={`url(#stemGrad1-${isDark ? 'dark' : 'light'})`}
        strokeWidth="10"
        strokeLinecap="round"
      />
      
      {/* Left Fronds */}
      <path d="M40 560 C-10 460 30 380 180 430 C130 480 90 530 40 560Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} opacity="0.9" />
      <path d="M80 500 C10 390 60 310 230 370 C180 420 130 470 80 500Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M120 440 C50 320 110 240 280 310 C230 360 170 410 120 440Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M170 380 C100 250 170 170 330 250 C280 300 220 350 170 380Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M220 310 C160 180 230 110 370 190 C330 240 270 280 220 310Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M280 240 C230 120 300 60 410 140 C370 180 320 220 280 240Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M340 170 C310 80 370 30 440 90 C410 120 370 150 340 170Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />

      {/* Right Fronds */}
      <path d="M100 580 C190 520 260 560 210 650 C150 630 120 610 100 580Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} opacity="0.8" />
      <path d="M140 520 C240 450 310 490 260 590 C200 570 160 550 140 520Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} opacity="0.85" />
      <path d="M190 450 C300 380 360 420 320 520 C250 500 210 480 190 450Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M240 380 C350 310 410 350 370 450 C310 430 270 410 240 380Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M300 300 C400 230 450 270 420 370 C360 350 320 330 300 300Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
      <path d="M360 220 C440 160 480 190 450 280 C410 260 380 240 360 220Z" fill={`url(#leafGrad1-${isDark ? 'dark' : 'light'})`} />
    </g>
  </svg>
);

export const PalmLeafRight: React.FC<{ className?: string; isDark?: boolean }> = ({
  className = '',
  isDark = false,
}) => (
  <svg
    viewBox="0 0 500 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none scale-x-[-1] transition-all duration-700 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`leafGrad2-${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {isDark ? (
          <>
            <stop offset="0%" stopColor="#254d42" />
            <stop offset="45%" stopColor="#18362e" />
            <stop offset="85%" stopColor="#0f221d" />
            <stop offset="100%" stopColor="#081411" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#4D5D38" />
            <stop offset="45%" stopColor="#3B492B" />
            <stop offset="85%" stopColor="#28331D" />
            <stop offset="100%" stopColor="#1E2716" />
          </>
        )}
      </linearGradient>
      <linearGradient id={`stemGrad2-${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {isDark ? (
          <>
            <stop offset="0%" stopColor="#c5a880" />
            <stop offset="100%" stopColor="#1a3830" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="#5A6C44" />
            <stop offset="100%" stopColor="#2D3820" />
          </>
        )}
      </linearGradient>
      <filter id={`leafShadow2-${isDark ? 'dark' : 'light'}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="8"
          dy="12"
          stdDeviation="12"
          floodColor={isDark ? '#000000' : '#354128'}
          floodOpacity={isDark ? 0.6 : 0.25}
        />
      </filter>
    </defs>
    <g filter={`url(#leafShadow2-${isDark ? 'dark' : 'light'})`}>
      <path
        d="M-40 680 Q180 480 420 120"
        stroke={`url(#stemGrad2-${isDark ? 'dark' : 'light'})`}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d="M40 560 C-10 460 30 380 180 430 C130 480 90 530 40 560Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} opacity="0.9" />
      <path d="M80 500 C10 390 60 310 230 370 C180 420 130 470 80 500Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M120 440 C50 320 110 240 280 310 C230 360 170 410 120 440Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M170 380 C100 250 170 170 330 250 C280 300 220 350 170 380Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M220 310 C160 180 230 110 370 190 C330 240 270 280 220 310Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M280 240 C230 120 300 60 410 140 C370 180 320 220 280 240Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M340 170 C310 80 370 30 440 90 C410 120 370 150 340 170Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />

      <path d="M100 580 C190 520 260 560 210 650 C150 630 120 610 100 580Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} opacity="0.8" />
      <path d="M140 520 C240 450 310 490 260 590 C200 570 160 550 140 520Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} opacity="0.85" />
      <path d="M190 450 C300 380 360 420 320 520 C250 500 210 480 190 450Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M240 380 C350 310 410 350 370 450 C310 430 270 410 240 380Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M300 300 C400 230 450 270 420 370 C360 350 320 330 300 300Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
      <path d="M360 220 C440 160 480 190 450 280 C410 260 380 240 360 220Z" fill={`url(#leafGrad2-${isDark ? 'dark' : 'light'})`} />
    </g>
  </svg>
);
