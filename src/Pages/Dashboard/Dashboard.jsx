import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL, emailVerified } = user;
  return (
    <div>
      <div className="bg-base-300 p-4">
        <h1 className="text-center text-gray-600 text-3xl italic">
          Welcome to the Dashboard
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
        <div className="mx-1 min-h-96 min-w-64 rounded text-white bg-blue-600">
          <div className="mt-2 text-center">
            <p className="text-lg">Dashboard Options</p>
          </div>
        </div>
        <div></div>

        {/* user info  */}
        <div className="card md:w-72 bg-base-100 shadow-xl my-3 md:my-0 me-3 ">
            <h1 className="text-2xl text-center text-gray-600 md:mt-3">User Information</h1>
          <figure className="px-10 mt-4">
            <img
              src={photoURL}
              className="rounded-xl"
            />
          </figure>
          <div className=" items-center text-gray-600 mx-2 text-center">
            <h2 className="my-3 text-lg">Username: {displayName}</h2>
            <p className="mb-3 md:mb-2 text-lg">Email: <span className="font-semibold">{email}</span></p>
            {emailVerified? <p>Verified: Yes</p> : <p>Verified: No</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
