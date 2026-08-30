// ============================================
// Footer year
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// Hero cursor glow (desktop only — subtle, one moment)
// ============================================
const glow = document.getElementById("glow");
const hero = document.getElementById("home");
if (window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.transform = `translate(${x - 320}px, ${y - 320}px)`;
  });
}

// ============================================
// Scroll reveal for project rows
// ============================================
const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        projectObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".project").forEach((el) => projectObserver.observe(el));

// ============================================
// Dot nav: scroll spy + click to scroll
// ============================================
const sections = document.querySelectorAll(".section");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const target = document.getElementById(dot.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach((dot) => {
          dot.classList.toggle("active", dot.dataset.target === id);
        });
      }
    });
  },
  { threshold: 0.5 }
);
sections.forEach((section) => sectionObserver.observe(section));

// ============================================
// Project detail overlay
// ============================================
const projectDetails = {
  p1: {
    title: "Music Hub Lebanon — Booking System",
    body: [
      "A full-stack room booking platform built for a DJ and music production academy, replacing manual scheduling with a system that actually prevents double bookings.",
      "The backend is ASP.NET Core with SQL Server, handling studio availability and overlap validation. The front end is React with a dark theme that matches the studio's brand.",
      "Stack: ASP.NET Core, React, SQL Server."
    ]
  },
  p2: {
    title: "BIsmart",
    // TODO: rewrite this with the real details of the project
    body: [
      "Replace this paragraph with what BIsmart actually does — the problem it solves, who it's for, and the data it works with.",
      "Add a second paragraph on the technical approach: how data comes in, how it's processed, and what the output looks like.",
      "Stack: SQL, Python."
    ]
  },
  p3: {
    title: "CineSearch",
    // TODO: rewrite this with the real details of the project
    body: [
      "Replace this paragraph with what CineSearch actually does — how search works, what API or dataset it pulls from, and what makes it useful.",
      "Add a second paragraph on any interesting technical decisions — caching, filtering, ranking, etc.",
      "Stack: JavaScript, API integration."
    ]
  },
  p4: {
    title: "Crane Load-Swing Control",
    body: [
      "A physics simulation exploring load-swing control on a crane system — modeling how a controller can reduce the pendulum-like swing of a suspended load during movement.",
      "Built in Python with a Pygame layer to animate the crane, the load, and the controller's corrections in real time, making an otherwise abstract control-systems problem visible.",
      "Stack: Python, Pygame, control systems."
    ]
  }
};

const overlay = document.getElementById("overlay");
const overlayBody = document.getElementById("overlayBody");
const overlayClose = document.getElementById("overlayClose");

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = projectDetails[btn.dataset.open];
    if (!data) return;
    overlayBody.innerHTML =
      `<h3>${data.title}</h3>` + data.body.map((p) => `<p>${p}</p>`).join("");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeOverlay() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
overlayClose.addEventListener("click", closeOverlay);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});

// ============================================
// Topbar subtle shadow on scroll
// ============================================
const topbarInner = document.querySelector(".topbar-inner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    topbarInner.style.boxShadow = "0 10px 34px rgba(0,0,0,0.1)";
  } else {
    topbarInner.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
  }
});