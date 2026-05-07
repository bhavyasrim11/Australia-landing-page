import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Australia PR 2026 | Apply for Permanent Residency in Australia",
  description:
    "Apply for Australia PR in 2026 with our points-based eligibility assessment. Check skilled migration visas (189, 190, 491), age, occupation list, points system & full PR process. Expert guidance, fast support & trusted service.",
  keywords:
    "australia pr 2026,australia permanent residency,australia pr visa,australia pr points calculator,australia skilled migration,australia pr eligibility,australia pr requirements,australia pr from india,australia pr points system,australia visa 189,australia visa 190,australia visa 491,australia skilled independent visa,australia state nomination visa,australia regional visa 491,apply australia pr,australia pr process,australia migration 2026,skilled migration australia,australia pr consultants,australia pr assessment"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="L_PNy3dgEzp57F2JsXfvTXBc7aedqUdzow1IyvEmCUE"
        />
        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPH0CGYTXT');
          `}
        </Script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2003555746606868');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">

        {children}
      </body>
    </html>
  );
}
