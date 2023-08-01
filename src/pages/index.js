import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/homepage/header";
import HomepageFeatures from "../components/homepage/features";
//import HomepageQuickInstall from "../components/homepage/quick-install";
//import HomepageContribute from "../components/homepage/contribute";
import { features, features_horizontal } from "../data/features-list";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Maplefall Survival multi Player"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures items={features} />
        <HomepageFeatures items={features_horizontal} isSmall={true} />
        {/*<HomepageQuickInstall />
        <HomepageContribute />*/}
      </main>
    </Layout>
  );
}
