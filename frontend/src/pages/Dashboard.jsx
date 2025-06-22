function Dashboard() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div>
      <h2>Dashboard</h2>
      {userInfo ? <p>Welcome back, {userInfo.name}</p> : <p>Please login</p>}
    </div>
  );
}

export default Dashboard;
