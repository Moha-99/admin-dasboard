import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';
import { toast } from 'react-toastify';

const EditUsers = ({ current, updateUser, ...props }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (current) {
      setUsername(current.username);
      setEmail(current.email);
    }
  }, [current]);

  const onSubmit = () => {
    if (username === '' || email === '') {
      toast.error('Please fill in all fields');
      return;
    } else {
      const updUser = { id: current.id, username, email };
      updateUser(updUser);
      props.history.push('/');
      toast.success('You updated the user');
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

const mapStateToProps = (state) => ({
  current: state.user.current,
});

export default connect(mapStateToProps, { updateUser })(EditUsers);
