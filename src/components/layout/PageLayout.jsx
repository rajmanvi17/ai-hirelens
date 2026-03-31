import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)',
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        padding: '40px 24px',
      }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
