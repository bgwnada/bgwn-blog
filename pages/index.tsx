import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next React Starter</title>
        <meta
          name="description"
          content="A clean Next.js React starter configured for Vercel deployment."
        />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
        }}
      >
        <section
          style={{
            width: '100%',
            maxWidth: 760,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: '2rem',
            fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2rem' }}>Next React Starter</h1>
          <p style={{ marginTop: '0.75rem', lineHeight: 1.6 }}>
            This app is configured as a standard Next.js starter and ready to deploy
            on Vercel.
          </p>

          <ul style={{ lineHeight: 1.8, paddingLeft: '1.25rem' }}>
            <li>Edit this page at <strong>pages/index.tsx</strong></li>
            <li>Run locally with <strong>npm run dev</strong></li>
            <li>Deploy by importing this repo into Vercel</li>
          </ul>
        </section>
      </main>
    </>
  );
}
