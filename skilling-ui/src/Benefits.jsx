function Benefits() {
  const data = [
    {
      title: "Practical Experience",
      desc: "Hands-on real-world projects to apply your learning.",
      icon: "📊",
    },
    {
      title: "Build Real-World Applications",
      desc: "Create apps like Amazon, Zomato, Instagram, etc.",
      icon: "📈",
    },
    {
      title: "Product-Based Company Preparation",
      desc: "Prepare for interviews & get mentorship for top firms.",
      icon: "🏝️",
    },
    {
      title: "100% Placement Record",
      desc: "Backed by our 5-star rated training & corporate links.",
      icon: "📝",
    },
    {
      title: "30+ Live Industrial Projects",
      desc: "Learn from real-world product development scenarios.",
      icon: "📁",
    },
    {
      title: "Career Guidance & Mentorship",
      desc: "Resume, LinkedIn optimization & interview coaching.",
      icon: "💼",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock assistance for your learning journey.",
      icon: "⏰",
    },
    {
      title: "Internships & Assignments",
      desc: "Daily assignments & internship opportunities provided.",
      icon: "🛡️",
    },
    {
      title: "Daily Recorded Sessions",
      desc: "Daily recorded sessions for better revision.", // 🔥 fix desc
      icon: "🎥",
    },
    {
      title: "Study Material & Tasks",
      desc: "Study material for references and tasks to solve.",
      icon: "📚",
    },
    {
      title: "Hands-on Experience",
      desc: "Latest tech trends in software industry.",
      icon: "🛠️",
    },
    {
      title: "Live Doubt Resolution",
      desc: "Resolve your doubts in the lecture.",
      icon: "❓",
    },
  ];

  return (
    <div id="benefits" className="rf-benefits py-5">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-bold mb-5 display-6">
          Unique Benefits & Program Highlights
        </h2>

        <div className="row g-4">
          {data.map((item, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              
              <div className="rf-benefit-card text-center h-100 p-4 rounded-4 shadow-sm">

                <div className="rf-icon mb-3 fs-2">
                  {item.icon}
                </div>

                <h6 className="fw-bold mb-2">{item.title}</h6>

                <p className="small text-muted mb-0">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Benefits;