import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import ChatWidget from './components/chat-widget/ChatWidget';

/**
 * 1. Load Mulish from Google Fonts.
 * 2. Use the "variable" property to create a custom CSS variable.
 * 3. Include any subsets you need ("latin" is typical).
 */
const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hexnode',
  description: 'hexnode assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
