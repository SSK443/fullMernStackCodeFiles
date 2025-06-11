<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- Header Section -->
  <header>
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <p>I'm a web developer passionate about building responsive and accessible websites.</p>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2>Projects</h2>
    <article>
      <h3>Project 1: Task Manager</h3>
      <p>A full-stack app to manage your daily tasks using MongoDB, Express, React, and Node.js.</p>
    </article>
    <article>
      <h3>Project 2: Portfolio Website</h3>
      <p>A responsive personal portfolio using HTML5, CSS3, Bootstrap, and JavaScript.</p>
    </article>
  </section>

  <!-- Blog Section -->
  <section id="blog">
    <h2>Blog</h2>
    <article>
      <h3>How I Built My First Website</h3>
      <p>A guide to how I created my first project as a beginner using HTML, CSS, and JavaScript.</p>
    </article>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <address>
      Email: <a href="mailto:you@example.com">you@example.com</a><br />
      LinkedIn: <a href="#">My Profile</a>
    </address>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
  </section>

  <!-- Footer Section -->
  <footer>
    <p>&copy; 2025 My Portfolio. All rights reserved.</p>
  </footer>

</body>
</html>
