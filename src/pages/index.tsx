import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}⚡️</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick_start"
          >
            Get started - 3min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <script src="/flutter/flutter.js" defer></script>
        <script src="/flutter_init.js" defer></script>
      </Helmet>
      <Layout
        title={`Presentations made in Flutter`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <p className={styles.mobileExplain}>
          To see a live demo of a presentation visit the desktop version of this
          website
        </p>
        <main className={styles.center}>
          <div
            style={{
              height: 720,
              width: 1152,
              marginTop: "5rem",
              marginBottom: "20rem",
              overflow: "hidden",
            }}
            id="flutter_target"
          ></div>
        </main>
      </Layout>
    </HelmetProvider>
  );
}
