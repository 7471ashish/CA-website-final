import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/50 active:scale-95 ${
        isDark
          ? 'bg-navy-900 border-gold-500/30 text-gold-400 hover:bg-navy-850 hover:border-gold-400 shadow-sm shadow-gold-500/10'
          : 'bg-slate-100 border-slate-200 text-navy-900 hover:bg-slate-200 hover:border-slate-300 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Day / Light Mode' : 'Switch to Night / Dark Mode'}
      aria-label={isDark ? 'Switch to Day / Light Mode' : 'Switch to Night / Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon (shown when dark to toggle back to light, with spin animation) */}
        <Sun
          className={`w-5 h-5 text-gold-400 transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0 absolute'
          }`}
        />
        {/* Moon Icon (shown when light to toggle to dark) */}
        <Moon
          className={`w-5 h-5 text-navy-900 transition-all duration-500 transform ${
            isDark
              ? 'rotate-90 scale-0 opacity-0 absolute'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-bold tracking-wide select-none">
          {isDark ? 'Day Mode' : 'Night Mode'}
        </span>
      )}
    </button>
  );
}
