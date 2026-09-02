import React from 'react';

export interface Stat {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface StatsBarProps {
  stats: Stat[];
}

/** Tinted strip of large serif stats (e.g. "4 800+ / Nöjda patienter"), 4-up desktop, 2-up mobile. */
export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">{stat.value}</div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
