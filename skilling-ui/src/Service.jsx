import React from "react";

function Service() {

  const services = [
    {
      title: "Trading Course",
      desc: "Learn stock market trading from basics to advanced with live sessions.",
    },
    {
      title: "Placement Training",
      desc: "Get ready for interviews with our professional placement programs.",
    },
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, React and build real-world projects.",
    },
    {
      title: "Internship",
      desc: "Gain real industry experience with our internship programs.",
    },
    {
      title: "Career Guidance",
      desc: "Get expert advice to choose the right career path.",
    },
    {
      title: "Live Projects",
      desc: "Work on real projects and boost your portfolio.",
    },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">Our Services</h1>
        <p className="text-muted fs-5">
          We provide high-quality services to help you grow your skills and career.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {services.map((item, i) => (
          <div className="col-lg-4 col-md-6" key={i}>
            
            <div className="card h-100 text-center p-4 shadow-sm border-0 rounded-4 hoverCard">

              <h5 className="fw-bold mb-2">{item.title}</h5>

              <p className="text-muted small mb-0">
                {item.desc}
              </p>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Service;