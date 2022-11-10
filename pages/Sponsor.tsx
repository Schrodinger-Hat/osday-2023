import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SponsorshipTier from '../components/SponsorshipTier';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Open Source Day 2023 - Florence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <meta
          name="description"
          content="Open Source Day 2023 coming soon on March 2023. Stay tuned on our social"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />
      <div className="container">
        <Hero
          title="Open Source Day 2023"
          subtitle="Would you like to become a Sponsor for Open Source Day 2023?"
          date={{
            where: 'Florence',
            when: 'Today to February 2023',
            length: '3 months',
            type: 'Call for sponsors'
          }}
          description="Let's find out how you can help the Open Source community achieve great results in organizing one of the best conferences ever! :)"
          originals={false}
        />
        <div className="image">
          <Image className="img" alt="background" fill={true} src="/bg.jpg" />
        </div>
        <section className="sponsors_2022">
          <SponsorshipTier title="Platinum Tier" link="#" />
          <SponsorshipTier title="Diamond Tier" link="#" />
          <SponsorshipTier title="Gold Tier" link="#" />
          <SponsorshipTier title="Silver Tier" link="#" />
          <SponsorshipTier title="Community Partner" link="#" />
          <SponsorshipTier title="Brand Partner" link="#" />
        </section>
      </div>
    </>
  );
}