import graduationCapIcon from "../../assets/graduationCap.svg"
import supportIcon from "../../assets/support.svg"
import skillsIcon from "../../assets/skills.svg"
import stressFreeIcon from "../../assets/stressFree.svg"

export default function USP() {
    return (
        <div className="qualitiesSection">
            <h1 className="qualitiesHead" >We don't just prepare you for university, we prepare you for success.</h1>
            <div className="qualities">
                <div className="quality">
                    <img src={graduationCapIcon} alt="graduation cap" />
                    <h3>Trusted Education Partner</h3>
                    <p>Delivered by Hexis College, a respected name in international education with a track record of student success.</p>
                </div>
                <div className="quality">
                    <img src={supportIcon} alt="support icon" />
                    <h3>Complete Support</h3>
                    <p>From admission paperwork to visa guidance, we handle the hard stuff so you can focus on learning.</p>
                </div>
                <div className="quality">
                    <img src={skillsIcon} alt="skills icon" />
                    <h3>Skills for Life</h3>
                    <p>Gain real-world skills in communication, critical thinking, and research that go beyond the classroom.</p>
                </div>
                <div className="quality">
                    <img src={stressFreeIcon} alt="stress free icon" />
                    <h3>Stress-Free Learning</h3>
                    <p>100% project and assignment-based learning — no cramming, no exam anxiety.</p>
                </div>
            </div>
        </div>
    );
}