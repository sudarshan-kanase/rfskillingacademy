function Home() {
  return (
    <div>

      <section id="home" style={sectionStyle}>
        <h1>Home Section</h1>
      </section>

      <section id="about" style={sectionStyle}>
        <h1>About Section</h1>
      </section>

      <section id="service" style={sectionStyle}>
        <h1>Service Section</h1>
      </section>

      <section id="trading" style={sectionStyle}>
        <h1>Trading Section</h1>
      </section>

      <section id="placement" style={sectionStyle}>
        <h1>Placement Section</h1>
      </section>

      <section id="program" style={sectionStyle}>
        <h1>Program Section</h1>
      </section>

      <section id="blog" style={sectionStyle}>
        <h1>Blog Section</h1>
      </section>

      <section id="gallery" style={sectionStyle}>
        <h1>Gallery Section</h1>
      </section>

      <section id="contact" style={sectionStyle}>
        <h1>Contact Section</h1>
      </section>

    </div>
  );
}

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #ccc",
};

export default Home;