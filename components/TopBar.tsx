import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Menu, X } from 'lucide-react';
import { TabOption } from '../types';

interface TopBarProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const TopBar: React.FC<TopBarProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const musicTabs = [
    TabOption.CATCH22,
    TabOption.ARIZONA,
    TabOption.ABOUTIME,
    TabOption.GOLDN_MNKY,
    TabOption.JOVE,
    TabOption.KATLYST,
    TabOption.DISTORTED,
    TabOption.POSER,
    TabOption.QUIET,
    TabOption.SIXTY9,
    TabOption.KALIDESKOPE,
    TabOption.RWYA,
    TabOption.TIX,
  ];

  const showInternalTabs = musicTabs.includes(activeTab) || activeTab === TabOption.MUSIC;
  const disabledMusicTabs = new Set<TabOption>([TabOption.SIXTY9, TabOption.KALIDESKOPE, TabOption.RWYA, TabOption.TIX]);

  const navItems: Array<{ tab: TabOption; href: string }> = [
    { tab: TabOption.HOME, href: '/home' },
    { tab: TabOption.MUSIC, href: '/music' },
    { tab: TabOption.ABOUT, href: '/about-us' },
    { tab: TabOption.ARTIST, href: '/artist' },
    { tab: TabOption.VISUALS, href: '/visuals' },
    { tab: TabOption.SUPPORT, href: '/support' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-6 bg-black/95 border border-white/5 rounded-md shadow-md text-gray-200 text-sm p-3 z-20 relative">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 font-mono text-xs md:text-sm">bgwn.net</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-3">
          {navItems.map(({ tab, href }) => {
            const isActive = activeTab === tab || (tab === TabOption.MUSIC && musicTabs.includes(activeTab));
            return (
              <Link
                key={tab}
                href={href}
                className={`px-3 py-1 rounded-sm text-sm font-semibold tracking-wide transition-colors duration-150 ${isActive ? 'bg-white text-black shadow-sm border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-sm transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <img src="/assets/bgwn_png3_logo.png" alt="bgwn logo" className="w-16 h-auto hidden md:block" />
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-2">
          {navItems.map(({ tab, href }) => {
            const isActive = activeTab === tab || (tab === TabOption.MUSIC && musicTabs.includes(activeTab));
            return (
              <Link
                key={tab}
                href={href}
                onClick={handleMobileNavClick}
                className={`block w-full text-left px-4 py-2 rounded-sm text-sm font-semibold transition-colors duration-150 ${isActive ? 'bg-white text-black' : 'text-gray-300 hover:bg-white/10'}`}
              >
                {tab}
              </Link>
            );
          })}
        </div>
      )}

      {showInternalTabs && (
        <div className="mt-2 flex gap-2 items-center justify-center flex-wrap">
          {musicTabs.map((tab) => {
            const isDisabled = disabledMusicTabs.has(tab);
            return (
              <button
                key={tab}
                onClick={isDisabled ? undefined : () => onTabChange(tab)}
                disabled={isDisabled}
                className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-150 ${isDisabled ? 'bg-white/10 text-gray-500 cursor-not-allowed' : activeTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-white/5 text-gray-200 hover:bg-white/10'}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TopBar;