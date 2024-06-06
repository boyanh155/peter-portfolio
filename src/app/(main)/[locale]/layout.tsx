import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useThemeStore } from "@/lib/stores/useThemeStore";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html suppressHydrationWarning lang={locale}>
        <body className={cn(" min-screen", inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme={"dark"}
            enableSystem={false}
            // disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}