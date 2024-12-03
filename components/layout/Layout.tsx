'use client';

import { Layout as AntLayout } from 'antd';
import Header from './Header';
import { useAppSelector } from '@/store/hook';
import ThemeInitializer from '../ThemeInitializer';

const { Content } = AntLayout;

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { mode } = useAppSelector(state => state.theme);

  return (
    <>
      <ThemeInitializer />
      <AntLayout className={`h-auto md:h-screen overflow-hidden p-0 lg:p-10 py-3 md:py-0  ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header />
        <Content className="pt-10 lg:mt-5">
          {children}
        </Content>
      </AntLayout>
    </>
  );
};

export default Layout;
