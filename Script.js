// ============================================
// Footer year
// ============================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ============================================
// Hero cursor glow
// Desktop only
// ============================================

const glow = document.getElementById("glow");
const hero = document.getElementById("home");

if (
  glow &&
  hero &&
  window.matchMedia("(pointer: fine)").matches
) {

  hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.transform =
      `translate(${x - 320}px, ${y - 320}px)`;

  });

}


// ============================================
// Scroll reveal for projects
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

  {
    threshold: 0.2
  }

);


document
  .querySelectorAll(".project")
  .forEach((el) => {

    projectObserver.observe(el);

  });


// ============================================
// Scroll reveal for education & experience
// ============================================

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("in-view");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.15
  }

);


document
  .querySelectorAll(".reveal-item")
  .forEach((el) => {

    revealObserver.observe(el);

  });


// ============================================
// Dot navigation
// Click to scroll
// ============================================

const dots =
  document.querySelectorAll(".dot");


dots.forEach((dot) => {

  dot.addEventListener("click", () => {

    const targetId =
      dot.dataset.target;

    const target =
      document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// ============================================
// Section scroll spy
// ============================================

const sections =
  document.querySelectorAll(".section");


const sectionObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const id =
            entry.target.id;

          dots.forEach((dot) => {

            dot.classList.toggle(
              "active",
              dot.dataset.target === id
            );

          });

        }

      });

    },

    {
      threshold: 0.45
    }

  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


// ============================================
// Project detail data
// ============================================

const projectDetails = {

  p1: {

    title:
      "Music Hub Lebanon — Booking System",

    body: [

      "A full-stack room booking platform built for a DJ and music production academy, replacing manual scheduling with a system designed to prevent double bookings.",

      "The backend is built with ASP.NET Core and SQL Server, handling studio availability and overlap validation. The frontend is built with React and uses a dark visual style that matches the studio environment.",

      "Stack: ASP.NET Core, React, SQL Server."

    ]

  },


  p2: {

    title:
      "BIsmart",

    body: [

      "BIsmart is a web-based platform designed for electricity retailers in Lebanon.",

      "The system helps manage customers, electricity meters, readings, monthly billing, and payment tracking. It is designed to turn operational data into useful information for managing the business.",

      "The project combines a React frontend with a backend API and SQL database, with automation capabilities for handling business data and workflows.",

      "Stack: React, ASP.NET Core, SQL Server, n8n."

    ]

  },


  p3: {

    title:
      "CineSearch",

    body: [

      "CineSearch is a movie discovery web application that allows users to search for movies and explore information about them.",

      "The application integrates with an external movie API and dynamically displays search results in the browser.",

      "Stack: JavaScript, HTML, CSS, API integration."

    ]

  },


  p4: {

    title:
      "Crane Load-Swing Control",

    body: [

      "A physics simulation exploring load-swing control on a crane system — modeling how a controller can reduce the pendulum-like swing of a suspended load during movement.",

      "Built in Python with a Pygame layer to animate the crane, the load, and the controller's corrections in real time, making an otherwise abstract control-systems problem visible.",

      "Stack: Python, Pygame, control systems."

    ]

  }

};


// ============================================
// Project detail overlay
// ============================================

const overlay =
  document.getElementById("overlay");

const overlayBody =
  document.getElementById("overlayBody");

const overlayClose =
  document.getElementById("overlayClose");


document
  .querySelectorAll(".details-btn")
  .forEach((btn) => {

    btn.addEventListener("click", () => {

      const data =
        projectDetails[btn.dataset.open];

      if (!data) return;

      overlayBody.innerHTML =

        `<h3>${data.title}</h3>` +

        data.body
          .map((paragraph) => `<p>${paragraph}</p>`)
          .join("");

      overlay.classList.add("open");

      document.body.style.overflow = "hidden";

    });

  });


// ============================================
// Close overlay
// ============================================

function closeOverlay() {

  if (!overlay) return;

  overlay.classList.remove("open");

  document.body.style.overflow = "";

}


if (overlayClose) {

  overlayClose.addEventListener(
    "click",
    closeOverlay
  );

}


if (overlay) {

  overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

      closeOverlay();

    }

  });

}


// ============================================
// Escape key closes overlay
// ============================================

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    closeOverlay();

  }

});


// ============================================
// Topbar subtle shadow on scroll
// ============================================

const topbarInner =
  document.querySelector(".topbar-inner");


if (topbarInner) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      topbarInner.style.boxShadow =
        "0 10px 34px rgba(0,0,0,0.1)";

    } else {

      topbarInner.style.boxShadow =
        "0 8px 30px rgba(0,0,0,0.06)";

    }

  });

}