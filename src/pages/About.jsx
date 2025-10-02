import "../about.css"
import { Link } from "react-router-dom"

// Import assets
import CEO from "../assets/CEO - Asad Malik.png"
import DirectorAQS from "../assets/Director - Abdul Qadir Silat.png"
import DirectorGeorge from "../assets/Director - George Smith.png"
import DirectorBryleen from "../assets/Director - Bryleen Sebastian.png"
import DirectorRahat from "../assets/Director - Rahat Ali Khan.png"
import DirectorJulia from "../assets/Director - Julia Richard.png"



export default function About() {
  return (
    <div id="about">
      <section className="heroSect" > 
        <div className="aboutHeroContent">
            <h1 className="hero-title">Your Bridge to Global Education</h1>
            <p className="hero-desc">
            A recognized alternative to A-Levels and Intermediate. Fast, stress-free, affordable pathway to leading
            universities worldwide.
            </p>
            <Link to="/apply">
                <button className="primary-btn">Apply Now</button>
            </Link> 
        </div>
      </section>
      <section className="aboutIntro">
        <div className="introContent">
          <h2>What is Crownbridge?</h2>
          <p>
            Crownbridge is a pathway college in Pakistan committed to helping students achieve their dreams of studying
            at leading universities worldwide.
            Through LRN's Pre-U Foundation Program, we offer a globally recognized and affordable alternative to A-Levels
            and Intermediate.
          </p>
          <p className="aboutTag" > We don't just prepare you for university, we prepare you for success.</p >
        </div>

        <div className="missionVision">
          <div className="mvCard">
            <h3>Our Mission</h3>
            <p>
              Crownbridge's mission is to provide a stress-free, assignment-based alternative to A-Levels in Pakistan. We equip learners with academic skills, confidence, and pathways to leading international universities.
            </p>
          </div>
          <div className="mvCard">
            <h3>Our Vision</h3>
            <p>
              Become a leading pathway college in Pakistan, empowering students with globally recognized qualifications
              and opening doors to world-class universities.
            </p>
          </div>
        </div>
      </section>

      <section className="ceoStatement">
        <div className="ceoContent">
          <header>
            <h2>Message from Our CEO</h2>
          </header>
          <article>
            <blockquote>
              "At Crownbridge, we believe education should be accessible, stress-free, 
              and globally recognized. Our alternative to A-Levels opens faster 
              pathways to higher education abroad."
            </blockquote>
            <div className="cite">
              <img src={CEO} alt="Crownbridge CEO - Asad Malik" />
              <cite>Asad Malik, CEO of Crownbridge</cite>
            </div>
          </article>
        </div>
      </section>

      <section className="boardSection">
        <h2>Meet Our Board of Directors</h2>
        <p className="boardDesc">
          Our Board unites accomplished professionals dedicated to guiding Crownbridge's mission of delivering quality,
          globally recognized education.
        </p>
        <div className="boardGrid">
          <div className="boardMember">
            <img src={DirectorAQS} alt="Board Director - Abdul Qadir Silat" />
            <h4>Abdul Qadir Silat</h4>
            <p>Director</p>
          </div>
          <div className="boardMember">
            <img src={DirectorGeorge} alt="Board Director - George Smith" />
            <h4>George Smith</h4>
            <p>Director</p>
          </div>
          <div className="boardMember">
            <img src={DirectorBryleen} alt="Board Director - Bryleen Sebastian" />
            <h4>Bryleen Sebastian</h4>
            <p>Director</p>
          </div>
          <div className="boardMember">
            <img src={DirectorRahat} alt="Board Director - Rahat Ali Khan" />
            <h4>Rahat Ali Khan</h4>
            <p>Director</p>
          </div>
          <div className="boardMember">
            <img src={DirectorJulia} alt="Board Director - Julia Richard" />
            <h4>Julia Richard</h4>
            <p>Director</p>
          </div>
        </div>
      </section>

      <section className="programSnapshot">
        <h2>Program Overview</h2>
        <div className="programGrid">
          <div className="programDetail">
            <h4>Duration</h4>
            <p>12-14 Months</p>
          </div>
          <div className="programDetail">
            <h4>Credits</h4>
            <p>120 <span className="small">(6 Units x 20)</span></p>
          </div>
          <div className="programDetail">
            <h4>Affiliation</h4>
            <p>LRN UK</p>
          </div>
          <div className="programDetail">
            <h4>Recognized by</h4>
            <p>IBCC Pakistan</p>
          </div>
          <div className="programDetail">
            <h4>Eligibility</h4>
            <p>O Levels / Matric</p>
          </div>
        </div>
      </section>

      <section className="howToApply">
        <h2>How to Apply?</h2>
        <p className="applyDesc">
          Our admissions process is simple, transparent, and student-focused. Every eligible applicant has a fair
          opportunity to join.
        </p>
        <div className="applySteps">
          <div className="step">
            <div className="stepNumber">01</div>
            <h4>Verify Eligibility</h4>
            <p>Must have completed Matriculation, O-Levels, or equivalent qualification.</p>
          </div>
          <div className="step">
            <div className="stepNumber">02</div>
            <h4>Submit Online Application</h4>
            <p>Complete the online form at <Link to="/apply" style={{color: "#070707", fontWeight: "bold"}} >crownbridgelondon.co.uk/apply</Link></p>
          </div>
          <div className="step">
            <div className="stepNumber">03</div>
            <h4>Application Review</h4>
            <p>All submissions are carefully evaluated. Shortlisted candidates will be contacted.</p>
          </div>
          <div className="step">
            <div className="stepNumber">04</div>
            <h4>Attend Interview</h4>
            <p>Selected applicants are invited to discuss suitability and academic goals.</p>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="contactCTA">
        <div className="contactInfo">
          <h3>Ready to Start Your Journey?</h3>
          <p>Contact us for guidance and support through your application process.</p>
        </div>
        <div className="finalCTA">
          <Link to="/apply">
            <button className="primary-btn" data-analytics="apply-final-cta">
              Apply Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="secondary-btn">Contact Us</button>
          </Link>
        </div>
      </section>
    </div>
  )
}