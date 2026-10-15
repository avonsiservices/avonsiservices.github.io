# Avonsi Services: The Path to Agentic Engineering

<img src="assets/logo.png?v=2" alt="Avonsi Services Logo" width="120">

Welcome to **Avonsi Services**, a personal space dedicated to exploring the evolving landscape of agentic engineering. This repository hosts a collection of articles and guides designed to help practitioners navigate the transition from traditional agile to agent-first development.

Our core mission is to bridge the gap between theoretical agentic development (often focused on greenfield projects) and the complex reality of enterprise brownfield environments. We emphasize building robust "harnesses" and precise context for AI agents, rather than relying on LLM "magic."

---

## 📚 The Agentic Engineering Path: From Domain to Factory

This repository features a comprehensive 7-part guide, structured as a roadmap to understanding and implementing agentic practices in real-world enterprise settings.

**The Core Journey:**
*   **[The Agentic Engineering Journey](notes/agentic-engineering/)**: An foundational overview of Dan Shapiro's Five Levels of AI-assisted development, introducing key frameworks like DDD, BMAD, and Attractor.

**Path to Transformation:**

### Stage 1: Foundations
These guides establish the conceptual and discovery methods for achieving domain clarity—a prerequisite for effective agentic development.
*   **[Guide 1: Domain-Driven Design — A Practical Reference](guides/ddd/)**: Stripping away ceremony to focus on Ubiquitous Language, Bounded Contexts, and Subdomain classification.
*   **[Guide 2: Event Storming — A Practical Workshop Guide](guides/event-storming/)**: A practical workshop guide to mapping business reality with stakeholders.
*   **[Guide 3: The Flowchart-First Path](guides/flowcharts/)**: Building domain models from existing enterprise documentation, crucial for brownfield projects.

### Stage 2: Bridging
This guide addresses the critical handoff from domain models to development artifacts, minimizing terminology drift.
*   **[Guide 4: Domain Context Engineering](guides/ddd-to-context/)**: An LLM-driven pipeline using `domain-ctx.txt` to generate BMAD artefacts with consistent terminology.

### Stage 3: Execution
These guides cover structured execution with AI agents, from managing teams to autonomous production.
*   **[Guide 5: The BMAD Method — A Practical Guide](guides/bmad/)**: Structured execution at Levels 3 and 4, covering agent roles, artefact chains, and human-in-the-loop governance.
*   **[Guide 6: Attractor — A Practical Guide](guides/attractor/)**: The lights-out factory and its enterprise adaptation, detailing NLSpec, Directed Graphs, Holdout Scenarios, and Digital Twins.

### Final Synthesis
*   **[Guide 7: From Domain to Factory — The Synthesis Guide](guides/synthesis/)**: The overarching argument for the entire dependency sequence, introducing the "Harness Engineering" framework.

---

## ✨ Key Features

*   **Comprehensive transformation path**: A structured path covering domain modeling, agent orchestration, and enterprise integration.
*   **SPA Guides**: Each deep-dive guide is a Single Page Application (SPA) for seamless chapter-by-chapter reading.
*   **Global Dark Mode**: A low-strain charcoal theme, accessible via a toggle in the site header.
*   **GitHub-Integrated Feedback**: Comment sections powered by Utterances (GitHub Issues).

---

## 🛠️ Local Development

To run this project locally, clone the repository and use the provided `serve.py` script. This script disables browser caching, ensuring you always see your latest changes during development.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/avonsiservices/avonsiservices.github.io.git
    cd avonsiservices.github.io
    ```
2.  **Start the local development server:**
    ```bash
    python3 serve.py
    ```
    The site will be available at `http://localhost:8080` (or the next available port).

---

## 📝 Licensing

*   **Code:** The code in this repository is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
*   **Content:** The original textual content within the articles and guides is licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

---

## ✉️ Contact & Feedback

Your feedback is invaluable as we refine these ideas.

*   **Comments**: Use the Git repository discussion / issues to to share your feedback
*   **Email**: Prefer email? Reach out at <span class="spamspan"><span class="u">krishna</span> [at] <span class="d">avonsi [dot] com</span> (<span class="t">Krishna</span>)</span>.
*   **GitHub**: Follow [@avonsiservices](https://github.com/avonsiservices) for updates and related work.
*   **Star the Repo**: If you find this resource useful, please consider [starring the repository](https://github.com/avonsiservices/avonsiservices.github.io) to help others discover it.

---

Built with 🧡 by Avonsi Services.
