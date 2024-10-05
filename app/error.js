"use client";
export default function ErrorPage({ error }) {
  return (
    <div className="error">
      <h1>{error.status} Error occurred</h1>
      <p>{error.message} </p>
      <p>please reload and try agin</p>
    </div>
  );
}
