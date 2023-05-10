const generatePosition = (axis, plus = true) => {
  let width = (axis === "x") ? window.innerWidth : window.innerHeight
  let value = Math.floor(Math.random() * width/3)
  value = plus ? value : -value
  console.log(value)
  return value
}

const projectdata = {
  donut: {
    id: 1,
    class: "project-container green fixed",
    title: "Every Bite Counts",
    description: ["An airbnb-style marketplace app for donuts, built with Ruby on Rails.","Users can search by location and flavour, upload their own donuts, and arrange pickup times."],
    github: "https://github.com/sulphite/every-bite-counts",
    url: "https://every-bite-counts.herokuapp.com/",
    image_url: "https://placehold.co/400x250",
    tools: ["Rails", "Heroku", "PostgreSQL"],
    animation: {
      init: {opacity: 0},
      anim: {rotate: "5deg", x: generatePosition("x", true), y: generatePosition("y", true), opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
      hover: {scale: 1.1, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
    }
  },
  aoy: {
    id: 2,
    class: "project-container paper fixed",
    title: "All of You",
    description: ["A web app designed to help curators find and connect with underrepresented artists, and to help artists gain exposure through matching opportunities.",
  "The sitewide search and tagging system was made to be simple to use for those unfamiliar with tech."],
    github: "https://github.com/nikstojkov/AllofYou",
    url: "www.allofyou.art",
    image_url: "https://placehold.co/400x250",
    tools: ["Rails","Hotwire","StimulusJS", "PostgreSQL"],
    animation: {
      init: {opacity: 0},
      anim: {rotate: "-5deg", x: generatePosition("x", false), y: generatePosition("y", true), opacity: 1, transition: {delay: 0.3, type: "spring", duration: 0.8, ease: "easeOut"}},
      hover: {scale: 1.05, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
    }
  },
  hack: {
    id: 3,
    class: "project-container fixed",
    title: "Survival as a Service",
    description: ["Created at Hack-GPT 2023, a one-day hackathon centered on the power of LLMs. A tongue-in-cheek portrayal of the ease with which LLM safeguards can be subverted, and a reminder of the importance of ethics in AI development."],
    github: "",
    url: "",
    image_url: "https://productstars.org/wp-content/themes/saasweb/images/logo-2.png",
    tools: ["AutoGPT","Next.js","docker"],
    animation: {
      init: {opacity: 0},
      anim: {rotate: "1deg", x: generatePosition("x", false), y: generatePosition("y", false), opacity: 1, transition: {delay: 0, type: "spring", duration: 0.6, ease: "easeOut"}},
      hover: {scale: 1.1, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
    }
  }
}

export default projectdata
