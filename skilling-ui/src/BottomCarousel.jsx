import { useState } from "react";

const items = [
  "Digital Skills",
  "Communication",
  "Resume Building",
  "Interview Prep",
  "IT Courses",
  "Finance Basics",
];

function BottomCarousel() {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start < items.length - 3) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <div className="py-5 bg-white">
      <div className="container position-relative">

        {/* LEFT BUTTON */}
        <button
          className="btn btn-warning position-absolute start-0 top-50 translate-middle-y shadow"
          onClick={prev}
          style={{ zIndex: 2 }}
        >
          ❮
        </button>

        {/* CARDS */}
        <div className="row justify-content-center g-3">
          {items.slice(start, start + 3).map((item, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              
              <div className="card text-center p-4 shadow-sm border-0 rounded-4 h-100 hoverCard">
                <h6 className="fw-semibold mb-0">{item}</h6>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          className="btn btn-warning position-absolute end-0 top-50 translate-middle-y shadow"
          onClick={next}
          style={{ zIndex: 2 }}
        >
          ❯
        </button>

      </div>
    </div>
  );
}

export default BottomCarousel;