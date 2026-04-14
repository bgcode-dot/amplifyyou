import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#fff'
    }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '120px', margin: '0', color: '#DF3841', fontWeight: 'bold' }}>404</h1>
        <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#101010' }}>Page Not Found</h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '18px' }}>Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/">
          <button style={{ backgroundColor: '#DF3841', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
