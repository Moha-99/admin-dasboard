import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import classnames from 'classnames';

const AddUsers = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    if (username === '') {
      setErrors({ errors: { username: 'username is required' } });
      return;
    }

    if (email === '') {
      setErrors({ errors: { email: 'email is required' } });
      return;
    }
    const newUser = { username, email };
    addUser(newUser);
  };

  return (
    <div className="container">
      <div className="card">
        <h3 className="card-header">
          <i className="fa fa-user-plus"></i> Add User
        </h3>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={classnames('form-control', {
                      'is-invalid': errors.username,
                    })}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addUser })(AddUsers);
