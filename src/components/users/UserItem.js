import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, setCurrent } from '../../actions/userActions';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserItem = ({ user, deleteUser, setCurrent }) => {
  const onDelete = () => {
    deleteUser(user.id);
    toast.warning('You deleted a user');
  };
  return (
    <tbody>
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link
            to="/user/edit"
            onClick={() => setCurrent(user)}
            className="btn btn-dark"
          >
            Edit
          </Link>{' '}
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default connect(null, { deleteUser, setCurrent })(UserItem);
