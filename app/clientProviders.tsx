'use client';

import { Provider } from "react-redux";
import { store } from "@/store/store";
import Layout from "@/components/layout/Layout";
import { ConfigProvider, theme } from "antd";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store()}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#9333ea",
          }
        }}
      >
        <Layout>{children}</Layout>
      </ConfigProvider>
    </Provider>
  );
}
