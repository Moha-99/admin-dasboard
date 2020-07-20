import React from 'react';

const UserItem = ({ user }) => {
  return (
    <tbody>
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-dark">Edit</button>{' '}
          <button className="btn btn-danger" href="#">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserItem;
