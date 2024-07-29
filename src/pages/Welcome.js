import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>the welcome page</h1>
      <Routes>
        <Route path="/new-user" element={<p>Welcome, new user!</p>} />
        {/* Other nested routes if needed */}
      </Routes>
    </section>
  );
};

export default Welcome;
