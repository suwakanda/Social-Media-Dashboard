import Header from "../layout/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <center>
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </center>
      </main>
    </>
  );
};

export default ErrorPage;
