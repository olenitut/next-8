import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feddbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      email: emailRef.current.value,
      feedback: feddbackRef.current.value,
    };

    fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body: JSON.stringify(feedback),
    });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} />
        <textarea
          type="text"
          placeholder="feedback"
          ref={feddbackRef}
        ></textarea>
        <button>send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
