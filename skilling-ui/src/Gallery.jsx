import React from "react";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">Gallery</h1>
        <p className="text-muted fs-5">
          Explore our events, training sessions and achievements.
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            
            <div className="gallery-card overflow-hidden rounded-4 shadow-sm">

              <img
                src={img}
                alt="gallery"
                className="img-fluid w-100"
                style={{ height: "250px", objectFit: "cover" }}
              />

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;