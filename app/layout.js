import {
  Noto_Kufi_Arabic,
  Poppins,
  Bona_Nova_SC,
  Plus_Jakarta_Sans,
  Roboto_Serif,
  Roboto,
  Playfair,
  Montserrat,
  Space_Grotesk,
  Be_Vietnam_Pro,
  Inter,
  Work_Sans,
  Agdasima,
  Lato,
  Actor,
} from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";

const agdasima = Agdasima({
  subsets: ["latin"],
  variable: "--font-agdasima",
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const actor = Actor({
  subsets: ["latin"],
  variable: "--font-actor",
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

const be_Vietnam_Pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be_Vietnam_Pro",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const work_Sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work_Sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_Grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const roboto_Serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto_Serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus_Jakarta_Sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bona_Nova_SC = Bona_Nova_SC({
  subsets: ["latin"],
  variable: "--font-bona_Nova_SC",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "JobSearch",
  description: "JobSearch App.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${actor.variable} ${lato.variable} ${agdasima.variable} ${poppins.variable}${work_Sans.variable} ${inter.variable} ${be_Vietnam_Pro.variable} ${space_Grotesk.variable} ${montserrat.variable} ${playfair.variable} ${roboto.variable} ${roboto_Serif.variable} ${plus_Jakarta_Sans.variable} ${bona_Nova_SC.variable}  ${poppins.variable} ${notoKufiArabic.variable} antialiased`}
      >
        <main suppressHydrationWarning={true}>{children}</main>
      </body>
    </html>
  );
}
