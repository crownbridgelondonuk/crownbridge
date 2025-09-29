import placeHolder1 from "../../assets/placeholder1.png"
import placeHolder2 from "../../assets/placeholder2.png"
import placeHolder3 from "../../assets/placeholder3.png"
import { Link } from "react-router-dom"

export default function Header() {
  const images = [placeHolder1, placeHolder2, placeHolder3]

  return (
    <header className="headerContent" role="banner">
      <p className="head-tag">Foundation Program</p>
      <h1 className="head">Go Global in Just 12 Months</h1>
      <div className="headerImages" role="img" aria-label="Students celebrating graduation and academic success">
        {images.map((src, i) => (
          <img
            src={src || "/placeholder.svg"}
            alt={`Crownbridge students achieving academic success - Image ${i + 1}`}
            key={i + 1}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <p className="head-desc">Powered by New Educational Order - Approved by LRN (UK Board) & IBCC Pakistan</p>
      <div className="buttonBars" role="group" aria-label="Main action buttons">
        <Link to="/apply" aria-label="Apply now for Crownbridge Pre-U Foundation Program">
          <button>Apply Now</button>
        </Link>
        <Link to="/contact" aria-label="Learn more about Crownbridge programs">
          <button>Learn More</button>
        </Link>
      </div>
    </header>
  )
}
