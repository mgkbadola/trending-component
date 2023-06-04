import './globals.css'

export const metadata = {
  title: 'ES Trending Component',
  description: 'Built with 💖 using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">
          <main className="jsx-3577777707 es-primary-content">
            <div id="scroll-div" className="jsx-3577777707">
              <div className="jsx-3577777707 es-article">
                  {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
