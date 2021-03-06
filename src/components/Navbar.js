import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="banner">
        <h1>ABE</h1>
        <h1>CHOI</h1>
      </Link>

      <div className="links">
        <Link
          to="/"
          activeStyle={{
            color: "var(--yellow)",
            borderBottom: "3px solid var(--yellow)",
          }}
        >
          HOME
        </Link>
        <Link
          to="/blogs"
          activeStyle={{
            color: "var(--teal)",
            borderBottom: "3px solid var(--teal)",
          }}
        >
          BLOGS
        </Link>
        <Link
          to="/projects"
          activeStyle={{
            color: "var(--purple)",
            borderBottom: "3px solid var(--purple)",
          }}
        >
          PROJECTS
        </Link>
        <Link
          to="/docs"
          activeStyle={{
            color: "var(--blue)",
            borderBottom: "3px solid var(--blue)",
          }}
        >
          DOCS
        </Link>
        <Link
          to="/about"
          activeStyle={{
            color: "var(--pink)",
            borderBottom: "3px solid var(--pink)",
          }}
        >
          ABOUT
        </Link>
      </div>

      <div className="icons">
        <a href="https://github.com/abechoi" target="_blank" rel="noreferrer">
          <h2>
            <FontAwesomeIcon icon={faGithubSquare} />
          </h2>
        </a>
        <a
          href="https://codepen.io/collection/DjaJdx"
          target="_blank"
          rel="noreferrer"
        >
          <h2>
            <FontAwesomeIcon icon={faCodepen} />
          </h2>
        </a>
        <a
          href="https://www.linkedin.com/in/abrahamjchoi/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>
            <FontAwesomeIcon icon={faLinkedin} />
          </h2>
        </a>
      </div>
    </nav>
  )
}
