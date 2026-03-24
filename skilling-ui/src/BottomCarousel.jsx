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

        <button
          className="btn btn-warning position-absolute start-0 top-50"
          onClick={prev}
        >
          ❮
        </button>

        <div className="row justify-content-center">
          {items.slice(start, start + 3).map((item, i) => (
            <div className="col-md-3 mx-2" key={i}>
              <div className="card text-center p-5 shadow-sm hoverCard">
                {item}
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-warning position-absolute end-0 top-50"
          onClick={next}
        >
          ❯
        </button>

      </div>
    </div>
  );
}

export default BottomCarousel;