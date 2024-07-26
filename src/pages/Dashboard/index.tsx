import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const Loading = () => {
  useEffect(() => {
    console.log("loading mounted");

    return () => console.log("loading unmounted");
  }, []);

  return <div>Loading...</div>;
};

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout>
      <h2>I'm not in danger Skyler</h2>
      <h1 className="text-danger">I am the danger</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
        alt=""
      />
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">User Info</div>
        <div className="card-body">
          {isLoading ? (
            <Loading />
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit perferendis sunt sint accusamus at, amet
              maxime excepturi hic illum impedit quidem porro vitae temporibus.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
