import "./Cv.css";

const Cv = () => {
  return (
    <div className="cv-container">
      <header>
        <hr />
        <h2>Prawin Lakhman K</h2>
        <p className="subtitle">Junior Frontend Developer</p>
        

        <p>5/471, Sengulam<br />Dindigul - 624709<br />prawinlakhman@gmail.com</p>
      </header>

      <section>

        <h3 className="subtitle">Skills</h3>
        <p>HTML, CSS, JavaScript, React, TypeScript, Python, Kali Linux, Google Cloud</p>
        
      </section>

      <section>
        <h3 className="subtitle">Education</h3>
        <p><strong className="role">SSM Institute of Engineering and Technology</strong><br />B.Tech AI & DS<br />June 2022 - April 2026</p>
      </section>

      <section>
        <h3 className="subtitle">Experience</h3>

        <p><strong className="role">MentorBridge, Dindigul</strong></p>
        <ul>

          <li>Learned about <b>creating reusable components</b> for efficient frontend development.</li>
          <li>Gained hands-on experience with <b>React</b> for building dynamic UIs.</li>
          <li>Learned <b>TypeScript</b> for writing strongly typed and error-free code.</li>
          <li>Strengthened understanding of <b>JavaScript</b> fundamentals and modern concepts.</li>
          <li>Learned about <b>React Routing</b> for navigation and multi-page apps.</li>
          <li>Explored <b>component-based architecture</b> and <b>state management techniques</b>.</li>
          <li>Gained experience using <b>GitHub</b> for version control and collaboration.</li>
          <li>Learned to handle API calls efficiently using <b>Axios</b>.</li>
          <li>Understood and implemented <b>React Hooks</b> for managing component logic.</li>
          <li>Explored <b>Jotai</b> for simple and scalable state management.</li>
          <li>Learned <b>TanStack Query</b> for data fetching, caching, and synchronization.</li>

        </ul>

        <p><strong className="role">Wipro Technologies Ltd, Bangalore - GenAI Intern</strong><br />August 2024 - October 2024</p>

        <ul>

          <li>Learned about <b>RAG (Retrieval-Augmented Generation)</b> and its workflow with <b>Grounding techniques</b>.</li>
          <li>Gained hands-on experience with the <b>Google Vision API</b> and understood how it works.</li>
          <li>Learned to create and manage storage <b>Buckets</b> in<b>Google Cloud</b>.</li>
          <li>Used the <b>Google Cloud CLI</b> and<b>Google Cloud Console (GCA)</b> effectively.</li>
          <li>Explored <b>FastAPI</b> for building and managing APIs.</li>
          <li>Learned to deploy applications using <b>Google Cloud Run</b>.</li>
          <li>Completed <b>Google-certified courses</b> and labs, earning<b>badges</b> and <b>certificates</b>.</li>

        </ul>
      </section>

      <section>
        <h3 className="subtitle">Across the Internet</h3>
        <p>
          <a href="https://www.linkedin.com/in/prawin-lakhman-k/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
          {" "}|{" "}
          <a href="https://github.com/Prawin2005" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>
    </div> 
  );
};

export default Cv;
