function ErrorBoundary() {
  return (
    <div style={{ 
      maxWidth: 600, 
      margin: '100px auto', 
      padding: 32, 
      textAlign: 'center',
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: 48, color: '#e53e3e', marginBottom: 16 }}>404</h1>
      <h2 style={{ fontSize: 24, marginBottom: 16 }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" style={{ 
        color: '#1976d2', 
        textDecoration: 'none',
        padding: '10px 20px',
        border: '2px solid #1976d2',
        borderRadius: 4,
        display: 'inline-block'
      }}>
        Go Back Home
      </a>
    </div>
  );
}

export default ErrorBoundary;
