import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Unsure() {
  return (
    <div className="stillUnsure CTACard">
      <h3>Still Unsure?</h3>
      <p>Get free consultation.</p>
      <Link to="/contact"><button><span className="label">Contact us</span></button></Link>
    </div>
  )
}
