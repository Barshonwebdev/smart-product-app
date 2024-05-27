const Dashboard = () => {
  return (
    <div>
      <div className="bg-base-300 p-4">
        <h1 className="text-center text-gray-600 text-3xl italic">
          Welcome to the Dashboard
        </h1>
      </div>
      <div className="flex justify-between mt-5">
        <div className="ml-1 min-h-96 min-w-64 rounded text-white bg-blue-600">
            <div className="mt-2 text-center">
                <p className="text-lg">Dashboard Options</p>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
