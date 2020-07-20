import React, { useEffect } from 'react';
import UserItem from './UserItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import { Link } from 'react-router-dom';

const Users = ({ user: { users, loading }, getUsers }) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (loading || users === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-10">
                <h3>Users</h3>
              </div>
              <div className="col-md-2">
                <Link to="/user/add" className="btn btn-info">
                  Add User
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>

              {!loading && users.length === 0 ? (
                <p className="text-center">No users to show</p>
              ) : (
                users.map((user) => <UserItem user={user} key={user.id} />)
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
