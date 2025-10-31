import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <div className="h-px bg-border/40 w-full" />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
