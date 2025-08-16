import learningIcon from "../../assets/learning.svg"
import approvedIcon from "../../assets/approved.svg"
import fastIcon from "../../assets/fastForward.svg"
import lowCostIcon from "../../assets/lowCost.svg"

export default function WhyFoundation() {
  return (
    <div className="whyFoundation">
      <div className="whyHeadDesc">
        <h1 className="whyHead">Why choose the Foundation Program?</h1>
        <p className="whyDesc">
          Skip the stress of traditional exams and take a faster, smarter path
          to university success. Our Foundation Program is designed to give you
          global recognition, real skills, and direct entry into top-ranked
          institutions — without wasting years or breaking the bank.
        </p>
      </div>
      <div className="whyPointers">
        <div className="point">
            <img src={approvedIcon} alt="Approved" />
            <p>Recognized by IBCC Pakistan and Accepted Globally</p>
        </div>
        <div className="point">
            <img src={learningIcon} alt="Learning" />
            <p>Stress-Free Learning, 100% Project & Assignment Based</p>
        </div>
        <div className="point">
            <img src={fastIcon} alt="Fast Completion" />
            <p>Fast Completion, Graduate in just 12 - 14 Months</p>
        </div>
        <div className="point">
            <img src={lowCostIcon} alt="Low Cost" />
            <p>Most Affordable Pathway to Top-Ranked UK Universities</p>
        </div>
      </div>
    </div>
  );
}