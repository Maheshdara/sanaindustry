import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        if (response.ok) {
          const data = await response.json();
          const token = data.access_token; // Assuming the token is in the "token" field of the response
          document.cookie = `token=${token}; path=/`
          // Do something with the token (e.g., set it as a cookie, store it in state, etc.)
          console.log('Token vinay anna thopu:', token);
          navigate('/contact')

        } else {
          setError('Invalid credentials'); // Handle login error
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred'); // Handle general error
      }
    };
  
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

  export default MyComponent;
  