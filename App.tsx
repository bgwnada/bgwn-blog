import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import { TabOption } from './types';

interface BgwnAppProps {
  initialTab?: TabOption;
}

function App({ initialTab = TabOption.HOME }: BgwnAppProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabOption>(initialTab);

  const tabRoutes = useMemo<Partial<Record<TabOption, string>>>(
    () => ({
      [TabOption.HOME]: '/home',
      [TabOption.MUSIC]: '/music',
      [TabOption.ABOUT]: '/about-us',
      [TabOption.ARTIST]: '/artist',
      [TabOption.VISUALS]: '/visuals',
      [TabOption.SUPPORT]: '/support',
    }),
    [],
  );

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: TabOption) => {
    setActiveTab(tab);

    const targetRoute = tabRoutes[tab];
    if (targetRoute && router.pathname !== targetRoute) {
      void router.push(targetRoute);
    }
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bgwn_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sidebar - Fixed width, sticky functionality handling internal scroll */}
      <aside className="flex-shrink-0 z-30 shadow-2xl">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </aside>

      {/* Main Content - Flex grow to fill remaining space */}
      <main className="flex-grow flex flex-col relative h-full">

        {/* Top Bar Area */}
        <div className="w-full pt-8 px-8 md:px-12 z-20">
             <TopBar activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-grow overflow-hidden z-10">
             <ContentArea activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </main>
    </div>
  );
}

export default App;