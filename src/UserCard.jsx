

const UserCard = (name, age, phoneNumber, address) => {
  return (
    <div className="card">
      <h2 className="name">Name:{name}</h2>
      <div className="body">
        <div className="label">Age:{age}</div>
        <div className="label">Phone Number:{phoneNumber}</div>
        <div className="label">Address:{address}</div>
      </div>
    </div>
  );
};

export default UserCard;
