const UserCard = ({ name, age, phoneNumber, address }) => {
  return (
    <div className="card">
      <h2 className="name">Name: {name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone Number:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default UserCard;
