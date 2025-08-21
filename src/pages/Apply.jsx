import "../apply.css";

export default function Apply() {
  return (
    <div className="responsive-form">
      <iframe
        title="Crownbridge Application Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSemdO8gkycZedpDRpP32ogA2owf7RXAiwF6vZ8uy17QHQoCAA/viewform?embedded=true"
        loading="lazy"
        className="responsive-iframe"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
}
