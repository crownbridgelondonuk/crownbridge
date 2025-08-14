import placeHolder1 from "../../assets/placeholder1.png";
import placeHolder2 from "../../assets/placeholder2.png";
import placeHolder3 from "../../assets/placeholder3.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  const images = [placeHolder1, placeHolder2, placeHolder3];

  return (
    <div className="headerContent">
      <p className="head-tag">Foundation Program</p>
      <h1 className="head">Go Global in Just 12 Months</h1>
      <div className="headerImages">
        {images.map((src, i) => (
          <img src={src} alt={`Header Image ${i + 1}`} key={i + 1} />
        ))}
      </div>
      <p className="head-desc">
        Powered by New Educational Order - Approved by LRN (UK Board) & IBCC Pakistan
      </p>
      <div className="buttonBars">
        <Link to="/apply" ><button>Apply Now</button></Link>
        <Link to="/apply" ><button>Learn More</button></Link>
      </div>
    </div>
  );
}