export default function FoundationCourses() {
  const mandatory = [
    "Foundation Mathematics",
    "Foundation Computing",
    "English Language and Study Skills",
  ];

  const subjectsByCategory = {
    "Business Management": [
      "Foundation Business & Management",
      "Foundation Economics",
      "Foundation Accounting",
      "Foundation Sociology",
    ],
    Law: [
      "Foundation Law",
      "Foundation Business & Management",
      "Foundation Goverment & Politics",
      "Foundation Psychology",
    ],
    Medical: [
      "Foundation Biology",
      "Foundation Chemistry",
      "Foundation Physics",
    ],
    Computing: [
      "Foundation Programming and Software Design",
      "Further Mathematics",
      "Foundation Chemistry",
      "Foundation Physics",
      "Foundation Digital Skills and Emerging Technologies",
      "Foundation Creative Arts and Design",
    ],
  };

  const categories = Object.keys(subjectsByCategory);

  const chipColor = (index, seed = 30) => {
    const hue = (seed + index * 49) % 360;
    const bg = `hsl(${hue} 80% 95%)`;
    const border = `hsl(${hue} 70% 80%)`;
    const text = `hsl(${hue} 60% 30%)`;
    return { backgroundColor: bg, borderColor: border, color: text };
  };

  return (
    <section className="coursesSection" aria-labelledby="coursesTitle" id="coursesOffered" >
      <div className="coursesInner">
        <header className="coursesHeader">
          <h2 id="coursesTitle" className="coursesTitle">
            Our foundation courses
          </h2>
          <p className="coursesSubtitle">
            Three mandatory units plus three electives. Pick electives by
            category to build your pathway.
          </p>
        </header>

        <div className="coursesGrid">
          <aside className="coursesMandatory" aria-label="Mandatory units">
            <h3 className="coursesSubhead">Mandatory subjects</h3>
            <ul className="mandatoryList" role="list">
              {mandatory.map((m) => (
                <li key={m} className="courseCard courseCard--mandatory">
                  <svg
                    className="courseIcon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" fill="#e35df7" />
                    <path
                      d="M8 12l2.5 2.5L16 9"
                      stroke="#fff"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="courseTitle">{m}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="coursesBySubject" aria-label="Elective categories">
            <h3 className="coursesSubhead">Elective categories</h3>

            <div className="collapseGroup">
              {categories.map((cat, idx) => (
                <details
                  key={cat}
                  className="collapseItem"
                  {...(idx === 0 ? { open: true } : {})}
                >
                  <summary
                    className="collapseSummary"
                    role="button"
                    aria-expanded={idx === 0}
                  >
                    <div className="summaryLeft">
                      <span
                        className="catDot"
                        style={{ background: `var(--pure-white)` }}
                      />
                      <span className="catTitle">{cat}</span>
                    </div>

                    <svg
                      className="chev"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>

                  <div className="panel">
                    
                    <ul className="electiveList" role="list">
                      {subjectsByCategory[cat].map((course, i) => (
                        <li key={course} className="courseCard">
                          <span
                            className="chip"
                            style={chipColor(i, idx * 7 + 20)}
                            aria-hidden="true"
                          />
                          <span className="courseTitle">{course}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="note">
                      {cat !== "Medical" && (
                        <strong>Pick 3 electives</strong>
                      )}
                      {cat === "Medical" && (
                      
                        <div>
                          <strong> Note: This category is intended for students applying abroad only.</strong>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}