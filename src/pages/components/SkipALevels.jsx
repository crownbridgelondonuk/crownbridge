
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function SkipALevels() {
  return(
    <div className="skipALevels CTACard">
      <h3>Skip A Levels. Go Global.</h3>
      <p>Secure your spot in the Foundation Program today and open doors to leading universities worldwide. Your future starts now.</p>
      <Link to="/apply" ><button>Apply</button></Link>
    </div>
  )
}