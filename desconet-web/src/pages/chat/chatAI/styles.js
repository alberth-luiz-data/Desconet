export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  },
  
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  
  headerTitle: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  
  messagesContainer: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    backgroundColor: '#ffffff'
  },
  
  message: {
    marginBottom: '1rem',
    padding: '0.75rem 1rem',
    borderRadius: '18px',
    maxWidth: '70%',
    wordWrap: 'break-word'
  },
  
  userMessage: {
    backgroundColor: '#007bff',
    color: 'white',
    marginLeft: 'auto',
    textAlign: 'right'
  },
  
  botMessage: {
    backgroundColor: '#e9ecef',
    color: '#333',
    marginRight: 'auto',
    textAlign: 'left'
  },
  
  inputContainer: {
    display: 'flex',
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #dee2e6',
    gap: '0.5rem'
  },
  
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ced4da',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '1rem'
  },
  
  sendButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  },
  
  sendButtonHover: {
    backgroundColor: '#0056b3'
  },
  
  sendButtonDisabled: {
    backgroundColor: '#6c757d',
    cursor: 'not-allowed'
  },
  
  loadingMessage: {
    fontStyle: 'italic',
    color: '#6c757d',
    textAlign: 'center',
    padding: '1rem'
  },
  
  errorMessage: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '0.75rem',
    borderRadius: '4px',
    margin: '0.5rem 0',
    border: '1px solid #f5c6cb'
  },
  
  backButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem'
  }
};
