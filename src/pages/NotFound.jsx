import notFound from "../assets/notFound.png";

export default function NotFound() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={notFound}
        alt="404 - Page not found"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}