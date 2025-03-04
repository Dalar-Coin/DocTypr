import React, { useState } from 'react';
import FadeTransition from '../components/FadeTransition';
import axios from 'axios'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any error messages when user starts typing
    setError('');
  };

  const validateForm = () => {
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (isNaN(Number(formData.phone))) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        name: formData.name,
        password: formData.password,
        email: formData.email,
        phone: Number(formData.phone)
      }); 

      setSuccess('Registration successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: ''
      });

    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeTransition>
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="bg-white p-4 p-md-5 rounded shadow-lg mx-3" style={{ maxWidth: '450px', animation: 'fadeIn 0.8s ease' }}>
          <h2 className="text-center mb-4 fw-bold">
            Register
          </h2>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Username"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </FadeTransition>
  );
};

export default Register;