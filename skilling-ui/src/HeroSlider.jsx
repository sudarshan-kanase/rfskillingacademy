import { useState } from "react";

const slides = [
  {
    title: "Explore a world of possibilities",
    text: "Find the perfect job for you and take the next step",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Learn new skills online",
    text: "Upgrade yourself with industry ready programs",
    img: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b",
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const next = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div style={{ background: "#efe8db" }} className="py-5 position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* LEFT */}
          <div className="col-md-6 text-center text-md-start">

            <h1 className="display-5 fw-bold text-primary mb-3">
              {slides[index].title}
            </h1>

            <p className="text-muted fs-5">
              {slides[index].text}
            </p>

            <button className="btn btn-warning rounded-pill px-4 mt-2 shadow-sm">
              Explore Now
            </button>

          </div>

          {/* RIGHT */}
          <div className="col-md-6 text-center">
            <img
              src={slides[index].img}
              className="img-fluid rounded-4 shadow"
              alt="slider"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
        onClick={prev}
        style={{ zIndex: 2 }}
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
        onClick={next}
        style={{ zIndex: 2 }}
      >
        ❯
      </button>

    </div>
  );
}

export default HeroSlider;