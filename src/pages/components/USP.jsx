import graduationCapIcon from "../../assets/graduationCap.svg"
import supportIcon from "../../assets/support.svg"
import skillsIcon from "../../assets/skills.svg"
import stressFreeIcon from "../../assets/stressFree.svg"

export default function USP() {
  return (
    <section className="qualitiesSection" aria-labelledby="usp-heading">
      <h2 id="usp-heading" className="qualitiesHead">
        We don't just prepare you for university, we prepare you for success.
      </h2>
      <div className="qualities" role="list" aria-label="Crownbridge unique selling points">
        <article className="quality" role="listitem">
          <img
            src={graduationCapIcon || "/placeholder.svg"}
            alt="Graduation cap representing trusted education partnership"
          />
          <h3>Trusted Education Partner</h3>
          <p>
            Delivered by Hexis College, a respected name in international education with a track record of student
            success.
          </p>
        </article>
        <article className="quality" role="listitem">
          <img src={supportIcon || "/placeholder.svg"} alt="Support icon representing complete student guidance" />
          <h3>Complete Support</h3>
          <p>From admission paperwork to visa guidance, we handle the hard stuff so you can focus on learning.</p>
        </article>
        <article className="quality" role="listitem">
          <img src={skillsIcon || "/placeholder.svg"} alt="Skills icon representing life-long learning abilities" />
          <h3>Skills for Life</h3>
          <p>Gain real-world skills in communication, critical thinking, and research that go beyond the classroom.</p>
        </article>
        <article className="quality" role="listitem">
          <img
            src={stressFreeIcon || "/placeholder.svg"}
            alt="Stress-free icon representing relaxed learning environment"
          />
          <h3>Stress-Free Learning</h3>
          <p>100% project and assignment-based learning — no cramming, no exam anxiety.</p>
        </article>
      </div>
    </section>
  )
}
