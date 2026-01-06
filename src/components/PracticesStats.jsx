import { useEffect, useRef } from 'react';
import './PracticesStats.css';

function PracticesStats() {
  const canvasRef = useRef(null);
  const progressBarsRef = useRef([]);

  useEffect(() => {
    // Draw donut chart
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    const innerRadius = 100;

    // Income: ~30% (dark blue)
    // Expense: ~70% (light blue)
    const incomePercentage = 30;
    const expensePercentage = 70;

    // Draw Income segment
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (incomePercentage / 100) * 2 * Math.PI);
    ctx.arc(centerX, centerY, innerRadius, -Math.PI / 2 + (incomePercentage / 100) * 2 * Math.PI, -Math.PI / 2, true);
    ctx.closePath();
    ctx.fillStyle = '#165aa2';
    ctx.fill();

    // Draw Expense segment
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2 + (incomePercentage / 100) * 2 * Math.PI, -Math.PI / 2 + 2 * Math.PI);
    ctx.arc(centerX, centerY, innerRadius, -Math.PI / 2 + 2 * Math.PI, -Math.PI / 2 + (incomePercentage / 100) * 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = '#59daff';
    ctx.fill();

    // Animate progress bars on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            setTimeout(() => {
              progressBar.style.width = width;
            }, 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const progressItems = [
    { title: 'Consultation', percentage: 43 },
    { title: 'Practice', percentage: 85 },
    { title: 'Mediation', percentage: 60 }
  ];

  return (
    <section className="practices-stats-section">
      <div className="container">
        <div className="section-headline">
          <h4>Practices stats</h4>
          <p>Our lawyers offer clients a range of integrated global capabilities, including some of the world's most active M&A, real estate, financial services, litigation and corporate risk practices.</p>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="doughnut-chart">
              <canvas 
                ref={canvasRef}
                id="myDoughnutChart" 
                width="550" 
                height="400"
              ></canvas>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#165aa2' }}></span>
                <span className="legend-label">Income</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#59daff' }}></span>
                <span className="legend-label">Expense</span>
              </div>
            </div>
          </div>
          <div className="col-7">
            <ul className="progress-list">
              {progressItems.map((item, index) => (
                <li key={index}>
                  <div className="progress-tile">
                    <h5 className="progress-tile__title">{item.title}</h5>
                    <div className="progress-bar">
                      <span 
                        ref={(el) => (progressBarsRef.current[index] = el)}
                        className="progress-bar__line animated" 
                        data-width={`${item.percentage}%`}
                        style={{ width: '0%' }}
                      ></span>
                    </div>
                    <span className="progress-tile__num">{item.percentage}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticesStats;

