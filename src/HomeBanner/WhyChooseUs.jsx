import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiClock,
  FiUsers,
  FiEye,
} from "react-icons/fi";
import "./WhyChooseUs.css";
import { FaBalanceScale } from "react-icons/fa";

const cards = [
  {
    icon: <FiClock />,
    title: "On-Time & Accurate Filing",
    desc: "Structured workflows and expert verification ensure every filing is accurate and submitted well within deadlines, helping you avoid penalties and rework.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Human Support",
    desc: "Real professionals review documents, clarify requirements, and guide you at every stage—no confusion, no generic automation.",
  },
  {
    icon: <FiEye />,
    title: "Transparent Tracking",
    desc: "Clear status updates, next-step guidance, and proactive notifications keep you informed throughout the filing process.",
  },
  {
    icon: <FiShield />,
    title: "Secure & Confidential",
    desc: "Your personal and business data is protected with secure systems and strict confidentiality at every step.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      {/* Header */}
     <div className="why-header split">
  <div className="why-header-left">
   <span className="why-badge">
  <FaBalanceScale size={18} />
  <span>WHY US</span>
</span>

    <h2>Why choose us</h2>
  </div>

  <div className="why-header-right">
    <p>
      We simplify complex filing and compliance processes using expert
      oversight, secure systems, and clear communication—so your documents
      are handled correctly from start to finish.
    </p>
  </div>
</div>

      <div class="hh-network-bg">
  <span class="ring ring-1"></span>
  <span class="ring ring-2"></span>
  <span class="ring ring-3"></span>

  <span class="orbit orbit-1"><span class="node"></span></span>
  <span class="orbit orbit-2"><span class="node"></span></span>
  <span class="orbit orbit-3"><span class="node"></span></span>
</div>

      {/* Curved SVG Animation */}
      {/* <svg className="curve-svg" viewBox="0 0 600 200">
        <motion.path
          d="M10 150 Q300 10 590 150"
          fill="transparent"
          stroke="#168831"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg> */}

      {/* Cards */}
      <div className="why-cards">
         
        {cards.map((item, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
