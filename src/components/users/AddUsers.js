import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { toast } from 'react-toastify';

const AddUsers = ({ addUser, ...props }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (username === '' || email === '') {
      toast.error('Please fill in all fields');
      return;
    } else {
      const newUser = { username, email };
      addUser(newUser);
      props.history.push('/');
      toast.success('You added a new user');
    }
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
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
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
