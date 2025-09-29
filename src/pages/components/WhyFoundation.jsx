import learningIcon from "../../assets/learning.svg"
import approvedIcon from "../../assets/approved.svg"
import fastIcon from "../../assets/fastForward.svg"
import lowCostIcon from "../../assets/lowCost.svg"

export default function WhyFoundation() {
  return (
    <section className="whyFoundation" aria-labelledby="why-foundation-heading">
      <div className="whyHeadDesc">
        <h2 id="why-foundation-heading" className="whyHead">
          Why choose the Foundation Program?
        </h2>
        <p className="whyDesc">
          Skip the stress of traditional exams and take a faster, smarter path to university success. Our Foundation
          Program is designed to give you global recognition, real skills, and direct entry into top-ranked institutions
          — without wasting years or breaking the bank.
        </p>
      </div>
      <div className="whyPointers" role="list" aria-label="Foundation Program benefits">
        <div className="point" role="listitem">
          <img src={approvedIcon || "/placeholder.svg"} alt="IBCC Pakistan approved certification icon" />
          <p>Recognized by IBCC Pakistan and Accepted Globally</p>
        </div>
        <div className="point" role="listitem">
          <img src={learningIcon || "/placeholder.svg"} alt="Stress-free learning methodology icon" />
          <p>Stress-Free Learning, 100% Project & Assignment Based</p>
        </div>
        <div className="point" role="listitem">
          <img src={fastIcon || "/placeholder.svg"} alt="Fast completion timeline icon" />
          <p>Fast Completion, Graduate in just 12 - 14 Months</p>
        </div>
        <div className="point" role="listitem">
          <img src={lowCostIcon || "/placeholder.svg"} alt="Affordable education cost icon" />
          <p>Most Affordable Pathway to Top-Ranked UK Universities</p>
        </div>
      </div>
    </section>
  )
}
