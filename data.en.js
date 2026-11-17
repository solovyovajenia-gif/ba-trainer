// ═══ DATA (EN): theory content, questions, exercises ═══
(function(){
// ═══ DATA: theory content, questions, exercises ═══
var TC = {
req:'<div class="t-h3">What is a requirement?</div>'
+'<div class="info-box">A requirement is <b>a description of a condition or capability that a system must have or implement in order to satisfy a stakeholder need or a contract</b> (IEEE 610.12 / ISO/IEC/IEEE 24765). Put simply: <b>a requirement answers the question "what should the system do or have?"</b>, not "how should it be implemented?".</div>'
+'<div class="t-h3">Qualities of a good requirement (SMART + Wiegers attributes)</div>'
+'<div class="tw"><table>'
+'<tr><th>Quality</th><th>What it means</th><th>Bad</th><th>Good</th></tr>'
+'<tr><td><b style="color:#6ee7b7">Specific</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Specific</span></td><td>Understood unambiguously without clarification</td><td>"The system must be user-friendly"</td><td>"A new user completes registration in ≤ 3 minutes"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Measurable</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Measurable</span></td><td>Can be checked: met or not met</td><td>"The system must be fast"</td><td>"API response time ≤ 200ms at 500 RPS"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Achievable</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Achievable</span></td><td>Feasible within available resources and technology</td><td>"Guaranteed 100% availability"</td><td>"Availability ≥ 99.9% per month"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Traceable</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Traceable</span></td><td>Can be linked to a source and a test case</td><td>A requirement with no ID or source</td><td>REQ-042, source: stakeholder J. Smith, test TC-17</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Atomic</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Atomic</span></td><td>Describes one condition, not several at once</td><td>"The system must authenticate and log"</td><td>Two separate requirements</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Consistent</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Consistent</span></td><td>Does not conflict with other requirements</td><td>REQ-01: "Only 1 session" and REQ-02: "Simultaneous login from 5 devices"</td><td>Aligned requirements</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Complete</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Complete</span></td><td>Covers all behavior variants</td><td>"The system validates the password" (and if it is wrong, what then?)</td><td>Main flow and all exceptions are described</td></tr>'
+'</table></div>'
+'<div class="t-h3">What is a requirement?</div>'
+'<div class="info-box">According to Wiegers: <b>A requirement is a description of how a system should behave, its properties or attributes, as well as constraints on the development process.</b> Requirements come in two kinds: those describing the system from the user\'s viewpoint (external behavior) and those from the developer\'s viewpoint (internal parameters).</div>'
+'<div class="t-h3">Qualities of a good requirement</div>'
+'<div class="tw"><table>'
+'<tr><th>Quality</th><th>What it means</th><th>Bad</th><th>Good</th></tr>'
+'<tr><td><b style="color:#6ee7b7">Complete</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Complete</span></td><td>Contains all necessary information</td><td>"The system must be secure"</td><td>"Data is encrypted with AES-256, access via JWT token"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Correct</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Correct</span></td><td>Accurately describes the required behavior</td><td>"The user can log in"</td><td>"The user enters email+password, the system issues a JWT token"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Consistent</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Consistent</span></td><td>Does not conflict with other requirements</td><td>Requirement A: "10% discount for everyone" / Requirement B: "discounts for VIP only"</td><td>Aligned requirements with no conflicts</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Verifiable</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Verifiable</span></td><td>Fulfillment can be checked</td><td>"The system must be fast"</td><td>"API response time ≤ 200ms at 1000 RPS"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Traceable</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Traceable</span></td><td>Linked to a business goal and a test case</td><td>An orphan requirement (no link to a goal or test)</td><td>Linked: BG-01 → US-05 → TC-12</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Prioritized</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Prioritized</span></td><td>Has a priority (Must/Should/Could)</td><td>All 200 requirements are equally important</td><td>Must: 30, Should: 80, Could: 90</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Unambiguous</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Unambiguous</span></td><td>Understood the same way by everyone</td><td>"The system must work properly"</td><td>A concrete behavior specification</td></tr>'
+'</table></div>'
+'<div class="info-box">Note (Wiegers): Complete, Correct, Feasible, Necessary, Prioritized, Unambiguous and Verifiable describe an individual requirement; Consistent, Traceable and Modifiable are attributes of the requirements SPECIFICATION as a whole.</div>'
+'<div class="t-h3">Karl Wiegers\' requirements model</div>'
+'<div class="info-box">Wiegers identifies <b>3 levels of requirements</b> (business → user → functional) and <b>additional categories</b> (non-functional, quality attributes, business rules, system, constraints, external interfaces). This is not a hierarchy of importance but different perspectives on describing the same system.</div>'
+'<div class="tw"><table>'
+'<tr><th>Level / Type</th><th>Question</th><th>Artifact</th><th>Example</th></tr>'
+'<tr><td><b style="color:#f59e0b">1. Business Requirements</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">1. Business Requirements</span></td><td>WHY? Why is the project needed?</td><td>Project charter, Vision</td><td>"Increase market share by 15% within a year"</td></tr>'
+'<tr><td><b style="color:#93c5fd">2. User Requirements</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">2. Stakeholder Requirements</span></td><td>WHAT should users be able to do?</td><td>Use Case, User Story</td><td>"The user wants to recover their password via email"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">3. Functional Requirements</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">3. Functional Requirements</span></td><td>HOW exactly should the system behave?</td><td>SRS, technical specification</td><td>"If the email is registered, the system sends a password reset link within 2 minutes"</td></tr>'
+'<tr style="background:#1e3a5f22"><td colspan="4" style="color:#64748b;font-size:0.75rem;padding:6px 9px">⬇ Additional categories — exist at all levels</td></tr>'
+'<tr><td><b style="color:#c4b5fd">Non-Functional Requirements</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Non-Functional Requirements</span></td><td>HOW WELL? System quality?</td><td>NFR table in the SRS</td><td>"API response time — no more than 200ms at 1000 RPS"</td></tr>'
+'<tr><td><b style="color:#c4b5fd">Quality Attributes</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Quality Attributes</span></td><td>Which quality characteristics matter?</td><td>Quality section of the SRS</td><td>Reliability, Performance, Security, Usability, Scalability</td></tr>'
+'<tr><td><b style="color:#f87171">Business Rules</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Business Rules</span></td><td>Which domain rules constrain the system?</td><td>Glossary, Rules</td><td>"The discount applies only to orders ≥ $5000"</td></tr>'
+'<tr><td><b style="color:#94a3b8">System Requirements</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">System Requirements</span></td><td>What environment and infrastructure are needed?</td><td>System section of the SRS</td><td>"The system runs in Chrome 110+, Safari 16+"</td></tr>'
+'<tr><td><b style="color:#94a3b8">Constraints</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Constraints</span></td><td>What cannot be changed during design?</td><td>Constraints in the SRS</td><td>"Use PostgreSQL only", "Budget — $2 million"</td></tr>'
+'<tr><td><b style="color:#94a3b8">External Interfaces</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">External Interfaces</span></td><td>How does the system interact with others?</td><td>Interface Spec</td><td>"Integration with the ERP system (e.g. SAP) via REST API", "SMS via an SMS provider"</td></tr>'
+'</table></div>'
+'<div class="t-h3">Common quality attributes (NFR categories)</div>'
+'<div class="info-box">FURPS+ = Functionality, Usability, Reliability, Performance, Supportability (+ constraints: design, implementation, interface, physical).</div>'
+'<div class="cards">'
+'<div class="card c3"><h4>⚡ Performance<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Performance</span></h4><p>Response time, throughput, load. Example: "500 transactions/sec"</p></div>'
+'<div class="card c3"><h4>🔒 Security<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Security</span></h4><p>Authentication, authorization, encryption, action audit.</p></div>'
+'<div class="card c3"><h4>🛡️ Reliability<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Reliability</span></h4><p>Availability (SLA 99.9%), fault tolerance, MTTR, MTBF.</p></div>'
+'<div class="card c3"><h4>🎨 Usability<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Usability</span></h4><p>Ease of use, accessibility, learnability.</p></div>'
+'<div class="card c3"><h4>📈 Scalability<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Scalability</span></h4><p>Horizontal/vertical scaling to handle load growth.</p></div>'
+'<div class="card c3"><h4>🔧 Maintainability<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Maintainability</span></h4><p>Ease of making changes, logging, monitoring.</p></div>'
+'</div>'
+'<div class="t-h3">Business Rule vs Functional Requirement</div>'
+'<div class="tw"><table><tr><th></th><th>Business Rule</th><th>Functional Requirement</th></tr>'
+'<tr><td><b>Essence</b></td><td>A domain rule that exists independently of IT</td><td>Behavior of the system that implements the rule</td></tr>'
+'<tr><td><b>Source</b></td><td>Business, regulator, legislation</td><td>BA, SA based on the business rule</td></tr>'
+'<tr><td><b>Example</b></td><td>"Discount — for orders ≥ $5000"</td><td>"The system automatically applies a 10% discount if the total is ≥ $5000"</td></tr>'
+'<tr><td><b>Where is it stored?</b></td><td>Business rules glossary, a separate SRS section</td><td>Main body of the SRS, functional specifications</td></tr>'
+'</table></div>'
+'<div class="t-h3">Verification vs Validation</div>'
+'<div class="cards">'
+'<div class="card c1"><h4>✅ Verification<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Verification</span></h4><p>"Are we building the product RIGHT?" — do the requirements meet standards, are they complete and consistent. An internal check by the BA/team.</p></div>'
+'<div class="card c2"><h4>🎯 Validation<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Validation</span></h4><p>"Are we building the RIGHT product?" — does it solve the real business problem. A check with stakeholders: prototype, demo, UAT.</p></div>'
+'</div>',

methodologies:'<div class="t-h3">Classification of methodologies 2026</div>'
+'<div class="info-box">It is important to understand the levels: <b>Philosophy → Approach → Framework → Practices</b>. Agile is a philosophy, Scrum is a framework within it, TDD is a specific practice. Most industry surveys (e.g. the State of Agile report) show that the majority of organizations use hybrid models.</div>'
+'<div class="tw"><table>'
+'<tr><th>Level</th><th>What it is</th><th>Examples</th></tr>'
+'<tr><td><b style="color:#f59e0b">Philosophy</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Philosophy</span></td><td>Values and principles without specific steps</td><td>Agile, Lean</td></tr>'
+'<tr><td><b style="color:#93c5fd">Approach / Model</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Approach / Model</span></td><td>A general way of organizing work</td><td>Waterfall, Iterative, Incremental, Spiral</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Framework</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Framework</span></td><td>A concrete structure with roles and ceremonies</td><td>Scrum, SAFe, LeSS, PRINCE2</td></tr>'
+'<tr><td><b style="color:#c4b5fd">Method / Practice</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Method / Practice</span></td><td>A specific tool</td><td>Kanban, TDD, CI/CD, pair programming</td></tr>'
+'</table></div>'
+'<div class="t-h3">Full list of current methodologies 2026</div>'
+'<div class="tw"><table>'
+'<tr><th>Methodology</th><th>Type</th><th>Essence</th><th>When to use</th></tr>'
+'<tr><td><b style="color:#ef4444">Waterfall</b></td><td>Approach</td><td>Sequential phases: requirements→design→development→testing→deployment. Each phase is completed before the next begins</td><td>Fixed requirements, government contracts, regulated industries (medical, aerospace), fixed budget and deadline</td></tr>'
+'<tr><td><b style="color:#f59e0b">Incremental</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Incremental</span></td><td>Approach</td><td>The system is built in parts (increments), each adding new functionality to what is already done. Requirements are fixed up front, but delivery is in parts</td><td>Large systems where early delivery of key functions is needed but requirements are stable</td></tr>'
+'<tr><td><b style="color:#f59e0b">Iterative</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Iterative</span></td><td>Approach</td><td>The system is built through repeated cycles (iterations), each refining and extending the previous one. Requirements may change</td><td>Complex projects with uncertain requirements, prototyping</td></tr>'
+'<tr><td><b style="color:#f59e0b">Spiral</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Spiral</span></td><td>Approach</td><td>Iterative + risk analysis on every loop. A historically important model — the predecessor of Agile</td><td>High-risk projects, large systems with uncertainty</td></tr>'
+'<tr><td><b style="color:#10b981">Agile</b></td><td>Philosophy</td><td>An umbrella term. The 2001 Manifesto: individuals over processes, working software over documentation, customer collaboration over contract, responding to change over following a plan</td><td>Wherever requirements change and fast feedback is needed</td></tr>'
+'<tr><td><b style="color:#3b82f6">Scrum</b></td><td>Framework (Agile)</td><td>Sprints of 1-4 weeks, accountabilities (Product Owner, Scrum Master, Developers), events (Planning, Daily, Review, Retro). A product increment every sprint</td><td>Product teams, startups, SaaS, mobile apps</td></tr>'
+'<tr><td><b style="color:#3b82f6">Kanban</b></td><td>Method (Agile/Lean)</td><td>Visualizing the flow of work, WIP limits, continuous delivery without iterations. Metrics: Lead Time, Cycle Time</td><td>Support, service teams, a continuous flow of tasks</td></tr>'
+'<tr><td><b style="color:#8b5cf6">SAFe 6.0</b></td><td>Scaling framework</td><td>Scrum at the portfolio and program level. PI Planning every 8-12 weeks. Roles: RTE, System Architect. ESG metrics in version 6.0</td><td>Large enterprises of 50+ people, multiple teams, synchronization needed</td></tr>'
+'<tr><td><b style="color:#8b5cf6">LeSS</b></td><td>Scaling framework</td><td>Large-Scale Scrum. Minimal bureaucracy, one Product Backlog for all teams</td><td>An alternative to SAFe when a heavy structure is not needed</td></tr>'
+'<tr><td><b style="color:#6ee7b7">XP (Extreme Programming)</b></td><td>Framework (Agile)</td><td>Focus on technical excellence: TDD, pair programming, CI, refactoring, short 1-2 week iterations</td><td>High code-quality demands, technically complex projects</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Lean Software Development</b></td><td>Philosophy</td><td>An adaptation of the Toyota Production System: eliminating waste (muda), value stream, built-in quality, respect for people</td><td>The foundation of Kanban and many Agile practices, optimizing existing processes</td></tr>'
+'<tr><td><b style="color:#94a3b8">Scrumban</b></td><td>Hybrid</td><td>Sprints from Scrum + WIP limits and visualization from Kanban. More flexible adding of tasks to a sprint</td><td>Product support teams: planned tasks + urgent ones</td></tr>'
+'<tr><td><b style="color:#94a3b8">DevOps</b></td><td>Culture + practices</td><td>Dev + Ops = continuous integration and delivery (CI/CD). Automation, monitoring, fast releases. Compatible with any methodology</td><td>Mature product teams, frequent releases, cloud products</td></tr>'
+'<tr><td><b style="color:#94a3b8">Shape Up</b></td><td>Method (Basecamp)</td><td>A fixed appetite (6 weeks), teams decide how on their own. No sprints, no backlog in the classic sense</td><td>Small product teams, an alternative to Scrum</td></tr>'
+'<tr><td><b style="color:#94a3b8">PRINCE2</b></td><td>Framework</td><td>A process-based approach with strict stages and documentation. Popular in the UK and the public sector</td><td>Projects requiring strict reporting, UK/EU public sector</td></tr>'
+'</table></div>'
+'<div class="t-h3">Key differences: Waterfall vs Incremental vs Iterative vs Agile</div>'
+'<div class="tw"><table>'
+'<tr><th>Criterion</th><th>Waterfall</th><th>Incremental</th><th>Iterative</th><th>Agile (Scrum)</th></tr>'
+'<tr><td><b>Requirements</b></td><td>Fixed BEFORE the start</td><td>Fixed BEFORE, delivered in parts</td><td>Refined in each iteration</td><td>Flexible, change at any time</td></tr>'
+'<tr><td><b>Delivery</b></td><td>One release at the end</td><td>Several, by increment</td><td>Several, each better than the last</td><td>Every sprint (1-4 weeks)</td></tr>'
+'<tr><td><b>Changes</b></td><td>Very expensive</td><td>Difficult (requirements are fixed)</td><td>Possible between iterations</td><td>Welcomed</td></tr>'
+'<tr><td><b>Customer</b></td><td>Only at the start and the end</td><td>At the delivery of each increment</td><td>After each iteration</td><td>Continuously</td></tr>'
+'<tr><td><b>Risk of finding defects</b></td><td>Late (at the end)</td><td>Earlier (but partially)</td><td>Earlier</td><td>Fast (every sprint)</td></tr>'
+'</table></div>'
+'<div class="t-h3">Hybrid models (2026 trend)</div>'
+'<div class="cards">'
+'<div class="card c4"><h4>Water-Scrum-Fall<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Hybrid model: Waterfall requirements + sprint-based development</span></h4><p>Strategy and requirements per Waterfall → development in sprints → deployment per Waterfall. Popular in corporations with fixed contracts.</p></div>'
+'<div class="card c4"><h4>Scrumban<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">A hybrid of Scrum and Kanban</span></h4><p>Sprints + Kanban WIP limits. Support teams: planned tasks + urgent ones without breaking the sprint.</p></div>'
+'<div class="card c4"><h4>Scrum + XP<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Scrum + Extreme Programming</span></h4><p>Scrum manages the process, XP ensures quality (TDD, pair programming). The most popular technical hybrid.</p></div>'
+'<div class="card c4"><h4>Scrum + DevOps<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Scrum + continuous integration and delivery</span></h4><p>Sprint-based development + a CI/CD pipeline. Allows deploying not once per sprint but on every commit.</p></div>'
+'</div>',

lifecycle:'<div class="t-h3">SDLC — Software Development Life Cycle</div>'
+'<div class="info-box">SDLC (Software Development Life Cycle) is the standard set of stages every IT project goes through. <b>The methodology determines how these stages are carried out</b> (sequentially in Waterfall, iteratively in Agile).</div>'
+'<div class="tw"><table>'
+'<tr><th>#</th><th>SDLC Stage</th><th>What happens</th><th>BA Role</th></tr>'
+'<tr><td>1</td><td><b style="color:#f59e0b">Planning</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Planning</span></td><td>Feasibility assessment, resources, timeline, budget, methodology choice</td><td>Helps estimate scope and risks</td></tr>'
+'<tr><td>2</td><td><b style="color:#f59e0b">Requirements Analysis</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Requirements Analysis</span></td><td>Gathering, refining, documenting requirements</td><td><b>The key stage for a BA</b>: interviews, workshops, SRS/BRD</td></tr>'
+'<tr><td>3</td><td><b style="color:#3b82f6">Design</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Design</span></td><td>System architecture, database design, UI/UX, interfaces</td><td>Takes part in validating the solution, writes UI specifications</td></tr>'
+'<tr><td>4</td><td><b style="color:#10b981">Development</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Development</span></td><td>Writing code, unit tests</td><td>Answers developers\' questions about requirements</td></tr>'
+'<tr><td>5</td><td><b style="color:#8b5cf6">Testing</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Testing</span></td><td>QA: functional, load, UAT</td><td>Helps write test cases, takes part in UAT</td></tr>'
+'<tr><td>6</td><td><b style="color:#c4b5fd">Deployment</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Deployment</span></td><td>Deployment, user training, data migration</td><td>Documents transition requirements, trains users</td></tr>'
+'<tr><td>7</td><td><b style="color:#94a3b8">Maintenance</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Maintenance</span></td><td>Bug fixes, enhancements, monitoring</td><td>Analyzes change requests (CR)</td></tr>'
+'</table></div>'
+'<div class="t-h3">SDLC in Agile — an iterative cycle</div>'
+'<div class="info-box green">In Agile the SDLC is not linear but <b>iterative</b>: every sprint goes through a mini-cycle Analysis → Design → Development → Testing → Release. The BA works 1-2 sprints ahead (refinement) while the team develops the current tasks.</div>'
+'<div class="t-h3">Product Lifecycle</div>'
+'<div class="tw"><table>'
+'<tr><th>Phase</th><th>Description</th><th>BA Tasks</th></tr>'
+'<tr><td><b style="color:#f59e0b">🌱 Introduction</b></td><td>Market entry, first users, MVP</td><td>Discovery, building the backlog, launch metrics</td></tr>'
+'<tr><td><b style="color:#10b981">📈 Growth</b></td><td>Audience growth, feature improvements, scaling</td><td>Analyzing user data, new features, optimization</td></tr>'
+'<tr><td><b style="color:#3b82f6">🏔️ Maturity</b></td><td>Peak user base, competitive market</td><td>Retention, cost optimization, differentiation</td></tr>'
+'<tr><td><b style="color:#94a3b8">📉 Decline</b></td><td>Declining interest, replacement by a new product</td><td>Exit strategy, user migration</td></tr>'
+'</table></div>'
+'<div class="t-h3">Requirement lifecycle</div>'
+'<div class="info-box">Every requirement follows its own path: <b>Elicitation → Analysis → Documentation → Verification → Approval → Implementation → Testing → Maintenance (change/removal)</b>. In Agile this cycle is iterative and shorter.</div>'
+'<div class="tw"><table><tr><th>Status</th><th>What it means</th></tr>'
+'<tr><td>📝 Draft</td><td>Recorded, still being refined</td></tr>'
+'<tr><td>✅ Approved</td><td>Confirmed by stakeholders, ready for implementation</td></tr>'
+'<tr><td>🔨 In Development</td><td>The team is implementing it</td></tr>'
+'<tr><td>🧪 In Testing</td><td>QA is verifying it</td></tr>'
+'<tr><td>✔️ Done</td><td>Meets the DoD</td></tr>'
+'<tr><td>🗑️ Rejected / Removed</td><td>Will not be implemented in this version</td></tr>'
+'</table></div>',

sql:'<div class="t-h3">Why does a BA need SQL?</div>'
+'<div class="info-box">A BA uses SQL for: <b>independent data analysis</b>, formulating report requirements, verifying data in the DB, and speaking the same language as developers. A basic level is required in most SA/BA interviews at Middle+ level.</div>'
+'<div class="t-h3">Basic SELECT commands</div>'
+'<div class="us-box">'
+'<span class="kw">-- Select all columns from a table</span><br>'
+'<span class="kw">SELECT</span> <span class="val">*</span> <span class="kw">FROM</span> <span class="val">orders</span>;<br><br>'
+'<span class="kw">-- Select specific columns</span><br>'
+'<span class="kw">SELECT</span> <span class="val">id, customer_name, total_amount</span> <span class="kw">FROM</span> <span class="val">orders</span>;<br><br>'
+'<span class="kw">-- With a condition</span><br>'
+'<span class="kw">SELECT</span> <span class="val">*</span> <span class="kw">FROM</span> <span class="val">orders</span> <span class="kw">WHERE</span> <span class="val">status = \'completed\'</span>;<br><br>'
+'<span class="kw">-- Multiple conditions</span><br>'
+'<span class="kw">SELECT</span> <span class="val">*</span> <span class="kw">FROM</span> <span class="val">orders</span> <span class="kw">WHERE</span> <span class="val">status = \'completed\'</span> <span class="kw">AND</span> <span class="val">total_amount > 5000</span>;<br><br>'
+'<span class="kw">-- Sorting</span><br>'
+'<span class="kw">SELECT</span> <span class="val">*</span> <span class="kw">FROM</span> <span class="val">orders</span> <span class="kw">ORDER BY</span> <span class="val">created_at</span> <span class="kw">DESC</span>;<br><br>'
+'<span class="kw">-- Limiting the number of rows</span><br>'
+'<span class="kw">SELECT</span> <span class="val">*</span> <span class="kw">FROM</span> <span class="val">orders</span> <span class="kw">LIMIT</span> <span class="val">10</span>;'
+'</div>'
+'<div class="t-h3">WHERE — filtering operators</div>'
+'<div class="tw"><table><tr><th>Operator</th><th>Example</th><th>Meaning</th></tr>'
+'<tr><td>=, !=, &lt;, &gt;, &lt;=, &gt;=</td><td>amount &gt; 1000</td><td>Value comparison</td></tr>'
+'<tr><td>AND, OR, NOT</td><td>status = \'new\' AND amount &gt; 500</td><td>Logical operators</td></tr>'
+'<tr><td>IN (...)</td><td>status IN (\'new\', \'pending\')</td><td>Value from a list</td></tr>'
+'<tr><td>BETWEEN ... AND ...</td><td>amount BETWEEN 100 AND 500</td><td>Range of values</td></tr>'
+'<tr><td>LIKE \'%...%\'</td><td>name LIKE \'%John%\'</td><td>Pattern search (% = any characters)</td></tr>'
+'<tr><td>IS NULL / IS NOT NULL</td><td>email IS NOT NULL</td><td>NULL check</td></tr>'
+'</table></div>'
+'<div class="t-h3">JOIN — combining tables</div>'
+'<div class="us-box">'
+'<span class="kw">-- INNER JOIN: only rows that match in both tables</span><br>'
+'<span class="kw">SELECT</span> <span class="val">o.id, o.total_amount, c.name</span><br>'
+'<span class="kw">FROM</span> <span class="val">orders o</span><br>'
+'<span class="kw">INNER JOIN</span> <span class="val">customers c</span> <span class="kw">ON</span> <span class="val">o.customer_id = c.id</span>;<br><br>'
+'<span class="kw">-- LEFT JOIN: all rows from the left table + matches from the right</span><br>'
+'<span class="kw">SELECT</span> <span class="val">c.name, o.total_amount</span><br>'
+'<span class="kw">FROM</span> <span class="val">customers c</span><br>'
+'<span class="kw">LEFT JOIN</span> <span class="val">orders o</span> <span class="kw">ON</span> <span class="val">c.id = o.customer_id</span>;<br>'
+'<span class="kw">-- ↑ Shows all customers, even those without orders (NULL in the order field)</span>'
+'</div>'
+'<div class="tw"><table><tr><th>JOIN type</th><th>Result</th><th>When to use</th></tr>'
+'<tr><td><b>INNER JOIN</b></td><td>Only rows present in BOTH tables</td><td>Only related data is needed</td></tr>'
+'<tr><td><b>LEFT JOIN</b></td><td>All from the left + matches from the right (NULL if none)</td><td>All customers, even without orders</td></tr>'
+'<tr><td><b>RIGHT JOIN</b></td><td>All from the right + matches from the left</td><td>Rare; better to swap the tables</td></tr>'
+'<tr><td><b>FULL OUTER JOIN</b></td><td>All rows from both tables</td><td>Analyzing discrepancies between two data sets</td></tr>'
+'</table></div>'
+'<div class="t-h3">GROUP BY, HAVING, aggregate functions</div>'
+'<div class="us-box">'
+'<span class="kw">-- Aggregate functions</span><br>'
+'<span class="kw">SELECT</span><br>'
+'&nbsp;&nbsp;<span class="val">COUNT(*)</span> <span class="kw">AS</span> <span class="val">total_orders</span>,&nbsp;&nbsp;&nbsp;<span class="kw">-- number of rows</span><br>'
+'&nbsp;&nbsp;<span class="val">SUM(total_amount)</span> <span class="kw">AS</span> <span class="val">revenue</span>,&nbsp;&nbsp;&nbsp;<span class="kw">-- sum</span><br>'
+'&nbsp;&nbsp;<span class="val">AVG(total_amount)</span> <span class="kw">AS</span> <span class="val">avg_order</span>,&nbsp;&nbsp;&nbsp;<span class="kw">-- average</span><br>'
+'&nbsp;&nbsp;<span class="val">MAX(total_amount)</span> <span class="kw">AS</span> <span class="val">max_order</span>,&nbsp;&nbsp;&nbsp;<span class="kw">-- maximum</span><br>'
+'&nbsp;&nbsp;<span class="val">MIN(total_amount)</span> <span class="kw">AS</span> <span class="val">min_order</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">-- minimum</span><br>'
+'<span class="kw">FROM</span> <span class="val">orders</span>;<br><br>'
+'<span class="kw">-- GROUP BY: counting per group</span><br>'
+'<span class="kw">SELECT</span> <span class="val">status, COUNT(*) AS cnt, SUM(total_amount) AS total</span><br>'
+'<span class="kw">FROM</span> <span class="val">orders</span><br>'
+'<span class="kw">GROUP BY</span> <span class="val">status</span><br>'
+'<span class="kw">ORDER BY</span> <span class="val">total DESC</span>;<br><br>'
+'<span class="kw">-- HAVING: filter AFTER grouping (WHERE — BEFORE)</span><br>'
+'<span class="kw">SELECT</span> <span class="val">customer_id, COUNT(*) AS order_count</span><br>'
+'<span class="kw">FROM</span> <span class="val">orders</span><br>'
+'<span class="kw">GROUP BY</span> <span class="val">customer_id</span><br>'
+'<span class="kw">HAVING</span> <span class="val">COUNT(*) > 5</span>;&nbsp;&nbsp;<span class="kw">-- only customers with more than 5 orders</span>'
+'</div>'
+'<div class="info-box yellow"><b>Order rule:</b> WHERE → GROUP BY → HAVING → ORDER BY → LIMIT. WHERE filters rows BEFORE grouping, HAVING — AFTER. You cannot write WHERE COUNT(*) > 5 — only HAVING.</div>'
+'<div class="t-h3">SQL query execution order</div>'
+'<div class="tw"><table><tr><th>Step</th><th>Clause</th><th>What it does</th></tr>'
+'<tr><td>1</td><td>FROM / JOIN</td><td>Defines the data source, joins tables</td></tr>'
+'<tr><td>2</td><td>WHERE</td><td>Filters rows BEFORE aggregation</td></tr>'
+'<tr><td>3</td><td>GROUP BY</td><td>Groups rows by value</td></tr>'
+'<tr><td>4</td><td>HAVING</td><td>Filters groups AFTER aggregation</td></tr>'
+'<tr><td>5</td><td>SELECT</td><td>Picks the required columns / expressions</td></tr>'
+'<tr><td>6</td><td>ORDER BY</td><td>Sorts the result</td></tr>'
+'<tr><td>7</td><td>LIMIT / OFFSET</td><td>Limits the number of rows</td></tr>'
+'</table></div>'
+'<div class="t-h3">INSERT — adding data</div>'
+'<div class="us-box">'
+'<span class="kw">-- Insert one row</span><br>'
+'<span class="kw">INSERT INTO</span> <span class="val">customers (name, email, city)</span><br>'
+'<span class="kw">VALUES</span> <span class="val">(\'John Smith\', \'john@mail.com\', \'London\')</span>;<br><br>'
+'<span class="kw">-- Insert several rows at once</span><br>'
+'<span class="kw">INSERT INTO</span> <span class="val">orders (customer_id, status, total_amount)</span><br>'
+'<span class="kw">VALUES</span><br>'
+'&nbsp;&nbsp;<span class="val">(1, \'new\', 1500.00)</span>,<br>'
+'&nbsp;&nbsp;<span class="val">(1, \'new\', 3200.50)</span>,<br>'
+'&nbsp;&nbsp;<span class="val">(2, \'new\', 750.00)</span>;<br><br>'
+'<span class="kw">-- Insert data from another table (INSERT SELECT)</span><br>'
+'<span class="kw">INSERT INTO</span> <span class="val">orders_archive (id, customer_id, total_amount)</span><br>'
+'<span class="kw">SELECT</span> <span class="val">id, customer_id, total_amount</span><br>'
+'<span class="kw">FROM</span> <span class="val">orders</span><br>'
+'<span class="kw">WHERE</span> <span class="val">status = \'completed\' AND created_at < \'2024-01-01\'</span>;'
+'</div>'
+'<div class="t-h3">UPDATE — modifying data</div>'
+'<div class="info-box yellow">⚠️ <b>Always use WHERE in UPDATE!</b> Without WHERE, ALL rows in the table get updated. Rule: first write a SELECT with the same WHERE, make sure you see the right rows, then change it to UPDATE.</div>'
+'<div class="us-box">'
+'<span class="kw">-- Update one field</span><br>'
+'<span class="kw">UPDATE</span> <span class="val">customers</span><br>'
+'<span class="kw">SET</span> <span class="val">city = \'Manchester\'</span><br>'
+'<span class="kw">WHERE</span> <span class="val">id = 42</span>;<br><br>'
+'<span class="kw">-- Update several fields</span><br>'
+'<span class="kw">UPDATE</span> <span class="val">orders</span><br>'
+'<span class="kw">SET</span> <span class="val">status = \'cancelled\', updated_at = NOW()</span><br>'
+'<span class="kw">WHERE</span> <span class="val">customer_id = 7 AND status = \'new\'</span>;<br><br>'
+'<span class="kw">-- Update based on another table (UPDATE JOIN)</span><br>'
+'<span class="kw">UPDATE</span> <span class="val">orders o</span><br>'
+'<span class="kw">JOIN</span> <span class="val">customers c ON o.customer_id = c.id</span><br>'
+'<span class="kw">SET</span> <span class="val">o.status = \'vip_processing\'</span><br>'
+'<span class="kw">WHERE</span> <span class="val">c.tier = \'vip\' AND o.status = \'new\'</span>;<br><br>'
+'<span class="kw">-- Dangerous! WITHOUT WHERE, ALL rows get updated:</span><br>'
+'<span class="kw">UPDATE</span> <span class="val">orders</span> <span class="kw">SET</span> <span class="val">status = \'cancelled\'</span>; <span class="kw">-- ❌ DO NOT DO THIS</span>'
+'</div>'
+'<div class="t-h3">DELETE — removing data</div>'
+'<div class="info-box" style="border-color:#ef4444"><b>⚠️ DELETE is irreversible without a transaction!</b> Always: 1) run a SELECT with the same WHERE and check the rows, 2) use a transaction (BEGIN/ROLLBACK), 3) only then COMMIT. Or first move the data to an archive via INSERT SELECT.</div>'
+'<div class="us-box">'
+'<span class="kw">-- Delete a specific row</span><br>'
+'<span class="kw">DELETE FROM</span> <span class="val">orders</span><br>'
+'<span class="kw">WHERE</span> <span class="val">id = 105</span>;<br><br>'
+'<span class="kw">-- Delete by condition</span><br>'
+'<span class="kw">DELETE FROM</span> <span class="val">orders</span><br>'
+'<span class="kw">WHERE</span> <span class="val">status = \'cancelled\' AND created_at < NOW() - INTERVAL \'90 days\'</span>;<br><br>'
+'<span class="kw">-- Safe pattern: check before deleting</span><br>'
+'<span class="kw">BEGIN</span>;<br>'
+'<span class="kw">DELETE FROM</span> <span class="val">orders</span> <span class="kw">WHERE</span> <span class="val">customer_id = 42</span>;<br>'
+'<span class="kw">-- Check the result...</span><br>'
+'<span class="kw">ROLLBACK</span>; <span class="kw">-- or COMMIT if everything is correct</span>'
+'</div>'
+'<div class="t-h3">DELETE vs TRUNCATE vs DROP</div>'
+'<div class="tw"><table><tr><th>Command</th><th>What it does</th><th>WHERE</th><th>Rollback</th><th>When to use</th></tr>'
+'<tr><td><b style="color:#ef4444">DELETE</b></td><td>Deletes rows by condition</td><td>✅ Yes</td><td>✅ Possible (in a transaction)</td><td>Delete specific records</td></tr>'
+'<tr><td><b style="color:#f59e0b">TRUNCATE</b></td><td>Empties the whole table</td><td>❌ No</td><td>⚠️ Depends on the DBMS</td><td>Clear a table, reset auto-increment</td></tr>'
+'<tr><td><b style="color:#ef4444">DROP TABLE</b></td><td>Deletes the table with its entire structure</td><td>❌ No</td><td>❌ Irreversible</td><td>Remove a table completely</td></tr>'
+'</table></div>'
+'<div class="t-h3">Transactions — atomic operations</div>'
+'<div class="info-box green">A <b>transaction</b> is a group of operations executed as a single unit: either all of them or none. ACID properties: Atomicity, Consistency, Isolation, Durability.</div>'
+'<div class="us-box">'
+'<span class="kw">BEGIN</span>;  <span class="kw">-- start of the transaction</span><br><br>'
+'<span class="kw">UPDATE</span> <span class="val">accounts</span> <span class="kw">SET</span> <span class="val">balance = balance - 1000</span> <span class="kw">WHERE</span> <span class="val">id = 1</span>;<br>'
+'<span class="kw">UPDATE</span> <span class="val">accounts</span> <span class="kw">SET</span> <span class="val">balance = balance + 1000</span> <span class="kw">WHERE</span> <span class="val">id = 2</span>;<br><br>'
+'<span class="kw">COMMIT</span>;   <span class="kw">-- confirm (both UPDATEs are applied)</span><br>'
+'<span class="kw">-- or --</span><br>'
+'<span class="kw">ROLLBACK</span>; <span class="kw">-- cancel everything (both UPDATEs are rolled back)</span>'
+'</div>',

elicit:'<div class="t-h3">Key elicitation techniques (BABOK v3)</div>'
+'<div class="cards">'
+'<div class="card c1"><h4>🎤 Interview<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Interview</span></h4><p>Structured (a list of questions) or unstructured (follow-up questions). For a deep understanding of one person\'s problem.</p></div>'
+'<div class="card c2"><h4>🧠 Workshop<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Workshop</span></h4><p>Group session. Roles: facilitator, participants, scribe. For aligning the views of several stakeholders.</p></div>'
+'<div class="card c1"><h4>👁 Observation<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Observation</span></h4><p>The analyst watches the user at work. Reveals tacit knowledge — things people do automatically and cannot describe.</p></div>'
+'<div class="card c2"><h4>📄 Document Analysis<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Document Analysis</span></h4><p>Studying regulations, instructions, reports. Done BEFORE meetings — so you arrive prepared.</p></div>'
+'<div class="card c1"><h4>📋 Survey or Questionnaire<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Survey / Questionnaire</span></h4><p>Written data collection. Good for a large audience or a closed corporate culture.</p></div>'
+'<div class="card c2"><h4>🎨 Prototyping<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Prototyping</span></h4><p>Mock-ups to refine requirements. Helps stakeholders "see" the system and articulate requirements.</p></div>'
+'<div class="card c1"><h4>💡 Brainstorming<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Brainstorming</span></h4><p>Generating ideas without criticism. Then — evaluation and filtering. Open teams.</p></div>'
+'<div class="card c2"><h4>👥 Focus Group<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Focus Group</span></h4><p>A moderated discussion with a pre-qualified group of participants (typically 6-12) to elicit attitudes and opinions about a product, service or opportunity.</p></div>'
+'<div class="card c1"><h4>🔌 Interface Analysis<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Interface Analysis</span></h4><p>How systems interact with each other. Integration requirements.</p></div>'
+'</div>'
+'<div class="t-h3">Which technique to use when?</div>'
+'<div class="tw"><table><tr><th>Situation</th><th>Technique</th></tr>'
+'<tr><td>Need to deeply understand one person\'s problem</td><td>Interview</td></tr>'
+'<tr><td>Many stakeholders, consensus needed</td><td>Workshop</td></tr>'
+'<tr><td>The user cannot explain what they do</td><td>Observation</td></tr>'
+'<tr><td>Regulations and documents exist</td><td>Document Analysis (first of all)</td></tr>'
+'<tr><td>Large audience, closed culture</td><td>Survey or Questionnaire</td></tr>'
+'<tr><td>Stakeholders cannot picture the system abstractly</td><td>Prototyping</td></tr>'
+'</table></div>'
+'<div class="t-h3">Open vs closed questions in an interview</div>'
+'<div class="info-box">Open questions (Who/What/Why/How) — for understanding context and problems. Start with them. Closed questions (Yes/No) — for clarifying specific facts. Rule: <b>open first, then closed</b>.</div>',

artifacts:'<div class="t-h3">⚡ Quick Definitions (memorize in 5 seconds)</div>'
+'<div class="tw"><table>'
+'<tr><th></th><th>Definition</th></tr>'
+'<tr><td><b style="color:#6ee7b7">User Story</b></td><td>A short (1-3 sentences) description of a need from the user\'s point of view that must include the <b>VALUE</b>: "As a [role], I want [action], <b>so that [value/benefit]</b>". Without the "so that" part it is just a requirement, not a complete User Story.</td></tr>'
+'<tr><td><b style="color:#93c5fd">Use Case</b></td><td>A detailed step-by-step document describing how an <b>actor</b> (a user OR another system) interacts with the system to achieve a goal — includes the Main Flow, <b>Alternative Flows</b>, <b>Exception Flows</b>, and Pre-/Postconditions.</td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>What these definitions often leave unsaid:</b> "one sentence" and "the user interacts with the system" point in the right DIRECTION, but interviewers usually probe the details: for a User Story — is there an explicit VALUE (not just a "feature"); for a Use Case — are Alternative/Exception Flows mentioned, and is it clear that the actor can be not only a person but another system (e.g. a cron job or an external service). Full structure and a breakdown of common mistakes below.</div>'

+'<div class="t-h3">User Story — structure and full example</div>'
+'<div class="info-box">Format: <b>As a [role], I want [action], so that [value/goal]</b>. All three parts are mandatory. Optional extras: acceptance criteria, priority, estimate.</div>'
+'<div class="us-box">'
+'<span class="kw">As a</span> <span class="val">registered customer of the online store</span>,<br>'
+'<span class="kw">I want</span> <span class="val">to add a product to my wishlist</span>,<br>'
+'<span class="kw">So that</span> <span class="val">I can come back to it later and buy it when I have the money</span>.<br><br>'
+'<span class="kw">Acceptance criteria:</span><br>'
+'<span class="val">1. An "Add to wishlist" button is present on every product card</span><br>'
+'<span class="val">2. The added product appears in the "My Wishlist" section of the account</span><br>'
+'<span class="val">3. The list persists between sessions (is not reset on logout)</span><br>'
+'<span class="val">4. A product can be removed from the wishlist in one click</span>'
+'</div>'
+'<div class="t-h3">Signs of a good User Story — the INVEST criteria</div>'
+'<div class="tw"><table>'
+'<tr><th>Letter</th><th>Criterion</th><th>What it means</th><th>Bad / Good</th></tr>'
+'<tr><td><b style="color:#6ee7b7">I</b></td><td>Independent</td><td>Does not depend on other stories</td><td>❌ "After US-12" / ✅ Self-contained</td></tr>'
+'<tr><td><b style="color:#6ee7b7">N</b></td><td>Negotiable</td><td>Details can be discussed</td><td>❌ Implementation rigidly prescribed / ✅ Flexible in the details</td></tr>'
+'<tr><td><b style="color:#6ee7b7">V</b></td><td>Valuable</td><td>Delivers value to the user</td><td>❌ "Create a DB table" / ✅ "Save the wishlist"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">E</b></td><td>Estimable</td><td>The team can estimate it in SP</td><td>❌ Too vague / ✅ Clear scope</td></tr>'
+'<tr><td><b style="color:#6ee7b7">S</b></td><td>Small</td><td>Fits in 1 sprint</td><td>❌ "Full user profile" / ✅ "Change name in profile"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">T</b></td><td>Testable</td><td>Has clear acceptance criteria</td><td>❌ "Should be convenient" / ✅ Given/When/Then AC</td></tr>'
+'</table></div>'
+'<div class="t-h3">Use Case — structure and full example</div>'
+'<div class="info-box">A Use Case describes the interaction between an actor and the system to achieve a goal. Used in Waterfall or whenever a complete scenario specification is needed.</div>'
+'<div class="us-box">'
+'<span class="kw">Name:</span> <span class="val">UC-05: Password Recovery</span><br>'
+'<span class="kw">Actor:</span> <span class="val">Registered user</span><br>'
+'<span class="kw">Precondition:</span> <span class="val">The user is not logged in and knows their email</span><br>'
+'<span class="kw">Postcondition:</span> <span class="val">The user has set a new password and is logged in</span><br><br>'
+'<span class="kw">Main Flow:</span><br>'
+'<span class="val">1. The user clicks "Forgot password" on the login page</span><br>'
+'<span class="val">2. The system displays an email input form</span><br>'
+'<span class="val">3. The user enters their email and clicks "Send"</span><br>'
+'<span class="val">4. The system verifies that the email is registered</span><br>'
+'<span class="val">5. The system sends an email with a one-time link (TTL 24h)</span><br>'
+'<span class="val">6. The user follows the link and enters a new password</span><br>'
+'<span class="val">7. The system saves the password and logs the user in</span><br><br>'
+'<span class="kw">Exception E1 (not an alternative!):</span> <span class="val">Email not found → For security reasons the system does NOT say outright "email is not registered" (protection against User Enumeration) and instead shows: "If this email exists, we have sent a link"</span><br>'
+'<span class="kw">Exception E2:</span> <span class="val">Link expired (TTL elapsed) → Error page "Link has expired" with a "Request a new link" button</span>'
+'</div>'
+'<div class="info-box" style="border-color:#ef4444"><b>⚠️ Common mistake in such templates:</b> a wrong-password or "email not found" branch is often labeled Alternative Flow A, although it is an Exception Flow — this confusion appears even in ready-made templates generated by AI tools. Breakdown below.</div>'

+'<div class="t-h3">⚠️ Main vs Alternative vs Exception Flow — how not to mix them up</div>'
+'<div class="info-box yellow">This is one of the most common mistakes in practice — even ready-made ChatGPT answers confuse these flow types. The key distinction: <b>Alternative Flow is a user CHOICE that leads to SUCCESS by another path. Exception Flow is an ERROR or INTERRUPTION that leads to FAILURE or a retry.</b></div>'
+'<div class="tw"><table>'
+'<tr><th>Criterion</th><th style="color:#10b981">Alternative Flow</th><th style="color:#ef4444">Exception Flow</th></tr>'
+'<tr><td><b>Initiator</b></td><td>The user CHOOSES this path themselves</td><td>An ERROR or failed condition occurs</td></tr>'
+'<tr><td><b>Outcome</b></td><td>The Use Case goal is still ACHIEVED</td><td>The Use Case goal is NOT achieved in this attempt</td></tr>'
+'<tr><td><b>Example</b></td><td>Login via Google instead of password</td><td>Wrong password, account locked</td></tr>'
+'<tr><td><b>MFA/2FA — where does it belong?</b></td><td colspan="2">If 2FA is MANDATORY for everyone — it is part of the Main Flow (via "include"), not an alternative. 2FA is an alternative only when the user voluntarily chooses the method (SMS vs app)</td></tr>'
+'</table></div>'
+'<div class="t-h3">📋 Reference example — UC: User Login (corrected version)</div>'
+'<div class="info-box green">This is a reworked example based on a real review of typical mistakes: several Use Cases merged into one, missing exact lockout conditions, Alternative/Exception confusion.</div>'
+'<div class="us-box">'
+'<span class="kw">Name:</span> <span class="val">UC-01: User Login</span><br>'
+'<span class="kw">Actor:</span> <span class="val">Registered user</span><br>'
+'<span class="kw">Precondition:</span> <span class="val">The user has an active, non-locked account</span><br>'
+'<span class="kw">Postcondition (success):</span> <span class="val">The user is logged in, a session is created</span><br>'
+'<span class="kw">Postcondition (failure):</span> <span class="val">The user stays on the login screen, the attempt is recorded in the logs</span><br><br>'
+'<span class="kw">Main Flow:</span><br>'
+'<span class="val">1. The user opens the login screen</span><br>'
+'<span class="val">2. The system displays the Username and Password fields</span><br>'
+'<span class="val">3. The user enters valid credentials and clicks "Log in"</span><br>'
+'<span class="val">4. The system verifies the credentials against the DB</span><br>'
+'<span class="val">5. The system creates a session and redirects to the home page</span><br><br>'
+'<span class="kw">Alternative Flow A1:</span> <span class="val">Login via Google/Apple SSO — the user chooses social login instead of a password; the goal is achieved by another path</span><br>'
+'<span class="kw">Alternative Flow A2:</span> <span class="val">"Remember me" — the user ticks the checkbox, the system stores a token for the next automatic login</span><br><br>'
+'<span class="kw">Exception E1 (Exception Flow):</span> <span class="val">Invalid credentials → generic error message "Invalid username or password" (without specifying which one is wrong — protection against guessing)</span><br>'
+'<span class="kw">Exception E2:</span> <span class="val">5 failed attempts in a row within 15 minutes → the account is locked for 30 minutes, a lockout notification is emailed with a link for early unlock</span><br>'
+'<span class="kw">Exception E3:</span> <span class="val">Account deactivated by an administrator → login is interrupted, the user is directed to a "Contact support" page</span>'
+'</div>'
+'<div class="info-box"><b>What was fixed compared to the typical mistake:</b> 1) EXACT lockout numbers are specified (5 attempts / 15 minutes / 30-minute lockout) — without them the Exception Flow is incomplete. 2) MFA is not included in this UC — if it is mandatory for everyone, it is a separate step of the main flow OR a separate UC "MFA Verification" linked via "include". 3) Both postconditions are given — success AND failure. 4) Alternative Flow is strictly limited to paths that lead to SUCCESS by another means.</div>'

+'<div class="t-h3">🔀 Magic Link vs Password Reset Link — do not confuse them!</div>'
+'<div class="info-box yellow">Two DIFFERENT mechanisms with a similar UI (an email with a link) but different security logic are often confused — they are different Use Cases.</div>'
+'<div class="tw"><table>'
+'<tr><th></th><th>Magic Link</th><th>Password Reset Link</th></tr>'
+'<tr><td><b>What it does</b></td><td>Logs the user in immediately (passwordless login)</td><td>Grants the right to CHANGE the password, does not log in directly</td></tr>'
+'<tr><td><b>Risk level</b></td><td>High — direct access to a session</td><td>Medium — password change only</td></tr>'
+'<tr><td><b>After use</b></td><td>The user is in the system</td><td>The user must enter a new password, then log in again</td></tr>'
+'<tr><td><b>Typical TTL</b></td><td>5-15 minutes (shorter, higher risk)</td><td>15-60 minutes</td></tr>'
+'</table></div>'
+'<div class="t-h3">Use Case vs User Story — when to use which</div>'
+'<div class="tw"><table><tr><th></th><th>Use Case</th><th>User Story</th></tr>'
+'<tr><td><b>Methodology</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Methodology</span></td><td>Waterfall, RUP, formal projects</td><td>Agile, Scrum</td></tr>'
+'<tr><td><b>Detail level</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Detail level</span></td><td>Full: main flow + all alternatives</td><td>Minimal: intent + value. Details in AC</td></tr>'
+'<tr><td><b>Audience</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Audience</span></td><td>Developer, tester, architect</td><td>The whole team including business</td></tr>'
+'<tr><td><b>When to write</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">When to use</span></td><td>When a full scenario specification is needed before development</td><td>When intent + AC are enough and details are clarified in conversation</td></tr>'
+'<tr><td><b>Size</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Scope/Size</span></td><td>A document (half a page to several pages)</td><td>A card (3 lines + 3-7 AC)</td></tr>'
+'</table></div>'
+'<div class="t-h3">Definition of Ready / Definition of Done / Acceptance Criteria</div>'
+'<div class="cards">'
+'<div class="card c4"><h4>📥 Definition of Ready (DoR)</h4><p><b>Entry into the sprint.</b> Typical DoR: ✓ US written to the template ✓ AC defined ✓ Estimated in SP ✓ Design agreed ✓ No blocking dependencies ✓ PO available for questions</p></div>'
+'<div class="card c2"><h4>📤 Definition of Done (DoD)</h4><p><b>Exit from the sprint.</b> Typical DoD: ✓ Code written ✓ Code review passed ✓ Unit tests written ✓ Tests green ✓ Documentation updated ✓ Item can be demonstrated at the Review</p></div>'
+'<div class="card c1"><h4>✅ Acceptance Criteria (AC)</h4><p><b>For a specific US.</b> Given/When/Then format: Given — initial condition, When — action, Then — expected result. Must be <b>verifiable</b>: QA can write a test case from the AC without clarifications.</p></div>'
+'</div>'
+'<div class="t-h3">RTM — Requirements Traceability Matrix</div>'
+'<div class="info-box green">The RTM links: Business goal → Stakeholder requirement → User Story → Test case → Status. It answers "what is covered" and "why does this requirement exist".</div>'
+'<div class="tw"><table><tr><th>Business goal ID</th><th>User Story</th><th>Test case</th><th>Status</th></tr>'
+'<tr><td>BG-01: Grow repeat purchases</td><td>US-14: Wishlist</td><td>TC-27, TC-28</td><td>✅ Done</td></tr>'
+'<tr><td>BG-01: Grow repeat purchases</td><td>US-15: Wishlist email reminder</td><td>TC-29</td><td>🔨 In Dev</td></tr>'
+'<tr><td>BG-02: Reduce drop-offs</td><td>US-08: Quick checkout</td><td>TC-15, TC-16</td><td>✅ Done</td></tr>'
+'</table></div>',

agile:'<div class="t-h3">Scrum — roles</div>'
+'<div class="cards">'
+'<div class="card c4"><h4>Product Owner <small style="color:#f59e0b80">(PO)</small></h4><p>Owns the backlog and priorities. Makes decisions about product content.</p></div>'
+'<div class="card c1"><h4>Scrum Master <small style="color:#93c5fd80">(SM)</small></h4><p>Facilitates the process, coaches the team and removes impediments.</p></div>'
+'<div class="card c2"><h4>Developers</h4><p>Cross-functional; the whole Scrum Team is 10 or fewer people. Decides for itself how much to take into the sprint.</p></div>'
+'<div class="card c3"><h4>BA in Scrum<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">BA in Scrum</span></h4><p>Supports the Product Owner: writes user stories and acceptance criteria, runs backlog refinement, translates between business and the team.</p></div>'
+'</div>'
+'<div class="t-h3">Scrum events</div>'
+'<div class="tw"><table><tr><th>Event</th><th>Purpose</th><th>Duration</th></tr>'
+'<tr><td><b>Sprint Planning</b><br><small style="color:#64748b">Sprint Planning</small></td><td>Select work items, agree on the sprint goal</td><td>Max 8h for a one-month Sprint (shorter for shorter Sprints)</td></tr>'
+'<tr><td><b>Daily Scrum</b><br><small style="color:#64748b">Daily Scrum</small></td><td>Inspect progress toward the Sprint Goal, adapt the plan</td><td>15 min</td></tr>'
+'<tr><td><b>Sprint Review</b><br><small style="color:#64748b">Sprint Review</small></td><td>Demonstrate the increment to stakeholders</td><td>Max 4h for a one-month Sprint</td></tr>'
+'<tr><td><b>Sprint Retrospective</b><br><small style="color:#64748b">Sprint Retrospective</small></td><td>Improve the team\'s process</td><td>Max 3h for a one-month Sprint</td></tr>'
+'<tr><td><b>Backlog Refinement</b><br><small style="color:#64748b">Backlog Refinement</small></td><td>Clarify and estimate items for future sprints</td><td>~10% of the sprint</td></tr>'
+'</table></div>'
+'<div class="t-h3">Kanban vs Scrum — key differences</div>'
+'<div class="tw"><table><tr><th></th><th>Scrum</th><th>Kanban</th></tr>'
+'<tr><td><b>Iterations</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Iterations</span></td><td>Fixed sprints (1-4 weeks)</td><td>Continuous flow of work</td></tr>'
+'<tr><td><b>WIP limits</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">WIP limits</span></td><td>None (the sprint limits the scope)</td><td>Mandatory — flow control</td></tr>'
+'<tr><td><b>Speed metric</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Speed metric</span></td><td>Team velocity (story points/sprint)</td><td>Lead Time per work item</td></tr>'
+'<tr><td><b>Application</b><br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Application</span></td><td>New development</td><td>Support, service teams</td></tr>'
+'</table></div>'
+'<div class="t-h3">Estimation and prioritization</div>'
+'<div class="cards">'
+'<div class="card c1"><h4>Story Points<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Relative estimate of task complexity</span></h4><p>A relative measure of complexity (not time). Accounts for volume + complexity + uncertainty. Method: Planning Poker, Fibonacci scale.</p></div>'
+'<div class="card c4"><h4>MoSCoW<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Requirements prioritization method</span></h4><p>Must / Should / Could / Won\'t. Quick for an MVP. "Must" = what the product cannot work without.</p></div>'
+'<div class="card c2"><h4>RICE<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Prioritization method: Reach×Impact×Confidence/Effort</span></h4><p>Reach × Impact × Confidence / Effort. Produces a numeric priority. More objective than MoSCoW.</p></div>'
+'<div class="card c3"><h4>Kano Model<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">User satisfaction model</span></h4><p>Must-be (Basic) / One-dimensional (Performance) / Attractive (Delighters). For understanding what creates a WOW effect and what is simply expected.</p></div>'
+'<div class="card c1" style="grid-column:1/-1"><h4>⚖️ WSJF (Weighted Shortest Job First)<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Weighted prioritization of the shortest jobs</span></h4><p>SAFe method: <b>Cost of Delay ÷ Job Size</b>. The most valuable and quickest work goes first. Used to prioritize features, epics, and stories.</p></div>'
+'</div>'
+'<div class="t-h3">💸 Cost of Delay and WSJF — in detail</div>'
+'<div class="info-box">Cost of Delay is <b>the value the business loses for each period a task is postponed</b>. A concept by Donald Reinertsen (the book "The Principles of Product Development Flow"). If a payment gateway integration brings in 1M per month, every month of delay costs 1M.</div>'
+'<div class="t-h3">WSJF scoring scale</div>'
+'<div class="info-box yellow"><b>Important: WSJF uses RELATIVE estimates, NOT absolute numbers.</b> The scale is the SAFe modified Fibonacci: <b>1, 2, 3, 5, 8, 13, 20</b> (sometimes 0.5 and infinity ∞ are added).<br><br>'
+'Estimation algorithm in a team session:<br>'
+'1. Pick a <b>baseline task</b> (medium complexity) — assign it 8 on every parameter.<br>'
+'2. Estimate the other tasks <b>relative to the baseline</b>: is this task twice as important? → 13. Half as important? → 5.<br>'
+'3. Same principle for Job Size: is this task half the size of the baseline? → 4 (or 5 on the scale).<br>'
+'Estimates are relative, not in money or hours. Precision is not required — a consistent order of priorities is what matters.</div>'
+'<div class="tw"><table>'
+'<tr><th colspan="2">WSJF formula (SAFe)</th></tr>'
+'<tr><td style="font-size:1.1rem;text-align:center;padding:12px" colspan="2"><b style="color:#f59e0b">WSJF = CoD ÷ Job Size</b><br><span style="font-size:0.8rem;color:#94a3b8">CoD = Business Value + Time Criticality + Risk Reduction / Opportunity Enablement</span></td></tr>'
+'<tr><th>CoD component</th><th>What it means + how to score it</th></tr>'
+'<tr><td><b style="color:#6ee7b7">Business Value</b><br><small>User-Business Value</small></td><td>How loudly are users asking for it? What revenue will it bring? What do we lose if we don\'t do it? <b>High revenue + many requests → 13. Barely noticeable feature → 1-2.</b></td></tr>'
+'<tr><td><b style="color:#93c5fd">Time Criticality</b><br><small>Time Criticality</small></td><td>How fast does value decay with delay? Is there a deadline, a market window, a regulatory date? <b>Hard deadline in 2 weeks → 13. No urgency → 1.</b></td></tr>'
+'<tr><td><b style="color:#c4b5fd">Risk Reduction / Opportunity</b><br><small>Risk Reduction / Opportunity Enablement</small></td><td>Does it reduce risks? Does it open new opportunities? <b>Blocks an architectural risk → 8-13. Cosmetic improvement → 1.</b></td></tr>'
+'<tr><td><b style="color:#f87171">Job Size</b></td><td>Size estimate on the SAFe Fibonacci scale (1, 2, 3, 5, 8, 13, 20). <b>The smaller the Job Size, the HIGHER the WSJF</b> for equal CoD. That is why small valuable tasks always go first.</td></tr>'
+'</table></div>'
+'<div class="t-h3">📊 WSJF calculation example — 3 tasks of a fintech startup</div>'
+'<div class="tw"><table>'
+'<tr><th>Task</th><th>Business Value</th><th>Time Criticality</th><th>Risk Reduction</th><th>CoD (sum)</th><th>Job Size</th><th style="color:#f59e0b">WSJF</th><th>Priority</th></tr>'
+'<tr><td>Instant payments integration</td><td>8</td><td>13</td><td>5</td><td>26</td><td>5</td><td><b style="color:#f59e0b">5.2</b></td><td>🥇 1st</td></tr>'
+'<tr><td>Analytics dashboard</td><td>13</td><td>3</td><td>2</td><td>18</td><td>8</td><td><b style="color:#f59e0b">2.25</b></td><td>🥈 2nd</td></tr>'
+'<tr><td>UI rebranding</td><td>5</td><td>2</td><td>1</td><td>8</td><td>13</td><td><b style="color:#f59e0b">0.62</b></td><td>🥉 3rd</td></tr>'
+'</table></div>'
+'<div class="t-h3">WSJF scoring scale — which scores to use</div>'
+'<div class="info-box yellow"><b>Available values: 1, 2, 3, 5, 8, 13, 20</b> (SAFe modified Fibonacci). Principle: estimates are RELATIVE, not absolute. First the team takes a "reference" item and assigns it a base value (e.g. 3 or 5), then estimates everything else relative to it.</div>'
+'<div class="tw"><table>'
+'<tr><th>Score</th><th>Meaning for CoD components (business value, time criticality, risk)</th><th>Meaning for Job Size</th></tr>'
+'<tr><td><b style="color:#6ee7b7">1</b></td><td>Almost no value / almost no urgency</td><td>A 1-2 hour task, trivial</td></tr>'
+'<tr><td><b style="color:#6ee7b7">2</b></td><td>Minimal value / low urgency</td><td>A few hours</td></tr>'
+'<tr><td><b style="color:#6ee7b7">3</b></td><td>Below average</td><td>A day or two of work</td></tr>'
+'<tr><td><b style="color:#f59e0b">5</b></td><td>Average value / moderate urgency (base reference)</td><td>A week of work</td></tr>'
+'<tr><td><b style="color:#f59e0b">8</b></td><td>High value / noticeable urgency</td><td>2 weeks (a sprint)</td></tr>'
+'<tr><td><b style="color:#ef4444">13</b></td><td>Very high / critical urgency (there is a deadline)</td><td>A month of work</td></tr>'
+'<tr><td><b style="color:#ef4444">20</b></td><td>Extreme / "on fire", huge losses if delayed</td><td>A quarter or more — needs decomposition</td></tr>'
+'</table></div>'
+'<div class="t-h3">How to run WSJF estimation in practice</div>'
+'<div class="info-box green"><b>Step 1:</b> Gather the team (PO, BA, leads). <b>Step 2:</b> Pick an "average" item as the reference (5 points). <b>Step 3:</b> Score each CoD component relative to the reference (Planning Poker). <b>Step 4:</b> Estimate Job Size separately — it is the amount of work, not value. <b>Step 5:</b> Calculate WSJF = CoD ÷ Job Size. <b>Step 6:</b> Sort by WSJF descending — the highest priorities go to the top.</div>'
+'<div class="info-box green">Takeaway from the example: the Dashboard has <b>the highest business value (13)</b>, but because of its large size (8) and low urgency its WSJF is only 2.25. The instant payments integration wins thanks to <b>high time criticality (13)</b> — a market window, competitors have already launched. WSJF shows that a valuable but large task can lose to a less valuable but urgent and quick one.</div>'
+'<div class="t-h3">⚠️ Limitations of WSJF</div>'
+'<div class="cards">'
+'<div class="card c4"><h4>Estimate subjectivity<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Estimate subjectivity</span></h4><p>Despite the formula, CoD and Job Size estimates are relative and depend on the team. Different people will give different numbers.</p></div>'
+'<div class="card c4"><h4>Does not account for dependencies<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Does not account for dependencies</span></h4><p>Task A with a low WSJF may be a blocker for task B with a high WSJF. WSJF does not see the dependency graph.</p></div>'
+'<div class="card c4"><h4>Estimates go stale<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Estimates go stale</span></h4><p>A competitor shipped the feature — urgency went up. A simple solution was found — Job Size went down. Re-estimate before every sprint.</p></div>'
+'<div class="card c4"><h4>Time-consuming<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Time-consuming</span></h4><p>Overkill for small fixes. Use for large features, epics, and initiatives with high uncertainty.</p></div>'
+'</div>',

ba_role:'<div class="t-h3">6 BABOK v3 Knowledge Areas</div>'
+'<div class="cards">'
+'<div class="card c1"><h4>1. Business Analysis Planning and Monitoring<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">1. Business Analysis Planning and Monitoring</span></h4><p>How to organize BA work. Choosing the approach, managing information.</p></div>'
+'<div class="card c2"><h4>2. Elicitation and Collaboration<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">2. Elicitation and Collaboration</span></h4><p>Requirements gathering techniques. Managing stakeholder communication.</p></div>'
+'<div class="card c4"><h4>3. Requirements Life Cycle Management<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">3. Requirements Life Cycle Management</span></h4><p>Traceability, prioritization, change management.</p></div>'
+'<div class="card c3"><h4>4. Strategy Analysis<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">4. Strategy Analysis</span></h4><p>Understand the context. SWOT, current-state and target-state analysis.</p></div>'
+'<div class="card c1"><h4>5. Requirements Analysis and Design Definition<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">5. Requirements Analysis and Design Definition</span></h4><p>Modeling, verification, validation. US, Use Case, BPMN.</p></div>'
+'<div class="card c2"><h4>6. Solution Evaluation<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">6. Solution Evaluation</span></h4><p>Measuring value, assessing limitations, recommendations.</p></div>'
+'</div>'
+'<div class="t-h3">Requirements Traceability (RTM)</div>'
+'<div class="info-box green">Links requirements at all levels with test cases. Business goal → stakeholder requirement → US → test. Without traceability it is easy to build unnecessary features (gold plating).</div>'
+'<div class="t-h3">Requirements Life Cycle</div>'
+'<div class="info-box">Elicitation → Analysis → Documentation → Verification → Validation → Change Management. In Agile, this is an iterative cycle every sprint.</div>'
+'<div class="t-h3">Requirements Conflicts: How to Resolve Them</div>'
+'<div class="info-box yellow">1) Record the conflict. 2) Organize a meeting with all stakeholders. 3) Uncover each party\'s root goals. 4) Find a compromise. The BA facilitates, but does not decide. Stakeholders make the decision.</div>',

discovery_docs:'<div class="t-h3">Comparison: Discovery Phase · SRS · Vision/Scope</div>'
+'<div class="info-box">Three key concepts that are often confused or mixed up. Each answers its own question and lives at its own stage of the project.</div>'
+'<div class="tw"><table>'
+'<tr><th></th>'
+'<th style="color:#f59e0b">🔭 Discovery Phase<br><span style="font-size:0.72rem;color:#64748b">Research phase</span></th>'
+'<th style="color:#93c5fd">📋 SRS<br><span style="font-size:0.72rem;color:#64748b">Software Requirements Specification</span></th>'
+'<th style="color:#6ee7b7">🎯 Vision & Scope<br><span style="font-size:0.72rem;color:#64748b">Project vision and boundaries</span></th>'
+'</tr>'
+'<tr><td><b>What is it?</b></td>'
+'<td>A process (stage of work), not a document. Researching the problem, market, and users before development starts</td>'
+'<td>A formal document: the complete specification of requirements for a software system</td>'
+'<td>A short top-level document: why the project exists and what is in/out of its scope</td>'
+'</tr>'
+'<tr><td><b>Key question</b></td>'
+'<td>"What problem are we solving, and is it worth solving?"</td>'
+'<td>"How exactly should the system behave?"</td>'
+'<td>"Why this project, and what are its boundaries?"</td>'
+'</tr>'
+'<tr><td><b>When it is created</b></td>'
+'<td>Before development starts. The first stage of any project</td>'
+'<td>After Discovery, before or during development</td>'
+'<td>At the end of Discovery or at project start, before the SRS</td>'
+'</tr>'
+'<tr><td><b>Who creates it</b></td>'
+'<td>BA, Product Manager, UX Researcher, as a team</td>'
+'<td>BA, Systems Analyst, sometimes together with an architect</td>'
+'<td>BA together with the Product Owner and project sponsor</td>'
+'</tr>'
+'<tr><td><b>Audience</b></td>'
+'<td>Team, stakeholders, investors</td>'
+'<td>Developers, testers, architects</td>'
+'<td>Sponsor, stakeholders, PM, BA: all participants</td>'
+'</tr>'
+'<tr><td><b>Level of detail</b></td>'
+'<td>High-level: ideas, hypotheses, insights</td>'
+'<td>Maximum: precise functional and non-functional requirements</td>'
+'<td>Minimal: goals, constraints, what is NOT in scope</td>'
+'</tr>'
+'<tr><td><b>Size</b></td>'
+'<td>Not a document: a series of activities (interviews, research, prototypes)</td>'
+'<td>From 20 to 200+ pages in complex projects</td>'
+'<td>1–5 pages at most</td>'
+'</tr>'
+'<tr><td><b>Output</b></td>'
+'<td>Vision & Scope, Problem Statement, User Research, As-Is/To-Be process maps</td>'
+'<td>Complete specification: UC/US, FR, NFR, constraints, interfaces</td>'
+'<td>Top-level business requirements, Project Charter</td>'
+'</tr>'
+'</table></div>'

+'<div class="t-h3">🔭 Discovery Phase in Detail</div>'
+'<div class="info-box green">The Discovery Phase is not a single meeting or a single document. It is a <b>structured research process</b> that precedes any development. The goal: understand the real problem instead of jumping straight to a solution.</div>'
+'<div class="cards">'
+'<div class="card c4"><h4>1. Problem Definition<br><span style="font-size:0.7rem;color:#64748b">Defining the problem</span></h4><p>What hurts the business? What problem are we solving? The "5 Whys" method. Do not confuse the problem with the solution: "we need a button" is not a problem.</p></div>'
+'<div class="card c4"><h4>2. Stakeholder Research<br><span style="font-size:0.7rem;color:#64748b">Researching stakeholders</span></h4><p>Who has a stake in the outcome? Stakeholder Map. Influence/interest matrix.</p></div>'
+'<div class="card c4"><h4>3. User Research<br><span style="font-size:0.7rem;color:#64748b">Researching users</span></h4><p>Interviews, observation, surveys. User Personas, Customer Journey Map, Jobs-To-Be-Done. "Who is our user and what do they want to achieve?"</p></div>'
+'<div class="card c4"><h4>4. As-Is Process Analysis<br><span style="font-size:0.7rem;color:#64748b">Analyzing current processes</span></h4><p>An "as-is" BPMN diagram. Identifying bottlenecks, duplication, manual work. The basis for the To-Be model.</p></div>'
+'<div class="card c4"><h4>5. Market & Competitor Analysis<br><span style="font-size:0.7rem;color:#64748b">Analyzing the market and competitors</span></h4><p>What already exists? How do competitors solve this problem? What will set us apart?</p></div>'
+'<div class="card c4"><h4>6. Feasibility Assessment<br><span style="font-size:0.7rem;color:#64748b">Assessing feasibility</span></h4><p>Technically possible? Economically justified? Do we fit the timeline? Risks. Go/No-Go decision.</p></div>'
+'</div>'
+'<div class="info-box">Discovery outputs: <b>Vision & Scope document, Problem Statement, High-Level User Stories (Epics), As-Is and To-Be BPMN diagrams, Stakeholder Map, Personas</b>. Discovery precedes writing the SRS.</div>'

+'<div class="t-h3">📋 SRS — Software Requirements Specification</div>'
+'<div class="info-box">The SRS (IEEE 830 / ISO/IEC/IEEE 29148) is a formal document describing everything the system must do. The main BA artifact in Waterfall projects. In Agile, the role of the SRS is partly played by the Product Backlog + AC.</div>'
+'<div class="tw"><table>'
+'<tr><th>SRS section</th><th>What it contains</th></tr>'
+'<tr><td><b style="color:#f59e0b">1. Introduction</b><br><span style="font-size:0.72rem;color:#64748b">Introduction</span></td><td>Purpose of the document, scope, definitions and abbreviations, references to other documents</td></tr>'
+'<tr><td><b style="color:#f59e0b">2. Overall Description</b><br><span style="font-size:0.72rem;color:#64748b">Overall Description</span></td><td>Product perspective, functions, user characteristics, constraints, dependencies</td></tr>'
+'<tr><td><b style="color:#93c5fd">3. Functional Requirements</b><br><span style="font-size:0.72rem;color:#64748b">Functional Requirements</span></td><td>Use Cases / User Stories with AC. What the system does. The bulk of the document</td></tr>'
+'<tr><td><b style="color:#6ee7b7">4. Non-Functional Requirements</b><br><span style="font-size:0.72rem;color:#64748b">Non-Functional Requirements</span></td><td>Performance, security, availability, scalability, usability (FURPS+)</td></tr>'
+'<tr><td><b style="color:#94a3b8">5. External Interfaces</b><br><span style="font-size:0.72rem;color:#64748b">External Interfaces</span></td><td>UI interfaces, API integrations, hardware interfaces, communication protocols</td></tr>'
+'<tr><td><b style="color:#94a3b8">6. Constraints and Assumptions</b><br><span style="font-size:0.72rem;color:#64748b">Constraints & Assumptions</span></td><td>Regulatory constraints, technical constraints, business rules, assumptions</td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>SRS in Agile:</b> A full SRS is rarely written in Agile projects. It is replaced by the Product Backlog (User Stories + AC) plus separate specifications for complex modules (API specs, integration requirements). Sometimes the BA writes a "lightweight SRS" of 10-20 pages for the key requirements.</div>'

+'<div class="t-h3">🎯 Vision & Scope Document</div>'
+'<div class="info-box">Vision & Scope is the very first document of a project. It answers the question "Why are we doing this, and what is within the boundaries?". Written before the SRS, based on the Discovery results.</div>'
+'<div class="tw"><table>'
+'<tr><th>Section</th><th>Content</th><th>Example</th></tr>'
+'<tr><td><b style="color:#6ee7b7">Business Requirements</b><br><span style="font-size:0.72rem;color:#64748b">Business requirements</span></td><td>Business problem, opportunity, project goal in measurable terms</td><td>"Reduce client onboarding time from 5 days to 1 day"</td></tr>'
+'<tr><td><b style="color:#6ee7b7">Vision Statement</b><br><span style="font-size:0.72rem;color:#64748b">Product vision</span></td><td>A short, inspiring description of the product and its value</td><td>"A self-service platform that lets bank clients open products without visiting a branch"</td></tr>'
+'<tr><td><b style="color:#93c5fd">Scope</b><br><span style="font-size:0.72rem;color:#64748b">Project boundaries</span></td><td>What is INCLUDED in the first version (in scope)</td><td>"Online current account opening, debit card issuance"</td></tr>'
+'<tr><td><b style="color:#ef4444">Out of Scope</b><br><span style="font-size:0.72rem;color:#64748b">Outside the boundaries</span></td><td>What is explicitly NOT included: critically important to record!</td><td>"Credit products, business accounts, mobile app: not included in version 1.0"</td></tr>'
+'<tr><td><b style="color:#94a3b8">Stakeholders</b><br><span style="font-size:0.72rem;color:#64748b">Interested parties</span></td><td>List of stakeholders, their roles and interests</td><td>"Head of Retail: sponsor; Bank client: end user"</td></tr>'
+'<tr><td><b style="color:#94a3b8">Risks & Assumptions</b><br><span style="font-size:0.72rem;color:#64748b">Risks and assumptions</span></td><td>Key project risks and accepted assumptions</td><td>"Assumption: the regulator\'s API is available for integration. Risk: changes to e-signature regulation"</td></tr>'
+'</table></div>'
+'<div class="info-box green"><b>Why Out of Scope is critically important:</b> without an explicit "what is NOT included", every stakeholder completes the scope in their own head. This is the main cause of scope creep: requirements that "everyone assumed" but nobody recorded suddenly "appear" during the project.</div>'

+'<div class="t-h3">📐 Full Document Structure (Karl Wiegers Template)</div>'
+'<div class="info-box">The classic Vision & Scope template (Karl Wiegers, "Software Requirements") consists of 4 major sections, each broken down into subsections. This is the reference structure asked about in BA interviews: it is important to know not just the section names but what exactly goes inside each one.</div>'

+'<div class="cards">'
+'<div class="card c4"><h4>1. Business Requirements<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Business requirements</span></h4><p>Why: the business justification for the project.</p></div>'
+'<div class="card c2"><h4>2. Vision of the Solution<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Solution vision</span></h4><p>What we are building: the big picture of the product and its key capabilities.</p></div>'
+'<div class="card c1"><h4>3. Scope and Limitations<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Boundaries and limitations</span></h4><p>What goes into the releases and what is explicitly excluded.</p></div>'
+'<div class="card c3"><h4>4. Business Context<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Business context</span></h4><p>Who is involved, what matters most, what environment we operate in.</p></div>'
+'</div>'

+'<div class="tw"><table>'
+'<tr><th>§</th><th>Subsection</th><th>What it describes</th></tr>'
+'<tr><td colspan="3" style="background:#1a1f2e;color:#f59e0b;font-weight:700">1. Business Requirements</td></tr>'
+'<tr><td>1.1</td><td><b style="color:#f59e0b">Background</b><br><span style="font-size:0.72rem;color:#64748b">Background</span></td><td>Context: how the company arrived at the need for the project, what happened before this point</td></tr>'
+'<tr><td>1.2</td><td><b style="color:#f59e0b">Business Opportunity</b><br><span style="font-size:0.72rem;color:#64748b">Business opportunity</span></td><td>The problem or market opportunity the project addresses. "What pain/chance are we addressing?"</td></tr>'
+'<tr><td>1.3</td><td><b style="color:#f59e0b">Business Objectives and Success Criteria</b><br><span style="font-size:0.72rem;color:#64748b">Business objectives and success criteria</span></td><td>Measurable business goals of the project (often SMART) and how we will know the project succeeded: specific KPIs. "Reduce customer churn by 10% within a year"</td></tr>'
+'<tr><td>1.4</td><td><b style="color:#f59e0b">Customer or Market Needs</b><br><span style="font-size:0.72rem;color:#64748b">Customer or market needs</span></td><td>What customers and the market need; results of research and surveys</td></tr>'
+'<tr><td>1.5</td><td><b style="color:#f59e0b">Business Risks</b><br><span style="font-size:0.72rem;color:#64748b">Business risks</span></td><td>What could go wrong from a business perspective: market, financial, regulatory risks</td></tr>'

+'<tr><td colspan="3" style="background:#1a1f2e;color:#6ee7b7;font-weight:700">2. Vision of the Solution</td></tr>'
+'<tr><td>2.1</td><td><b style="color:#6ee7b7">Vision Statement</b><br><span style="font-size:0.72rem;color:#64748b">Vision statement</span></td><td>One or two sentences that describe the product and its value in an inspiring way</td></tr>'
+'<tr><td>2.2</td><td><b style="color:#6ee7b7">Major Features</b><br><span style="font-size:0.72rem;color:#64748b">Major features</span></td><td>List of the product\'s key top-level capabilities, without implementation details</td></tr>'
+'<tr><td>2.3</td><td><b style="color:#6ee7b7">Assumptions and Dependencies</b><br><span style="font-size:0.72rem;color:#64748b">Assumptions and dependencies</span></td><td>What we take to be true without proof (assumptions) and what the project depends on (external systems, teams, deadlines)</td></tr>'

+'<tr><td colspan="3" style="background:#1a1f2e;color:#93c5fd;font-weight:700">3. Scope and Limitations</td></tr>'
+'<tr><td>3.1</td><td><b style="color:#93c5fd">Scope of Initial Release</b><br><span style="font-size:0.72rem;color:#64748b">Scope of the first release</span></td><td>Exactly what goes into the MVP / first delivery: a specific, closed list</td></tr>'
+'<tr><td>3.2</td><td><b style="color:#93c5fd">Scope of Subsequent Releases</b><br><span style="font-size:0.72rem;color:#64748b">Scope of later releases</span></td><td>What is planned for the future but not in the first version; manages stakeholder expectations</td></tr>'
+'<tr><td>3.3</td><td><b style="color:#93c5fd">Limitations and Exclusions</b><br><span style="font-size:0.72rem;color:#64748b">Limitations and exclusions</span></td><td>What is explicitly and permanently excluded from the project, plus technical/budget/time constraints</td></tr>'

+'<tr><td colspan="3" style="background:#1a1f2e;color:#c4b5fd;font-weight:700">4. Business Context</td></tr>'
+'<tr><td>4.1</td><td><b style="color:#c4b5fd">Stakeholder Profiles</b><br><span style="font-size:0.72rem;color:#64748b">Stakeholder profiles</span></td><td>Who the stakeholders are, their roles, interests, and level of influence on the project</td></tr>'
+'<tr><td>4.2</td><td><b style="color:#c4b5fd">Project Priorities</b><br><span style="font-size:0.72rem;color:#64748b">Project priorities</span></td><td>The balance between Scope / Schedule / Budget / Quality: what matters more when they conflict</td></tr>'
+'<tr><td>4.3</td><td><b style="color:#c4b5fd">Operating Environment</b><br><span style="font-size:0.72rem;color:#64748b">Operating environment</span></td><td>The technical and organizational conditions the product will operate in</td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>How to remember the order in an interview:</b> "Why (Business Requirements) → What (Vision of Solution) → How much exactly (Scope and Limitations) → Who and under what conditions (Business Context)". The document moves from the abstract business justification to concrete boundaries and the execution context.</div>'

+'<div class="t-h3">📍 Sequence in a Real Project</div>'
+'<div class="tw"><table>'
+'<tr><th>#</th><th>Stage</th><th>Resulting document</th></tr>'
+'<tr><td>1</td><td><b style="color:#f59e0b">Discovery Phase</b>: researching the problem, users, processes</td><td>Problem Statement, Stakeholder Map, As-Is BPMN, Personas</td></tr>'
+'<tr><td>2</td><td><b style="color:#6ee7b7">Vision & Scope</b>: recording goals and boundaries</td><td>Vision & Scope Document (1-5 pages), Project Charter</td></tr>'
+'<tr><td>3</td><td><b style="color:#93c5fd">SRS / Backlog</b>: detailed requirements specification</td><td>SRS (Waterfall) or Product Backlog with US and AC (Agile)</td></tr>'
+'<tr><td>4</td><td>Design → Development → Testing</td><td>—</td></tr>'
+'</table></div>'
,
techniques:'<div class="t-h3">🔎 Root Cause Analysis — Finding the Root Cause</div>'
+'<div class="info-box">A common junior mistake is to record the SYMPTOM ("users complain that checkout is slow") and immediately write a requirement to fix it without understanding the cause. A Middle/Senior BA must dig down to the ROOT of the problem, otherwise the solution will be cosmetic.</div>'

+'<div class="t-h3">1. 5 Whys</div>'
+'<div class="info-box">The simplest technique: ask "Why?" about each previous answer, usually 5 times, until you reach a root cause that can be fixed.</div>'
+'<div class="tw"><table>'
+'<tr><th>Step</th><th>Question</th><th>Answer</th></tr>'
+'<tr><td>Symptom</td><td>—</td><td>Customers abandon the cart at the payment step</td></tr>'
+'<tr><td>Why? #1</td><td>Why do they abandon the cart?</td><td>Because the payment form returns an error</td></tr>'
+'<tr><td>Why? #2</td><td>Why does the form return an error?</td><td>Because the payment gateway times out</td></tr>'
+'<tr><td>Why? #3</td><td>Why does the gateway time out?</td><td>Because the request is synchronous and waits 30 sec with no retry</td></tr>'
+'<tr><td>Why? #4</td><td>Why is there no retry?</td><td>Because the integration was built quickly at the MVP stage without resilience NFRs</td></tr>'
+'<tr><td>Why? #5 — root</td><td>Why were NFRs not defined?</td><td><b style="color:#6ee7b7">There was no BA at launch, and the developer did not gather non-functional requirements</b></td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>Important:</b> 5 is not dogma; it may be 3 or 7 "Whys". Stop when the cause is SYSTEMIC and FIXABLE (not "people are bad" but "there is no process/NFR/control"). The weakness of the technique is subjectivity: different analysts may arrive at different chains, which is why 5 Whys is often done in a group rather than alone.</div>'

+'<div class="t-h3">2. Ishikawa Diagram (Fishbone / Cause-and-Effect)</div>'
+'<div class="info-box">A more structured tool than 5 Whys: it lays out possible causes by CATEGORY so that a cause from an unobvious area is not missed. Classic categories for IT (an adaptation of 6M): People, Process, Technology, Environment, Data, Management.</div>'
+'<div class="svgdemo"><svg viewBox="0 0 560 220" width="540" height="215" xmlns="http://www.w3.org/2000/svg">'
+'<line x1="60" y1="110" x2="480" y2="110" stroke="#94a3b8" stroke-width="2"/>'
+'<polygon points="480,110 468,103 468,117" fill="#94a3b8"/>'
+'<rect x="480" y="92" width="70" height="36" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>'
+'<text x="515" y="107" text-anchor="middle" fill="#fca5a5" font-size="9">Problem:</text>'
+'<text x="515" y="120" text-anchor="middle" fill="#fca5a5" font-size="8">high churn</text>'
+'<line x1="140" y1="30" x2="220" y2="110" stroke="#3b82f6" stroke-width="1.3"/>'
+'<text x="130" y="24" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">People</text>'
+'<line x1="150" y1="40" x2="200" y2="90" stroke="#2d3748" stroke-width="1"/><text x="115" y="45" fill="#64748b" font-size="7">no support training</text>'
+'<line x1="170" y1="55" x2="215" y2="98" stroke="#2d3748" stroke-width="1"/><text x="130" y="60" fill="#64748b" font-size="7">manager turnover</text>'
+'<line x1="270" y1="30" x2="270" y2="108" stroke="#3b82f6" stroke-width="1.3"/>'
+'<text x="270" y="24" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Process</text>'
+'<line x1="255" y1="45" x2="269" y2="90" stroke="#2d3748" stroke-width="1"/><text x="230" y="42" fill="#64748b" font-size="7">no onboarding</text>'
+'<line x1="285" y1="55" x2="271" y2="98" stroke="#2d3748" stroke-width="1"/><text x="295" y="55" fill="#64748b" font-size="7">SLA not met</text>'
+'<line x1="140" y1="190" x2="220" y2="112" stroke="#3b82f6" stroke-width="1.3"/>'
+'<text x="130" y="200" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Technology</text>'
+'<line x1="150" y1="180" x2="200" y2="130" stroke="#2d3748" stroke-width="1"/><text x="115" y="178" fill="#64748b" font-size="7">bugs in the mobile app</text>'
+'<line x1="270" y1="190" x2="270" y2="112" stroke="#3b82f6" stroke-width="1.3"/>'
+'<text x="270" y="200" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Data</text>'
+'<line x1="255" y1="175" x2="269" y2="130" stroke="#2d3748" stroke-width="1"/><text x="240" y="180" fill="#64748b" font-size="7">no data on why users leave</text>'
+'</svg></div>'
+'<div class="info-box green"><b>How to use it in practice:</b> gather the team (BA, developer, support, product) → draw the "spine" with the problem in the fish head → for each category (bone), brainstorm possible causes → use voting/data to pick the 1-3 most likely → verify them through 5 Whys or data collection before writing requirements for the solution.</div>'

+'<div class="t-h3">👥 RACI Matrix and Power-Interest Grid</div>'
+'<div class="info-box">Both techniques solve the same problem — understanding HOW to work with stakeholders — but from different angles: RACI covers who does WHAT in a specific task; the Power-Interest Grid covers HOW often and how deeply to involve each stakeholder across the project.</div>'

+'<div class="t-h3">RACI — Responsible, Accountable, Consulted, Informed</div>'
+'<div class="tw"><table>'
+'<tr><th>Letter</th><th>Role</th><th>Meaning</th></tr>'
+'<tr><td><b style="color:#6ee7b7">R</b> — Responsible</td><td>Doer</td><td>The one who ACTUALLY does the work (writes code, tests)</td></tr>'
+'<tr><td><b style="color:#f59e0b">A</b> — Accountable</td><td>Owner</td><td>The one who answers for the RESULT and makes the final decision. <b>There must be EXACTLY ONE per task</b>, otherwise accountability is diluted</td></tr>'
+'<tr><td><b style="color:#93c5fd">C</b> — Consulted</td><td>Advisor</td><td>Their opinion is ASKED before the decision is made (two-way communication)</td></tr>'
+'<tr><td><b style="color:#c4b5fd">I</b> — Informed</td><td>Recipient</td><td>They are simply NOTIFIED after the fact (one-way communication, after the decision)</td></tr>'
+'</table></div>'
+'<div class="tw"><table>'
+'<tr><th>Task</th><th>BA</th><th>PO</th><th>Tech Lead</th><th>CEO</th></tr>'
+'<tr><td>Write the SRS</td><td style="text-align:center;color:#6ee7b7">R</td><td style="text-align:center;color:#f59e0b">A</td><td style="text-align:center;color:#93c5fd">C</td><td style="text-align:center;color:#c4b5fd">I</td></tr>'
+'<tr><td>Approve the project budget</td><td style="text-align:center;color:#c4b5fd">I</td><td style="text-align:center;color:#93c5fd">C</td><td style="text-align:center;color:#c4b5fd">I</td><td style="text-align:center;color:#f59e0b">A</td></tr>'
+'<tr><td>Estimate effort</td><td style="text-align:center;color:#93c5fd">C</td><td style="text-align:center;color:#c4b5fd">I</td><td style="text-align:center;color:#6ee7b7">R/A</td><td style="text-align:center">—</td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>Common interview mistake:</b> confusing Responsible with Accountable, or assigning several "A"s to one task. Remember: <b>R does the work, A owns the outcome</b>, and there is always exactly one A.</div>'

+'<div class="t-h3">Power-Interest Grid</div>'
+'<div class="svgdemo"><svg viewBox="0 0 420 320" width="400" height="310" xmlns="http://www.w3.org/2000/svg">'
+'<line x1="60" y1="20" x2="60" y2="280" stroke="#64748b" stroke-width="1.3"/>'
+'<line x1="60" y1="280" x2="400" y2="280" stroke="#64748b" stroke-width="1.3"/>'
+'<line x1="60" y1="150" x2="400" y2="150" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<line x1="230" y1="20" x2="230" y2="280" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<text x="20" y="150" fill="#94a3b8" font-size="10" transform="rotate(-90,20,150)">Power</text>'
+'<text x="230" y="305" text-anchor="middle" fill="#94a3b8" font-size="10">Interest</text>'
+'<rect x="65" y="25" width="160" height="120" fill="#1a1f2e" stroke="#2d3748" stroke-width="0.6"/>'
+'<text x="145" y="45" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Keep Satisfied</text>'
+'<text x="145" y="60" text-anchor="middle" fill="#64748b" font-size="7.5">high power,</text>'
+'<text x="145" y="72" text-anchor="middle" fill="#64748b" font-size="7.5">low interest</text>'
+'<text x="145" y="90" text-anchor="middle" fill="#64748b" font-size="7">Example: CFO — minimal</text>'
+'<text x="145" y="102" text-anchor="middle" fill="#64748b" font-size="7">detail, but keep posted on budget</text>'
+'<rect x="235" y="25" width="160" height="120" fill="#0d3b2e" stroke="#2d3748" stroke-width="0.6"/>'
+'<text x="315" y="45" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Manage Closely</text>'
+'<text x="315" y="60" text-anchor="middle" fill="#64748b" font-size="7.5">high power,</text>'
+'<text x="315" y="72" text-anchor="middle" fill="#64748b" font-size="7.5">high interest</text>'
+'<text x="315" y="90" text-anchor="middle" fill="#64748b" font-size="7">Example: Product Owner —</text>'
+'<text x="315" y="102" text-anchor="middle" fill="#64748b" font-size="7">involve as closely as possible</text>'
+'<rect x="65" y="155" width="160" height="120" fill="#1a1f2e" stroke="#2d3748" stroke-width="0.6"/>'
+'<text x="145" y="175" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="bold">Monitor</text>'
+'<text x="145" y="190" text-anchor="middle" fill="#64748b" font-size="7.5">low power,</text>'
+'<text x="145" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">low interest</text>'
+'<text x="145" y="220" text-anchor="middle" fill="#64748b" font-size="7">Minimal effort —</text>'
+'<text x="145" y="232" text-anchor="middle" fill="#64748b" font-size="7">just keep an eye on them</text>'
+'<rect x="235" y="155" width="160" height="120" fill="#1a1f2e" stroke="#2d3748" stroke-width="0.6"/>'
+'<text x="315" y="175" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Keep Informed</text>'
+'<text x="315" y="190" text-anchor="middle" fill="#64748b" font-size="7.5">low power,</text>'
+'<text x="315" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">high interest</text>'
+'<text x="315" y="220" text-anchor="middle" fill="#64748b" font-size="7">Example: end users —</text>'
+'<text x="315" y="232" text-anchor="middle" fill="#64748b" font-size="7">regular updates, demos</text>'
+'</svg></div>'
+'<div class="info-box"><b>Why a BA needs this:</b> the grid defines the communication STRATEGY for the whole project — how much time to spend on each stakeholder and in what format (weekly status, daily sync, one-off notification). The mistake is spending equal time on everyone: it ignores the real level of power/interest and leads to a "quiet" CFO suddenly blocking the release over budget because they were not informed in time.</div>'

+'<div class="t-h3">📊 Gap Analysis (As-Is → To-Be)</div>'
+'<div class="info-box">A formal technique for comparing the CURRENT state (As-Is) and the DESIRED state (To-Be) in order to pinpoint WHAT needs to be built or changed — that is the "gap" the requirements close.</div>'
+'<div class="tw"><table>'
+'<tr><th>Step</th><th>Action</th></tr>'
+'<tr><td>1</td><td>Document <b style="color:#f59e0b">As-Is</b> — how the process/system works NOW (usually a BPMN As-Is diagram + metrics: time, cost, errors)</td></tr>'
+'<tr><td>2</td><td>Document <b style="color:#6ee7b7">To-Be</b> — how the process should work in the TARGET state (BPMN To-Be + target metrics)</td></tr>'
+'<tr><td>3</td><td>Compare and identify <b style="color:#93c5fd">Gaps</b> — specific differences: missing steps, bottlenecks, duplication, manual work where automation is needed</td></tr>'
+'<tr><td>4</td><td>Prioritize the gaps (MoSCoW/RICE) and turn each into a requirement / User Story</td></tr>'
+'</table></div>'
+'<div class="tw"><table>'
+'<tr><th>Aspect</th><th style="color:#f59e0b">As-Is</th><th style="color:#6ee7b7">To-Be</th><th style="color:#93c5fd">Gap</th></tr>'
+'<tr><td>Order processing</td><td>Manager manually checks stock in Excel, 25 min</td><td>System checks stock automatically in real time, &lt;1 sec</td><td>Need CRM/Inventory integration + automatic stock check</td></tr>'
+'<tr><td>Discount approval</td><td>Email chain to the manager, 1-2 days</td><td>Automatic rule-based approval (≤10% — automatic, &gt;10% — manager)</td><td>Need a Business Rules Engine module + approval workflow</td></tr>'
+'</table></div>'
+'<div class="info-box green"><b>How it differs from plain BPMN As-Is/To-Be:</b> Gap Analysis is not just "draw two processes" but a formal DOCUMENT-ARTIFACT in which every gap is explicitly stated, assessed by impact/effort and linked to a specific requirement via the RTM. In an interview it is important to show exactly this chain: As-Is → To-Be → Gaps → Requirements.</div>'

+'<div class="t-h3">💰 Business Case and Cost-Benefit Analysis (ROI)</div>'
+'<div class="info-box">A Business Case is a document that justifies WHETHER the project is worth doing at all, in financial terms. It is usually prepared BEFORE the project starts and approved by the sponsor/investment committee. It differs from Vision & Scope in that Vision & Scope describes WHAT we build, while the Business Case proves WHY it pays off.</div>'
+'<div class="tw"><table>'
+'<tr><th>Business Case section</th><th>Content</th></tr>'
+'<tr><td>Problem / Opportunity</td><td>Which problem we solve or which opportunity we seize</td></tr>'
+'<tr><td>Options Considered</td><td>Alternative solutions (including the "do nothing" option)</td></tr>'
+'<tr><td>Costs</td><td>Costs: development, licenses, infrastructure, training, support</td></tr>'
+'<tr><td>Benefits</td><td>Benefits: revenue growth, cost reduction, risk reduction (quantified where possible)</td></tr>'
+'<tr><td>Financial Analysis</td><td>ROI, Payback Period, sometimes NPV</td></tr>'
+'<tr><td>Risks</td><td>What could go wrong and how it would affect the numbers</td></tr>'
+'<tr><td>Recommendation</td><td>The recommended option and its rationale</td></tr>'
+'</table></div>'
+'<div class="info-box"><b>ROI (Return on Investment):</b> <code>ROI = (Benefit − Cost) / Cost × 100%</code>. Example: project cost is $50,000, expected additional annual revenue is $80,000. ROI = (80,000 − 50,000) / 50,000 × 100% = <b>60%</b>.</div>'
+'<div class="info-box yellow"><b>Payback Period:</b> how long it takes for the benefits to cover the costs. If a project saves $5,000/month at a cost of $50,000, payback comes after 10 months. The shorter the period, the less risky the investment.</div>'
+'<div class="info-box green"><b>Why should a BA count money if that is the finance team\'s job?</b> At the Middle/Senior level a BA must be able to justify the value of a feature in numbers, AT LEAST roughly, not just "users will like it". The Business Case/ROI is the language in which a BA talks to the C-level and gets the project budget.</div>'

+'<div class="t-h3">🔄 Change Management / Change Request (CR) Process</div>'
+'<div class="info-box">Once the Scope/Baseline is approved, any new requirement or change to an existing one must go through a formal process — otherwise it is a direct path to scope creep. Change Management is not about banning changes, but about accepting them in a CONTROLLED way.</div>'
+'<div class="tw"><table>'
+'<tr><th>Step</th><th>What happens</th></tr>'
+'<tr><td>1. Submit</td><td>A stakeholder formally submits a Change Request — what they want to change and why (not verbally on a call!)</td></tr>'
+'<tr><td>2. Log</td><td>The CR is registered in the Change Log/Request Log with a unique ID, status and date</td></tr>'
+'<tr><td>3. Impact Analysis</td><td>BA/Tech Lead assess the impact on Scope, Schedule, Budget, Risks and related requirements (via the RTM)</td></tr>'
+'<tr><td>4. Review by CCB</td><td>The Change Control Board (sponsor, PM, key stakeholders) reviews it and makes a decision</td></tr>'
+'<tr><td>5. Decision</td><td>Approved / Rejected / Deferred (postponed to a future release)</td></tr>'
+'<tr><td>6. Implement & Update</td><td>If approved, the Backlog/SRS/RTM/Baseline are updated and the team is informed</td></tr>'
+'</table></div>'
+'<div class="tw"><table>'
+'<tr><th>CR ID</th><th>Description</th><th>Requester</th><th>Impact</th><th>Status</th></tr>'
+'<tr><td>CR-014</td><td>Add Apple Pay payment</td><td>Marketing</td><td>+2 weeks, +$4,000</td><td style="color:#fcd34d">Under CCB review</td></tr>'
+'<tr><td>CR-013</td><td>Remove the email confirmation step at sign-up</td><td>Product Owner</td><td>−1 day, needs a UX review of spam risk</td><td style="color:#6ee7b7">Approved</td></tr>'
+'</table></div>'
+'<div class="info-box"><b>Difference from an Agile backlog:</b> in Scrum the term "Change Request" is used less formally — new ideas usually just go into the Product Backlog and are re-prioritized with the PO before the next sprint. But when working under a Fixed Price contract, with government clients or on Waterfall projects, a formal CR process with a CCB is mandatory, and its absence is a common cause of budget and schedule failure.</div>'
+'<div class="info-box yellow"><b>Common interview question:</b> "A stakeholder comes to you mid-sprint with a new wish — what do you do?" The right answer is NOT to refuse and NOT to pull it into the current sprint right away, but to record it as a CR/Backlog Item, assess the impact with the team, and decide together with the PO/CCB when and whether to do it.</div>'
,

tech_arch:'<div class="t-h3">🏗️ Monolith vs Microservices — Architectural Styles</div>'
+'<div class="info-box">A technical BA (especially in ERP/integrations) regularly runs into this choice in discussions of NFRs, budget and timelines. You do not need to be able to DESIGN architecture — you need to understand the trade-offs so you can ask the right questions and not be surprised why a "simple feature" costs 3 months.</div>'

+'<div class="tw"><table>'
+'<tr><th></th><th style="color:#93c5fd">Monolith</th><th style="color:#6ee7b7">Microservices</th></tr>'
+'<tr><td><b>What it is</b></td><td>The whole application is ONE deployable artifact: UI, business logic and data access in a single codebase</td><td>The application is split into INDEPENDENT services, each with its own database, deployed separately</td></tr>'
+'<tr><td><b>Development</b></td><td>Easier to start — one repository, one stack, simple debugging</td><td>Harder to start — needs infrastructure (API Gateway, service discovery, monitoring)</td></tr>'
+'<tr><td><b>Scaling</b></td><td>Scales as a WHOLE, even if only one module is under load</td><td>Scales INDEPENDENTLY — only the service that is under load</td></tr>'
+'<tr><td><b>Fault tolerance</b></td><td>One bug can bring down the ENTIRE application</td><td>Failure of one service does not necessarily stop the others (fault isolation)</td></tr>'
+'<tr><td><b>Deployment</b></td><td>Any change means redeploying the WHOLE application</td><td>Each service is deployed independently — faster releases, less risk</td></tr>'
+'<tr><td><b>Team</b></td><td>One team easily works on everything</td><td>Usually 1 team = 1 or several services (Conway&#39;s Law: software structure mirrors the organization structure)</td></tr>'
+'<tr><td><b>Operational complexity</b></td><td>Low — one process, one log</td><td>High — dozens of services, distributed logs, network latency between services</td></tr>'
+'<tr><td><b>When it is chosen</b></td><td>Startup, MVP, small team, uncertain requirements — SPEED of start matters</td><td>Large product, many teams, different parts of the system grow under load at different rates</td></tr>'
+'</table></div>'

+'<div class="info-box green"><b>Classic startup mistake:</b> starting with microservices "for the future" when the team is 3 developers and the product has not found product-market fit yet. The widely accepted recommendation (including from practitioners like Martin Fowler) is to start with a "modular monolith" — a single application with clear internal module boundaries — and extract microservices LATER, when a specific module genuinely needs independent scaling or a separate team. This is called <b>Monolith First</b>.</div>'

+'<div class="info-box yellow"><b>What this means for a BA in practice:</b> when gathering NFRs for a new system, ask explicitly: "Are different parts of the system expected to grow or be loaded at very different rates?", "How many independent teams will work on the product?", "How critical is it that a failure of one module does not bring down the whole system?" — the answers directly affect the architectural choice, budget and timeline you will have to defend in front of stakeholders.</div>'

+'<div class="t-h3">🔌 REST vs SOAP + JSON Basics</div>'
+'<div class="info-box">When a system integrates with an external service (payment gateway, CRM, bank), a BA must understand at least the basic difference between API formats in order to write adequate integration requirements and not confuse developers.</div>'

+'<div class="t-h3">JSON — Basic Syntax</div>'
+'<div class="info-box">JSON (JavaScript Object Notation) is a lightweight text format for data exchange. Today it is the DE-FACTO standard for REST APIs. The structure is "key: value" pairs, nested objects in curly braces {}, and lists in square brackets [].</div>'
+'<div class="tw"><table><tr><td style="font-family:monospace;font-size:0.78rem;white-space:pre;color:#93c5fd">{<br>&nbsp;&nbsp;"orderId": 10245,<br>&nbsp;&nbsp;"customer": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"name": "Ivan Petrov",<br>&nbsp;&nbsp;&nbsp;&nbsp;"email": "ivan@example.com"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"items": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ "sku": "A100", "qty": 2 },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ "sku": "B200", "qty": 1 }<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;"status": "confirmed"<br>}</td></tr></table></div>'
+'<div class="info-box"><b>What a BA needs to be able to do:</b> read such a structure (object → fields → nested objects/arrays) well enough to understand WHAT is passed between systems and specify concrete required/optional fields in the requirements (for example: "the email field is required, the items field must have at least 1 element").</div>'

+'<div class="t-h3">REST vs SOAP</div>'
+'<div class="tw"><table>'
+'<tr><th></th><th style="color:#6ee7b7">REST</th><th style="color:#93c5fd">SOAP</th></tr>'
+'<tr><td><b>What it is</b></td><td>An architectural STYLE (a set of principles), not a strict protocol</td><td>A strict PROTOCOL (Simple Object Access Protocol) with its own message standard</td></tr>'
+'<tr><td><b>Data format</b></td><td>Usually JSON (XML is also possible)</td><td>XML ONLY</td></tr>'
+'<tr><td><b>Transport</b></td><td>HTTP methods: GET, POST, PUT, DELETE — method = action</td><td>Usually HTTP, but the method is almost always POST — the action is described INSIDE the XML body</td></tr>'
+'<tr><td><b>Contract</b></td><td>Flexible, often described with OpenAPI/Swagger (optional)</td><td>Rigid, mandatory contract — a WSDL file (describes every method and structure up front)</td></tr>'
+'<tr><td><b>Message weight</b></td><td>Lightweight (JSON is more compact than XML)</td><td>Heavy — lots of XML boilerplate (envelope, header, body)</td></tr>'
+'<tr><td><b>Security/transactions</b></td><td>Relies on HTTPS + tokens (OAuth, JWT)</td><td>Built-in enterprise standards — WS-Security, support for distributed transactions</td></tr>'
+'<tr><td><b>Where it is common</b></td><td>Modern web/mobile APIs, public startup APIs</td><td>Banks, insurance, public sector, legacy enterprise systems — where strict typing and contract reliability are critical</td></tr>'
+'</table></div>'
+'<div class="info-box green"><b>In simple words for an interview:</b> REST is like a flexible agreement — "send me JSON to this address"; SOAP is like a strict bureaucratic protocol — "fill in exactly this XML form or we will not accept it". REST is simpler and lighter, SOAP is more reliable and stricter — which is why old banking and government systems are often still on SOAP, while new products almost always choose REST.</div>'
+'<div class="info-box yellow"><b>Why a BA needs this:</b> if a stakeholder says "we need an integration with a partner bank" and the bank offers only SOAP/WSDL, that is an immediate signal for an NFR discussion: implementation will take longer (parsing XML is harder than JSON), and a separate adapter layer converting SOAP into the internal REST/JSON API may be needed. Spotting this early in the requirements saves weeks at the project estimation stage.</div>'

+'<div class="t-h3">🔐 Authentication vs Authorization</div>'
+'<div class="tw"><table>'
+'<tr><th>Criterion</th><th style="color:#93c5fd">Authentication (AuthN)</th><th style="color:#6ee7b7">Authorization (AuthZ)</th></tr>'
+'<tr><td><b>Question</b></td><td>Who is this?</td><td>What is this user allowed to do?</td></tr>'
+'<tr><td><b>Essence</b></td><td>Verifying identity</td><td>Granting or checking access rights</td></tr>'
+'<tr><td><b>Example methods</b></td><td>Password, PIN, fingerprint, Face ID, SMS code</td><td>Roles (Admin, Moderator, Guest), access lists, tokens</td></tr>'
+'<tr><td><b>When it happens</b></td><td>Usually once at login</td><td>On every request or action within the system</td></tr>'
+'</table></div>'
+'<div class="info-box yellow"><b>The order is always the same:</b> first authentication (the system learns who has arrived), then authorization (the system decides what this person may do). The token is issued AFTER successful authentication and is then used for authorization checks on every request.</div>'};




var Q = [
{sec:"theory",lab:"BABOK v3 — Requirements Classification",type:"concept",
 q:"A sales manager says: 'I want to see a dashboard with today's revenue.' Which type of requirement is this according to BABOK v3?",
 opts:["Business requirement — it is a company goal","Stakeholder requirement — describes the need of a specific stakeholder","Functional requirement — describes system behavior","Transition requirement — describes the transition between states"],
 ans:1,
 exp:"A Stakeholder Requirement answers the question 'WHAT does a specific person need?'. A business requirement would be: 'Increase revenue by 15%'. A functional one: 'The system displays a widget with the day's sales total, refreshed every 15 minutes'."},

{sec:"theory",lab:"BABOK v3 — Requirements Classification",type:"concept",
 q:"'The system must handle 500 concurrent requests with a response time of no more than 200ms.' What type of requirement is this?",
 opts:["Functional — describes what the system does","Non-functional — describes the quality and operating conditions of the system","Business requirement — a company goal","Transition — a migration condition"],
 ans:1,
 exp:"A non-functional requirement (NFR) describes the quality attributes of a system: performance, security, availability. 'No more than 200ms at 500 RPS' is a measurable NFR. A bad NFR: 'The system must be fast' — no number, cannot be verified."},

{sec:"theory",lab:"BABOK v3 — Requirements Classification",type:"concept",
 q:"A company is moving from one CRM to another. Requirement: 'All customer data must be migrated by December 31 without any loss.' This is:",
 opts:["A functional requirement for the new CRM","A non-functional requirement (data availability)","A transition requirement — describes the conditions for moving from the current to the target state","A business requirement — the project goal"],
 ans:2,
 exp:"A Transition Requirement describes the conditions for moving from the current state to the target state. It is temporary — needed only during the migration period. Another example: 'Users must complete training on the new system before launch'."},

{sec:"theory",lab:"BABOK v3 — Requirements Classification",type:"concept",
 q:"How does a business rule differ from a functional requirement?",
 opts:["A business rule is the same as a functional requirement, just worded differently","A business rule describes a domain constraint (independent of the system); a functional requirement describes how the system must behave","A business rule is always defined by the developer, a functional requirement by the business","A business rule is not documented — it is a verbal agreement"],
 ans:1,
 exp:"A business rule is a rule of the subject domain that does not depend on an IT system. Example: 'Discount on orders from $5,000'. Functional requirement: 'The system automatically applies a 10% discount if the total is ≥ $5,000' — how the system implements the business rule."},

{sec:"theory",lab:"Elicitation Techniques",type:"concept",
 q:"At the start of a project the analyst has no access to users, but does have regulations, instructions, and reports. Which technique should be used first?",
 opts:["Interviews with management","A workshop with the team","Document analysis — study the available materials before meetings","Prototyping — build a mockup for discussion"],
 ans:2,
 exp:"Document analysis should always precede interviews and workshops. It lets you come to a meeting prepared: understanding the context, processes, and terminology. You ask precise questions instead of basic ones. It saves stakeholders' time."},

{sec:"theory",lab:"Elicitation Techniques",type:"concept",
 q:"Cashier users cannot articulate how they work — 'we just do it the way we're used to.' Which technique fits best?",
 opts:["Survey or Questionnaire — ask questions in writing","Observation — the analyst watches the user's real work","Brainstorming — generating ideas","Interface analysis — study the current system"],
 ans:1,
 exp:"Observation is ideal for uncovering tacit knowledge — what people do automatically and cannot put into words. The analyst shadows the user and records the actual actions, the steps the user 'forgot' to mention."},

{sec:"theory",lab:"Elicitation Techniques",type:"concept",
 q:"You need to align requirements among 8 stakeholders from different departments with conflicting opinions. What is most effective?",
 opts:["Hold 8 separate interviews and then consolidate the results","A facilitated workshop — jointly working out a solution","A survey — collect opinions in writing","Observation — watch how each of them works"],
 ans:1,
 exp:"A workshop is the best tool for reconciling conflicting opinions. The group identifies and verifies requirements together, and conflicts are resolved in real time. 8 separate interviews yield 8 versions of the truth with no synthesis."},

{sec:"theory",lab:"BA Artifacts",type:"concept",
 q:"What is the fundamental difference between a Use Case and a User Story?",
 opts:["They are the same thing, just different notation formats","Use Case — a detailed formal scenario (main + alternative flows); User Story — a minimal card with value, details in AC","User Story is only for startups, Use Case is for large companies","Use Case describes business processes, User Story describes UI/UX"],
 ans:1,
 exp:"A Use Case is a formal document with an actor, preconditions, main scenario, and alternative flows. Waterfall. A User Story is a card 'As a [role], I want [action], so that [value]', with details in AC. Agile. A US describes INTENT, a Use Case describes a SCENARIO."},

{sec:"theory",lab:"BA Artifacts",type:"concept",
 q:"What are Acceptance Criteria and how do they differ from DoD?",
 opts:["AC and DoD are the same thing","AC — specific conditions for a specific User Story; DoD — a general readiness checklist for ALL of the team's tasks","DoD is for the business, AC is for developers","AC is written by QA, DoD is written by the Scrum Master"],
 ans:1,
 exp:"AC (Acceptance Criteria) are specific to ONE particular US: 'Is this exact feature done correctly?'. DoD is a universal checklist for ALL tasks: code + review + tests + documentation. DoR is the set of conditions for a task to be ready to be picked up."},

{sec:"theory",lab:"BA Artifacts",type:"concept",
 q:"A BA writes the User Story: 'The user wants to reset their password.' What is wrong with it?",
 opts:["Nothing is wrong — it is a good User Story","It is missing the role (user type) and the business value (why it is needed)","A User Story must be written only in English","A User Story should not mention passwords — a technical detail"],
 ans:1,
 exp:"The correct template: 'As a [specific role], I want [action], so that [value]'. Problems: 1) 'User' is too generic. 2) The value is missing. Correct: 'As a registered user, I want to recover my password via email, so that I can log in to the system'."},

{sec:"theory",lab:"Agile & Scrum",type:"concept",
 q:"What is DoR (Definition of Ready) and why is it needed?",
 opts:["DoR is a development completion checklist (what 'done' means)","DoR is a list of criteria under which a task is ready to be picked up by the team","DoR is a document confirming the system is ready for release","DoR is a set of code quality criteria"],
 ans:1,
 exp:"DoR is the 'entrance' to a sprint. A task gets into the Sprint only if it meets the DoR. A typical DoR: User Story written, AC defined, estimated in SP, no blockers. Without a DoR the team picks up 'raw' tasks and loses time clarifying them mid-sprint."},

{sec:"theory",lab:"Agile & Scrum",type:"concept",
 q:"How does Kanban differ from Scrum in its core flow-management principle?",
 opts:["Kanban has no process visualization, Scrum does","Kanban manages flow through WIP limits; Scrum manages through fixed iterations (sprints)","Kanban requires fixed PO and SM roles, Scrum does not","Kanban is only for support, Scrum is only for new development"],
 ans:1,
 exp:"Kanban = flow management. The main tool is WIP limits, which cap the number of tasks in each status. Metrics: Lead Time, Cycle Time. Scrum = iteration management. Metrics: Velocity, Burndown chart."},

{sec:"theory",lab:"Agile & Scrum",type:"concept",
 q:"The BA role in a Scrum team: what are the main responsibilities?",
 opts:["The BA replaces the Product Owner and manages the backlog","The BA only writes documentation after development is done","The BA helps the PO: writes US and AC, runs Refinement, and acts as the link between the business and the team","The BA is responsible for testing and feature acceptance"],
 ans:2,
 exp:"In Scrum the BA works in tandem with the PO: helps elicit and clarify requirements, writes US and AC, runs Backlog Refinement, and communicates with stakeholders. The BA is the 'translator' between the business and the team."},

{sec:"theory",lab:"Agile & Scrum",type:"concept",
 q:"Story Points are:",
 opts:["An estimate of task completion time in hours","A relative measure of task complexity that accounts for volume, complexity, and uncertainty","The number of lines of code in a task","An estimate of the task's business value in money"],
 ans:1,
 exp:"Story Points are a RELATIVE measure, not an absolute one. 5 SP does not mean 5 hours. They account for: volume + technical complexity + uncertainty/risk. Method: Planning Poker (Fibonacci cards: 1, 2, 3, 5, 8, 13). Velocity = average SP per sprint."},

{sec:"theory",lab:"BA Role",type:"concept",
 q:"What does 'requirements verification' vs 'requirements validation' mean?",
 opts:["They are the same — both terms mean checking requirements","Verification — is the requirement written correctly (internal); Validation — is it the right requirement (with stakeholders)","Verification is done after development, validation before","Verification is a QA task, validation is a BA task"],
 ans:1,
 exp:"Verification: 'Are we building the product RIGHT?' — checking that requirements are correct, consistent, and complete. An internal check. Validation: 'Are we building the RIGHT product?' — checking with stakeholders that the requirements actually solve the business problem."},

{sec:"theory",lab:"BA Role",type:"concept",
 q:"What is requirements traceability and why is it needed?",
 opts:["Traceability is translating requirements into technical language","Traceability is the linkage between requirements at different levels. It lets you trace that every feature implements a stakeholder requirement, which in turn achieves a business goal","Traceability is prioritization using the MoSCoW method","Traceability is estimating the effort needed for implementation"],
 ans:1,
 exp:"Requirements Traceability lets you answer: 'Why are we building this feature?' (link to the business goal), 'Is everything covered by tests?' (feature → test case). Tool: RTM. Without traceability it is easy to implement unnecessary requirements — gold plating."},

{sec:"theory",lab:"BA Artifacts",type:"concept",
 q:"The MoSCoW prioritization method: what does each letter stand for?",
 opts:["Must/Optional/Should/Can — 4 levels of obligation","Must have / Should have / Could have / Won't have — mandatory / desirable / possible / not now","More/Some/Could/Wait — urgency levels","Mandatory/Optional/Secondary/Closed — requirement statuses"],
 ans:1,
 exp:"MoSCoW: Must have — the product does not work without it (MVP). Should have — important, but you can launch without it. Could have — nice to have if time allows. Won't have — deliberately deferred. Must = first release. The method is fast but subjective."},

{sec:"theory",lab:"BA Role",type:"concept",
 q:"What is the main outcome of a BA's work in requirements analysis according to BABOK?",
 opts:["Write the most detailed specification possible, hundreds of pages long","Identify the real business need (not the request), define and agree the requirements so that the team builds a valuable solution","Record all of the customer's wishes without analysis","Choose the technology stack for implementation"],
 ans:1,
 exp:"BABOK: the BA's job is to identify the REAL need, not just write down wishes. The customer often describes a solution rather than a problem. The BA must dig deeper: 'Why this? What problem does it solve?'. Method: 5 Whys."},

{sec:"theory",lab:"Elicitation Techniques",type:"concept",
 q:"What are 'open' and 'closed' questions in an interview, and when should each be used?",
 opts:["Open — require a detailed answer (How? Why? What?), closed — Yes/No. Open for understanding, closed for confirmation","Open — asked publicly, closed — asked privately","Open are always better — use only them","Closed questions are forbidden in BA"],
 ans:0,
 exp:"Open questions (Who/What/When/Where/Why/How) produce detailed answers and an understanding of context. Start with them. Closed questions (Yes/No) are for clarifying specific facts. Rule: 'Open first — to understand, then closed — to confirm'."},

{sec:"theory",lab:"Agile",type:"concept",
 q:"In an Agile project the customer wants to add a large requirement in the middle of a sprint. What should the BA do?",
 opts:["Add it to the Sprint Backlog immediately — the client matters more than the process","Add it to the Product Backlog, estimate it with the PO, and include it in the next sprint","Refuse the customer — changes are forbidden in Agile","Write a Change Request and pause the sprint"],
 ans:1,
 exp:"Agile welcomes change, but not during a sprint — that breaks the Sprint Goal. The right way: 1) Add it to the Product Backlog. 2) The BA helps the PO clarify and estimate it. 3) At Sprint Planning, include it in the next sprint. If it is critical, the PO can cancel the sprint, but that is rare."},

// PRACTICE Q21-50
{sec:"practice",lab:"Requirements Classification",type:"classify",
 ctx:"At a meeting with the customer you heard the following statements.",
 q:"'We need to cut loan application processing time from 3 days to 4 hours' — this is:",
 opts:["A stakeholder requirement — this is what the manager wants","A functional requirement — the system must process applications","A business requirement — a high-level goal, answers WHY","Non-functional — it is about speed"],
 ans:2,
 exp:"A business requirement is a high-level measurable organizational goal explaining WHY the change was initiated. 'Cut the time from 3 days to 4 hours' is a SMART goal. An NFR would look different: 'The system must process an application within 4 hours' — that is already about system behavior."},

{sec:"practice",lab:"Requirements Classification",type:"classify",
 ctx:"An analyst is gathering requirements for a banking application.",
 q:"'A client cannot get a loan if their credit score is below 600' — this is:",
 opts:["A functional requirement — the system must check the score","A non-functional requirement — a performance constraint","A business rule — a domain constraint independent of the system","A transition requirement — a state-change condition"],
 ans:2,
 exp:"A business rule is a domain rule that exists independently of any IT system. 'Score < 600 = rejection' is the bank's rule. Functional requirement: 'The system automatically rejects the application if the client's score is < 600'."},

{sec:"practice",lab:"User Story & AC",type:"write",
 ctx:"You need to write a User Story for an online store.",
 q:"Which of the statements is a CORRECT User Story?",
 opts:["'Implement the add-to-cart functionality'","'As a shopper, I want to add an item to the cart, so that I can buy several items in one purchase'","'The cart must support up to 50 items at a time'","'The user clicks the Add button and the item appears in the cart'"],
 ans:1,
 exp:"A correct US contains: role (shopper), action (add to cart), value (buy several items). Option 1 is a technical task with no role or value. Option 3 is an NFR. Option 4 is a scenario description, not a US."},

{sec:"practice",lab:"User Story & AC",type:"write",
 ctx:"User Story: 'As a registered user, I want to receive a notification when my order status changes, so that I know when to expect delivery.'",
 q:"Which option is a correct Acceptance Criterion?",
 opts:["'The system sends notifications'","'Given the order has moved to the Shipped status, When the system updates the status, Then the user receives an SMS/Email with the tracking number within 5 minutes'","'Notifications must work 24/7'","'The user is happy with the notifications'"],
 ans:1,
 exp:"A good AC is specific, verifiable, in Given/When/Then format. Option 2: Given — the condition, When — the trigger, Then — a specific result with numbers. QA can write an automated test. Option 1 is vague. Option 3 is an NFR. Option 4 cannot be verified."},

{sec:"practice",lab:"Elicitation Techniques",type:"choose",
 ctx:"Project: warehouse automation. Warehouse workers work in 3 shifts, and many cannot clearly describe their process. Some processes are not documented anywhere.",
 q:"Which combination of techniques should be used first?",
 opts:["Survey or Questionnaire for all warehouse workers — cover everyone at once","A workshop with warehouse management — they know how it should be","Document analysis + Observation of warehouse workers on the job","Prototype the interface and show it to the warehouse workers"],
 ans:2,
 exp:"1) Document analysis — study what exists (instructions, reports, Excel). 2) Observation — warehouse workers do automatically what they cannot describe. Only by seeing the process will you uncover implicit requirements. A workshop with management describes 'how it should be', not 'how it is'. A prototype is too early."},

{sec:"practice",lab:"Agile",type:"choose",
 ctx:"A Scrum team at Sprint Planning. The PO proposes a task: 'Build a recommendation system.' The team asks: what exactly should we do? What is the expected result? Are there AC?",
 q:"What happened, and what should the BA have done in advance?",
 opts:["No big deal — the team should come up with the details themselves","The DoR was violated — the task was not ready for planning. The BA should have refined the US, written AC, and estimated it at Refinement","The Product Owner is at fault — they should have written the AC","This is normal for Agile — details are clarified along the way"],
 ans:1,
 exp:"The DoR was violated. The task did not meet the readiness criteria: no description, no AC, not estimated. At Backlog Refinement the BA should have: decomposed the 'recommendation system' into specific US, written AC, and run Planning Poker."},

{sec:"practice",lab:"Prioritization",type:"choose",
 ctx:"The team has 15 User Stories in the backlog. You need to define the MVP for the first release in 3 months.",
 q:"Which prioritization method is most suitable for the MVP?",
 opts:["RICE — calculate it for all 15 stories","MoSCoW — split into Must/Should/Could/Won't, Must = MVP","Sort alphabetically and take the first 5","Ask the developers to choose — they know best"],
 ans:1,
 exp:"MoSCoW is ideal for an MVP: Must have = what the product cannot work without = MVP. The team and the PO sort the stories: Must (mandatory), Should (desirable), Could (if time remains), Won't (not in this release). RICE is more precise but takes more time."},

{sec:"practice",lab:"Interviews",type:"choose",
 ctx:"During an interview the customer says: 'We need a button that automatically sends emails to all customers.'",
 q:"What should the BA do first?",
 opts:["Record the requirement: add a mass-mailing button","Ask a clarifying question: 'Why is this mailing needed? What problem will it solve?'","Explain why it is technically difficult","Immediately write a User Story about the mailing"],
 ans:1,
 exp:"A classic: the customer describes a solution, not a problem. The BA applies the '5 Whys': Why the mailing? → To announce a promotion. Why to everyone? → We don't know who it is relevant to. The real need: 'Notify relevant customers'. The solution may be different: a targeted mailing by segment."},

{sec:"practice",lab:"Artifacts",type:"choose",
 ctx:"The project is underway, 50+ User Stories. The customer asks: 'Have you covered the notifications requirement? How does it affect the customer retention business goal?'",
 q:"Which BA artifact would help answer this question?",
 opts:["Sprint Backlog — it has all the sprint's tasks","RTM (Requirements Traceability Matrix) — a matrix: US → business goal → test case","User Story Map — a visual map of stories","Product Backlog — a list of all requirements"],
 ans:1,
 exp:"The RTM links business requirements → US → test cases. It lets you answer instantly: 'US-034 (notifications) traces to BG-02 (customer retention) and is covered by test cases TC-12, TC-13'. Without an RTM the answer takes hours."},

{sec:"practice",lab:"Scrum",type:"choose",
 ctx:"At the Sprint Review the team demonstrates 3 of the 5 planned US. Two US are not finished.",
 q:"What happens to the unfinished US under Scrum rules?",
 opts:["They are automatically carried over to the next sprint with the same priority","They return to the Product Backlog. The PO re-evaluates and decides when to include them","The sprint is considered a failure — an urgent Retrospective","The developers work overtime to finish them"],
 ans:1,
 exp:"In Scrum, unfinished items return to the Product Backlog — they do not meet the DoD. The PO re-evaluates: take them into the next sprint or change/remove them. Automatic carry-over is a violation: the requirement may have changed."},

{sec:"practice",lab:"NFR",type:"classify",
 ctx:"The team is gathering requirements for a payment system.",
 q:"Which requirements are NON-FUNCTIONAL?",
 opts:["'The system accepts card payments' and 'The system issues a receipt'","'99.9% availability' + 'Transaction within 3 seconds' + 'PCI DSS encryption'","'The user enters the card number' and 'The system checks the balance'","'The system supports Visa and MasterCard' and 'Sends SMS'"],
 ans:1,
 exp:"NFRs describe the QUALITY of the system: availability (99.9% uptime), performance (3 sec), security (PCI DSS). The other options are functional (what the system does). NFR = '-ilities': Reliability, Availability, Security, Scalability."},

{sec:"practice",lab:"Working with Stakeholders",type:"choose",
 ctx:"The BA is interviewing the CFO, who says: 'We need full automation of all financial accounting.' They answer clarifying questions vaguely.",
 q:"Which technique should be applied to uncover the real priorities?",
 opts:["Write everything down verbatim and hand it to the developers","Apply the '5 Whys' method: keep asking 'Why is this important?' down to the root cause","Organize a workshop with 10 stakeholders","Build a prototype of 'full automation' and show it to the CFO"],
 ans:1,
 exp:"5 Whys: 1) Why automation? → To avoid mistakes. 2) Why mistakes? → Lots of manual operations. 3) Which ones? → Bank statement reconciliation. 4) Why does it hurt? → 2 days per month. Result: the real need = automatic statement reconciliation, not 'full automation of everything'."},

{sec:"practice",lab:"Documentation",type:"choose",
 ctx:"The BA created an SRS with 200 requirements. Development complains: it is unclear where to start and what matters.",
 q:"What else should the BA have done?",
 opts:["Add even more detail to the SRS","Prioritize (MoSCoW/RICE) and create an RTM for traceability to business goals","Delete all non-functional requirements","Ask the developers to set the priorities themselves"],
 ans:1,
 exp:"200 requirements without priorities is an anti-pattern. Solution: 1) MoSCoW/RICE — the team knows the MVP. 2) RTM — traceability to business goals, the team understands WHY. 3) Decomposition into US for Agile. Good documentation = the right level of detail for the right audience."},

{sec:"practice",lab:"Scrum & BA",type:"choose",
 ctx:"The Scrum team has no dedicated BA. The PO is overloaded and cannot keep up with detailing the backlog.",
 q:"Which solution is most effective?",
 opts:["Hire another PO","The BA takes over Backlog Refinement: refines US, writes AC, facilitates estimation — the PO only prioritizes","Developers clarify requirements during the sprint","Switch to Waterfall"],
 ans:1,
 exp:"The classic split: the PO owns PRIORITIES (what and when), the BA owns DETAIL (what exactly and how to verify). The BA runs Refinement: decomposes epics into US, writes AC in GWT format, runs Planning Poker. The PO approves and sets priorities."},

{sec:"practice",lab:"Case: Loyalty Program",type:"case",
 ctx:"Case: An online store wants a loyalty program. CEO: 'I want a bonus system like our competitors have.' After interviews the BA found out: the goal is to increase repeat purchases by 25%. Customers leave after their first purchase.",
 q:"Which business requirement should the BA record?",
 opts:["'Implement a loyalty program with 5% cashback'","'Increase the share of repeat purchases by 25% within 12 months'","'Add a bonus module to the system'","'Customers must receive bonuses for purchases'"],
 ans:1,
 exp:"A business requirement = a SMART goal (WHY). 'Increase the share of repeat purchases by 25% within a year' is measurable. 'Implement cashback' is already a solution (a stakeholder requirement). The BA recorded the real problem (customer churn), not the proposed solution."},

{sec:"practice",lab:"Case: Loyalty Program",type:"case",
 ctx:"Continued. The BA formulates the US: 'As a shopper, I want to see my bonus points balance, so that I understand what discount I can count on.'",
 q:"Which Acceptance Criterion for this US is most correct?",
 opts:["'Points are displayed'","'Given the user is logged in to their account, When the system loads the page, Then it displays: current balance (N points), the equivalent in USD, and accrual history for the last 90 days'","'The system must be fast when displaying points'","'The user can see the points'"],
 ans:1,
 exp:"A good AC: Given/When/Then, specific elements with specific data. QA writes an automated test from this AC. Option 1 cannot be verified. Option 3 is an NFR. Option 4 is a rephrasing of the US."},

{sec:"practice",lab:"Requirements Analysis",type:"choose",
 ctx:"The BA received these requirements from the customer: 'The system must work fast and reliably' and 'The system must support authorization.'",
 q:"What is wrong and how should it be fixed?",
 opts:["Everything is fine — the team understands it","'Fast and reliably' — no metrics (violates measurability); 'authorization' — too broad (what type? OAuth? 2FA?). Needs decomposition and numbers","These are the customer's requirements, they cannot be changed","NFRs should be deleted — they get in the way"],
 ans:1,
 exp:"'Fast' → 'Page load < 2 sec with 500 users'. 'Reliably' → 'Availability ≥ 99.5%/month'. 'Authorization' → decompose: email/password login, Google OAuth, 2FA. Every requirement must be verifiable."},

{sec:"practice",lab:"Requirements Conflict",type:"choose",
 ctx:"Sales Director: 'The discount is applied automatically for all category A customers.' CFO: 'Discounts > $10,000 are confirmed manually by a controller.'",
 q:"How does the BA resolve the conflict?",
 opts:["Implement both requirements at the same time","Side with whoever has the higher position","Record the conflict, call a meeting with both, uncover the root goals, and find a compromise","Ignore the CFO — sales matter more"],
 ans:2,
 exp:"Requirements conflicts are normal. Approach: 1) Record the conflict. 2) Call a meeting + the sponsor. 3) Uncover the goals: sales want speed, finance wants control. 4) Compromise: auto-discount up to 10k, manual confirmation above. The BA facilitates, but does not decide."},

{sec:"practice",lab:"Case: Onboarding",type:"case",
 ctx:"HR Director: 'We need an onboarding system.' The BA found out: onboarding takes 2 weeks of manual work. New employees don't know who to turn to. IT does not create access on time.",
 q:"Which types of requirements will the BA record from these problems?",
 opts:["All three are functional requirements","Business requirement: reduce onboarding time; stakeholder requirements: HR (auto-tasks), new employee (roadmap), IT (integration with AD)","All are non-functional performance requirements","These are problems, not requirements"],
 ans:1,
 exp:"Decomposition: Business requirement: reduce onboarding from 2 weeks to N days. Stakeholder requirements: HR wants a checklist with auto-assignment; the new employee wants a roadmap; IT wants automatic account creation. Each → functional US."},

{sec:"practice",lab:"Terminology",type:"concept",
 ctx:"At an interview: \"Tell us about the requirements lifecycle.\"",
 q:"Which answer is the most complete and accurate?",
 opts:["\"Requirements are created at the start of the project and never change\"","\"Lifecycle: Elicitation → Analysis → Documentation → Verification → Validation → Change Management. In Agile this is iterative, every sprint\"","\"The customer writes the requirements, the team implements them\"","\"Lifecycle means we write a spec at the start, sign it off and deliver at the end\""],
 ans:1,
 exp:"The requirements lifecycle per BABOK: Elicitation → Analysis → Documentation → Verification → Validation → Change Management. Requirements are a living artifact. In Agile this cycle is iterative (every sprint). Requirements change, get prioritized and are traced."},

{sec:"practice",lab:"Case: loan pipeline",type:"case",
 ctx:"A bank is automating loan issuance. Current state: application → manual document check (2-3 days) → credit committee (1 day) → answer to the client. Goal: cut it down to 4 hours.",
 q:"What first steps will the BA take?",
 opts:["Write the automation spec right away","Analyze the current process (As-Is BPMN) + interview managers and the committee + identify bottlenecks and business rules","Ask IT to build a system prototype","Copy the competitors' process"],
 ans:1,
 exp:"The right sequence: 1) Document analysis: lending regulations. 2) Observation: how documents are actually checked. 3) Interviews: bottlenecks, implicit rules. 4) As-Is BPMN: visualize the current process. 5) Identify bottlenecks to automate. 6) To-Be BPMN. Only then the system requirements."},

{sec:"practice",lab:"DoR & DoD",type:"choose",
 ctx:"At Sprint Planning the team took the task \"Build the user account area\". During the sprint: no design, no AC, no integration requirements.",
 q:"Which principle was violated, leading to this situation, and how can it be prevented?",
 opts:["DoD was violated: the task was not completed properly","DoR was violated: the task was not ready to be taken. Prevention: a DoR checklist, and no task is taken without passing it","The Sprint Goal was violated","DoD was violated: more tests should have been written"],
 ans:1,
 exp:"DoR was violated. \"User account area\" did not meet readiness: no description, no AC, no design, no contracts. DoR checklist: the US is formulated, AC are written, design is approved, dependencies are resolved, the task is estimated."},

{sec:"practice",lab:"Artifacts",type:"choose",
 ctx:"A developer asks: \"What is the difference between a User Story and a Use Case? When do you use which?\"",
 q:"How will the BA explain the difference?",
 opts:["They are the same thing","US is a minimal format for Agile (role + action + value + AC). Use Case is a detailed formal document (actor + scenarios + alternatives) for Waterfall","Use Case is for small projects, US is for large ones","The BA writes the US, the developer writes the Use Case"],
 ans:1,
 exp:"US is for Agile: a minimal card of intent. Details live in the AC. Use Case is for Waterfall: a full document with preconditions, main flow, alternatives, postconditions. In practice large projects use both: US for the backlog, UC for complex integrations."},

{sec:"theory",lab:"Root Cause Analysis — 5 Whys",type:"concept",
 q:"Customers complain that orders are delayed. After the first \"Why?\" it turns out: \"Because the warehouse cannot pick the order in time.\" What should be done next in the 5 Whys technique?",
 opts:["Immediately write the requirement \"Speed up picking at the warehouse\" and close the analysis","Keep asking \"Why?\" about this answer until we reach a systemic, fixable root cause (for example, staff shortage, poor goods layout, no order prioritization)","Ask the warehouse who is to blame for the delay","Jump straight to an Ishikawa Diagram, 5 Whys is no longer needed"],
 ans:1,
 exp:"The first answer is just another symptom, not the root. 5 Whys requires continuing the chain (\"Why can't the warehouse keep up?\" → \"Why is there a staff shortage?\" → and so on) until the cause becomes systemic and fixable through a process or requirement, not just \"work faster\"."},

{sec:"practice",lab:"Root Cause Analysis",type:"case",
 ctx:"The BA gathered a team (developer, support, product) to analyze the problem \"high product return rate\". In 30 minutes they threw out dozens of possible causes from different areas: logistics, product quality, website descriptions, staff training.",
 q:"Which tool is best suited to STRUCTURE the causes and not lose any from different categories before picking the priority one?",
 opts:["5 Whys, because it is always the one right choice","Ishikawa Diagram (Fishbone): lays out causes by category (People/Process/Technology/Data) so you do not miss a cause from an \"unpopular\" area","MoSCoW: prioritization of product features","RACI matrix: distribution of responsibility"],
 ans:1,
 exp:"When there are many causes from different areas, Fishbone/Ishikawa structures the brainstorm by category (the bones of the fish) so you do not fixate on one area (for example, only logistics) and do not forget about data or processes. After structuring, you can dig into a specific branch with 5 Whys."},

{sec:"theory",lab:"RACI matrix",type:"concept",
 q:"In a RACI matrix the task \"Approve the final screen design\" is assigned: Designer — R, Product Manager — A, UX Researcher — C, Developer — I. Someone proposes adding a second Accountable, the Head of Design, \"just in case, as a backup\". Why is this a bad idea?",
 opts:["Because the Head of Design should not be in the matrix at all","Because there must be EXACTLY ONE Accountable per task; otherwise final responsibility for the decision is diluted, and in a conflict it is unclear who has the last word",
  "Because RACI cannot have more than 4 roles at once",
  "Because Accountable and Responsible must always be the same person"],
 ans:1,
 exp:"The key RACI rule: exactly one Accountable per task. If you add a second one \"just in case\", then in a real conflict (for example, the designer and the Head of Design disagree) it is unclear whose decision is final, which creates more problems than it solves."},

{sec:"practice",lab:"Power-Interest Grid",type:"case",
 ctx:"A new CRM implementation project. Among the stakeholders: the CFO (little interest in details, but can block the budget at any moment) and rank-and-file sales managers (will work in the system daily, very interested, but have no formal influence over project decisions).",
 q:"How should these two stakeholders be placed on the Power-Interest Grid, and what communication strategy follows from that?",
 opts:[
  "Both in the same \"Manage Closely\" quadrant: communicate with both equally often and in equal detail",
  "CFO → \"Keep Satisfied\" (high power, low interest: minimal detail, but keep them informed about the budget); sales managers → \"Keep Informed\" (low power, high interest: regular updates and demos, but no final say in decisions)",
  "CFO → \"Monitor\" (not important), managers → \"Manage Closely\"",
  "Communication strategy does not depend on the quadrant; it is a purely theoretical model"
 ],
 ans:1,
 exp:"The CFO has high POWER (can block the budget) but low INTEREST in implementation details, so the Keep Satisfied quadrant: brief, to the point, focused on budget and risks. Sales managers have high INTEREST (it is their daily work) but low formal POWER, so the Keep Informed quadrant: engage them through demos and updates, collect feedback, but decisions are not theirs to make."},

{sec:"theory",lab:"Gap Analysis",type:"concept",
 q:"In a Gap Analysis document the Gap is stated as: \"The process needs to be made better.\" Why is this a poorly formulated Gap, and how should it be fixed?",
 opts:[
  "The Gap is fine as is; you can move straight on to writing requirements",
  "A Gap must be a SPECIFIC difference between a measurable As-Is and a measurable To-Be, for example: \"As-Is: discount approval takes 1-2 days by email. To-Be: automatic approval of up to 10% in seconds. Gap: a Business Rules Engine + workflow is needed\"",
  "Gap Analysis should not contain any wording at all, only diagrams",
  "The word \"better\" is a correct gap formulation if it came from a stakeholder interview"
 ],
 ans:1,
 exp:"\"Make it better\" is not a gap but a wish: it cannot be estimated, turned into a requirement, or traced through the RTM. A proper gap always rests on measurable As-Is and To-Be (time, cost, number of errors) and names the specific missing element (system, process, role) that must be added or changed."},

{sec:"practice",lab:"Gap Analysis",type:"case",
 ctx:"As-Is: the customer requests a product return by calling the call center, the operator manually creates a ticket in the ERP system, average processing time is 3 days. To-Be (company goal): the customer submits the return themselves in their account area, the ticket lands in the ERP system automatically, processing takes up to 1 day.",
 q:"Which of the following gaps is formulated CORRECTLY and is ready to be turned into requirements?",
 opts:[
  "\"Returns need to be processed faster\"",
  "\"A 'Product Return' section is needed in the account area with a request form + integration of the account area with the ERP system to create the return ticket automatically, which removes manual entry by the operator and cuts processing time from 3 days to 1 day\"",
  "\"The call center works poorly, operators need training\"",
  "\"The ERP system needs to be replaced with another system\""
 ],
 ans:1,
 exp:"A proper gap links specific missing functionality (a section in the account area + ERP integration) to a measurable improvement (3 days → 1 day) and explicitly names which manual step is eliminated (operator entry). This is already a ready foundation for an Epic/User Stories, unlike vague wishes such as \"faster\" or \"better\"."},

{sec:"theory",lab:"Business Case & ROI",type:"concept",
 q:"A warehouse inventory automation project costs $40,000. It is expected to save the company $8,000 per month by reducing errors and manual work. What are the approximate Payback Period and first-year ROI?",
 opts:[
  "Payback ≈ 5 months; first-year ROI ≈ 140%",
  "Payback ≈ 5 months; first-year ROI ≈ 20%",
  "Payback ≈ 40 months; first-year ROI ≈ 8%",
  "It cannot be calculated without the company's revenue data"
 ],
 ans:0,
 exp:"Payback Period = Cost / Monthly savings = 40,000 / 8,000 = 5 months. Annual benefit = 8,000 × 12 = 96,000. ROI = (Benefit − Cost) / Cost × 100% = (96,000 − 40,000) / 40,000 × 100% ≈ 140%. Numbers like these are the typical argument for getting budget approved at C-level."},

{sec:"practice",lab:"Business Case",type:"case",
 ctx:"The CEO asks the BA: \"Why should we build this customer account area at all? It is expensive.\" The BA has data: development costs $60,000; the call center currently spends $15,000/month handling requests, 70% of which the account area would eliminate.",
 q:"How can the BA best argue for the project to the CEO using a Business Case?",
 opts:[
  "\"All our competitors already do this, so we need it too\"",
  "\"Call center savings will be ~$10,500/month (70% of $15,000). With a cost of $60,000 the project pays back in about 5.7 months and brings a net benefit of about $66,000 in the first year (ROI ≈ 110%)\", with explicit Costs/Benefits/Payback figures",
  "\"Users will definitely love the account area, it is modern\"",
  "\"We have already started development, it is too late to back out\""
 ],
 ans:1,
 exp:"C-level speaks the language of money: Costs, Benefits, Payback Period, ROI. These are the numbers that convince them to allocate budget, not generic phrases about being \"modern\" or about \"competitors\". That is the core of a Business Case: show that the benefit exceeds the cost, and how fast."},

{sec:"theory",lab:"Change Management / CR",type:"concept",
 q:"A project runs under a Fixed Price contract with a government customer, the Scope is already signed (Baseline). Mid-development the customer asks to add a new reporting module that was not in the original spec. What is the right course of action?",
 opts:[
  "Quietly add the module so as not to spoil the relationship with the customer",
  "Refuse flatly: the Scope is fixed, changes are forbidden",
  "Raise a formal Change Request: describe the request, perform an Impact Analysis (effect on schedule/budget/risks), submit it to the Change Control Board, and only after approval update the Baseline and Scope",
  "Ask the developers to build the module \"in their spare time\" without changing the official Scope"
 ],
 ans:2,
 exp:"In Fixed Price / Waterfall projects with a fixed Baseline, any change must go through the formal CR process: Submit → Impact Analysis → CCB review → decision → update Scope/Budget/Schedule. Ignoring this process (options 1 and 4) is a direct path to unpaid work and conflict at delivery; a flat refusal (option 2) without analysis is not always right either, if the customer is willing to pay more and move the deadline."},

{sec:"practice",lab:"Change Request",type:"case",
 ctx:"An Agile project is underway (Scrum, 2-week sprints). In the middle of the current sprint the Marketing Director writes to the BA in a private chat: \"We urgently need a 'Share on social media' button on the product page, add it right now, it matters for next week's promotion.\"",
 q:"What should the BA do first?",
 opts:[
  "Immediately push the task into the current sprint, bypassing the Scrum process, since it is \"urgent\"",
  "Ignore the request because it did not come through the official channel",
  "Record the request as a Backlog Item / informal CR with a clear description and business justification, quickly assess the effort and impact on the Sprint Goal with the team and the Product Owner, and decide together with the PO whether to take it into the current sprint (if critical and there is capacity) or the next one",
  "Write a long formal 5-page CR document, because any change requires the full process regardless of context"
 ],
 ans:2,
 exp:"Even in Agile, urgent (\"fire-drill\") requests should not bypass the process entirely; otherwise the team lives in constant interruptions (breaking the Sprint Goal) and the PO loses control over priorities. The right balance: quickly record and assess the request, escalate the urgency if needed, but the decision to include it in the sprint is made by the PO with the team, not by the BA alone over a private chat."},


{sec:"theory",lab:"Monolith vs Microservices",type:"concept",
 q:"A startup of 4 developers without a clear product-market fit is planning a new product and proposes building the architecture on 15 microservices from day one \"to scale right away\". What should you recommend?",
 opts:[
  "Support the plan: microservices are always better than a monolith",
  "Start with a monolith (preferably modular, with clear internal boundaries) and extract microservices later, when a specific module genuinely needs independent scaling or a separate team: the \"Monolith First\" approach",
  "Use SOAP instead of REST for greater reliability from the start",
  "Immediately hire a DevOps team of 10 to support the microservice infrastructure"
 ],
 ans:1,
 exp:"Microservices add significant operational complexity (service discovery, distributed logging, network latency, separate deployment of each service). This is justified when the team is large and there is a clear understanding of which parts of the system grow at different rates. For a small team without product-market fit it is pure overhead that slows down the search for the product. \"Monolith First\" is the accepted practice: start simple, extract services as the real need arises."},

{sec:"practice",lab:"Monolith vs Microservices",type:"case",
 ctx:"A large retailer: the product catalog module experiences 50 times more load than the returns management module, and 8 independent teams work on the product. Today everything is one monolith, and any minor bug in returns requires redeploying the whole application, including the catalog.",
 q:"Which architectural argument here is the STRONGEST in favor of moving to microservices (at least partially)?",
 opts:[
  "Microservices are trendy and all big companies use them",
  "Different load growth rates between modules (catalog vs returns) require independent scaling, and 8 teams cannot work effectively in one codebase with a shared deployment cycle; both factors match exactly the cases where microservices are justified",
  "Microservices automatically make code more readable",
  "Moving to microservices is guaranteed to reduce infrastructure costs"
 ],
 ans:1,
 exp:"Exactly these two signs, very different load growth rates between modules and many independent teams on one codebase, are the classic indicators that the benefits of a microservice architecture (independent scaling, independent deployment per team) outweigh the operational costs. \"Trendy\" and \"will cut costs\" are not valid architectural arguments: microservices almost always INCREASE operational costs, compensating with flexibility, not savings."},

{sec:"theory",lab:"REST vs SOAP",type:"concept",
 q:"A partner bank provides access to its API strictly through a WSDL contract with XML messages. Your team is used to working with REST/JSON. Which of the following is an accurate and correct characterization of the situation?",
 opts:[
  "The bank is simply using outdated technology; they need to be convinced to switch to REST before the integration begins",
  "SOAP and REST are interchangeable; developers just need to rename the fields from XML to JSON",
  "An adapter layer will be needed to convert SOAP/XML into the internal REST/JSON format; this is extra work that should be built into the schedule estimate and NFRs already at the requirements gathering stage",
  "SOAP APIs fundamentally cannot be used together with modern REST systems"
 ],
 ans:2,
 exp:"SOAP remains the standard in many banking, insurance and government systems precisely because of its strict contract (WSDL) and built-in security standards (WS-Security). Convincing the bank to switch to REST is unrealistic and not part of an integration project. Technically SOAP and REST are compatible through an adapter/middleware layer that parses XML and converts to/from JSON, but that is an extra development component that increases duration and complexity, and a competent BA must capture it in the estimate at the requirements analysis stage, not as a surprise mid-development."},

{sec:"practice",lab:"JSON and API requirements",type:"case",
 ctx:"A developer sent this sample JSON response from the order API: { \"orderId\": 555, \"customer\": { \"name\": \"Anna\" }, \"items\": [ { \"sku\": \"X1\", \"qty\": 3 } ], \"status\": \"pending\" }. A business stakeholder asked you to write a requirement: \"the system must accept the customer's email at checkout, this field is mandatory\".",
 q:"Looking at the JSON structure above, which API requirement should you record for the developer based on the business request?",
 opts:[
  "Nothing extra needs to be recorded; the email is surely passed somewhere already",
  "You must state explicitly: the customer object must get a mandatory email field (for example, customer.email), because the current structure has no such field, only name",
  "The whole API must be moved from JSON to XML to add the email",
  "The email should be added as a separate element in the items array"
 ],
 ans:1,
 exp:"This is a key practical skill of a technical BA: read the existing JSON structure literally, field by field, instead of relying on \"it is surely passed\". In the sample the customer object contains only name, so the requirement must EXPLICITLY state that a new mandatory field (for example, customer.email) must be added to this particular nested object, not somewhere else in the structure (for example, mistakenly in items, which would be conceptually wrong: the email belongs to the buyer, not to the line items)."},


{sec:"practice",lab:"Final case",type:"case",
 ctx:"A startup is launching a food delivery app. CEO: \"We want to launch in 3 months.\" You are the BA. You have 2 weeks for requirements gathering.",
 q:"Which 2-week work plan is the most appropriate?",
 opts:["Week 1: full spec. Week 2: sign-off","Week 1: interviews with the CEO/users + competitor analysis → business goals. Week 2: Product Backlog with MoSCoW → US for the MVP → AC → sign-off","Week 1: wireframes. Week 2: show them to investors","2 weeks: study BABOK theory"],
 ans:1,
 exp:"The right plan: Week 1 is Discovery: interview the CEO (business goals), users (pain points), competitors (market). Result: understanding of the problem. Week 2 is Definition: US, MoSCoW for the MVP, AC for Must have, sign-off. Result: a Product Backlog ready for the first sprint. 3 months = ~6 sprints = a clear MVP is a must."}
];

// Q45-50: additional practice questions
Q.push({sec:"practice",lab:"Requirements prioritization",type:"choose",
 ctx:"The team has 8 User Stories in the Sprint. Mid-sprint the PO wants to add one more that is critical for the customer.",
 q:"What should be done according to Scrum?",
 opts:["Add it immediately: the customer is always right","Assess the impact on the Sprint Goal: if critical, the PO cancels the sprint and re-plans; otherwise it goes into the next sprint","Add it unofficially without telling the team","The team decides on its own whether to take it or not"],
 ans:1,
 exp:"Scrum: the sprint is protected. A new task mid-sprint puts the Sprint Goal at risk. If it is critical, the PO may cancel the sprint (a rare case) and hold a new Sprint Planning. If not, the task goes into the Product Backlog and is taken into the next sprint."});

Q.push({sec:"practice",lab:"Formulating requirements",type:"write",
 ctx:"The customer says: \"We need mobile access to the system.\"",
 q:"Which question should the BA ask first?",
 opts:["\"iOS or Android?\" to clarify the platform","\"Why do you need mobile access? What tasks do users want to do from their phones?\" to uncover the need","\"What is the budget for app development?\"","\"When does it need to launch?\" to clarify the timeline"],
 ans:1,
 exp:"The BA first finds out WHY, not HOW. \"Mobile access\" is a solution, not a need. The real need might be: \"Managers want to update ticket statuses while on the road.\" That could be a PWA, a responsive website, a Telegram bot; not necessarily a native app. The question \"Why?\" opens up solution options."});

Q.push({sec:"practice",lab:"BABOK — Knowledge Areas",type:"concept",
 ctx:"At an interview you are asked about the structure of BABOK v3.",
 q:"How many knowledge areas are there in BABOK v3, and which one covers working with stakeholders during requirements gathering?",
 opts:["5 knowledge areas; stakeholders are covered by \"Strategy Analysis\"","6 knowledge areas; stakeholders are covered by \"Elicitation and Collaboration\"","4 knowledge areas; stakeholders are covered by \"Requirements Life Cycle Management\"","7 knowledge areas; stakeholders are covered by \"Solution Evaluation\""],
 ans:1,
 exp:"BABOK v3 describes 6 knowledge areas: 1) Business Analysis Planning and Monitoring, 2) Elicitation and Collaboration, 3) Requirements Life Cycle Management, 4) Strategy Analysis, 5) Requirements Analysis and Design Definition, 6) Solution Evaluation. Working with stakeholders during requirements gathering is area 2, \"Elicitation and Collaboration\"."});

Q.push({sec:"practice",lab:"Case: refactoring requirements",type:"case",
 ctx:"In an HR process automation project the analyst received the requirement: \"An employee must be able to work with the system.\" When asked to clarify, the HR manager added: \"Well, log in and do stuff there.\"",
 q:"Which technique will the BA apply to uncover specific requirements?",
 opts:["Record it as is; it is precise enough","Apply decomposition: break \"work with the system\" into specific User Stories through interviews and observation of HR at work","Hand it to the developers and let them figure it out","Draw a prototype and show it to HR"],
 ans:1,
 exp:"\"Work with the system\" is a requirements anti-pattern. Decomposition through interviews: \"What exactly do employees do? How often? What data do they need?\" plus observation of real HR work. Result: a set of specific US, such as \"As an employee, I want to submit a leave request online so that I do not have to visit HR in person.\""});

Q.push({sec:"practice",lab:"Practice — Requirements verification",type:"choose",
 ctx:"The BA has written 30 functional requirements. Before handing them to the team, their quality must be confirmed.",
 q:"What is checked during requirements VERIFICATION?",
 opts:["Whether the requirements solve the customer's real business problem","Correctness, completeness, consistency, traceability and measurability of the requirements","The technology stack for implementation","The project budget and timeline"],
 ans:1,
 exp:"Verification checks the QUALITY OF WRITING of the requirements: 1) Correctness: the requirement is written properly. 2) Completeness: nothing is missed. 3) Consistency: requirements do not conflict with each other. 4) Traceability: every requirement is linked to a business goal. 5) Measurability: fulfillment can be checked. This is the BA's internal check, not a check with the customer (that is validation)."});

Q.push({sec:"practice",lab:"Practice — Final",type:"case",
 ctx:"Final case: a Fintech startup hires a BA. Day 1. CEO: \"Build everything for us, fast.\" The team is waiting for tasks. No documentation, no regulations.",
 q:"Where will a competent BA start in the first week?",
 opts:["Start writing User Stories from memory right away","Run Discovery: interview the CEO and key stakeholders (business goals), analyze available materials, understand the domain context; only then produce artifacts","Draw BPMN diagrams of all processes","Study competitors and copy their product"],
 ans:1,
 exp:"The right BA start: a Discovery phase. 1) Interview the CEO/COO: business goals, strategy, key success metrics. 2) Interview users / future customers: pain points, needs. 3) Analyze available materials (even if there are few). 4) Understand the domain (Fintech: regulation, KYC, etc.). Week 1 result: a clear understanding of WHY and WHAT. Only then HOW."});

// SQL questions
Q.push({sec:"practice",lab:"SQL — basic queries",type:"case",
 ctx:"Table orders: id, customer_id, status, total_amount, created_at\nTable customers: id, name, email, city",
 q:"Select all orders with status 'completed' and an amount over $5000, sorted by date (newest first). Which query is correct?",
 opts:[
  "SELECT * FROM orders WHERE status = 'completed' OR total_amount > 5000 ORDER BY created_at DESC",
  "SELECT * FROM orders WHERE status = 'completed' AND total_amount > 5000 ORDER BY created_at DESC",
  "SELECT * FROM orders WHERE status = 'completed' AND total_amount > 5000 ORDER BY created_at ASC",
  "SELECT * FROM orders HAVING status = 'completed' AND total_amount > 5000 ORDER BY created_at DESC"
 ],
 ans:1,
 exp:"AND requires BOTH conditions to hold at the same time, which is exactly what we need. OR would return orders where AT LEAST one condition holds. DESC = from largest to smallest (newest dates first). ASC = from smallest (oldest dates first). HAVING is used only AFTER GROUP BY to filter groups, not rows, so it is wrong here."});

Q.push({sec:"practice",lab:"SQL — JOIN",type:"case",
 ctx:"Table orders: id, customer_id, status, total_amount\nTable customers: id, name, email",
 q:"You need a list of ALL customers and the number of their orders (including those with no orders, shown as 0). Which query is correct?",
 opts:[
  "SELECT c.name, COUNT(o.id) AS orders FROM orders o INNER JOIN customers c ON o.customer_id = c.id GROUP BY c.name",
  "SELECT c.name, COUNT(o.id) AS orders FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name",
  "SELECT c.name, COUNT(*) AS orders FROM customers c RIGHT JOIN orders o ON c.id = o.customer_id GROUP BY c.name",
  "SELECT c.name, COUNT(o.id) AS orders FROM customers c, orders o WHERE c.id = o.customer_id GROUP BY c.name"
 ],
 ans:1,
 exp:"LEFT JOIN returns ALL customers from the left table (customers), even if they have no matches in orders (then o.id = NULL). COUNT(o.id) counts non-null id values, so customers without orders get 0, not 1 (COUNT(*) would give 1 because of the row itself). INNER JOIN would drop customers without orders. GROUP BY c.id, c.name: it is correct to include the primary key."});

Q.push({sec:"practice",lab:"SQL — GROUP BY & HAVING",type:"case",
 ctx:"Table orders: id, customer_id, status, total_amount, created_at\n\nTask: find customers who placed MORE THAN 3 orders and show their total revenue, but only if it exceeds $10,000.",
 q:"Which query solves the task?",
 opts:[
  "SELECT customer_id, COUNT(*) as cnt, SUM(total_amount) as total FROM orders WHERE COUNT(*) > 3 AND SUM(total_amount) > 10000 GROUP BY customer_id",
  "SELECT customer_id, COUNT(*) as cnt, SUM(total_amount) as total FROM orders GROUP BY customer_id HAVING COUNT(*) > 3 AND SUM(total_amount) > 10000",
  "SELECT customer_id, COUNT(*) as cnt, SUM(total_amount) as total FROM orders GROUP BY customer_id WHERE COUNT(*) > 3 HAVING SUM(total_amount) > 10000",
  "SELECT customer_id, COUNT(*) as cnt, SUM(total_amount) as total FROM orders HAVING COUNT(*) > 3 AND SUM(total_amount) > 10000"
 ],
 ans:1,
 exp:"HAVING is a filter AFTER grouping, specifically for aggregate functions such as COUNT, SUM, AVG, etc. WHERE cannot be used with aggregate functions; that is a syntax error. The order: FROM → WHERE (if there is a row filter) → GROUP BY → HAVING → SELECT → ORDER BY. In option C, WHERE comes AFTER GROUP BY, which is invalid syntax; WHERE always comes before GROUP BY."});

Q.push({sec:"practice",lab:"SQL — BA practice",type:"choose",
 ctx:"A BA works with the development team. The database has a table users (id, email, status, created_at) and a table payments (id, user_id, amount, created_at, status). You need to check: 'How many active users made at least one payment over $1000 in the last 30 days?'",
 q:"Which approach to writing the query is correct?",
 opts:[
  "SELECT COUNT(*) FROM users WHERE status = 'active'",
  "SELECT COUNT(DISTINCT p.user_id) FROM payments p JOIN users u ON p.user_id = u.id WHERE u.status = 'active' AND p.amount > 1000 AND p.created_at >= CURRENT_DATE - INTERVAL '30 days' AND p.status = 'completed'",
  "SELECT COUNT(*) FROM users u, payments p WHERE u.status = 'active' AND p.amount > 1000",
  "SELECT user_id FROM payments WHERE amount > 1000 GROUP BY user_id HAVING COUNT(*) >= 1"
 ],
 ans:1,
 exp:"The correct query: 1) JOIN the two tables on user_id. 2) WHERE filters active users (u.status = 'active'), the amount (p.amount > 1000), the period (p.created_at >= the date 30 days ago) and the payment status. 3) COUNT(DISTINCT p.user_id) counts unique users, excluding duplicates (if one user has several payments). Option A counts all active users regardless of payments. Option C is a cross join without a proper join condition."});

Q.push({sec:"practice",lab:"SQL — INSERT",type:"case",
 ctx:"Table customers: id (auto), name, email, city, created_at\nYou need to add a new customer: Maria Lopez, maria@example.com, Austin.",
 q:"Which query correctly adds the new customer?",
 opts:[
  "INSERT customers (name, email, city) VALUES ('Maria Lopez', 'maria@example.com', 'Austin')",
  "INSERT INTO customers (name, email, city) VALUES ('Maria Lopez', 'maria@example.com', 'Austin')",
  "INSERT INTO customers VALUES ('Maria Lopez', 'maria@example.com', 'Austin')",
  "ADD INTO customers (name, email, city) VALUES ('Maria Lopez', 'maria@example.com', 'Austin')"
 ],
 ans:1,
 exp:"The correct syntax: INSERT INTO table (columns) VALUES (values). The INTO keyword is mandatory in standard SQL. Option C is dangerous: VALUES without a column list requires ALL columns in the right order, including id and created_at, and breaks if there is an auto-increment or DEFAULT. Always list the columns explicitly; it protects you from schema changes."});

Q.push({sec:"practice",lab:"SQL — UPDATE",type:"case",
 ctx:"Table orders: id, customer_id, status, total_amount\nTask: all orders of the customer with id=15 that are in status 'new' must be moved to status 'confirmed'.\nThe BA needs to check the query before handing it to the developer.",
 q:"Which query is correct AND safe?",
 opts:[
  "UPDATE orders SET status = 'confirmed'",
  "UPDATE orders SET status = 'confirmed' WHERE customer_id = 15",
  "UPDATE orders SET status = 'confirmed' WHERE customer_id = 15 AND status = 'new'",
  "UPDATE orders SET status = 'confirmed' WHERE id = 15"
 ],
 ans:2,
 exp:"Option C is correct and safe: two conditions in WHERE guarantee we change only the needed rows (the right customer AND only status 'new'). Option A is a catastrophe: without WHERE it updates ALL orders of all customers. Option B is almost right, but it would also update the 'cancelled' and 'completed' orders of customer 15, which is undesirable. Option D changes the order with id=15, not the orders of customer 15: a mix-up between order id and customer id."});

Q.push({sec:"practice",lab:"SQL — DELETE & transactions",type:"case",
 ctx:"You need to delete all cancelled orders (status='cancelled') older than 6 months.\nThe orders table has ~50,000 rows. The operation is irreversible.",
 q:"Which approach is right for a BA when writing the requirement for the developer?",
 opts:[
  "DELETE FROM orders WHERE status = 'cancelled' is enough, there is a WHERE",
  "First: SELECT COUNT(*) FROM orders WHERE status='cancelled' AND created_at < NOW()-INTERVAL '6 months' to confirm the row count. Then DELETE inside a transaction: BEGIN; DELETE...; ROLLBACK to check; COMMIT if correct",
  "TRUNCATE orders is faster than DELETE",
  "DROP TABLE orders and recreate the table without the old data"
 ],
 ans:1,
 exp:"The safe deletion pattern: 1) SELECT COUNT(*) with the same WHERE to check how many rows will be deleted. 2) BEGIN to start a transaction. 3) DELETE with the full WHERE (status AND date). 4) ROLLBACK to undo and confirm the query behaved correctly by the number of affected rows. 5) COMMIT to apply. TRUNCATE deletes ALL rows with no WHERE. DROP deletes the table itself; both are unsuitable for partial deletion."});

Q.push({sec:"practice",lab:"Use Case — Alternative vs Exception Flow",type:"case",
 ctx:"The BA received from a stakeholder the Use Case \"Log in to the system\" with two flows: (1) \"The user enters a wrong password, the system shows an error\" labeled Alternative Flow A1; (2) \"The user logs in via Google SSO\" labeled Exception Flow E1.",
 q:"The stakeholder mixed up the flow names. How should they be classified correctly?",
 opts:[
  "The names are correct; these are just two different ways of calling the same thing",
  "They are swapped: logging in via Google SSO is an Alternative Flow (the user chose a different PATH to SUCCESS), while a wrong password is an Exception Flow (an ERROR, the Use Case goal is not achieved)",
  "Both flows should be called Exception Flow, since both interrupt the Main Flow",
  "Both flows should be called Alternative Flow, since both are variants of system behavior"
 ],
 ans:1,
 exp:"The main criterion: in an Alternative Flow the user DELIBERATELY chooses a different path and the Use Case GOAL is still achieved (login via SSO = the user still logged in successfully). In an Exception Flow an ERROR occurs and the goal is NOT achieved in this attempt (wrong password = the user did NOT log in, a retry is needed). This mix-up is one of the most common mistakes of junior BAs, and it even shows up in templates generated by AI tools."});

Q.push({sec:"practice",lab:"Use Case — MFA: where does it go?",type:"choose",
 ctx:"The team is discussing where to put the MFA step (two-factor authentication, mandatory for ALL users without exception) in the Use Case \"Log in to the system\".",
 q:"Where should mandatory MFA be placed?",
 opts:[
  "In an Alternative Flow, because it is an alternative way to log in",
  "In an Exception Flow, because MFA interrupts the main process",
  "In the Main Flow as a mandatory step (for example, implemented via an include relationship with a separate Use Case \"Confirm MFA\"), since MFA is not the user's choice; it is mandatory for everyone",
  "MFA does not belong to any flow and is not documented in the Use Case"
 ],
 ans:2,
 exp:"The criterion: an Alternative Flow implies a user CHOICE. If MFA is mandatory for EVERYONE, it is not an alternative but part of the Main Flow (either a separate step in the main scenario or via a UML include relationship with a separate Use Case). An Alternative Flow for MFA would be correct ONLY if the user voluntarily chooses the METHOD of receiving the code (SMS vs authenticator app); then the method choice is the alternative, while MFA itself as a step remains mandatory."});

Q.push({sec:"practice",lab:"Use Case — detailing the Exception Flow",type:"case",
 ctx:"In the Use Case \"Log in to the system\" the Exception Flow is described as: \"If the user enters a wrong password several times, the account is locked.\" The BA must assess the completeness of this description before handing it to the developer.",
 q:"What is missing in this Exception Flow, and why is it critical for development?",
 opts:[
  "The description is complete; the developer will decide the implementation details",
  "Exact numbers are missing: how many attempts exactly (3? 5? 10?), over what time period (per session? per 15 minutes? per day?), how long the lock lasts, and how to unlock the account",
  "The only thing missing is which language the error message should be shown in",
  "Information about the design of the unlock button is missing"
 ],
 ans:1,
 exp:"Vague wording (\"several times\", \"is locked\") is a typical shortcoming that an interviewer will flag as a gap in the BA's work. An Exception Flow must contain MEASURABLE parameters: number of attempts (for example, 5), time window (within 15 minutes), lock duration (30 minutes) and the unlock mechanism (email with a link, timeout, or contacting support). Without these numbers the developer will either invent them (risk of mismatch with the business requirement) or come back with clarifying questions, losing time."});


Q.push({sec:"practice",lab:"WSJF — prioritization",type:"concept",
 q:"What is WSJF and what is its formula?",
 opts:[
  "WSJF = Business Value × Urgency. A method for estimating job size in SAFe",
  "WSJF = Cost of Delay (CoD) ÷ Job Size. A SAFe method: the most valuable and quickest-to-complete work goes first",
  "WSJF = (Reach × Impact × Confidence) ÷ Effort. An alternative name for RICE",
  "WSJF = Must / Should / Could / Won't. An extended version of MoSCoW for SAFe"
 ],
 ans:1,
 exp:"WSJF (Weighted Shortest Job First) = CoD ÷ Job Size. CoD (Cost of Delay) = Business Value + Time Criticality + Risk Reduction / Opportunity Enablement. Job Size is the size of the job on the Fibonacci scale. The higher the WSJF, the higher the priority. A method from SAFe, based on Donald Reinertsen's concept."});

Q.push({sec:"practice",lab:"WSJF — Cost of Delay",type:"concept",
 q:"What does Cost of Delay mean in the context of WSJF?",
 opts:[
  "The development cost of the job in person-hours",
  "The value the business loses for every period the job is postponed: the opportunity cost of the delay",
  "Technical debt accumulated by postponing refactoring",
  "The budget allocated to the job that burns away when it is delayed"
 ],
 ans:1,
 exp:"Cost of Delay is the value lost per unit of delay time. If a payment gateway integration brings $1 million/month, every month of delay costs 1 million. CoD consists of three components: User-Business Value + Time Criticality + Risk Reduction / Opportunity Enablement. They are estimated relative to each other on the Fibonacci scale."});

Q.push({sec:"practice",lab:"WSJF — calculation",type:"case",
 ctx:"A fintech startup team scored 3 jobs with WSJF (Fibonacci scale: 1, 2, 3, 5, 8, 13):\n\nJob A — Instant payments integration: Business Value=8, Time Criticality=13, Risk Reduction=5, Job Size=5\nJob B — Analytics dashboard: Business Value=13, Time Criticality=3, Risk Reduction=2, Job Size=8\nJob C — UI rebranding: Business Value=5, Time Criticality=2, Risk Reduction=1, Job Size=13",
 q:"Calculate the WSJF for each job and determine the correct priority order.",
 opts:[
  "B → A → C (B has the highest business value, 13, so take it first)",
  "A → B → C (WSJF: A=5.2, B=2.25, C=0.62; the highest value wins)",
  "C → A → B (the smallest job has the highest priority under WSJF)",
  "B → C → A (the most valuable first, then the smallest, then the rest)"
 ],
 ans:1,
 exp:"Calculation: A: CoD = 8+13+5 = 26, WSJF = 26÷5 = 5.2 🥇. B: CoD = 13+3+2 = 18, WSJF = 18÷8 = 2.25 🥈. C: CoD = 5+2+1 = 8, WSJF = 8÷13 = 0.62 🥉. Key insight: the Dashboard (B) has the HIGHEST business value (13) but loses because of low time criticality and large size. The instant payments integration wins thanks to high time criticality: a market window, competitors have already launched. WSJF shows that maximum business value ≠ maximum priority."});

Q.push({sec:"practice",lab:"WSJF — application",type:"choose",
 ctx:"A Product Owner is choosing between jobs:\nJob X: WSJF = 8.5 (CoD=17, Job Size=2)\nJob Y: WSJF = 4.0 (CoD=20, Job Size=5)\nJob Z: WSJF = 2.0 (CoD=10, Job Size=5)\nHowever, job Z is a technical dependency for job X: without Z, job X is impossible.",
 q:"What execution order does WSJF suggest, and what needs to be adjusted given the real situation?",
 opts:[
  "Just do X → Y → Z; WSJF gave the answer, dependencies do not matter",
  "WSJF suggests X → Y → Z, but given the dependency the real order is Z → X → Y (unblock X first)",
  "Always start with the smallest job: Z → X → Y",
  "Abandon WSJF; it does not work when dependencies exist"
 ],
 ans:1,
 exp:"WSJF suggests X → Y → Z, but that is impossible: X depends on Z. The right answer is to adjust for dependencies: Z → X → Y. This is one of the key limitations of WSJF: it does not account for the dependency graph between jobs. The BA and PO must always check dependencies before the final decision. WSJF is a ranking tool, not an absolute rule."});


var TABS = [
  {id:'req',label:'📦 Requirements (Wiegers)'},
  {id:'elicit',label:'🔍 Techniques'},
  {id:'artifacts',label:'📄 Artifacts'},
  {id:'agile',label:'⚡ Agile & Prioritization'},
  {id:'methodologies',label:'⚙️ Methodologies'},
  {id:'lifecycle',label:'🔄 Life Cycles'},
  {id:'sql',label:'🗄️ SQL'},
  {id:'ba_role',label:'🎯 BA Role'},
  {id:'discovery_docs',label:'🔭 Discovery & Documentation'},
  {id:'techniques',label:'🧠 Analytical Techniques'},
  {id:'tech_arch',label:'🖥️ Technical Concepts'}
];

var THEORY_UML = {
  overview: {
    title: "Diagram Types Overview",
    content: '<div class="t-section"><h3>UML — 14 Standard Diagram Types</h3><div class="diagram-types">'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="24" r="7" fill="none" stroke="#94a3b8" stroke-width="1.3"/><line x1="22" y1="31" x2="22" y2="46" stroke="#94a3b8" stroke-width="1.3"/><line x1="12" y1="37" x2="32" y2="37" stroke="#94a3b8" stroke-width="1.3"/><line x1="22" y1="46" x2="13" y2="58" stroke="#94a3b8" stroke-width="1.3"/><line x1="22" y1="46" x2="31" y2="58" stroke="#94a3b8" stroke-width="1.3"/><ellipse cx="95" cy="35" rx="38" ry="18" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="95" y="39" text-anchor="middle" fill="#93c5fd" font-size="9">Login</text><line x1="34" y1="35" x2="57" y2="35" stroke="#64748b" stroke-width="1.3"/></svg></div>'
        +'<h4>📋 Use Case<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Use Case</span></h4><p>Actors + Use Cases. Shows WHAT the system does for its users. Top-level requirements.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="8" width="80" height="54" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/><text x="70" y="21" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Order</text><line x1="30" y1="26" x2="110" y2="26" stroke="#3b82f6" stroke-width="1"/><text x="70" y="38" text-anchor="middle" fill="#cbd5e1" font-size="7">- id: Long</text><line x1="30" y1="45" x2="110" y2="45" stroke="#3b82f6" stroke-width="1"/><text x="70" y="56" text-anchor="middle" fill="#a5b4fc" font-size="7">+ submit()</text></svg></div>'
        +'<h4>📐 Class<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Classes</span></h4><p>Classes, attributes, methods, relationships (inheritance, association, aggregation, composition). System structure.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="45" height="16" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><text x="32" y="19" text-anchor="middle" fill="#93c5fd" font-size="8">A</text><rect x="90" y="8" width="45" height="16" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><text x="112" y="19" text-anchor="middle" fill="#93c5fd" font-size="8">B</text><line x1="32" y1="24" x2="32" y2="60" stroke="#2d3748" stroke-width="1" stroke-dasharray="3,2"/><line x1="112" y1="24" x2="112" y2="60" stroke="#2d3748" stroke-width="1" stroke-dasharray="3,2"/><line x1="36" y1="32" x2="108" y2="32" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#dtA)"/><defs><marker id="dtA" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#94a3b8"/></marker></defs><line x1="112" y1="45" x2="36" y2="45" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2"/></svg></div>'
        +'<h4>⏱️ Sequence<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Sequence</span></h4><p>Objects + messages over time. How components interact in a specific scenario. Lifelines.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="10" r="6" fill="#3b82f6"/><rect x="40" y="24" width="60" height="18" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><text x="70" y="36" text-anchor="middle" fill="#93c5fd" font-size="7">Check Stock</text><polygon points="70,50 80,58 70,66 60,58" fill="none" stroke="#f59e0b" stroke-width="1.2"/><line x1="70" y1="16" x2="70" y2="23" stroke="#94a3b8" stroke-width="1.2"/><line x1="70" y1="42" x2="70" y2="49" stroke="#94a3b8" stroke-width="1.2"/></svg></div>'
        +'<h4>🔄 Activity<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Activity</span></h4><p>Control/data flow. The UML equivalent of a flowchart. Decision, Fork/Join, Swimlanes.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="24" width="45" height="22" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/><text x="30" y="38" text-anchor="middle" fill="#93c5fd" font-size="8">New</text><rect x="88" y="24" width="45" height="22" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.3"/><text x="110" y="38" text-anchor="middle" fill="#6ee7b7" font-size="8">Done</text><line x1="53" y1="35" x2="86" y2="35" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#dtB)"/><defs><marker id="dtB" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#94a3b8"/></marker></defs><text x="70" y="30" text-anchor="middle" fill="#64748b" font-size="6">submit()</text></svg></div>'
        +'<h4>🔃 State Machine<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">State Machine</span></h4><p>Object states + event-driven transitions. The lifecycle of an entity.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="14" width="70" height="42" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/><rect x="27" y="22" width="12" height="7" fill="#0d1117" stroke="#3b82f6" stroke-width="1"/><rect x="27" y="36" width="12" height="7" fill="#0d1117" stroke="#3b82f6" stroke-width="1"/><text x="70" y="39" text-anchor="middle" fill="#93c5fd" font-size="8">Service</text><circle cx="112" cy="35" r="4" fill="none" stroke="#94a3b8" stroke-width="1.3"/><line x1="105" y1="35" x2="108" y2="35" stroke="#94a3b8" stroke-width="1.3"/></svg></div>'
        +'<h4>🧩 Component<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Components</span></h4><p>System components + interfaces (lollipop/socket). Architecture level.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><polygon points="15,20 55,10 55,50 15,60" fill="#1a1f2e" stroke="#8b5cf6" stroke-width="1.2"/><polygon points="15,20 55,10 95,20 55,30" fill="#241a3a" stroke="#8b5cf6" stroke-width="1.2"/><polygon points="55,10 95,20 95,60 55,50" fill="#150f22" stroke="#8b5cf6" stroke-width="1.2"/><text x="55" y="42" text-anchor="middle" fill="#c4b5fd" font-size="7">Node</text><line x1="95" y1="35" x2="120" y2="35" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2"/></svg></div>'
        +'<h4>🖥️ Deployment<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Deployment</span></h4><p>Physical deployment: nodes, artifacts, communication paths. DevOps level.</p></div>'
      +'<div class="dt-card uml">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="26" width="35" height="18" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><text x="27" y="38" text-anchor="middle" fill="#93c5fd" font-size="7">:A</text><rect x="95" y="26" width="35" height="18" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.2"/><text x="112" y="38" text-anchor="middle" fill="#93c5fd" font-size="7">:B</text><line x1="45" y1="35" x2="93" y2="35" stroke="#94a3b8" stroke-width="1.3"/><text x="70" y="28" text-anchor="middle" fill="#64748b" font-size="7">1: call()</text></svg></div>'
        +'<h4>🤝 Communication<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Communication</span></h4><p>Object links + numbered messages. An alternative to Sequence.</p></div>'
      +'</div></div>'
      +'<div class="t-section"><h3>BPMN 2.0 — For Business Processes</h3><div class="diagram-types">'
      +'<div class="dt-card bpmn">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="120" height="54" rx="3" fill="#0d1117" stroke="#8b5cf6" stroke-width="1.3"/><line x1="10" y1="35" x2="130" y2="35" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="3,2"/><rect x="10" y="8" width="16" height="54" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.2"/><text x="18" y="38" text-anchor="middle" fill="#c4b5fd" font-size="6" transform="rotate(-90,18,38)">Pool</text><circle cx="45" cy="20" r="6" fill="none" stroke="#10b981" stroke-width="1.3"/><circle cx="45" cy="48" r="6" fill="none" stroke="#ef4444" stroke-width="2"/></svg></div>'
        +'<h4>🏊 Pool & Lane<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Pool and Lane</span></h4><p>Pool = participant (company/system). Lane = role/department inside it. Separation of responsibility.</p></div>'
      +'<div class="dt-card bpmn">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><polygon points="35,15 55,35 35,55 15,35" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/><line x1="24" y1="24" x2="46" y2="46" stroke="#f59e0b" stroke-width="1.3"/><line x1="46" y1="24" x2="24" y2="46" stroke="#f59e0b" stroke-width="1.3"/><polygon points="105,15 125,35 105,55 85,35" fill="#1a1f2e" stroke="#3b82f6" stroke-width="1.5"/><line x1="97" y1="35" x2="113" y2="35" stroke="#3b82f6" stroke-width="1.3"/><line x1="105" y1="27" x2="105" y2="43" stroke="#3b82f6" stroke-width="1.3"/></svg></div>'
        +'<h4>⬡ Gateways<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Gateways</span></h4><p>XOR (X) — one path. AND (+) — all paths. OR (○) — one or more. Event-Based (⬡).</p></div>'
      +'<div class="dt-card bpmn">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="35" r="13" fill="none" stroke="#10b981" stroke-width="1.5"/><circle cx="70" cy="35" r="13" fill="none" stroke="#f59e0b" stroke-width="1.2"/><circle cx="70" cy="35" r="9" fill="none" stroke="#f59e0b" stroke-width="1.2"/><circle cx="115" cy="35" r="13" fill="none" stroke="#ef4444" stroke-width="3"/></svg></div>'
        +'<h4>⚪ Events<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Events</span></h4><p>Start / Intermediate / End. Types: Message, Timer, Error, Signal, Escalation, Conditional.</p></div>'
      +'<div class="dt-card bpmn">'
        +'<div class="dt-svg"><svg viewBox="0 0 140 70" width="130" height="65" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="20" width="50" height="30" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/><line x1="24" y1="30" x2="56" y2="30" stroke="#93c5fd" stroke-width="1.2"/><line x1="24" y1="38" x2="46" y2="38" stroke="#93c5fd" stroke-width="1.2"/><rect x="75" y="20" width="50" height="30" rx="6" fill="none" stroke="#8b5cf6" stroke-width="1.3" stroke-dasharray="4,2"/><text x="100" y="39" text-anchor="middle" fill="#c4b5fd" font-size="7">Service</text></svg></div>'
        +'<h4>📦 Tasks<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Tasks</span></h4><p>Task types: User, Service, Send, Receive, Script, Business Rule, Manual (plus Sub-Process and Call Activity as other Activity kinds).</p></div>'
      +'</div></div>'
  },
  uml_elements: {
    title: "UML — Key Elements",
    content: '<div class="t-section"><h3>Use Case Diagram</h3>'
      +'<div class="svgdemo"><svg viewBox="0 0 500 160" width="480" height="155" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="10" y="10" width="480" height="140" rx="6" fill="none" stroke="#2d3748" stroke-width="1" stroke-dasharray="6,3"/>'
      +'<text x="480" y="28" text-anchor="end" fill="#64748b" font-size="11">«system»</text>'
      +'<ellipse cx="200" cy="60" rx="55" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="200" y="65" text-anchor="middle" fill="#93c5fd" font-size="11">Login</text>'
      +'<ellipse cx="200" cy="120" rx="55" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="200" y="125" text-anchor="middle" fill="#93c5fd" font-size="11">View Dashboard</text>'
      +'<ellipse cx="340" cy="60" rx="55" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="340" y="65" text-anchor="middle" fill="#93c5fd" font-size="11">2FA Verify</text>'
      +'<line x1="255" y1="60" x2="283" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>'
      +'<text x="265" y="55" fill="#f59e0b" font-size="9">«include»</text>'
      +'<polygon points="283,60 277,56 277,64" fill="#94a3b8"/>'
      +'<circle cx="60" cy="72" r="10" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>'
      +'<line x1="60" y1="82" x2="60" y2="102" stroke="#e2e8f0" stroke-width="1.5"/>'
      +'<line x1="46" y1="92" x2="74" y2="92" stroke="#e2e8f0" stroke-width="1.5"/>'
      +'<line x1="60" y1="102" x2="46" y2="118" stroke="#e2e8f0" stroke-width="1.5"/>'
      +'<line x1="60" y1="102" x2="74" y2="118" stroke="#e2e8f0" stroke-width="1.5"/>'
      +'<text x="60" y="132" text-anchor="middle" fill="#94a3b8" font-size="10">User</text>'
      +'<line x1="70" y1="68" x2="143" y2="60" stroke="#64748b" stroke-width="1.5"/>'
      +'<line x1="70" y1="78" x2="143" y2="118" stroke="#64748b" stroke-width="1.5"/>'
      +'<text x="410" y="80" fill="#64748b" font-size="9">Actor = stick figure</text>'
      +'<text x="410" y="95" fill="#64748b" font-size="9">UC = ellipse</text>'
      +'<text x="410" y="110" fill="#64748b" font-size="9">«include» = mandatory</text>'
      +'<text x="410" y="125" fill="#64748b" font-size="9">«extend» = conditional</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:16px">Use Case — «include», «extend», Generalization (in detail)</h3>'
      +'<div class="info-box">Three ways to relate use cases to each other. They are often confused in interviews — the key difference is whether the additional Use Case is ALWAYS executed and WHO initiates the relationship.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 130" width="440" height="125" xmlns="http://www.w3.org/2000/svg">'
      +'<ellipse cx="80" cy="60" rx="60" ry="24" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="80" y="65" text-anchor="middle" fill="#93c5fd" font-size="10">Place Order</text>'
      +'<ellipse cx="300" cy="60" rx="60" ry="24" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="300" y="65" text-anchor="middle" fill="#93c5fd" font-size="10">Validate Payment</text>'
      +'<defs><marker id="uinc" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#10b981" stroke-width="1.4"/></marker></defs>'
      +'<line x1="140" y1="60" x2="238" y2="60" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#uinc)"/>'
      +'<text x="190" y="52" text-anchor="middle" fill="#6ee7b7" font-size="9">«include»</text>'
      +'<text x="80" y="100" text-anchor="middle" fill="#64748b" font-size="8">Base UC</text>'
      +'<text x="300" y="100" text-anchor="middle" fill="#64748b" font-size="8">Included UC</text>'
      +'<text x="188" y="112" text-anchor="middle" fill="#64748b" font-size="8">the arrow goes FROM the base TO the included UC</text>'
      +'</svg></div>'
      +'<div class="info-box green"><b>«include» — inclusion (mandatory, always).</b> The base Use Case (Place Order) CANNOT complete without the included one (Validate Payment) — it is executed ALWAYS, every time, at a fixed point in the scenario. The arrow (dashed line, open arrowhead) goes from the base to the included UC — «Place Order» includes «Validate Payment». Used to factor out common, repeated logic (for example, «Login» is included in both «Place Order» and «View Profile») so its description is not duplicated.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 130" width="440" height="125" xmlns="http://www.w3.org/2000/svg">'
      +'<ellipse cx="80" cy="60" rx="60" ry="24" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="80" y="65" text-anchor="middle" fill="#93c5fd" font-size="10">Place Order</text>'
      +'<ellipse cx="300" cy="60" rx="60" ry="24" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>'
      +'<text x="300" y="65" text-anchor="middle" fill="#fcd34d" font-size="10">Apply Promo Code</text>'
      +'<defs><marker id="uext" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#f59e0b" stroke-width="1.4"/></marker></defs>'
      +'<line x1="238" y1="60" x2="140" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#uext)"/>'
      +'<text x="190" y="52" text-anchor="middle" fill="#fcd34d" font-size="9">«extend»</text>'
      +'<text x="80" y="100" text-anchor="middle" fill="#64748b" font-size="8">Base UC</text>'
      +'<text x="300" y="100" text-anchor="middle" fill="#64748b" font-size="8">Extending UC</text>'
      +'<text x="188" y="112" text-anchor="middle" fill="#64748b" font-size="8">the arrow goes FROM the extending UC TO the base — the OPPOSITE direction to include!</text>'
      +'</svg></div>'
      +'<div class="info-box yellow"><b>«extend» — extension (conditional, optional).</b> The extending Use Case (Apply Promo Code) is executed only UNDER A CONDITION — not always, but only at a specific extension point and only if the condition holds (for example, «if the customer has a promo code»). The arrow direction is FROM the extending Use Case TO the base one (the reverse of «include»!). The base Use Case «knows» nothing about the extending one and can exist without it — this is the key difference from include.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 130" width="440" height="125" xmlns="http://www.w3.org/2000/svg">'
      +'<ellipse cx="300" cy="30" rx="70" ry="22" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="300" y="35" text-anchor="middle" fill="#93c5fd" font-size="10">Make Payment</text>'
      +'<ellipse cx="160" cy="100" rx="65" ry="22" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="160" y="105" text-anchor="middle" fill="#93c5fd" font-size="10">Pay by Card</text>'
      +'<ellipse cx="440" cy="100" rx="65" ry="22" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="440" y="105" text-anchor="middle" fill="#93c5fd" font-size="10">Pay by Wallet</text>'
      +'<line x1="270" y1="48" x2="185" y2="82" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="270,48 258,50 262,60" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<line x1="330" y1="48" x2="415" y2="82" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="330,48 338,58 342,48" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<text x="300" y="122" text-anchor="middle" fill="#64748b" font-size="8">hollow triangular arrowhead ▷ — the «children» point to the «parent»</text>'
      +'</svg></div>'
      +'<div class="info-box"><b>Generalization — inheritance.</b> «Pay by Card» and «Pay by Wallet» are specific VARIANTS of the general Use Case «Make Payment»: they inherit its behavior and add/override their own steps. The arrow is a solid line with a hollow triangular arrowhead, pointing from the child to the parent (like Generalization in a Class Diagram). Unlike include/extend, there is no «extension point» here — just alternative implementations of the same behavior.</div>'

      +'<div class="tw"><table>'
      +'<tr><th>Criterion</th><th style="color:#6ee7b7">«include»</th><th style="color:#fcd34d">«extend»</th><th style="color:#94a3b8">Generalization</th></tr>'
      +'<tr><td><b>Mandatory?</b></td><td>Always executed</td><td>Optional, conditional</td><td>Not applicable — it is an alternative implementation</td></tr>'
      +'<tr><td><b>Arrow direction</b></td><td>From base → to included</td><td>From extending → to base</td><td>From child → to parent</td></tr>'
      +'<tr><td><b>Who «knows» about whom</b></td><td>The base explicitly references the included UC in its steps</td><td>The base knows nothing about the extending UC; the extending UC knows the extension point</td><td>The child knows the parent and overrides/extends its behavior</td></tr>'
      +'<tr><td><b>Line type</b></td><td>Dashed, open arrowhead</td><td>Dashed, open arrowhead</td><td>Solid line, triangular arrowhead ▷</td></tr>'
      +'<tr><td><b>Purpose</b></td><td>Remove duplication of common logic</td><td>Add optional/conditional behavior without changing the base UC</td><td>Show a family of similar variants of one behavior</td></tr>'
      +'<tr><td><b>Example</b></td><td>«Checkout» includes «Authenticate User»</td><td>«Checkout» extended by «Apply Gift Card» (if a gift card is present)</td><td>«Pay by Card» and «Pay by Wallet» — Generalization of «Make Payment»</td></tr>'
      +'</table></div>'

      +'<h3 style="margin-top:16px">Class Diagram — Relationship Types</h3>'
      +'<div class="svgdemo"><svg viewBox="0 0 560 130" width="540" height="125" xmlns="http://www.w3.org/2000/svg">'
      // Inheritance
      +'<rect x="10" y="20" width="80" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="50" y="39" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Animal</text>'
      +'<rect x="10" y="80" width="80" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="50" y="99" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Dog</text>'
      +'<line x1="50" y1="80" x2="50" y2="52" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="50,50 44,62 56,62" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<text x="50" y="120" text-anchor="middle" fill="#6ee7b7" font-size="9">Inheritance</text>'
      // Realization
      +'<rect x="120" y="20" width="80" height="30" rx="4" fill="#1a1f2e" stroke="#8b5cf6" stroke-width="1.5"/>'
      +'<text x="160" y="34" text-anchor="middle" fill="#c4b5fd" font-size="9">«interface»</text>'
      +'<text x="160" y="46" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="bold">IPayable</text>'
      +'<rect x="120" y="80" width="80" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="160" y="99" text-anchor="middle" fill="#93c5fd" font-size="11">Invoice</text>'
      +'<line x1="160" y1="80" x2="160" y2="52" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>'
      +'<polygon points="160,50 154,62 166,62" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>'
      +'<text x="160" y="120" text-anchor="middle" fill="#6ee7b7" font-size="9">Realization</text>'
      // Association
      +'<rect x="230" y="35" width="70" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="265" y="54" text-anchor="middle" fill="#93c5fd" font-size="11">User</text>'
      +'<rect x="320" y="35" width="70" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="355" y="54" text-anchor="middle" fill="#93c5fd" font-size="11">Order</text>'
      +'<line x1="300" y1="50" x2="318" y2="50" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aw)"/>'
      +'<defs><marker id="aw" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
      +'<text x="290" y="42" fill="#64748b" font-size="9">1</text>'
      +'<text x="322" y="42" fill="#64748b" font-size="9">0..*</text>'
      +'<text x="295" y="120" text-anchor="middle" fill="#6ee7b7" font-size="9">Association</text>'
      // Composition
      +'<rect x="420" y="20" width="70" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="455" y="39" text-anchor="middle" fill="#93c5fd" font-size="11">House</text>'
      +'<rect x="420" y="80" width="70" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="455" y="99" text-anchor="middle" fill="#93c5fd" font-size="11">Room</text>'
      +'<line x1="455" y1="80" x2="455" y2="52" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="455,52 449,64 455,76 461,64" fill="#94a3b8"/>'
      +'<text x="455" y="120" text-anchor="middle" fill="#6ee7b7" font-size="9">Composition ◆</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:16px">Generalization vs Realization — in detail</h3>'
      +'<div class="info-box">This is THE most common confusion in BA/SA interviews: both relationships use a triangular arrowhead, both conceptually go «from child to parent» — but they have a different line and a completely different meaning. The distinction comes down to one question: <b>is the parent a class (implementation) or an interface (contract)?</b></div>'

      +'<div class="svgdemo"><svg viewBox="0 0 500 165" width="480" height="160" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="30" y="15" width="110" height="34" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="85" y="36" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Vehicle</text>'
      +'<rect x="10" y="105" width="70" height="34" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="45" y="126" text-anchor="middle" fill="#93c5fd" font-size="10">Car</text>'
      +'<rect x="120" y="105" width="70" height="34" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="155" y="126" text-anchor="middle" fill="#93c5fd" font-size="10">Truck</text>'
      +'<line x1="45" y1="105" x2="75" y2="53" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="80,49 68,54 74,63" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<line x1="155" y1="105" x2="100" y2="53" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<polygon points="95,49 96,60 106,56" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<text x="85" y="158" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Generalization — SOLID line + hollow ▷</text>'
      +'<text x="260" y="30" fill="#64748b" font-size="9">Parent is a CLASS</text>'
      +'<text x="260" y="45" fill="#64748b" font-size="9">(Vehicle already has</text>'
      +'<text x="260" y="60" fill="#64748b" font-size="9">an implementation of fields/methods;</text>'
      +'<text x="260" y="75" fill="#64748b" font-size="9">Car/Truck inherit it</text>'
      +'<text x="260" y="90" fill="#64748b" font-size="9">and may override it)</text>'
      +'</svg></div>'
      +'<div class="info-box green"><b>Generalization (inheritance, extends).</b> The parent is a CONCRETE CLASS with a ready implementation (fields, methods). The child inherits that implementation in full and may override it. The line is SOLID, the arrowhead is a hollow (unfilled) triangle. In code this is <code>class Car extends Vehicle</code>. Examples: Dog extends Animal, Car extends Vehicle, SavingsAccount extends Account.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 500 165" width="480" height="160" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="30" y="15" width="130" height="34" rx="4" fill="#1a1f2e" stroke="#8b5cf6" stroke-width="1.5"/>'
      +'<text x="95" y="28" text-anchor="middle" fill="#c4b5fd" font-size="8">«interface»</text>'
      +'<text x="95" y="42" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="bold">Comparable</text>'
      +'<rect x="10" y="105" width="80" height="34" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="50" y="126" text-anchor="middle" fill="#93c5fd" font-size="10">Product</text>'
      +'<rect x="130" y="105" width="80" height="34" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="170" y="126" text-anchor="middle" fill="#93c5fd" font-size="10">Employee</text>'
      +'<line x1="50" y1="105" x2="80" y2="53" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>'
      +'<polygon points="85,49 73,54 79,63" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>'
      +'<line x1="170" y1="105" x2="110" y2="53" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>'
      +'<polygon points="105,49 106,60 116,56" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>'
      +'<text x="95" y="158" text-anchor="middle" fill="#c4b5fd" font-size="9" font-weight="bold">Realization — DASHED line + hollow ▷</text>'
      +'<text x="260" y="30" fill="#64748b" font-size="9">Parent is an INTERFACE</text>'
      +'<text x="260" y="45" fill="#64748b" font-size="9">(Comparable has no</text>'
      +'<text x="260" y="60" fill="#64748b" font-size="9">implementation — only</text>'
      +'<text x="260" y="75" fill="#64748b" font-size="9">the contract: the signature of</text>'
      +'<text x="260" y="90" fill="#64748b" font-size="9">compareTo(); the class writes the body)</text>'
      +'</svg></div>'
      +'<div class="info-box yellow"><b>Realization (implements).</b> The parent is an INTERFACE (or abstract contract) with no implementation of its own: it only PROMISES that a method will exist, without saying HOW. The class must write the body of every interface method itself. The line is DASHED, the arrowhead is the same hollow triangle as in Generalization. In code this is <code>class Product implements Comparable</code>. One class can implement SEVERAL interfaces at once (unlike single class inheritance).</div>'

      +'<div class="tw"><table>'
      +'<tr><th>Criterion</th><th style="color:#6ee7b7">Generalization</th><th style="color:#c4b5fd">Realization</th></tr>'
      +'<tr><td><b>Line type</b></td><td>Solid</td><td>Dashed</td></tr>'
      +'<tr><td><b>Arrowhead</b></td><td>Hollow (unfilled) triangle ▷</td><td>The same hollow triangle ▷ — the shape is IDENTICAL!</td></tr>'
      +'<tr><td><b>What the «parent» is</b></td><td>A concrete class with a ready implementation</td><td>An interface / abstract contract WITHOUT implementation</td></tr>'
      +'<tr><td><b>What is inherited</b></td><td>Fields, methods (with ready bodies) and their behavior</td><td>Only method signatures — «what must exist», not «how»</td></tr>'
      +'<tr><td><b>Multiplicity</b></td><td>Usually single inheritance (1 parent class)</td><td>Many interfaces can be implemented at once</td></tr>'
      +'<tr><td><b>Keyword in code</b></td><td><code>extends</code></td><td><code>implements</code></td></tr>'
      +'<tr><td><b>Example</b></td><td>Dog extends Animal, Car extends Vehicle</td><td>Product implements Comparable, Invoice implements IPayable</td></tr>'
      +'</table></div>'
      +'<div class="info-box"><b>Interview mnemonic:</b> «Same arrowhead (hollow triangle) — different line». Solid = generalization = class→class = extends. Dashed = realization = class→interface = implements. If you see «interface» or «abstract» in the stereotype of the parent, it is almost always Realization.</div>'

      +'<h3 style="margin-top:16px">Sequence Diagram — Elements</h3>'
      +'<div class="svgdemo"><svg viewBox="0 0 500 160" width="480" height="155" xmlns="http://www.w3.org/2000/svg">'
      +'<defs><marker id="as" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
      +'<marker id="ao" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
      +'<rect x="30" y="10" width="70" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="65" y="26" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Client</text>'
      +'<rect x="200" y="10" width="70" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="235" y="26" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">API</text>'
      +'<rect x="370" y="10" width="70" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="405" y="26" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">DB</text>'
      // lifelines
      +'<line x1="65" y1="34" x2="65" y2="155" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="235" y1="34" x2="235" y2="155" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="405" y1="34" x2="405" y2="155" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      // activation boxes
      +'<rect x="61" y="55" width="8" height="60" fill="#3b82f6" opacity="0.5"/>'
      +'<rect x="231" y="70" width="8" height="50" fill="#3b82f6" opacity="0.5"/>'
      +'<rect x="401" y="90" width="8" height="20" fill="#3b82f6" opacity="0.5"/>'
      // messages
      +'<line x1="69" y1="60" x2="231" y2="70" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#as)"/>'
      +'<text x="140" y="60" text-anchor="middle" fill="#e2e8f0" font-size="9">1: request()</text>'
      +'<line x1="239" y1="92" x2="401" y2="92" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#as)"/>'
      +'<text x="315" y="87" text-anchor="middle" fill="#e2e8f0" font-size="9">2: query()</text>'
      +'<line x1="401" y1="108" x2="239" y2="108" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ao)"/>'
      +'<text x="315" y="103" text-anchor="middle" fill="#64748b" font-size="9">3: result</text>'
      +'<line x1="231" y1="118" x2="69" y2="118" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ao)"/>'
      +'<text x="140" y="113" text-anchor="middle" fill="#64748b" font-size="9">4: response</text>'
      +'<text x="25" y="60" fill="#64748b" font-size="8">lifeline</text>'
      +'<text x="25" y="75" fill="#3b82f6" font-size="8">activation</text>'
      +'<text x="25" y="90" fill="#94a3b8" font-size="8">sync call ▶</text>'
      +'<text x="25" y="105" fill="#64748b" font-size="8">return - - ▷</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:16px">Synchronous vs Asynchronous Flow</h3>'
      +'<div class="info-box">On a Sequence Diagram the call type is shown by the shape of the arrowhead. This is not just drawing — it directly states whether the caller blocks while waiting for a response.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 500 165" width="480" height="160" xmlns="http://www.w3.org/2000/svg">'
      +'<defs><marker id="syA" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,7 3,0 6" fill="#3b82f6"/></marker></defs>'
      +'<rect x="20" y="10" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="55" y="25" text-anchor="middle" fill="#93c5fd" font-size="10">Client</text>'
      +'<rect x="220" y="10" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="255" y="25" text-anchor="middle" fill="#93c5fd" font-size="10">Service</text>'
      +'<line x1="55" y1="32" x2="55" y2="90" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="255" y1="32" x2="255" y2="90" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<rect x="51" y="45" width="8" height="35" fill="#3b82f6" opacity="0.5"/>'
      +'<rect x="251" y="52" width="8" height="18" fill="#3b82f6" opacity="0.5"/>'
      +'<line x1="59" y1="52" x2="251" y2="52" stroke="#3b82f6" stroke-width="2" marker-end="url(#syA)"/>'
      +'<text x="155" y="46" text-anchor="middle" fill="#93c5fd" font-size="9">getBalance() — sync</text>'
      +'<line x1="251" y1="72" x2="59" y2="72" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#syA)"/>'
      +'<text x="155" y="67" text-anchor="middle" fill="#64748b" font-size="9">return balance</text>'
      +'<text x="55" y="100" text-anchor="middle" fill="#64748b" font-size="8">Client WAITS (blocked)</text>'
      +'<text x="340" y="55" fill="#94a3b8" font-size="8">▶ solid line +</text>'
      +'<text x="340" y="67" fill="#94a3b8" font-size="8">filled triangle</text>'
      +'<text x="340" y="79" fill="#94a3b8" font-size="8">= synchronous call</text>'
      +'</svg></div>'
      +'<div class="info-box green"><b>Synchronous Call.</b> Shown as a solid line with a FILLED triangular arrowhead (▶). The caller (Client) pauses its execution and WAITS until the callee (Service) completes the operation and returns a result — a blocking call. It is like an ordinary method call in code: `var balance = service.getBalance();` — the next line does not run until the result comes back. The activation bar of the caller continues for the whole waiting time.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 500 165" width="480" height="160" xmlns="http://www.w3.org/2000/svg">'
      +'<defs><marker id="asA" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,7 3,0 6" fill="none" stroke="#10b981" stroke-width="1.4"/></marker></defs>'
      +'<rect x="20" y="10" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="55" y="25" text-anchor="middle" fill="#93c5fd" font-size="10">Order</text>'
      +'<rect x="220" y="10" width="90" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="265" y="25" text-anchor="middle" fill="#93c5fd" font-size="10">EmailQueue</text>'
      +'<line x1="55" y1="32" x2="55" y2="120" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="265" y1="32" x2="265" y2="120" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<rect x="51" y="45" width="8" height="65" fill="#3b82f6" opacity="0.5"/>'
      +'<line x1="59" y1="52" x2="261" y2="52" stroke="#10b981" stroke-width="1.7" marker-end="url(#asA)"/>'
      +'<text x="160" y="46" text-anchor="middle" fill="#6ee7b7" font-size="9">sendConfirmationEmail() — async</text>'
      +'<line x1="55" y1="68" x2="55" y2="68" stroke="#94a3b8"/>'
      +'<text x="55" y="82" text-anchor="middle" fill="#64748b" font-size="8">Order continues</text>'
      +'<text x="55" y="93" text-anchor="middle" fill="#64748b" font-size="8">its own work IMMEDIATELY,</text>'
      +'<text x="55" y="104" text-anchor="middle" fill="#64748b" font-size="8">without waiting for the email</text>'
      +'<text x="340" y="55" fill="#94a3b8" font-size="8">▷ open («V-shaped»)</text>'
      +'<text x="340" y="67" fill="#94a3b8" font-size="8">unfilled arrowhead</text>'
      +'<text x="340" y="79" fill="#94a3b8" font-size="8">= asynchronous call</text>'
      +'</svg></div>'
      +'<div class="info-box yellow"><b>Asynchronous Call.</b> Shown as a solid line with an OPEN («V-shaped», unfilled) arrowhead. The caller (Order) does NOT wait for a response — it sends a message/task (for example, to a queue) and immediately carries on with its own work. The response, if one is needed at all, arrives later as a separate asynchronous message (for example, via a callback, webhook or event subscription). Typical examples: queuing a task (RabbitMQ, Kafka), fire-and-forget notifications, sending email/SMS in the background.</div>'

      +'<div class="tw"><table>'
      +'<tr><th>Criterion</th><th style="color:#93c5fd">Synchronous</th><th style="color:#6ee7b7">Asynchronous</th></tr>'
      +'<tr><td><b>Arrowhead</b></td><td>Filled triangle ▶ (solid line)</td><td>Open, unfilled ▷ (solid line)</td></tr>'
      +'<tr><td><b>Caller behavior</b></td><td>Blocks, waits for the response</td><td>Does not block, keeps working</td></tr>'
      +'<tr><td><b>Returning the result</b></td><td>Return (dashed arrow, «return») at the same call point</td><td>There may be no result at all, or it arrives later as a separate message</td></tr>'
      +'<tr><td><b>Code equivalent</b></td><td>Ordinary function call / REST request awaiting a response</td><td>Putting a message on a queue, event-driven call, fire-and-forget</td></tr>'
      +'<tr><td><b>When to use</b></td><td>When the next step cannot run without the result (balance check before a debit)</td><td>When the result is not critical for continuing the current scenario (notification, logging, analytics)</td></tr>'
      +'<tr><td><b>Design risk for the BA</b></td><td>The user is waiting — response time matters (performance NFR)</td><td>Must think through: what if the message is lost? Is a retry / dead-letter queue needed?</td></tr>'
      +'</table></div>'
      +'<div class="info-box"><b>Why this matters for a BA:</b> the sync/async choice is not just a technical decision for developers — it often AFFECTS business requirements. For example, «sending the receipt by email» is naturally asynchronous (the customer should not wait for the SMTP server), while «debiting the account» is synchronous (you cannot show «Success» without confirming the money was actually debited). The BA should state explicitly in the requirements which operations require an immediate response and which can be moved to the background.</div>'

      +'<h3 style="margin-top:16px">Combined Fragments — loop, alt/else, opt (loops and conditions)</h3>'
      +'<div class="info-box">A Sequence Diagram describes more than a linear scenario. Repeated and conditional parts of the interaction are enclosed in a frame with a label in the top-left corner — that is a Combined Fragment. The three most common in interviews: <b>loop</b>, <b>alt</b> (with «else»), <b>opt</b>.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 165" width="440" height="160" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="20" y="10" width="420" height="145" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.3"/>'
      +'<path d="M20,10 L60,10 L60,24 L52,30 L20,30 Z" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.3"/>'
      +'<text x="30" y="23" fill="#fcd34d" font-size="9" font-weight="bold">loop</text>'
      +'<text x="240" y="24" text-anchor="middle" fill="#fcd34d" font-size="9">[for each item in cart]</text>'
      +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Cart</text>'
      +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Inventory</text>'
      +'<line x1="95" y1="65" x2="95" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="365" y1="65" x2="365" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="99" y1="85" x2="361" y2="85" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#lpA)"/>'
      +'<defs><marker id="lpA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<text x="230" y="80" text-anchor="middle" fill="#e2e8f0" font-size="8">checkStock(item)</text>'
      +'<line x1="361" y1="105" x2="99" y2="105" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#lpB)"/>'
      +'<defs><marker id="lpB" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#64748b" stroke-width="1.2"/></marker></defs>'
      +'<text x="230" y="100" text-anchor="middle" fill="#64748b" font-size="8">available: bool</text>'
      +'</svg></div>'
      +'<div class="info-box yellow"><b>loop.</b> A frame with the «loop» label in the corner; the repetition condition is in square brackets: <code>[for each item in cart]</code>, <code>[while hasNext]</code> or a range <code>[1, 5]</code> (minimum 1, maximum 5 iterations). Everything inside the frame is executed repeatedly while the condition is true. In interviews it is important to clarify the exit condition of the loop — it is often a «gap» in the requirements.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 195" width="440" height="190" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="20" y="10" width="420" height="175" rx="3" fill="none" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<path d="M20,10 L58,10 L58,24 L50,30 L20,30 Z" fill="#1a1f2e" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="28" y="23" fill="#93c5fd" font-size="9" font-weight="bold">alt</text>'
      +'<text x="240" y="24" text-anchor="middle" fill="#93c5fd" font-size="9">[balance >= amount]</text>'
      +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">ATM</text>'
      +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Account</text>'
      +'<line x1="95" y1="65" x2="95" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="365" y1="65" x2="365" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="99" y1="82" x2="361" y2="82" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#altA)"/>'
      +'<defs><marker id="altA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<text x="230" y="77" text-anchor="middle" fill="#e2e8f0" font-size="8">dispenseCash()</text>'
      +'<line x1="20" y1="100" x2="440" y2="100" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6,3"/>'
      +'<text x="28" y="114" fill="#fca5a5" font-size="9" font-weight="bold">[else]</text>'
      +'<line x1="99" y1="135" x2="361" y2="135" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#altB)"/>'
      +'<defs><marker id="altB" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<text x="230" y="130" text-anchor="middle" fill="#e2e8f0" font-size="8">rejectWithdrawal()</text>'
      +'<text x="230" y="155" text-anchor="middle" fill="#fca5a5" font-size="8">«Insufficient funds»</text>'
      +'</svg></div>'
      +'<div class="info-box"><b>alt / else — alternative (if/else).</b> An «alt» frame divided into sections by a DASHED horizontal line. Each section is its own conditional branch in square brackets: <code>[balance >= amount]</code> on top, <code>[else]</code> below. EXACTLY ONE section is executed — a direct equivalent of <code>if / else if / else</code> in code. There may be more than two sections if there are several conditions.</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 460 130" width="440" height="125" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="20" y="10" width="420" height="110" rx="3" fill="none" stroke="#10b981" stroke-width="1.3"/>'
      +'<path d="M20,10 L58,10 L58,24 L50,30 L20,30 Z" fill="#1a1f2e" stroke="#10b981" stroke-width="1.3"/>'
      +'<text x="28" y="23" fill="#6ee7b7" font-size="9" font-weight="bold">opt</text>'
      +'<text x="240" y="24" text-anchor="middle" fill="#6ee7b7" font-size="9">[promo code entered]</text>'
      +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Checkout</text>'
      +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">PromoSvc</text>'
      +'<line x1="95" y1="65" x2="95" y2="105" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="365" y1="65" x2="365" y2="105" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
      +'<line x1="99" y1="90" x2="361" y2="90" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#optA)"/>'
      +'<defs><marker id="optA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<text x="230" y="85" text-anchor="middle" fill="#e2e8f0" font-size="8">applyDiscount(code)</text>'
      +'</svg></div>'
      +'<div class="info-box green"><b>opt — optional (if, with no «else»).</b> An «opt» frame with ONE condition in brackets. It is a special case of «alt» with a single branch and no «else»: if the condition is true the block runs; if false it is simply skipped and nothing happens instead. Equivalent to <code>if (...) { ... }</code> without <code>else</code>.</div>'

      +'<div class="tw"><table>'
      +'<tr><th>Fragment</th><th>Frame label</th><th>Sections</th><th>Code equivalent</th><th>When to use</th></tr>'
      +'<tr><td><b style="color:#fcd34d">loop</b></td><td>loop [condition]</td><td>1 (repeated)</td><td><code>for</code> / <code>while</code></td><td>Processing each item in a list, repeating until a condition is met</td></tr>'
      +'<tr><td><b style="color:#93c5fd">alt</b></td><td>alt [condition1] / else</td><td>2 or more, separated by a dashed line</td><td><code>if / else if / else</code></td><td>Mutually exclusive scenario branches — exactly one is executed</td></tr>'
      +'<tr><td><b style="color:#6ee7b7">opt</b></td><td>opt [condition]</td><td>1 (may not execute)</td><td><code>if (...)</code> without else</td><td>An optional step that either happens or is simply skipped</td></tr>'
      +'</table></div>'
      +'<div class="info-box yellow"><b>How to spot it on a diagram:</b> look for a rectangular FRAME around part of the diagram with a pentagonal «label» in the top-left corner — that is always a sign of a Combined Fragment. The word inside the label (loop / alt / opt / par / break) is the construct type. An «alt» frame has a dashed divider line between sections — «loop» and «opt» do not, because they have only one section.</div>'

      +'<h3 style="margin-top:16px">Activity Diagram — Complete Element List</h3>'
      +'<div class="info-box">An Activity Diagram is the equivalent of a flowchart, but with UML semantics: it describes the flow of CONTROL and/or DATA through a sequence of actions. Used for algorithms, the business logic of a single operation, workflows. Not to be confused with BPMN — an Activity Diagram is about SYSTEM/ALGORITHM BEHAVIOR, BPMN is about a BUSINESS PROCESS involving people.</div>'

      +'<div class="elements-grid">'
      +'<div class="el-card uml"><div class="el-icon">●</div><div class="el-info"><h4>Initial Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Initial Node</span></h4><p>Filled circle. The single starting point of the flow. One per diagram (or per partition).</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">◉</div><div class="el-info"><h4>Activity Final<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Activity Final</span></h4><p>Filled circle inside a ring. STOPS ALL flows in the diagram, even parallel ones. Finish = end.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">⊗</div><div class="el-info"><h4>Flow Final<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Flow Final</span></h4><p>Circle with a cross inside. Ends ONLY THE CURRENT branch; other parallel flows keep running.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">▭</div><div class="el-info"><h4>Action / Activity<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Action</span></h4><p>Rounded rectangle. One step of work — what exactly is done («Validate Payment»).</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">◆</div><div class="el-info"><h4>Decision Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Decision Node</span></h4><p>Diamond with ONE input and SEVERAL outputs, each labeled with a condition in [brackets]. Equivalent to if/else.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">◇</div><div class="el-info"><h4>Merge Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Merge Node</span></h4><p>Diamond with SEVERAL inputs and ONE output. Brings alternative branches back into one flow (with no time synchronization).</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">▮</div><div class="el-info"><h4>Fork Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Fork Node</span></h4><p>Thick horizontal/vertical bar, 1 input → several outputs. Starts PARALLEL flows simultaneously.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">▮</div><div class="el-info"><h4>Join Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Join Node</span></h4><p>The same bar, several inputs → 1 output. SYNCHRONIZES parallel flows — waits for ALL branches to finish.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">▥</div><div class="el-info"><h4>Swimlane / Partition<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Swimlane</span></h4><p>Vertical/horizontal lane. Shows WHO (role/system) is responsible for the actions inside it.</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">▯</div><div class="el-info"><h4>Object Node<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Object Node</span></h4><p>Rectangle with a class/data name. Shows the object/data passed between actions (data flow).</p></div></div>'
      +'<div class="el-card uml"><div class="el-icon">⬠</div><div class="el-info"><h4>Send/Receive Signal<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Signal</span></h4><p>Convex/concave pentagon. Sending (convex) or receiving (concave) an asynchronous signal to/from another process.</p></div></div>'
      +'</div>'

      +'<div class="svgdemo"><svg viewBox="0 0 480 380" width="440" height="370" xmlns="http://www.w3.org/2000/svg">'
      +'<circle cx="240" cy="20" r="9" fill="#3b82f6"/>'
      +'<text x="260" y="24" fill="#64748b" font-size="8">Initial Node</text>'
      +'<line x1="240" y1="29" x2="240" y2="48" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<defs><marker id="adA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<rect x="180" y="50" width="120" height="30" rx="14" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="240" y="69" text-anchor="middle" fill="#93c5fd" font-size="9">Check Stock</text>'
      +'<line x1="240" y1="80" x2="240" y2="98" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<polygon points="240,100 275,130 240,160 205,130" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
      +'<text x="240" y="134" text-anchor="middle" fill="#fcd34d" font-size="8">Decision</text>'
      +'<line x1="205" y1="130" x2="90" y2="130" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<text x="145" y="123" text-anchor="middle" fill="#64748b" font-size="7">[in stock]</text>'
      +'<line x1="240" y1="160" x2="240" y2="178" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<text x="260" y="172" fill="#64748b" font-size="7">[out of stock]</text>'
      +'<rect x="30" y="115" width="120" height="30" rx="14" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="90" y="134" text-anchor="middle" fill="#93c5fd" font-size="9">Reserve Item</text>'
      +'<rect x="180" y="180" width="120" height="30" rx="14" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="240" y="199" text-anchor="middle" fill="#93c5fd" font-size="9">Notify Backorder</text>'
      +'<line x1="90" y1="145" x2="90" y2="240" stroke="#94a3b8" stroke-width="1.3"/>'
      +'<line x1="90" y1="240" x2="200" y2="240" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<polygon points="200,232 216,240 200,248" fill="none" stroke="#94a3b8" stroke-width="1.3"/>'
      +'<text x="130" y="255" fill="#64748b" font-size="7">Merge Node</text>'
      +'<line x1="240" y1="210" x2="240" y2="232" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<rect x="200" y="232" width="10" height="16" fill="#94a3b8"/>'
      +'<line x1="210" y1="240" x2="240" y2="240" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<rect x="180" y="260" width="120" height="30" rx="14" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="240" y="279" text-anchor="middle" fill="#93c5fd" font-size="9">Send Confirmation</text>'
      +'<line x1="240" y1="290" x2="240" y2="308" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adA)"/>'
      +'<circle cx="240" cy="325" r="12" fill="none" stroke="#ef4444" stroke-width="2"/>'
      +'<circle cx="240" cy="325" r="6" fill="#ef4444"/>'
      +'<text x="270" y="329" fill="#64748b" font-size="8">Activity Final</text>'
      +'<text x="20" y="360" fill="#64748b" font-size="7.5">Full flow: Initial → Action → Decision (branching) →</text>'
      +'<text x="20" y="372" fill="#64748b" font-size="7.5">two branches → Merge (no synchronization) → Action → Final</text>'
      +'</svg></div>'

      +'<div class="svgdemo"><svg viewBox="0 0 480 170" width="440" height="165" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="150" y="10" width="120" height="26" rx="12" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="210" y="27" text-anchor="middle" fill="#93c5fd" font-size="9">Build Passed</text>'
      +'<line x1="210" y1="36" x2="210" y2="52" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adB)"/>'
      +'<defs><marker id="adB" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
      +'<rect x="130" y="54" width="10" height="70" fill="#10b981"/>'
      +'<text x="100" y="52" fill="#6ee7b7" font-size="8" font-weight="bold">Fork Node</text>'
      +'<line x1="140" y1="65" x2="60" y2="65" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adB)"/>'
      +'<line x1="140" y1="90" x2="210" y2="90" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adB)"/>'
      +'<line x1="140" y1="115" x2="360" y2="115" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adB)"/>'
      +'<rect x="10" y="52" width="90" height="26" rx="12" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="55" y="69" text-anchor="middle" fill="#93c5fd" font-size="8">Unit Tests</text>'
      +'<rect x="160" y="77" width="90" height="26" rx="12" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="205" y="94" text-anchor="middle" fill="#93c5fd" font-size="8">Deploy to Stage</text>'
      +'<rect x="315" y="102" width="90" height="26" rx="12" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
      +'<text x="360" y="119" text-anchor="middle" fill="#93c5fd" font-size="8">Notify Team</text>'
      +'<line x1="55" y1="78" x2="55" y2="140" stroke="#94a3b8" stroke-width="1.3"/>'
      +'<line x1="205" y1="103" x2="150" y2="140" stroke="#94a3b8" stroke-width="1.3"/>'
      +'<rect x="140" y="140" width="10" height="16" fill="#f59e0b"/>'
      +'<text x="90" y="152" fill="#fcd34d" font-size="8" font-weight="bold">Join Node</text>'
      +'<line x1="150" y1="148" x2="240" y2="148" stroke="#94a3b8" stroke-width="1.3" marker-end="url(#adB)"/>'
      +'<text x="260" y="152" fill="#64748b" font-size="7.5">waits for BOTH branches, only then continues</text>'
      +'</svg></div>'
      +'<div class="info-box green"><b>Fork vs Join, Decision vs Merge:</b> Fork/Join is about PARALLELISM (thick bar, all branches run SIMULTANEOUSLY, Join waits for all of them to finish). Decision/Merge is about ALTERNATIVES (diamond, ONLY ONE branch runs based on a condition, Merge waits for nothing — it just brings the paths back together). A common interview mistake is confusing these pairs or using a diamond where a bar is needed (and vice versa).</div>'
      +'<div class="info-box yellow"><b>Activity Final vs Flow Final:</b> if the flow has 3 parallel branches (after a Fork) and one of them reaches an Activity Final (⊙ with a dot), the WHOLE diagram stops immediately, including the two other branches still running. If a Flow Final (⊗ with a cross) is used instead, only that one branch stops, while the others keep running until they finish.</div>'

      +'<div class="tw"><table>'
      +'<tr><th>Element</th><th>Shape</th><th>Meaning</th></tr>'
      +'<tr><td>Initial Node</td><td>Filled circle ●</td><td>Start of the flow (one per diagram/partition)</td></tr>'
      +'<tr><td>Activity Final</td><td>Circle in a ring ◉</td><td>Stops ALL flows in the diagram</td></tr>'
      +'<tr><td>Flow Final</td><td>Circle with a cross ⊗</td><td>Stops only the current branch</td></tr>'
      +'<tr><td>Action</td><td>Rounded rectangle</td><td>One step of work</td></tr>'
      +'<tr><td>Decision</td><td>Diamond, 1 input → N outputs</td><td>Conditional branching (if/else), 1 branch executes</td></tr>'
      +'<tr><td>Merge</td><td>Diamond, N inputs → 1 output</td><td>Rejoining alternative branches without waiting</td></tr>'
      +'<tr><td>Fork</td><td>Thick bar, 1 → N</td><td>Starting parallel flows</td></tr>'
      +'<tr><td>Join</td><td>Thick bar, N → 1</td><td>Synchronization — waits for ALL parallel branches</td></tr>'
      +'<tr><td>Swimlane</td><td>Vertical/horizontal lane</td><td>Who (role/system) performs the actions inside</td></tr>'
      +'<tr><td>Object Node</td><td>Rectangle with an object name</td><td>Data/object passed between actions</td></tr>'
      +'<tr><td>Send/Receive Signal</td><td>Convex/concave pentagon</td><td>Asynchronous signal to another process</td></tr>'
      +'</table></div>'
      +'<div class="info-box"><b>Activity Diagram vs BPMN — when to use which:</b> An Activity Diagram is part of UML, closer to developers, and is used to describe an ALGORITHM or the logic of a single operation/method (often inside a Use Case). BPMN is a separate standard, semantically richer (task types, events with triggers, Pool/Lane for different organizations) and built specifically for END-TO-END business processes involving people and systems. In practice: Activity Diagram for the technical description of «how it works inside», BPMN for the business description of «who does what in the process».</div>'
  },
  bpmn_elements: {
    title: "BPMN 2.0 — Core Notation Objects",
    content: '<div class="t-section"><h3>BPMN Core Element Categories</h3>'
      +'<div class="info-box">The BPMN 2.0 specification (OMG) groups its elements into five categories: Flow Objects (Events, Activities, Gateways), Data (Data Objects, Data Inputs/Outputs, Data Stores), Connecting Objects (Sequence Flow, Message Flow, Association, Data Association), Swimlanes (Pools, Lanes) and Artifacts (Group, Text Annotation). BPMN is not a language for describing IT systems; it is a notation for describing the domain of a real business, where both software and people take part.</div>'
      +'<div class="elements-grid">'
      +'<div class="el-card bpmn"><div class="el-icon">⚪</div><div class="el-info"><h4>Event<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Event</span></h4><p>Something that happens in the course of the process. Start, End or Intermediate.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">▭</div><div class="el-info"><h4>Activity<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Activity</span></h4><p>Work that must be performed at a step of the process. Drawn as a rectangle.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">◇</div><div class="el-info"><h4>Gateway<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Gateway</span></h4><p>A control node for conditional branching of the process. Drawn as a diamond.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">→</div><div class="el-info"><h4>Flow<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Flow</span></h4><p>A connection between elements showing the execution order or message exchange.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">📄</div><div class="el-info"><h4>Data<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Data</span></h4><p>Data objects and documents needed to start an activity, or produced as its result.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">📎</div><div class="el-info"><h4>Artifacts<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Artifact</span></h4><p>Objects that are not activities: groups, text annotations.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">▥</div><div class="el-info"><h4>Lane<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Lane</span></h4><p>A sub-partition within a Pool that shows a specific process participant (role).</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">▤</div><div class="el-info"><h4>Pool<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Pool</span></h4><p>Represents a Participant (organization, system or role) in a Collaboration and contains its process. May contain lanes.</p></div></div>'
      +'</div>'

      +'<h3 style="margin-top:18px">Event (in detail)</h3>'
      +'<div class="info-box green">An event can be a Start, End or Intermediate event. Each type has its own graphics and a set of possible triggers (Message, Timer, Error, Signal, etc.)</div>'
      +'<div class="svgdemo"><svg viewBox="0 0 560 110" width="540" height="105" xmlns="http://www.w3.org/2000/svg">'
      +'<circle cx="50" cy="45" r="18" fill="none" stroke="#10b981" stroke-width="2"/>'
      +'<text x="50" y="78" text-anchor="middle" fill="#94a3b8" font-size="9">Start</text>'
      +'<text x="50" y="90" text-anchor="middle" fill="#64748b" font-size="8">Start Event</text>'
      +'<circle cx="200" cy="45" r="18" fill="none" stroke="#f59e0b" stroke-width="1.5"/>'
      +'<circle cx="200" cy="45" r="13" fill="none" stroke="#f59e0b" stroke-width="1.5"/>'
      +'<text x="200" y="78" text-anchor="middle" fill="#94a3b8" font-size="9">Intermediate</text>'
      +'<text x="200" y="90" text-anchor="middle" fill="#64748b" font-size="8">Intermediate Event</text>'
      +'<circle cx="350" cy="45" r="18" fill="none" stroke="#ef4444" stroke-width="4"/>'
      +'<text x="350" y="78" text-anchor="middle" fill="#94a3b8" font-size="9">End</text>'
      +'<text x="350" y="90" text-anchor="middle" fill="#64748b" font-size="8">End Event</text>'
      +'<text x="480" y="40" fill="#64748b" font-size="9">Border thickness:</text>'
      +'<text x="480" y="55" fill="#64748b" font-size="9">thin = start</text>'
      +'<text x="480" y="70" fill="#64748b" font-size="9">thick = end</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:18px">Activity Subtypes</h3>'
      +'<div class="info-box">Activities are divided into atomic ones (Task — indivisible) and compound ones (broken down into simpler activities when detailed further).</div>'
      +'<div class="elements-grid">'
      +'<div class="el-card bpmn"><div class="el-icon">▭</div><div class="el-info"><h4>Task<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Task</span></h4><p>A unit of work. If marked with a "+" symbol, it is a Sub-Process and can be detailed further.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">⚏</div><div class="el-info"><h4>Transaction<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Transaction</span></h4><p>A set of logically related activities. A transaction protocol (all-or-nothing: successful completion, cancellation with compensation, or hazard) applies to it.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">⌗</div><div class="el-info"><h4>Event Sub-Process<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Event Sub-Process</span></h4><p>Placed inside another process. Triggered by its own start event. Can interrupt the parent process or run in parallel with it.</p></div></div>'
      +'<div class="el-card bpmn"><div class="el-icon">⊞</div><div class="el-info"><h4>Call Activity<br><span style="font-size:0.7rem;color:#64748b;font-weight:400">Call Activity</span></h4><p>An entry point to a globally defined sub-process that is reused in different places of the model.</p></div></div>'
      +'</div>'
      +'<div class="svgdemo"><svg viewBox="0 0 480 90" width="460" height="85" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="10" y="15" width="100" height="40" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="60" y="32" text-anchor="middle" fill="#93c5fd" font-size="9">Task</text>'
      +'<rect x="36" y="42" width="12" height="9" rx="1" fill="none" stroke="#3b82f6" stroke-width="1.2"/>'
      +'<text x="42" y="49" text-anchor="middle" fill="#3b82f6" font-size="9">+</text>'
      +'<text x="60" y="68" text-anchor="middle" fill="#64748b" font-size="8">Task (+ = Sub-Process)</text>'
      +'<rect x="130" y="15" width="100" height="40" rx="5" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="6,2"/>'
      +'<text x="180" y="38" text-anchor="middle" fill="#c4b5fd" font-size="9">Transaction</text>'
      +'<text x="180" y="68" text-anchor="middle" fill="#64748b" font-size="8">Transaction</text>'
      +'<rect x="250" y="15" width="100" height="40" rx="5" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>'
      +'<text x="300" y="38" text-anchor="middle" fill="#fcd34d" font-size="9">Event SubProc.</text>'
      +'<text x="300" y="68" text-anchor="middle" fill="#64748b" font-size="8">Event Sub-Process</text>'
      +'<rect x="370" y="15" width="100" height="40" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="4"/>'
      +'<text x="420" y="38" text-anchor="middle" fill="#93c5fd" font-size="9">Call Activity</text>'
      +'<text x="420" y="68" text-anchor="middle" fill="#64748b" font-size="8">Call Activity</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:18px">Gateways (3 main types)</h3>'
      +'<div class="info-box yellow">A gateway is a control node for conditional branching of the process. Drawn as a diamond. Needed when the procedure depends on certain factors — for example, the customer decides whether to buy or not.</div>'
      +'<div class="svgdemo"><svg viewBox="0 0 520 110" width="500" height="105" xmlns="http://www.w3.org/2000/svg">'
      +'<polygon points="50,20 80,50 50,80 20,50" fill="#1a1f2e" stroke="#f59e0b" stroke-width="2"/>'
      +'<line x1="34" y1="34" x2="66" y2="66" stroke="#f59e0b" stroke-width="2"/>'
      +'<line x1="66" y1="34" x2="34" y2="66" stroke="#f59e0b" stroke-width="2"/>'
      +'<text x="50" y="95" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">Exclusive (XOR)</text>'
      +'<text x="50" y="106" text-anchor="middle" fill="#64748b" font-size="8">Exclusive Gateway (XOR)</text>'
      +'<polygon points="200,20 230,50 200,80 170,50" fill="#1a1f2e" stroke="#3b82f6" stroke-width="2"/>'
      +'<line x1="187" y1="50" x2="213" y2="50" stroke="#3b82f6" stroke-width="2"/>'
      +'<line x1="200" y1="37" x2="200" y2="63" stroke="#3b82f6" stroke-width="2"/>'
      +'<text x="200" y="95" text-anchor="middle" fill="#3b82f6" font-size="9" font-weight="bold">Parallel (AND)</text>'
      +'<text x="200" y="106" text-anchor="middle" fill="#64748b" font-size="8">Parallel Gateway (AND)</text>'
      +'<polygon points="350,20 380,50 350,80 320,50" fill="#1a1f2e" stroke="#8b5cf6" stroke-width="2"/>'
      +'<circle cx="350" cy="50" r="10" fill="none" stroke="#8b5cf6" stroke-width="2"/>'
      +'<text x="350" y="95" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">Inclusive (OR)</text>'
      +'<text x="350" y="106" text-anchor="middle" fill="#64748b" font-size="8">Inclusive Gateway (OR)</text>'
      +'</svg></div>'
      +'<div class="tw"><table>'
      +'<tr><th>Type</th><th>On split</th><th>On merge</th></tr>'
      +'<tr><td><b style="color:#f59e0b">Exclusive Gateway (XOR)</b><br><span style="font-size:0.72rem;color:#64748b">data-based exclusive decision</span></td><td>Routes the flow along only ONE outgoing branch (data-driven)</td><td>Passes each arriving token straight through without synchronization</td></tr>'
      +'<tr><td><b style="color:#3b82f6">Parallel Gateway (AND)</b><br><span style="font-size:0.72rem;color:#64748b">parallel split and join</span></td><td>Activates ALL outgoing branches simultaneously</td><td>Waits for ALL incoming branches to complete, then activates the outgoing flow</td></tr>'
      +'<tr><td><b style="color:#8b5cf6">Inclusive Gateway (OR)</b><br><span style="font-size:0.72rem;color:#64748b">multi-choice split and join</span></td><td>Activates ONE or MORE branches</td><td>All active incoming branches must be completed</td></tr>'
      +'</table></div>'

      +'<h3 style="margin-top:18px">Pool & Lane</h3>'
      +'<div class="info-box">A Pool represents a Participant (an organization, system or role) in a Collaboration and contains that participant\'s process; a diagram may contain several pools. A Lane is a sub-partition within a Pool that shows a specific participant (role, department, system). Pools and lanes reflect the distribution of responsibilities. Lanes allow pools and other lanes to be divided hierarchically. Message exchange between Pools is shown with a Message Flow.</div>'
      +'<div class="svgdemo"><svg viewBox="0 0 540 130" width="520" height="125" xmlns="http://www.w3.org/2000/svg">'
      +'<rect x="10" y="10" width="240" height="100" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="2"/>'
      +'<rect x="10" y="10" width="26" height="100" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="2"/>'
      +'<text x="23" y="62" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold" transform="rotate(-90,23,62)">Pool: Company</text>'
      +'<line x1="36" y1="55" x2="250" y2="55" stroke="#2d3748" stroke-width="1"/>'
      +'<text x="135" y="38" text-anchor="middle" fill="#64748b" font-size="8">Lane: Manager</text>'
      +'<rect x="50" y="20" width="90" height="28" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="95" y="38" text-anchor="middle" fill="#93c5fd" font-size="8">Accept Order</text>'
      +'<text x="135" y="72" text-anchor="middle" fill="#64748b" font-size="8">Lane: Warehouse</text>'
      +'<rect x="50" y="77" width="90" height="26" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="95" y="94" text-anchor="middle" fill="#93c5fd" font-size="8">Pick Goods</text>'
      +'<line x1="95" y1="48" x2="95" y2="76" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<polygon points="95,76 90,68 100,68" fill="#3b82f6"/>'
      +'<rect x="310" y="30" width="140" height="60" rx="4" fill="#0d1117" stroke="#8b5cf6" stroke-width="2"/>'
      +'<rect x="310" y="30" width="26" height="60" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="2"/>'
      +'<text x="323" y="62" text-anchor="middle" fill="#c4b5fd" font-size="9" transform="rotate(-90,323,62)">Pool: Customer</text>'
      +'<text x="395" y="62" text-anchor="middle" fill="#c4b5fd" font-size="9">"black box"</text>'
      +'<line x1="250" y1="55" x2="308" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>'
      +'<polygon points="308,60 300,55 300,65" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
      +'<text x="255" y="48" fill="#f59e0b" font-size="8">Message Flow</text>'
      +'</svg></div>'

      +'<h3 style="margin-top:18px">Data Object and Message</h3>'
      +'<div class="svgdemo"><svg viewBox="0 0 480 110" width="460" height="105" xmlns="http://www.w3.org/2000/svg">'
      +'<path d="M60,20 L90,20 L100,30 L100,80 L60,80 Z" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<path d="M90,20 L90,30 L100,30" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
      +'<text x="80" y="55" text-anchor="middle" fill="#93c5fd" font-size="8">Order</text>'
      +'<text x="80" y="97" text-anchor="middle" fill="#64748b" font-size="8">Data Object</text>'
      +'<rect x="190" y="40" width="28" height="20" rx="2" fill="none" stroke="#10b981" stroke-width="1.5"/>'
      +'<polyline points="190,40 204,52 218,40" fill="none" stroke="#10b981" stroke-width="1.2"/>'
      +'<text x="204" y="80" text-anchor="middle" fill="#64748b" font-size="8">Message (Envelope)</text>'
      +'<rect x="300" y="30" width="100" height="50" rx="14" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="2,2"/>'
      +'<text x="350" y="58" text-anchor="middle" fill="#94a3b8" font-size="8">Group</text>'
      +'</svg></div>'
      +'<div class="info-box green">A Data Object shows which data/documents are needed to start an activity or are the result of a completed activity. For one participant an object may be a result, for another a starting condition (for example: "Order" is the result for the manager and the start of work for the warehouse). A Message shows a relationship between two process participants: email, chat, SMS, website correspondence, etc.</div>'

      +'<h3 style="margin-top:18px">Artifacts (2 types)</h3>'
      +'<div class="tw"><table>'
      +'<tr><th>Type</th><th>Description</th></tr>'
      +'<tr><td><b style="color:#6ee7b7">Group of objects</b><br><span style="font-size:0.72rem;color:#64748b">Group</span></td><td>Combines several elements under a common symbol to save space on the diagram. A rounded rectangle drawn with a dash-dot line.</td></tr>'
      +'<tr><td><b style="color:#6ee7b7">Text annotation</b><br><span style="font-size:0.72rem;color:#64748b">Text Annotation</span></td><td>Comments and explanations on the diagram. An open rectangle drawn with a solid line, connected to an object by a dashed line.</td></tr>'
      +'</table></div>'

      +'<h3 style="margin-top:18px">Executable vs Non-Executable Processes</h3>'
      +'<div class="tw"><table>'
      +'<tr><th></th><th>Executable<br><span style="font-size:0.72rem;color:#64748b">Executable</span></th><th>Non-Executable<br><span style="font-size:0.72rem;color:#64748b">Non-Executable</span></th></tr>'
      +'<tr><td><b>Purpose</b></td><td>Actually runs in a BPMS (Camunda, Bizagi, Appian)</td><td>Demonstrates the business model to people</td></tr>'
      +'<tr><td><b>Notation requirements</b></td><td>Strict compliance with BPMN rules — otherwise the software cannot execute the model</td><td>Following the rules is needed only for mutual understanding</td></tr>'
      +'<tr><td><b>Who uses it</b></td><td>Companies with a process-based approach, real-time tracking</td><td>Analysts and managers to illustrate ideas and bottlenecks</td></tr>'
      +'<tr><td><b>Complexity</b></td><td>Requires deep BPMN knowledge, like writing an algorithm</td><td>Beginners are advised to start with this type</td></tr>'
      +'</table></div>'
      +'<div class="info-box yellow">BPMN (Business Process Model and Notation) is the modeling language; BPM (Business Process Management) is the discipline. A BPMS (Business Process Management System) executes the models: Camunda, Bizagi, etc.</div>'
  }
};

// ═══════════════════════════════════════════
// QUESTIONS DATA
// ═══════════════════════════════════════════
var SVGS_UML = {};

// UML Sequence Q23 diagram
SVGS_UML.seq1 = '<svg viewBox="0 0 480 175" width="460" height="170" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="sf" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
  +'<marker id="df" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
  +'<rect x="20" y="10" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="55" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Browser</text>'
  +'<rect x="175" y="10" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="210" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">API GW</text>'
  +'<rect x="330" y="10" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="370" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">AuthService</text>'
  +'<line x1="55" y1="32" x2="55" y2="175" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="210" y1="32" x2="210" y2="175" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="370" y1="32" x2="370" y2="175" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<rect x="51" y="50" width="8" height="90" fill="#3b82f6" opacity="0.4"/>'
  +'<rect x="206" y="65" width="8" height="55" fill="#3b82f6" opacity="0.4"/>'
  +'<rect x="366" y="78" width="8" height="28" fill="#8b5cf6" opacity="0.4"/>'
  +'<line x1="59" y1="55" x2="206" y2="65" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#sf)"/>'
  +'<text x="128" y="53" text-anchor="middle" fill="#e2e8f0" font-size="9">1: POST /login</text>'
  +'<line x1="214" y1="80" x2="366" y2="80" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#sf)"/>'
  +'<text x="285" y="75" text-anchor="middle" fill="#e2e8f0" font-size="9">2: validateToken()</text>'
  +'<line x1="366" y1="104" x2="214" y2="104" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#df)"/>'
  +'<text x="285" y="99" text-anchor="middle" fill="#64748b" font-size="9">3: {valid: true}</text>'
  // MISSING return arrow - marked with ?
  +'<rect x="90" y="118" width="100" height="22" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>'
  +'<text x="140" y="133" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">? MISSING</text>'
  +'<text x="128" y="152" text-anchor="middle" fill="#64748b" font-size="9">4: ???</text>'
  +'</svg>';

// UML Class Q25 - missing element
SVGS_UML.class1 = '<svg viewBox="0 0 420 200" width="400" height="195" xmlns="http://www.w3.org/2000/svg">'
  +'<rect x="10" y="10" width="130" height="80" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="75" y="28" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Order</text>'
  +'<line x1="10" y1="34" x2="140" y2="34" stroke="#3b82f6" stroke-width="1"/>'
  +'<text x="75" y="50" text-anchor="middle" fill="#cbd5e1" font-size="10">- id: String</text>'
  +'<text x="75" y="64" text-anchor="middle" fill="#cbd5e1" font-size="10">- status: String</text>'
  +'<line x1="10" y1="70" x2="140" y2="70" stroke="#3b82f6" stroke-width="1"/>'
  +'<text x="75" y="84" text-anchor="middle" fill="#a5b4fc" font-size="10">+ cancel()</text>'
  +'<rect x="280" y="10" width="130" height="80" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="345" y="28" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Customer</text>'
  +'<line x1="280" y1="34" x2="410" y2="34" stroke="#3b82f6" stroke-width="1"/>'
  +'<text x="345" y="50" text-anchor="middle" fill="#cbd5e1" font-size="10">- name: String</text>'
  +'<text x="345" y="64" text-anchor="middle" fill="#cbd5e1" font-size="10">- email: String</text>'
  +'<line x1="280" y1="70" x2="410" y2="70" stroke="#3b82f6" stroke-width="1"/>'
  +'<text x="345" y="84" text-anchor="middle" fill="#a5b4fc" font-size="10">+ register()</text>'
  // Association line with MISSING multiplicity
  +'<line x1="140" y1="50" x2="280" y2="50" stroke="#94a3b8" stroke-width="1.5"/>'
  +'<text x="155" y="44" fill="#64748b" font-size="11">1</text>'
  +'<rect x="240" y="38" width="30" height="20" rx="3" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>'
  +'<text x="255" y="52" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">?</text>'
  +'<text x="210" y="100" text-anchor="middle" fill="#64748b" font-size="11">«places»</text>'
  // Activity diagram fragment below
  +'<text x="10" y="130" fill="#94a3b8" font-size="10">What should replace the "?" (multiplicity on the Order side)?</text>'
  +'</svg>';

// BPMN Q28 - which gateway is missing
SVGS_UML.gw1 = '<svg viewBox="0 0 580 130" width="560" height="125" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="ag" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>'
  +'<circle cx="40" cy="65" r="16" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<text x="40" y="92" text-anchor="middle" fill="#94a3b8" font-size="8">Order In</text>'
  +'<rect x="75" y="45" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="120" y="67" text-anchor="middle" fill="#93c5fd" font-size="9">Check Stock</text>'
  // Gateway with ? mark
  +'<polygon points="205,65 225,45 245,65 225,85" fill="#1a1f2e" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>'
  +'<text x="225" y="70" text-anchor="middle" fill="#fca5a5" font-size="14" font-weight="bold">?</text>'
  +'<text x="225" y="100" text-anchor="middle" fill="#fca5a5" font-size="8">MISSING</text>'
  // Upper path: in stock
  +'<rect x="265" y="20" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="310" y="38" text-anchor="middle" fill="#93c5fd" font-size="9">Confirm</text>'
  +'<text x="310" y="50" text-anchor="middle" fill="#93c5fd" font-size="9">Order</text>'
  // Lower path: out of stock
  +'<rect x="265" y="85" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="310" y="103" text-anchor="middle" fill="#93c5fd" font-size="9">Notify</text>'
  +'<text x="310" y="115" text-anchor="middle" fill="#93c5fd" font-size="9">Out of Stock</text>'
  +'<circle cx="400" cy="38" r="14" fill="none" stroke="#ef4444" stroke-width="4"/>'
  +'<circle cx="400" cy="103" r="14" fill="none" stroke="#ef4444" stroke-width="4"/>'
  // flow labels
  +'<text x="255" y="16" fill="#10b981" font-size="8">[in stock]</text>'
  +'<text x="255" y="82" fill="#ef4444" font-size="8">[out of stock]</text>'
  +'<line x1="56" y1="65" x2="74" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'<line x1="165" y1="65" x2="203" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'<line x1="245" y1="53" x2="263" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'<line x1="245" y1="77" x2="263" y2="100" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'<line x1="355" y1="38" x2="384" y2="38" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'<line x1="355" y1="103" x2="384" y2="103" stroke="#64748b" stroke-width="1.5" marker-end="url(#ag)"/>'
  +'</svg>';

// BPMN Q32 - parallel process diagram
SVGS_UML.par1 = '<svg viewBox="0 0 600 200" width="580" height="195" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="ap" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>'
  +'<circle cx="35" cy="100" r="16" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<text x="35" y="126" text-anchor="middle" fill="#94a3b8" font-size="8">Start</text>'
  +'<rect x="65" y="80" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="110" y="102" text-anchor="middle" fill="#93c5fd" font-size="9">Receive Order</text>'
  // AND split
  +'<polygon points="180,100 200,80 220,100 200,120" fill="#1a1f2e" stroke="#3b82f6" stroke-width="2"/>'
  +'<line x1="192" y1="100" x2="208" y2="100" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<line x1="200" y1="92" x2="200" y2="108" stroke="#3b82f6" stroke-width="1.5"/>'
  // upper branch
  +'<rect x="238" y="55" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="283" y="77" text-anchor="middle" fill="#93c5fd" font-size="9">Process Payment</text>'
  // lower branch
  +'<rect x="238" y="120" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="283" y="138" text-anchor="middle" fill="#93c5fd" font-size="9">Update</text>'
  +'<text x="283" y="150" text-anchor="middle" fill="#93c5fd" font-size="9">Inventory</text>'
  // AND join (marked as ?)
  +'<polygon points="350,100 370,80 390,100 370,120" fill="#1a1f2e" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>'
  +'<text x="370" y="105" text-anchor="middle" fill="#fca5a5" font-size="14" font-weight="bold">?</text>'
  +'<rect x="405" y="80" width="90" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="450" y="98" text-anchor="middle" fill="#93c5fd" font-size="9">Ship Order</text>'
  +'<text x="450" y="110" text-anchor="middle" fill="#93c5fd" font-size="8">(after BOTH done)</text>'
  +'<circle cx="540" cy="98" r="14" fill="none" stroke="#ef4444" stroke-width="4"/>'
  // arrows
  +'<line x1="51" y1="100" x2="64" y2="100" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="155" y1="100" x2="178" y2="100" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="220" y1="88" x2="236" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="220" y1="112" x2="236" y2="130" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="328" y1="73" x2="348" y2="88" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="328" y1="138" x2="348" y2="112" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="390" y1="100" x2="403" y2="98" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'<line x1="495" y1="98" x2="524" y2="98" stroke="#64748b" stroke-width="1.5" marker-end="url(#ap)"/>'
  +'</svg>';

// UML Activity - choose diagram type Q16
SVGS_UML.act1 = '<svg viewBox="0 0 420 190" width="400" height="185" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="aa" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<circle cx="210" cy="18" r="8" fill="#3b82f6"/>'
  +'<rect x="165" y="36" width="90" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="210" y="55" text-anchor="middle" fill="#93c5fd" font-size="10">Submit Request</text>'
  +'<polygon points="210,80 230,98 210,116 190,98" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
  +'<text x="260" y="93" fill="#94a3b8" font-size="9">[approved]</text>'
  +'<text x="145" y="93" fill="#94a3b8" font-size="9">[rejected]</text>'
  +'<rect x="250" y="118" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="290" y="136" text-anchor="middle" fill="#93c5fd" font-size="9">Process</text>'
  +'<rect x="90" y="118" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="130" y="136" text-anchor="middle" fill="#93c5fd" font-size="9">Reject</text>'
  +'<circle cx="210" cy="175" r="9" fill="none" stroke="#ef4444" stroke-width="3"/>'
  +'<circle cx="210" cy="175" r="4" fill="#ef4444"/>'
  +'<line x1="210" y1="26" x2="210" y2="35" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'<line x1="210" y1="66" x2="210" y2="79" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'<line x1="230" y1="98" x2="249" y2="130" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'<line x1="190" y1="98" x2="171" y2="130" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'<line x1="290" y1="146" x2="218" y2="170" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'<line x1="130" y1="146" x2="205" y2="170" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#aa)"/>'
  +'</svg>';

// BPMN Q34 - choose correct diagram
SVGS_UML.bp_choose = '<svg viewBox="0 0 560 200" width="540" height="195" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="ac" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#64748b"/></marker></defs>'
  // Option A label
  +'<text x="10" y="18" fill="#6ee7b7" font-size="11" font-weight="bold">A — BPMN (correct?)</text>'
  // Pool
  +'<rect x="10" y="22" width="240" height="60" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<rect x="10" y="22" width="26" height="60" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="23" y="55" text-anchor="middle" fill="#93c5fd" font-size="8" transform="rotate(-90,23,55)">System</text>'
  +'<circle cx="55" cy="52" r="10" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<rect x="80" y="38" width="70" height="26" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="115" y="55" text-anchor="middle" fill="#93c5fd" font-size="9">Process</text>'
  +'<polygon points="170,52 185,40 200,52 185,64" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
  +'<line x1="185" y1="41" x2="185" y2="63" stroke="#f59e0b" stroke-width="1.2"/><line x1="177" y1="52" x2="193" y2="52" stroke="#f59e0b" stroke-width="1.2"/>'
  +'<circle cx="228" cy="52" r="10" fill="none" stroke="#ef4444" stroke-width="3"/>'
  +'<line x1="65" y1="52" x2="78" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#ac)"/>'
  +'<line x1="150" y1="52" x2="168" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#ac)"/>'
  +'<line x1="200" y1="52" x2="216" y2="52" stroke="#64748b" stroke-width="1.5" marker-end="url(#ac)"/>'
  // Option B label
  +'<text x="300" y="18" fill="#f87171" font-size="11" font-weight="bold">B — UML Use Case</text>'
  +'<ellipse cx="400" cy="55" rx="50" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="400" y="59" text-anchor="middle" fill="#93c5fd" font-size="10">Process Order</text>'
  +'<circle cx="320" cy="45" r="9" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>'
  +'<line x1="320" y1="54" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1.5"/>'
  +'<line x1="312" y1="62" x2="328" y2="62" stroke="#e2e8f0" stroke-width="1.5"/>'
  +'<line x1="320" y1="70" x2="312" y2="82" stroke="#e2e8f0" stroke-width="1.5"/>'
  +'<line x1="320" y1="70" x2="328" y2="82" stroke="#e2e8f0" stroke-width="1.5"/>'
  +'<line x1="329" y1="50" x2="349" y2="50" stroke="#64748b" stroke-width="1.5" marker-end="url(#ac)"/>'
  // Option C label
  +'<text x="10" y="108" fill="#f87171" font-size="11" font-weight="bold">C — Sequence Diagram</text>'
  +'<rect x="20" y="118" width="50" height="18" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="45" y="131" text-anchor="middle" fill="#93c5fd" font-size="8">User</text>'
  +'<rect x="130" y="118" width="50" height="18" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="155" y="131" text-anchor="middle" fill="#93c5fd" font-size="8">System</text>'
  +'<line x1="45" y1="136" x2="45" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="3,2"/>'
  +'<line x1="155" y1="136" x2="155" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="3,2"/>'
  +'<line x1="45" y1="155" x2="153" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ac)"/>'
  +'<text x="95" y="153" text-anchor="middle" fill="#94a3b8" font-size="8">placeOrder()</text>'
  // D label
  +'<text x="300" y="108" fill="#f87171" font-size="11" font-weight="bold">D — Class Diagram</text>'
  +'<rect x="310" y="118" width="100" height="60" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="360" y="136" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Order</text>'
  +'<line x1="310" y1="140" x2="410" y2="140" stroke="#3b82f6" stroke-width="1"/>'
  +'<text x="360" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">- status</text>'
  +'<text x="360" y="168" text-anchor="middle" fill="#a5b4fc" font-size="9">+ confirm()</text>'
  +'</svg>';

// BPMN boundary event Q36
SVGS_UML.bound1 = '<svg viewBox="0 0 460 160" width="440" height="155" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="ab" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>'
  +'<circle cx="35" cy="80" r="14" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<rect x="65" y="55" width="120" height="50" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="125" y="76" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Process</text>'
  +'<text x="125" y="90" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Payment</text>'
  // Boundary event - dashed timer (non-interrupting)
  +'<circle cx="160" cy="105" r="14" fill="#0d1117" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>'
  +'<circle cx="160" cy="105" r="9" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>'
  +'<circle cx="160" cy="105" r="5" fill="none" stroke="#f59e0b" stroke-width="1"/>'
  +'<line x1="160" y1="101" x2="160" y2="105" stroke="#f59e0b" stroke-width="1.2"/>'
  +'<line x1="160" y1="105" x2="163" y2="107" stroke="#f59e0b" stroke-width="1.2"/>'
  +'<line x1="160" y1="119" x2="160" y2="132" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ab)"/>'
  +'<rect x="115" y="132" width="120" height="22" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
  +'<text x="175" y="147" text-anchor="middle" fill="#c4b5fd" font-size="9">Send Reminder Email</text>'
  +'<rect x="210" y="55" width="100" height="50" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="260" y="82" text-anchor="middle" fill="#93c5fd" font-size="10">Confirm</text>'
  +'<text x="260" y="95" text-anchor="middle" fill="#93c5fd" font-size="10">Payment</text>'
  +'<circle cx="360" cy="80" r="14" fill="none" stroke="#ef4444" stroke-width="4"/>'
  +'<line x1="49" y1="80" x2="63" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#ab)"/>'
  +'<line x1="185" y1="80" x2="208" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#ab)"/>'
  +'<line x1="310" y1="80" x2="344" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#ab)"/>'
  +'</svg>';

// UML State machine Q22
SVGS_UML.state1 = '<svg viewBox="0 0 460 180" width="440" height="175" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="ast" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<circle cx="50" cy="30" r="10" fill="#3b82f6"/>'
  +'<rect x="20" y="56" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="70" y="80" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Pending</text>'
  +'<rect x="180" y="56" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="230" y="80" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Paid</text>'
  +'<rect x="340" y="56" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="390" y="80" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="bold">Shipped</text>'
  +'<rect x="180" y="130" width="100" height="40" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>'
  +'<text x="230" y="154" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Cancelled</text>'
  +'<line x1="50" y1="40" x2="50" y2="55" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ast)"/>'
  +'<line x1="50" y1="56" x2="65" y2="56" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="2,1"/>'
  +'<line x1="120" y1="76" x2="178" y2="76" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ast)"/>'
  +'<text x="148" y="70" text-anchor="middle" fill="#e2e8f0" font-size="9">paymentReceived</text>'
  +'<line x1="280" y1="76" x2="338" y2="76" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ast)"/>'
  +'<text x="308" y="70" text-anchor="middle" fill="#e2e8f0" font-size="9">shipped</text>'
  // Missing transition from Pending to Cancelled
  +'<rect x="55" y="148" width="115" height="22" rx="3" fill="#450a0a" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2"/>'
  +'<text x="112" y="163" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">? MISSING transition</text>'
  +'<line x1="70" y1="96" x2="180" y2="140" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#ast)"/>'
  +'<text x="110" y="125" fill="#94a3b8" font-size="9">trigger = ???</text>'
  +'</svg>';

// BPMN Q38 - message flow between pools
SVGS_UML.pool1 = '<svg viewBox="0 0 500 200" width="480" height="195" xmlns="http://www.w3.org/2000/svg">'
  +'<defs><marker id="apl" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker>'
  +'<marker id="amf" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
  // Pool 1 - E-shop
  +'<rect x="10" y="10" width="220" height="70" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<rect x="10" y="10" width="26" height="70" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="23" y="48" text-anchor="middle" fill="#93c5fd" font-size="9" transform="rotate(-90,23,48)">E-Shop</text>'
  +'<circle cx="52" cy="45" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<rect x="75" y="32" width="80" height="26" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<text x="115" y="49" text-anchor="middle" fill="#93c5fd" font-size="9">Create Order</text>'
  +'<rect x="52" y="34" width="16" height="11" rx="1" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<polyline points="52,34 60,40 68,34" fill="none" stroke="#3b82f6" stroke-width="1"/>'
  // Wait for payment event (catch message)
  +'<circle cx="185" cy="45" r="11" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<circle cx="185" cy="45" r="7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
  +'<rect x="179" y="40" width="12" height="9" rx="1" fill="none" stroke="#3b82f6" stroke-width="1.2"/>'
  +'<polyline points="179,40 185,45 191,40" fill="none" stroke="#3b82f6" stroke-width="1"/>'
  // Pool 2 - Payment
  +'<rect x="10" y="120" width="220" height="70" rx="4" fill="#0d1117" stroke="#8b5cf6" stroke-width="1.5"/>'
  +'<rect x="10" y="120" width="26" height="70" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
  +'<text x="23" y="157" text-anchor="middle" fill="#c4b5fd" font-size="9" transform="rotate(-90,23,157)">Payment GW</text>'
  +'<circle cx="52" cy="155" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
  +'<rect x="75" y="142" width="90" height="26" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
  +'<text x="120" y="159" text-anchor="middle" fill="#c4b5fd" font-size="9">Process Payment</text>'
  +'<rect x="180" y="34" width="16" height="11" rx="1" fill="#8b5cf6"/>'
  +'<polyline points="180,34 188,40 196,34" fill="none" stroke="#fff" stroke-width="1"/>'
  // Message flow (dashed)
  +'<line x1="115" y1="58" x2="115" y2="100" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>'
  +'<line x1="115" y1="100" x2="52" y2="142" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#amf)"/>'
  +'<text x="140" y="95" fill="#6ee7b7" font-size="8">Message Flow</text>'
  // return message flow
  +'<line x1="165" y1="142" x2="185" y2="58" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#amf)"/>'
  +'<text x="175" y="110" fill="#6ee7b7" font-size="8">Return</text>'
  // sequence flows
  +'<line x1="63" y1="45" x2="73" y2="45" stroke="#64748b" stroke-width="1.5" marker-end="url(#apl)"/>'
  +'<line x1="155" y1="45" x2="172" y2="45" stroke="#64748b" stroke-width="1.5" marker-end="url(#apl)"/>'
  +'<line x1="63" y1="155" x2="73" y2="155" stroke="#64748b" stroke-width="1.5" marker-end="url(#apl)"/>'
  +'</svg>';


var Q_UML = [
// ═══ THEORY 1-10 ═══
{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"You need to describe the requirements for a system: what functions it performs and for which users. Which type of UML diagram should you choose?",
 opts:["Class Diagram — shows the structure of classes","Use Case Diagram — shows actors and their interaction with the system","Sequence Diagram — shows the order of messages","Deployment Diagram — shows the physical infrastructure"],
 ans:1,
 exp:"The Use Case Diagram is the standard tool for describing functional requirements. Actors (users/systems) + Use Cases (ellipses) + relationships (include/extend). This is the diagram used when writing an SRS and aligning with the business. An Activity Diagram is for describing the PROCESS of performing a single operation. Class — for structure. State Machine — for an object's lifecycle."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"What is the difference between «include» and «extend» in a Use Case diagram?",
 opts:["«include» — always executed (mandatory part); «extend» — conditional (optional behavior)","«include» — conditional; «extend» — always executed","They are interchangeable, the only difference is the arrow direction","«include» — for actors; «extend» — for Use Cases"],
 ans:0,
 exp:"«include» = the base UC ALWAYS invokes the included UC — mandatory decomposition (e.g., Login always includes 2FA Verify). «extend» = the extension fires ONLY when the condition at the extension point is met (e.g., Add Discount — only when a promo code is present)."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"What is the difference between Aggregation and Composition in a Class Diagram?",
 opts:["Aggregation (hollow diamond) — weak ownership, the part can exist independently; Composition (filled diamond) — strong ownership, the part is destroyed together with the whole","Composition — weak ownership; Aggregation — strong","They are semantically identical, the only difference is notation","Aggregation — for primitives; Composition — for objects"],
 ans:0,
 exp:"The key difference is lifecycle. Composition (◆ filled): a Room does not exist without a House. Aggregation (◇ hollow): an Employee can belong to several Departments and exists independently. This matters for cascade deletes in the DB and ORM."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"In a Sequence Diagram: how does a synchronous call differ from an asynchronous one in notation?",
 opts:["Synchronous — solid arrow with a filled arrowhead (▶); asynchronous — solid arrow with an open arrowhead (▷)","Synchronous — dashed arrow; asynchronous — solid","Synchronous — horizontal arrow; asynchronous — diagonal","There is no difference in notation — only a comment"],
 ans:0,
 exp:"Synchronous call (▶ filled arrowhead) — the sender WAITS for a reply, an activation box is shown. Asynchronous (▷ open arrowhead) — fire-and-forget, the sender continues without waiting. A return is always a dashed arrow with an open arrowhead (- - ▷)."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"Which UML element is used in an Activity Diagram to start parallel flows (fork) and synchronize them (join)?",
 opts:["Decision Node (diamond) with several outgoing flows","Fork/Join Node — a thick horizontal or vertical bar","Initial Node (filled circle) with several arrows","Merge Node (diamond) with several incoming flows"],
 ans:1,
 exp:"A Fork Node (thick bar) splits one flow into several parallel ones — all outgoing paths are activated simultaneously. A Join Node (thick bar) waits for ALL incoming flows before continuing. Decision/Merge — for conditional branching. Initial Node — only the starting point."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"In BPMN 2.0, which Gateway routes the flow to the first event that occurs (e.g., payment received OR timer expired)?",
 opts:["Parallel Gateway (AND) — starts all paths simultaneously","Exclusive Gateway (XOR) — takes one path based on a condition","Event-Based Gateway — takes the path of whichever event occurs first","Inclusive Gateway (OR) — activates one or more paths"],
 ans:2,
 exp:"The Event-Based Gateway (a diamond containing a double circle with a pentagon inside) is designed specifically for a race between events. It is followed by catching events (Message, Timer, etc.). Whichever event occurs first — that path is taken. XOR works with data conditions, not events."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"How does a Call Activity differ from a Sub-Process in BPMN 2.0?",
 opts:["Call Activity — a globally reusable process (thick border); Sub-Process — locally embedded (thin border)","Sub-Process — global; Call Activity — local","Call Activity cannot have Boundary Events; Sub-Process can","They are identical — the only difference is visual rendering"],
 ans:0,
 exp:"A Call Activity (thick/bold border + '+') invokes a GLOBALLY defined process — it is reused from several places and versioned separately. A Sub-Process (thin border + '+') is embedded LOCALLY in the parent process. Rule: if the same piece of logic is invoked in 2+ places — make it a Call Activity."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"In BPMN: what is a Non-Interrupting Boundary Event and how does it visually differ from an Interrupting one?",
 opts:["Non-Interrupting — DASHED circle border; the task continues, a parallel path is started","Non-Interrupting — SOLID border; interrupts the task","Non-Interrupting — double circle border","There is no visual difference — only an attribute in the XML"],
 ans:0,
 exp:"A Non-Interrupting Boundary Event is a DASHED circle on the task border. When triggered, it starts a PARALLEL path WITHOUT cancelling the main task. Interrupting (solid circle) — cancels the task and routes the flow to a handler. Typical example: a reminder timer that does not cancel the main step."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"Which notation on a Class Diagram denotes interface REALIZATION (implements)?",
 opts:["Solid line with a hollow triangle (inheritance)","Dashed line with an open (hollow) triangle, arrow pointing to the interface","Dashed line with a dependency arrow (open arrowhead)","Solid line with a filled diamond (composition)"],
 ans:1,
 exp:"Realization (implementing an interface) = dashed line + open (hollow) triangle arrowhead, pointing FROM the class TO the interface. Solid + open triangle = Generalization (inheritance). Confusing Realization with Generalization is one of the most common interview mistakes."},

{sec:"theory",lab:"Theory — Notation & Concepts",type:"concept",
 q:"In BPMN 2.0, a Message Flow (dashed line with an arrow) can connect:",
 opts:["Any elements within one Pool, including different Lanes","Only elements from DIFFERENT Pools (different participants/organizations/systems)","Any elements — both within a Pool and between Pools","Only Events — not Tasks and not Gateways"],
 ans:1,
 exp:"Message Flow = communication between DIFFERENT Pools (different participants). Within one Pool — even between Lanes — only Sequence Flow (solid arrow) is used. This is a fundamental BPMN 2.0 rule; violating it makes the model semantically incorrect."},

// ═══ UML 11-25 ═══
{sec:"uml",lab:"UML — Use Case",type:"choose_diagram",
 q:"Task: describe what a registered user can do in an online banking system (view balance, transfer, pay). Which UML diagram fits BEST?",
 opts:["Activity Diagram — shows the steps of each operation","Use Case Diagram — shows actors and the available system functions","Class Diagram — shows the entities of the banking system","State Machine — shows the account states"],
 ans:1,
 exp:"The Use Case Diagram is ideal for describing FUNCTIONAL REQUIREMENTS from the user's point of view. Actor 'Registered User' + Use Cases (View Balance, Transfer Money, Pay Bill). An Activity Diagram is for describing the PROCESS of performing a single operation. Class — for structure. State Machine — for an object's lifecycle."},

{sec:"uml",lab:"UML — Use Case",type:"missing_element",
 q:"In a Use Case diagram: UseCase 'Login' is connected to UseCase '2FA Verification' by a dashed arrow. Which stereotype should be on this relationship?",
 opts:["«extend» — because 2FA extends Login conditionally","«include» — because Login ALWAYS includes 2FA Verification","«generalize» — because 2FA is a special case of Login","Association without a stereotype"],
 ans:1,
 exp:"«include» — Login ALWAYS requires 2FA Verification (mandatory step). The «include» arrow goes FROM the base UC (Login) TO the included one (2FA Verify); the OPEN arrowhead points to the included UC. «extend» would be correct if 2FA were optional (e.g., only for certain browsers)."},

{sec:"uml",lab:"UML — Sequence",type:"missing_element",
 q:"In the diagram below: Browser → API GW (POST /login) → AuthService (validateToken()) → API GW ({valid:true}). What is MISSING at step 4?",
 svg:"seq1",
 opts:["A synchronous call from API GW to Browser (new request)","A Return message (dashed arrow) from API GW back to Browser with the authorization result","Creation of a new Session object","An asynchronous event from AuthService to Browser"],
 ans:1,
 exp:"After receiving the reply from AuthService, the API Gateway must return the result to the Browser — this is a Return Message (dashed arrow with an open arrowhead, - - ▷), e.g.: 200 OK + JWT token. Without this step the scenario is incomplete. Return messages are always paired with synchronous calls."},

{sec:"uml",lab:"UML — State Machine",type:"missing_element",
 q:"The State Machine diagram of an order (Pending → Paid → Shipped, Cancelled). What should be on the missing transition from Pending to Cancelled?",
 svg:"state1",
 opts:["Guard condition [isPaid = true]","Event 'cancelOrder' (e.g., the user cancelled) or timer after(24h) [not paid]","Completion transition (automatic, without a trigger)","Signal 'paymentFailed' from the payment system"],
 ans:1,
 exp:"The transition from Pending to Cancelled can be caused by two types of triggers: 1) Event 'cancelOrder' — an explicit user action, 2) Time trigger 'after(24h)' — automatic cancellation when the payment window expires. Guard [isPaid=true] logically contradicts a transition to Cancelled. A Completion transition happens automatically after internal activities finish."},

{sec:"uml",lab:"UML — Activity",type:"choose_diagram",
 q:"The diagram below shows a request processing flow. Which type of UML diagram is it?",
 svg:"act1",
 opts:["State Machine Diagram — an object's lifecycle","Sequence Diagram — object interaction over time","Activity Diagram — a flow of actions with a Decision Node","Use Case Diagram — system functions"],
 ans:2,
 exp:"In the diagram: Initial Node (filled circle), Action (rectangle 'Submit Request'), Decision Node (diamond with conditions [approved]/[rejected]), two Actions, Activity Final (circle with a filled dot inside). This is an Activity Diagram. A State Machine uses states with named borders, not rectangular actions. A diamond in Activity = Decision; in State Machine = Choice pseudo-state."},

{sec:"uml",lab:"UML — Class",type:"missing_element",
 q:"On a Class Diagram: Order (1) — ? — Customer. A Customer can have many Orders. What should replace «?» (the multiplicity on the Order side)?",
 svg:"class1",
 opts:["1 — one order per customer","0..* — zero or more orders","1..* — one or more orders","0..1 — zero or one order"],
 ans:1,
 exp:"A Customer CAN have MANY orders (including 0, if a new customer has not bought anything yet). So on the Order side: 0..* (zero to many). 1 is wrong — a customer may have no orders. 1..* is wrong — it would force a customer to have at least 1 order. In UML the multiplicity reads: one Customer is linked to (0..*) Orders."},

{sec:"uml",lab:"UML — Use Case",type:"choose_diagram",
 q:"The business asks you to show exactly how the order checkout process happens — step by step, with branches (card / cash payment) and parallel steps (sending email and SMS). Which diagram should you choose?",
 opts:["Use Case Diagram — shows actors and functions","Activity Diagram — shows the flow of steps with branches and parallel paths","Sequence Diagram — shows system interaction during checkout","Class Diagram — shows the entities Order, Payment, Customer"],
 ans:1,
 exp:"The Activity Diagram is the best choice for a step-by-step description of a business process with branches (Decision) and parallelism (Fork/Join). Use Case — for WHAT the system does, not HOW. Sequence — for component interaction, not for business logic with branches. Class — for data structure."},

{sec:"uml",lab:"UML — Sequence",type:"read_diagram",
 q:"In a Sequence Diagram, a dashed arrow with an OPEN arrowhead goes from object B to object A. What does it mean?",
 opts:["An asynchronous call: B sends a message to A without waiting","A Return message — returning the result of a synchronous call that A previously made to B","A Create message — creating a new object A","A Destroy message — destroying the object"],
 ans:1,
 exp:"A dashed arrow with an open (hollow) arrowhead = Return Message — the reply to a preceding synchronous call. Always paired: if A called B (solid filled arrow), then B returns to A with a dashed arrow. Async message = solid open arrow. Create = dashed arrow to the new object's box. Destroy = X at the end of the lifeline."},

{sec:"uml",lab:"UML — Class",type:"read_diagram",
 q:"In a Class Diagram: a solid line with a HOLLOW triangle (▷), arrow from Dog to Animal. What does it mean?",
 opts:["Interface realization — Dog implements Animal","Generalization (inheritance) — Dog inherits from Animal. The arrow ALWAYS goes from subclass to superclass","Association — Dog is linked to Animal","Dependency — Dog uses Animal"],
 ans:1,
 exp:"Solid line + hollow (unfilled) triangle = Generalization (inheritance). The direction is ALWAYS from subclass to superclass (Dog → Animal). Do not confuse it with Realization (dashed + triangle = implements an interface). Diamond = Aggregation/Composition. Open arrow = Association. Dashed + open arrow = Dependency."},

{sec:"uml",lab:"UML — Class",type:"choose_diagram",
 q:"You need to show a microservice architecture: OrderService requires the IInventory interface, which is implemented by InventoryService. Which notation is CORRECT for a Class/Component diagram?",
 opts:["An Association arrow from OrderService to InventoryService","InventoryService —implements→ IInventory (Realization); OrderService --depends-on--> IInventory (Dependency)","Generalization from OrderService to InventoryService","Message Flow from OrderService to InventoryService"],
 ans:1,
 exp:"The correct Dependency Inversion pattern: 1) InventoryService implements IInventory (dashed + hollow triangle). 2) OrderService depends on IInventory (dashed + open arrow). This shows that OrderService does NOT know about InventoryService directly — only through the interface. Message Flow is a BPMN element, not UML."},

{sec:"uml",lab:"UML — Activity",type:"missing_element",
 q:"In the Activity Diagram of a CI/CD pipeline: after 'Build' → Fork Node → 'Unit Tests' and 'Integration Tests' (in parallel). After both tests, before 'Deploy', there must be an element. Which one?",
 opts:["Decision Node (diamond) — to check whether the tests passed","Join Node (thick bar) — waits for BOTH parallel flows to finish","Merge Node (diamond) — merges alternative branches","Initial Node — restarts the process"],
 ans:1,
 exp:"A Join Node (thick horizontal/vertical bar) = synchronizer of parallel flows. It waits for ALL incoming parallel flows to finish before activating the outgoing one. Fork starts parallel flows, Join synchronizes them. A Merge Node works with ALTERNATIVE branches (after a Decision), not parallel ones."},

{sec:"uml",lab:"UML — Sequence",type:"choose_diagram",
 q:"Task: show the order of calls during authorization — Browser → API Gateway → AuthService → Database. Which diagram fits best?",
 opts:["Class Diagram — shows relationships between components","Sequence Diagram — shows the order of messages between participants over time","Activity Diagram — shows the steps of the authorization process","State Machine — shows the states of the user session"],
 ans:1,
 exp:"The Sequence Diagram is ideal for showing the ORDER OF INTERACTIONS between components/objects over time. Lifelines (Browser, API GW, AuthService, DB) + numbered messages + activation boxes. A Class Diagram shows structure (statics), not behavior. Activity — for business processes, not for technical API calls."},

{sec:"uml",lab:"UML — Use Case",type:"read_diagram",
 q:"In a Use Case diagram, a <<extend>> arrow goes from UseCase 'Apply Discount' to UseCase 'Checkout'. What does it mean?",
 opts:["Checkout ALWAYS invokes Apply Discount during checkout","Apply Discount CONDITIONALLY extends Checkout — only when a promo code or a special condition is present","Apply Discount inherits behavior from Checkout","Checkout includes Apply Discount as a mandatory step"],
 ans:1,
 exp:"«extend» = the extending UC ('Apply Discount') adds behavior to the base one ('Checkout') ONLY when a condition is met (extension point). The arrow goes FROM the extension TO the base UC. This means: Checkout works without Apply Discount, but in special cases Apply Discount extends its behavior."},

{sec:"uml",lab:"UML — Class",type:"draw_diagram",
 q:"A blog system needs a Class Diagram. Requirements: a User creates Posts, a Post has Comments, a Comment belongs to a User. Which multiplicities are CORRECT on the User→Post relationship?",
 opts:["User (1) — (1) Post — one user creates exactly one post","User (1) — (0..*) Post — one user can have zero or many posts","User (0..*) — (1) Post — many users belong to one post","User (1..*) — (1..*) Post — many users and many posts"],
 ans:1,
 exp:"User (1) — (0..*) Post: one specific User has written zero to many Posts (0 if a new user, * if they write actively). Reads: '1 User has 0..* Posts'. Conversely: each Post is written by exactly 1 User (not anonymously). User(0..*) — Post(1) would be wrong — it would say 'a Post has many User authors'."},

{sec:"uml",lab:"UML — Sequence",type:"draw_diagram",
 q:"An API call with retry logic: Client calls Service, Service may return an error (up to 3 times), then success. Which Sequence Diagram element should be used to model the retry loop?",
 opts:["Alt combined fragment — for alternative scenarios","Loop combined fragment with the condition [retry < 3 AND error] around the call-response block","Ref combined fragment — a reference to another scenario","Break combined fragment — for exiting the flow"],
 ans:1,
 exp:"A Loop combined fragment (rectangle labeled 'loop' with a guard condition) models repeated interactions. Syntax: loop(min, max) [guard]. In our case: loop(0,3)[error] around the Client→Service call + Service→Client error response pair. An Alt fragment is for 'if/else' scenarios (e.g.: [success] vs [error]). Break — for an early exit."},

// ═══ BPMN 26-40 ═══
{sec:"bpmn",lab:"BPMN — Process Modeling",type:"choose_diagram",
 q:"Task: model the business process of handling a loan application involving three parties (Client, Bank, Security Department). Which tool fits BEST?",
 opts:["UML Activity Diagram with Swimlanes","BPMN 2.0 with three Pools or Lanes — designed specifically for business processes with participants","UML Sequence Diagram with three objects","UML Use Case Diagram with three actors"],
 ans:1,
 exp:"BPMN 2.0 was created for exactly this: Pool = process participant (Client, Bank, Security Department), Lane = role/department within a Pool. Key rules from the standard: Sequence Flow (solid) — only WITHIN one Pool, may freely cross Lane boundaries. Message Flow (dashed) — ONLY between different Pools. An Activity Diagram with Swimlanes is technically possible, but BPMN is semantically richer for business processes (task types, events, flow rules)."},

{sec:"bpmn",lab:"BPMN — Gateways",type:"missing_element",
 q:"In the diagram: after 'Check Stock' the flow goes to gateway «?». Two paths leave the gateway: [in stock] → 'Confirm Order' and [out of stock] → 'Notify Out of Stock'. Which Gateway should it be?",
 svg:"gw1",
 opts:["Parallel Gateway (AND) — activates BOTH paths simultaneously","Exclusive Gateway (XOR) — takes ONE path based on a data condition","Inclusive Gateway (OR) — activates one or more paths","Event-Based Gateway — waits for an event"],
 ans:1,
 exp:"The Exclusive Gateway (XOR, diamond with an X) is ideal for mutually exclusive conditions: the item is either in stock or not — both paths cannot happen at once. An AND Gateway would send the flow down BOTH paths, which is logically absurd. An OR Gateway would allow several paths. Event-Based waits for an event, not a data condition."},

{sec:"bpmn",lab:"BPMN — Gateways",type:"missing_element",
 q:"In the diagram: after 'Receive Order' — AND Split → 'Process Payment' and 'Update Inventory' (in parallel). Before 'Ship Order' there is gateway «?». It must continue the process only AFTER BOTH steps. Which Gateway?",
 svg:"par1",
 opts:["Exclusive Gateway (XOR Join) — passes the first one to finish","Parallel Gateway (AND Join) — waits for ALL incoming flows","Inclusive Gateway (OR Join) — waits for the activated flows","Event-Based Gateway — waits for an event"],
 ans:1,
 exp:"The Parallel Gateway (AND Join, diamond with '+') waits for ALL tokens from ALL incoming flows before continuing. This is a mandatory BPMN rule: an AND Split must be balanced by an AND Join. An XOR Join would pass the first finished flow — Ship Order would start before payment. An OR Join works with flows that were activated, but not necessarily all of them."},

{sec:"bpmn",lab:"BPMN — Events",type:"read_diagram",
 q:"In the diagram, the task 'Process Payment' has a dashed circle with a timer icon on its border, with an arrow going to 'Send Reminder Email'. What happens after one hour?",
 svg:"bound1",
 opts:["The task 'Process Payment' will be CANCELLED and 'Send Reminder Email' will start","'Send Reminder Email' starts in parallel; the task 'Process Payment' keeps running","The process stops completely and waits for further instructions","The flow returns to the start of the process"],
 ans:1,
 exp:"A DASHED Boundary Timer Event = Non-Interrupting. After the specified time it starts a PARALLEL path (the reminder) WITHOUT interrupting the main task. If the border were SOLID (Interrupting), Process Payment would be cancelled. This is a typical reminder pattern: keep processing the payment, but send a reminder after an hour."},

{sec:"bpmn",lab:"BPMN — Events",type:"concept",
 q:"In BPMN 2.0, which element is used to wait for ONE of several possible messages (e.g., either a payment confirmation or a cancellation from the client — whichever arrives first)?",
 opts:["Parallel Gateway (AND) with two Receive Tasks","Event-Based Gateway with two catching Message Events","Inclusive Gateway (OR) with two Message Events","XOR Gateway with two conditions"],
 ans:1,
 exp:"The Event-Based Gateway (a diamond containing a double circle with a pentagon inside) creates a 'race condition' between events. It is followed by catching Intermediate Events (Message, Timer, etc.) — whichever event occurs first, that path is activated. AND would start BOTH paths. XOR works with data conditions, not events."},

{sec:"bpmn",lab:"BPMN — Pools & Lanes",type:"read_diagram",
 q:"The diagram has two Pools: 'E-Shop' and 'Payment GW'. Between them is a dashed line with an arrow. What does this connection represent?",
 svg:"pool1",
 opts:["Sequence Flow — the sequence of steps within one Pool","Message Flow — message exchange between different participants (Pools)","Association — an informational link without passing control","Data Flow — data transfer between systems"],
 ans:1,
 exp:"A dashed line with an open arrowhead between Pools = Message Flow. It is the only permitted way to communicate between Pools in BPMN 2.0. Sequence Flow (solid) NEVER crosses a Pool boundary. Different Pools = different participants/organizations = message exchange, not direct control."},

{sec:"bpmn",lab:"BPMN — Tasks",type:"concept",
 q:"You need to model a task performed AUTOMATICALLY by the system (a call to an external API). Which Task type should be used in BPMN 2.0?",
 opts:["User Task — performed by a human WITH system support (via UI/BPMS)","Service Task — performed automatically by the system, no human involved","Manual Task — performed by a human OUTSIDE the system (no BPMS, not tracked)","Script Task — an embedded script runs automatically"],
 ans:1,
 exp:"Service Task (⚙️) = automatic execution by the system (API call, integration, DB query) — no human involved. The critical distinction per BPMN 2.0: User Task = human + system (the BPMS tracks execution). Manual Task = human WITHOUT the system (the BPMS neither controls nor tracks it — e.g., hold a meeting, install equipment at the client's site). Script Task = embedded code, automatic like a Service Task, but without calling an external service."},

{sec:"bpmn",lab:"BPMN — Sub-Processes",type:"concept",
 q:"The 'KYC Verification' process is used in 5 different business processes: account opening, loan, insurance, etc. How should this be modeled correctly in BPMN 2.0?",
 opts:["Insert a Sub-Process (thin border) with identical content into each of the 5 processes","A Call Activity (thick border) in each process, referencing one global 'KYC Verification' process","Copy all KYC steps directly into each process","Use one large Pool for all 5 processes"],
 ans:1,
 exp:"The Call Activity is BPMN's reuse mechanism. You define the global 'KYC Verification' process once, and 5 Call Activities reference it. A change to KYC is applied automatically everywhere. A (local) Sub-Process in each place is an anti-pattern: duplication, maintenance complexity. Rule: the same process in 2+ places = Call Activity."},

{sec:"bpmn",lab:"BPMN — Error Handling",type:"missing_element",
 q:"In a payment process: if the task 'Charge Card' throws a 'PaymentFailed' error, the flow must go to 'Notify Customer' and end. What needs to be added to the task 'Charge Card'?",
 opts:["Non-Interrupting Boundary Timer Event — starts the notification in parallel","Interrupting Boundary Error Event — catches the error, cancels the task, redirects to 'Notify Customer'","Intermediate Catch Error Event in the flow after the task","Error End Event inside the task"],
 ans:1,
 exp:"An Interrupting Boundary Error Event (SOLID circle with a lightning bolt '!') on the task: catches an Error with a matching error code, CANCELS the task 'Charge Card', and redirects the flow to the error handler ('Notify Customer'). Non-Interrupting does not fit — the task must be stopped on error. An Intermediate Catch Event in the flow does not catch task errors. Error End = throws an error."},

{sec:"bpmn",lab:"BPMN — Process Design",type:"draw_diagram",
 q:"You need to model: 'After the application is approved, the system sends an email AND an SMS simultaneously. Only after BOTH confirmations are received does the process continue.' Which sequence of BPMN elements is correct?",
 opts:["XOR Split → Send Email → XOR Join → Send SMS → Continue","AND Split (Parallel GW) → Send Email + Send SMS (in parallel) → AND Join (Parallel GW) → Continue","OR Split → Send Email → OR Join → Continue","Event-Based GW → Send Email → AND Join → Continue"],
 ans:1,
 exp:"An AND Split (Parallel GW, diamond with '+') creates parallel tokens for both paths. Send Email and Send SMS run simultaneously. The AND Join waits for BOTH to finish before continuing. XOR — only one path. OR Join waits for the activated paths. Event-Based — for a race between events, not for parallel execution."},

{sec:"bpmn",lab:"BPMN — Process Design",type:"choose_diagram",
 q:"A customer places an order on a website. Requirements: show the interaction between the Customer, the Online Store and the Payment Gateway, with messages passed between them. Which tool should be used?",
 opts:["UML Sequence Diagram — better at showing the order of calls","BPMN with three Pools and Message Flow between them","UML Activity Diagram with Swimlanes","UML Component Diagram — shows interfaces"],
 ans:1,
 exp:"BPMN with three Pools (Customer, Store, Payment Gateway) + Message Flow = the standard for cross-organizational/cross-system business processes. Unlike a UML Sequence Diagram, BPMN shows the full business process with events, tasks and gateways — not just the order of calls. For a business analyst it is more readable and closer to the customer's notation."},

{sec:"bpmn",lab:"BPMN — Tasks",type:"concept",
 q:"A manager holds a meeting with a client. This meeting happens outside the system — the BPMS neither controls nor tracks its execution. Which Task type should be used?",
 opts:["User Task — a human performs the task through the BPMS interface","Manual Task — a human performs the action OUTSIDE the system, the BPMS does not track it","Service Task — performed automatically by the system","None Task — the task type is undefined"],
 ans:1,
 exp:"Manual Task (✋) = a task performed by a human outside the system, without IT tools. The BPMS neither controls it nor tracks whether it was done. Typical examples: hold a meeting, install equipment at the client's site, sign a paper document. The key difference from a User Task: the BPMS assigns a User Task to the performer in its interface and tracks it. A Manual Task is a reminder that the action must be done at all, but the system plays no part in it."},

{sec:"bpmn",lab:"BPMN — Collaboration",type:"read_diagram",
 q:"In a BPMN diagram, a task is in Lane 'Credit Department' inside Pool 'Bank'. A Sequence Flow comes into it from Lane 'Loan Officer' (same Pool). This is:",
 opts:["An error — Sequence Flow cannot cross Lanes","Correct — Sequence Flow freely connects elements within one Pool, including across Lanes","It should be replaced with a Message Flow","A Gateway must be added between the Lanes"],
 ans:1,
 exp:"Sequence Flow (solid arrow) freely crosses Lanes within one Pool — this is correct and standard practice. Lanes are only a visual separation of responsibility (roles/departments). Message Flow (dashed) is needed ONLY between different Pools. Adding a Gateway between Lanes is not required."},

{sec:"bpmn",lab:"BPMN — Process Design",type:"draw_diagram",
 q:"An onboarding process: after registration, three steps must be performed in order — Verify Email → Setup Profile → Activate Account. If an error occurs at ANY step, the whole process ends with an Error End Event. Which pattern is CORRECT?",
 opts:["Three tasks in sequence through an XOR Gateway (with an error condition)","Three tasks in sequence (Sequence Flow). Each has an Interrupting Boundary Error Event → Error End Event. If there are no errors — a final None End Event","A Sub-Process with a Loop marker containing all three steps","AND Split → three tasks in parallel → AND Join"],
 ans:1,
 exp:"For a linear process with error handling: three tasks in sequence via Sequence Flow. Each has an Interrupting Boundary Error Event leading to an Error End Event (or a shared Error End). If there are no errors, the flow reaches a None End Event. An XOR Gateway for errors is wrong (a data condition, not an event). Parallel AND does not fit — the steps must run in order."},

{sec:"bpmn",lab:"BPMN — Advanced",type:"choose_diagram",
 q:"You need to describe: 'Every Monday at 9:00 the system automatically starts the report generation process.' Which BPMN Start Event should be used?",
 opts:["None Start Event — a plain start","Message Start Event — waits for an incoming message","Timer Start Event — starts the process on a schedule","Signal Start Event — reacts to a broadcast signal"],
 ans:2,
 exp:"A Timer Start Event (circle with a clock icon) starts the process on a schedule (cron expression, specific date/time, interval). Exactly for 'every Monday at 9:00'. Message Start — waits for an incoming message from another Pool. Signal Start — reacts to a broadcast signal from any participant. None Start — manual start or invocation."}
];

// ═══════════════════════════════════════════
// APP STATE & LOGIC
// ═══════════════════════════════════════════

// ─── 5 DIAGRAM READING EXERCISES ───
SVGS_UML.read1 = '<svg viewBox="0 0 480 170" width="460" height="165" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ra" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker><marker id="ro" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs><rect x="20" y="10" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="60" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Client</text><rect x="190" y="10" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="230" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">OrderService</text><rect x="360" y="10" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="400" y="25" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Database</text><line x1="60" y1="32" x2="60" y2="165" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/><line x1="230" y1="32" x2="230" y2="165" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/><line x1="400" y1="32" x2="400" y2="165" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/><rect x="56" y="50" width="8" height="80" fill="#3b82f6" opacity="0.4"/><rect x="226" y="65" width="8" height="50" fill="#3b82f6" opacity="0.4"/><rect x="396" y="82" width="8" height="22" fill="#3b82f6" opacity="0.4"/><line x1="64" y1="55" x2="226" y2="67" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ra)"/><text x="140" y="54" text-anchor="middle" fill="#e2e8f0" font-size="9">1: createOrder(items)</text><line x1="234" y1="84" x2="396" y2="84" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ra)"/><text x="310" y="79" text-anchor="middle" fill="#e2e8f0" font-size="9">2: INSERT order</text><line x1="396" y1="102" x2="234" y2="102" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ro)"/><text x="310" y="97" text-anchor="middle" fill="#64748b" font-size="9">3: orderId=42</text><line x1="226" y1="120" x2="64" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#ro)"/><text x="140" y="115" text-anchor="middle" fill="#64748b" font-size="9">4: {id:42, status:"created"}</text></svg>';

SVGS_UML.read2 = '<svg viewBox="0 0 460 180" width="440" height="175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="rb" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs><circle cx="50" cy="30" r="10" fill="#3b82f6"/><rect x="20" y="54" width="90" height="36" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="65" y="76" text-anchor="middle" fill="#93c5fd" font-size="11">New</text><rect x="190" y="54" width="90" height="36" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="235" y="76" text-anchor="middle" fill="#93c5fd" font-size="11">Processing</text><rect x="190" y="130" width="90" height="36" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/><text x="235" y="152" text-anchor="middle" fill="#6ee7b7" font-size="11">Completed</text><rect x="350" y="54" width="90" height="36" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/><text x="395" y="76" text-anchor="middle" fill="#fca5a5" font-size="11">Cancelled</text><circle cx="235" cy="175" r="8" fill="none" stroke="#ef4444" stroke-width="3"/><circle cx="235" cy="175" r="3" fill="#ef4444"/><line x1="50" y1="40" x2="50" y2="53" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rb)"/><line x1="110" y1="72" x2="188" y2="72" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rb)"/><text x="148" y="67" text-anchor="middle" fill="#e2e8f0" font-size="9">submit()</text><line x1="280" y1="72" x2="348" y2="72" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rb)"/><text x="312" y="67" text-anchor="middle" fill="#e2e8f0" font-size="9">cancel()</text><line x1="235" y1="90" x2="235" y2="128" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rb)"/><text x="252" y="113" fill="#e2e8f0" font-size="9">complete()</text><line x1="235" y1="166" x2="235" y2="183" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rb)"/><line x1="65" y1="72" x2="350" y2="72" stroke="#e2e8f0" stroke-width="0.3" stroke-dasharray="2,2" opacity="0.2"/></svg>';

SVGS_UML.read3 = '<svg viewBox="0 0 500 160" width="480" height="155" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="130" height="90" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="85" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Product</text><line x1="20" y1="44" x2="150" y2="44" stroke="#3b82f6" stroke-width="1"/><text x="85" y="59" text-anchor="middle" fill="#cbd5e1" font-size="10">- id: Long</text><text x="85" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- name: String</text><text x="85" y="85" text-anchor="middle" fill="#cbd5e1" font-size="10">- price: Decimal</text><line x1="20" y1="90" x2="150" y2="90" stroke="#3b82f6" stroke-width="1"/><text x="85" y="104" text-anchor="middle" fill="#a5b4fc" font-size="10">+ getPrice()</text><rect x="350" y="20" width="130" height="90" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="415" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">OrderLine</text><line x1="350" y1="44" x2="480" y2="44" stroke="#3b82f6" stroke-width="1"/><text x="415" y="59" text-anchor="middle" fill="#cbd5e1" font-size="10">- quantity: Int</text><text x="415" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- unitPrice: Decimal</text><line x1="350" y1="78" x2="480" y2="78" stroke="#3b82f6" stroke-width="1"/><text x="415" y="92" text-anchor="middle" fill="#a5b4fc" font-size="10">+ getSubtotal()</text><defs><marker id="rc" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs><line x1="150" y1="65" x2="350" y2="65" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rc)"/><text x="210" y="58" fill="#64748b" font-size="11">1</text><text x="315" y="58" fill="#64748b" font-size="11">0..*</text><text x="245" y="80" fill="#f59e0b" font-size="9">«uses»</text></svg>';

SVGS_UML.read4 = '<svg viewBox="0 0 500 180" width="480" height="175" xmlns="http://www.w3.org/2000/svg"><defs><marker id="rd" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs><circle cx="250" cy="18" r="8" fill="#3b82f6"/><rect x="200" y="36" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="250" y="55" text-anchor="middle" fill="#93c5fd" font-size="10">Validate Input</text><rect x="200" y="90" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="250" y="109" text-anchor="middle" fill="#93c5fd" font-size="10">Check Stock</text><polygon points="250,138 275,155 250,172 225,155" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/><text x="250" y="159" text-anchor="middle" fill="#f59e0b" font-size="9">[in stock?]</text><rect x="80" y="142" width="90" height="26" rx="5" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/><text x="125" y="159" text-anchor="middle" fill="#fca5a5" font-size="9">Reject Order</text><rect x="330" y="142" width="90" height="26" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/><text x="375" y="159" text-anchor="middle" fill="#6ee7b7" font-size="9">Confirm Order</text><line x1="250" y1="26" x2="250" y2="35" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rd)"/><line x1="250" y1="66" x2="250" y2="89" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rd)"/><line x1="250" y1="120" x2="250" y2="137" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rd)"/><line x1="225" y1="155" x2="171" y2="155" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rd)"/><text x="195" y="150" text-anchor="middle" fill="#ef4444" font-size="8">[no]</text><line x1="275" y1="155" x2="329" y2="155" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rd)"/><text x="305" y="150" text-anchor="middle" fill="#10b981" font-size="8">[yes]</text></svg>';

SVGS_UML.read5 = '<svg viewBox="0 0 520 190" width="500" height="185" xmlns="http://www.w3.org/2000/svg"><defs><marker id="re" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#64748b"/></marker><marker id="rm" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="none" stroke="#94a3b8" stroke-width="1"/></marker></defs><rect x="10" y="10" width="240" height="80" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="1.5"/><rect x="10" y="10" width="26" height="80" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="23" y="53" text-anchor="middle" fill="#93c5fd" font-size="9" transform="rotate(-90,23,53)">E-Shop</text><text x="45" y="30" fill="#64748b" font-size="8">Lane: Manager</text><rect x="48" y="34" width="80" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="88" y="50" text-anchor="middle" fill="#93c5fd" font-size="9">Create Order</text><polygon points="155,46 170,34 185,46 170,58" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/><line x1="162" y1="46" x2="178" y2="46" stroke="#f59e0b" stroke-width="1.2"/><line x1="170" y1="38" x2="170" y2="54" stroke="#f59e0b" stroke-width="1.2"/><circle cx="218" cy="46" r="10" fill="none" stroke="#f59e0b" stroke-width="1.5"/><circle cx="218" cy="46" r="6" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="45" y="70" fill="#64748b" font-size="8">Lane: Warehouse</text><rect x="48" y="73" width="80" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/><text x="88" y="89" text-anchor="middle" fill="#93c5fd" font-size="9">Pick Items</text><rect x="280" y="50" width="220" height="80" rx="4" fill="#0d1117" stroke="#8b5cf6" stroke-width="1.5"/><rect x="280" y="50" width="26" height="80" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/><text x="293" y="93" text-anchor="middle" fill="#c4b5fd" font-size="9" transform="rotate(-90,293,93)">Courier</text><circle cx="323" cy="90" r="10" fill="none" stroke="#10b981" stroke-width="2"/><rect x="347" y="72" width="80" height="24" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/><text x="387" y="88" text-anchor="middle" fill="#c4b5fd" font-size="9">Deliver Order</text><circle cx="450" cy="84" r="12" fill="none" stroke="#ef4444" stroke-width="4"/><line x1="128" y1="46" x2="153" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#re)"/><line x1="185" y1="46" x2="206" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#re)"/><line x1="170" y1="58" x2="170" y2="73" stroke="#64748b" stroke-width="1.5" marker-end="url(#re)"/><line x1="88" y1="73" x2="88" y2="46" stroke="#64748b" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.4"/><line x1="228" y1="46" x2="290" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#rm)"/><text x="258" y="58" fill="#6ee7b7" font-size="8">Msg Flow</text><line x1="333" y1="90" x2="345" y2="84" stroke="#64748b" stroke-width="1.5" marker-end="url(#re)"/><line x1="427" y1="84" x2="436" y2="84" stroke="#64748b" stroke-width="1.5" marker-end="url(#re)"/></svg>';

Q_UML.push({sec:"uml",lab:"Reading — Sequence Diagram",type:"read_diagram",
 q:"Read the Sequence Diagram. What happens between messages 2 and 3?",
 svg:"read1",
 opts:[
  "Client sends data directly to Database",
  "OrderService performs an INSERT into Database, then Database returns orderId=42 back to OrderService",
  "Database initiates a request to OrderService on its own",
  "Client receives a synchronous reply immediately after call 1"
 ],
 ans:1,
 exp:"Message 2: OrderService → Database — solid arrow (sync call) «INSERT order». Message 3: Database → OrderService — dashed arrow (return) «orderId=42». This is the classic pattern: the service calls the DB, the DB returns the result (the id of the created record). The Client waits for the final reply (message 4) without seeing the internal calls between OrderService and the DB."});

Q_UML.push({sec:"uml",lab:"Reading — State Machine",type:"read_diagram",
 q:"The State Machine diagram of an order. Two transitions are possible from the «Processing» state. Describe them correctly.",
 svg:"read2",
 opts:[
  "From Processing you can only go to Completed; cancellation is impossible",
  "From Processing a transition is possible to Completed (on the complete() event) and to Cancelled (on the cancel() event). From New only to Processing.",
  "From Processing you can return to New on the cancel() event",
  "All transitions are bidirectional — any state can be reached from any other"
 ],
 ans:1,
 exp:"In the diagram: New → (submit()) → Processing → (complete()) → Completed. Also Processing → (cancel()) → Cancelled. There is no direct transition from New to Cancelled — only via Processing. The initial point (filled circle) leads to New. The final point (double circle) comes after Completed. This is a typical order lifecycle."});

Q_UML.push({sec:"uml",lab:"Reading — Class Diagram",type:"read_diagram",
 q:"On the Class Diagram: Product and OrderLine are connected by a line with multiplicities 1 and 0..*. What does this mean?",
 svg:"read3",
 opts:[
  "One Product can be in one OrderLine; an OrderLine exists only with a Product",
  "One Product can be used in several OrderLines (0..*); each OrderLine references exactly 1 Product. The relationship is an association.",
  "Product and OrderLine are the same thing (synonyms)",
  "OrderLine inherits from Product — this is Generalization"
 ],
 ans:1,
 exp:"1 (on the Product side) — each OrderLine references exactly 1 Product. 0..* (on the OrderLine side) — one Product can appear in zero or many order lines. An arrow with an open arrowhead + the «uses» stereotype = a directed association. Not Composition (no diamond), not Generalization (no triangle)."});

Q_UML.push({sec:"uml",lab:"Reading — Activity Diagram",type:"read_diagram",
 q:"On the Activity Diagram: after «Check Stock» there is a diamond with the question [in stock?]. What happens if the item is not in stock?",
 svg:"read4",
 opts:[
  "The process returns to «Validate Input» and starts over",
  "The flow follows the [no] branch to «Reject Order»; the order is rejected",
  "The system automatically orders the item from a supplier",
  "The process stops and waits for the item to become available"
 ],
 ans:1,
 exp:"The diamond = Decision Node in an Activity Diagram. On the [no] condition (item not available) the flow goes left to «Reject Order». On [yes] (item available) — right to «Confirm Order». This is a standard conditional branch. Each branch has its own end point. The process does not loop: both paths lead to completion."});

Q_UML.push({sec:"bpmn",lab:"Reading — BPMN Collaboration",type:"read_diagram",
 q:"The BPMN diagram has two Pools: E-Shop and Courier. Inside E-Shop there are two Lanes. A dashed line runs between the Pools. What is wrong with the following statement: «Sequence Flow connects elements inside E-Shop and can cross the Pool boundary»?",
 svg:"read5",
 opts:[
  "The statement is fully correct — Sequence Flow can do everything listed",
  "Partially correct: Sequence Flow can cross Lanes inside a Pool, BUT cannot cross the Pool boundary. Between Pools — only Message Flow (dashed).",
  "Sequence Flow cannot even cross Lane boundaries inside one Pool",
  "The dashed line between Pools is a Sequence Flow, not a Message Flow"
 ],
 ans:1,
 exp:"The key BPMN rule: Sequence Flow (solid arrow) works ONLY inside one Pool and freely crosses Lane boundaries. Message Flow (dashed arrow with an open arrowhead) — ONLY between different Pools. The diagram shows an AND Gateway and an Event-Based Gateway inside the E-Shop Pool, and the dashed line from E-Shop to Courier is a correct Message Flow."});



var BUILD_TYPES = [
  {id:'bpmn',icon:'🟣',label:'BPMN',desc:'Business processes: events, tasks, gateways'},
  {id:'activity',icon:'🔷',label:'UML Activity',desc:'Control flow, decisions, parallelism'},
  {id:'class',icon:'📐',label:'UML Class',desc:'Classes and the relationships between them'},
  {id:'sequence',icon:'⏱️',label:'UML Sequence',desc:'Message exchange over time'},
  {id:'usecase',icon:'📋',label:'UML Use Case',desc:'Actors and use cases'}
];

var BUILD_EXERCISES = [
{id:'bpmn1',type:'bpmn',title:'Vacation request (with roles: Employee / Manager / HR)',
 scenario:'An employee submits a vacation request. The manager reviews it. If the request is APPROVED, HR processes the vacation and notifies the employee of the approval. All roles work in ONE company. Build the diagram with an explicit Lane for each role (Employee, Manager, HR), then the happy path itself.',
 pool:[
  {id:'a',label:'▭▭ Pool: Company',meta:{kind:'pool',text:'Company'}},
  {id:'b',label:'▤ Lane: Employee (in Pool Company)',meta:{kind:'lane',text:'Employee',pool:'Company'}},
  {id:'c',label:'▤ Lane: Manager (in Pool Company)',meta:{kind:'lane',text:'Manager',pool:'Company'}},
  {id:'d',label:'▤ Lane: HR (in Pool Company)',meta:{kind:'lane',text:'HR',pool:'Company'}},
  {id:'e',label:'⚪ Start Event: Request submitted',meta:{kind:'start',text:'Request submitted',pool:'Company',lane:'Employee'}},
  {id:'f',label:'▭ Task: Submit request',meta:{kind:'task',text:'Submit request',pool:'Company',lane:'Employee'}},
  {id:'g',label:'▭ Task: Review request',meta:{kind:'task',text:'Review request',pool:'Company',lane:'Manager'}},
  {id:'h',label:'◆ Exclusive Gateway: Approved?',meta:{kind:'gateway_x',text:'Approved?',pool:'Company',lane:'Manager'}},
  {id:'i',label:'▭ Task: Process vacation',meta:{kind:'task',text:'Process vacation',pool:'Company',lane:'HR'}},
  {id:'j',label:'▭ Task: Notify employee',meta:{kind:'task',text:'Notify employee',pool:'Company',lane:'HR'}},
  {id:'k',label:'⚫ End Event: Vacation processed',meta:{kind:'end',text:'Vacation processed',pool:'Company',lane:'HR'}},
  {id:'x1',label:'▭ Task: Notify employee of rejection'},
  {id:'x2',label:'⬡ Parallel Gateway'},
  {id:'x3',label:'▭ Task: Deduct a day from salary'},
  {id:'x4',label:'▭ Task: Get approval from HR Director'},
  {id:'x5',label:'✉ Send Task: Notify external contractor (Message Flow)'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h','i','j','k'],
 explanation:'First we declare the container (Pool Company) and its three Lanes (Employee, Manager, HR, one per ROLE that performs actions). Then the process itself: Start and "Submit request" sit in the Employee Lane, "Review request" and the Gateway in the Manager Lane, "Process vacation"/"Notify"/End in the HR Lane. ALL transitions between Lanes remain a SOLID line (Sequence Flow): they cross Lanes but never cross a Pool (it is all ONE company), so no Message Flow is needed here. That is exactly why "Send Task: notify contractor" is an extra element: a contractor would be a separate Pool, while this scenario is only about internal roles.'},

{id:'bpmn2',type:'bpmn',title:'Online store order processing (E-Shop → Courier)',
 scenario:'An order arrives in the online store system (Pool "E-Shop"). Stock availability is checked in the warehouse. If the item is IN STOCK, it is reserved and the order is handed over to the courier service, a SEPARATE organization (Pool "Courier"). Build the diagram: first both Pools, then the scenario for the "item in stock" case, up to the moment the courier receives the order.',
 pool:[
  {id:'a',label:'▭▭ Pool: E-Shop',meta:{kind:'pool',text:'E-Shop'}},
  {id:'b',label:'▭▭ Pool: Courier',meta:{kind:'pool',text:'Courier'}},
  {id:'c',label:'⚪ Start Event: Order received',meta:{kind:'start',text:'Order received',pool:'E-Shop',lane:'E-Shop'}},
  {id:'d',label:'▭ Task: Check warehouse stock',meta:{kind:'task',text:'Check stock',pool:'E-Shop',lane:'E-Shop'}},
  {id:'e',label:'◆ Exclusive Gateway: Item in stock?',meta:{kind:'gateway_x',text:'In stock?',pool:'E-Shop',lane:'E-Shop'}},
  {id:'f',label:'▭ Task: Reserve item',meta:{kind:'task',text:'Reserve item',pool:'E-Shop',lane:'E-Shop'}},
  {id:'g',label:'✉ Send Task: Hand order to courier',meta:{kind:'send',text:'Hand to courier',pool:'E-Shop',lane:'E-Shop'}},
  {id:'h',label:'⚫ End Event: Order received by courier',meta:{kind:'end',text:'Received by courier',pool:'Courier',lane:'Courier'}},
  {id:'x1',label:'▭ Task: Notify about item shortage'},
  {id:'x2',label:'⬡ AND-Gateway (Parallel)'},
  {id:'x3',label:'▭ Task: Process refund'},
  {id:'x4',label:'▭ Task: Generate invoice'},
  {id:'x5',label:'▤ Lane: Sales (in Pool E-Shop)'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h'],
 explanation:'First we declare both Pools (E-Shop and Courier are TWO DIFFERENT organizations). The whole internal E-Shop process (Start → Check → Gateway → Reserve → Send Task) runs as a SOLID line (Sequence Flow), all within one Pool. The transition from the Send Task "Hand to courier" to the End Event in the Courier Pool CROSSES the Pool boundary, and that is ALWAYS a Message Flow (dashed); a Sequence Flow never crosses a Pool. Note that inside E-Shop we did NOT split into Lanes (Sales is an extra element): Lanes are only needed when there are several ROLES inside ONE Pool, while here the whole process is a single role-less flow of the store.'},

{id:'bpmn3',type:'bpmn',title:'Order delivery: Pools and Lanes across organizations',
 scenario:'A customer (a separate organization, Pool "Customer") sends a delivery request. Inside the carrier company (Pool "Delivery Company") there are TWO departments: Lane "Sales" and Lane "Warehouse". Sales processes the request and passes it to Warehouse, which packs the parcel and sends a notification back to the customer. Build the diagram: first the containers (Pool/Lane), then the process itself.',
 pool:[
  {id:'a',label:'▭▭ Pool: Customer',meta:{kind:'pool',text:'Customer'}},
  {id:'b',label:'▭▭ Pool: Delivery Company',meta:{kind:'pool',text:'Delivery Company'}},
  {id:'c',label:'▤ Lane: Sales (in Pool Delivery Company)',meta:{kind:'lane',text:'Sales',pool:'Delivery Company'}},
  {id:'d',label:'▤ Lane: Warehouse (in Pool Delivery Company)',meta:{kind:'lane',text:'Warehouse',pool:'Delivery Company'}},
  {id:'e',label:'⚪ Start Event: Request sent',meta:{kind:'start',text:'Request sent',pool:'Customer',lane:'Customer'}},
  {id:'f',label:'▭ Task: Process request',meta:{kind:'task',text:'Process request',pool:'Delivery Company',lane:'Sales'}},
  {id:'g',label:'▭ Task: Pack parcel',meta:{kind:'task',text:'Pack parcel',pool:'Delivery Company',lane:'Warehouse'}},
  {id:'h',label:'⚫ End Event: Notification sent',meta:{kind:'end',text:'Notification sent',pool:'Delivery Company',lane:'Warehouse'}},
  {id:'i',label:'⚫ End Event: Notification received',meta:{kind:'end',text:'Notification received',pool:'Customer',lane:'Customer'}},
  {id:'x1',label:'▭ Task: Pay for delivery'},
  {id:'x2',label:'⬡ Parallel Gateway'},
  {id:'x3',label:'▤ Lane: Support (in Pool Delivery Company)'},
  {id:'x4',label:'◆ Exclusive Gateway: Item in stock?'},
  {id:'x5',label:'▭ Task: Check customer credit history'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h','i'],
 explanation:'First we declare the containers (Pool Customer, Pool Delivery Company, then its Lanes Sales and Warehouse), then the flow itself. The Start Event sits in the Customer Pool. The transition e→f CROSSES the Pool boundary (Customer → Delivery Company), which is ALWAYS a Message Flow (dashed); a Sequence Flow between Pools is forbidden. The transition f→g stays INSIDE one Pool and merely changes Lane (Sales→Warehouse), which is an allowed Sequence Flow (solid line): crossing Lanes within one Pool is normal. The transition h→i crosses the Pool boundary again, back to the customer, so it is again a Message Flow. The "Support" Lane and the other items are distractors: they are not mentioned in the scenario.'},

{id:'act1',type:'activity',title:'Cash withdrawal at an ATM',
 scenario:'The customer inserts a card and enters a PIN. If the PIN is correct, the customer selects an amount, the ATM dispenses the cash and returns the card. Build the main (successful) scenario in full, from start to the complete termination of the diagram.',
 pool:[
  {id:'a',label:'● Initial Node',meta:{kind:'start',text:'Start'}},
  {id:'b',label:'▭ Action: Insert card',meta:{kind:'task',text:'Insert card'}},
  {id:'c',label:'▭ Action: Enter PIN',meta:{kind:'task',text:'Enter PIN'}},
  {id:'d',label:'◆ Decision Node: PIN correct?',meta:{kind:'gateway_x',text:'PIN correct?'}},
  {id:'e',label:'▭ Action: Select amount',meta:{kind:'task',text:'Select amount'}},
  {id:'f',label:'▭ Action: Dispense cash',meta:{kind:'task',text:'Dispense cash'}},
  {id:'g',label:'▭ Action: Return card',meta:{kind:'task',text:'Return card'}},
  {id:'h',label:'◉ Activity Final',meta:{kind:'end',text:'Activity Final'}},
  {id:'x1',label:'▭ Action: Retain card (capture)'},
  {id:'x2',label:'▮ Fork Node'},
  {id:'x3',label:'⊗ Flow Final'},
  {id:'x4',label:'◇ Merge Node'},
  {id:'x5',label:'▭ Action: Send SMS notification'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h'],
 explanation:'The main flow: Initial → Insert card → Enter PIN → Decision (condition) → Select amount → Dispense cash → Return card → Activity Final. We use Activity Final (not Flow Final) because after the cash is dispensed the whole scenario is fully complete; a Flow Final would stop only one branch, which is not needed here since there are no parallel branches. "Retain card" is an action from the ALTERNATIVE branch of the Decision Node (wrong PIN) and does not belong here. A Fork Node is not needed: there are no parallel actions in this scenario.'},

{id:'act2',type:'activity',title:'Order delivery with parallel preparation',
 scenario:'After the order is placed, two processes start SIMULTANEOUSLY: preparing the food and assigning a courier. As soon as BOTH processes are complete, the order is delivered. Build the scenario with correct use of parallelism (for this exercise, the order between Prepare food and Assign courier is as given in the scenario).',
 pool:[
  {id:'a',label:'● Initial Node',meta:{kind:'start',text:'Start'}},
  {id:'b',label:'▭ Action: Place order',meta:{kind:'task',text:'Place order'}},
  {id:'c',label:'▮ Fork Node',meta:{kind:'fork',text:'Fork'}},
  {id:'d',label:'▭ Action: Prepare food',meta:{kind:'task',text:'Prepare food'}},
  {id:'e',label:'▭ Action: Assign courier',meta:{kind:'task',text:'Assign courier'}},
  {id:'f',label:'▮ Join Node',meta:{kind:'join',text:'Join'}},
  {id:'g',label:'▭ Action: Deliver order',meta:{kind:'task',text:'Deliver order'}},
  {id:'h',label:'◉ Activity Final',meta:{kind:'end',text:'Activity Final'}},
  {id:'x1',label:'◆ Decision Node'},
  {id:'x2',label:'▭ Action: Cancel order'},
  {id:'x3',label:'◇ Merge Node'},
  {id:'x4',label:'⊗ Flow Final'},
  {id:'x5',label:'▭ Action: Pay for order again'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h'],
 explanation:'The key idea: the Fork Node starts TWO parallel branches at the same time ("Prepare food" AND "Assign courier", both are performed, not either/or), and the Join Node SYNCHRONIZES them, waiting for BOTH branches to finish before continuing to "Deliver order". That is why Fork/Join (bars) are needed rather than Decision/Merge (diamonds): the latter are about an ALTERNATIVE (only one branch is chosen), whereas here both branches are mandatory. In real UML the order between parallel actions inside a Fork/Join does not matter, since they happen simultaneously; in this exercise we simply fixed one input order to keep the check simple.'},

{id:'class1',type:'class',title:'Library system',
 scenario:'The library has Members and Books; a member can borrow books (a regular relationship). There is a special type of member, the VIP member, who has more privileges (inherits from the regular member). Build the class diagram in a logical construction order: base entities first, then relationships, then specialization.',
 pool:[
  {id:'a',label:'▭ Class: Book',meta:{kind:'class',text:'Book'}},
  {id:'b',label:'▭ Class: Member',meta:{kind:'class',text:'Member'}},
  {id:'c',label:'— Association: Member — borrows — Book (0..*)',meta:{kind:'assoc',from:'b',to:'a',text:'borrows'}},
  {id:'d',label:'▭ Class: VIPMember',meta:{kind:'class',text:'VIPMember'}},
  {id:'e',label:'▷ Generalization: VIPMember → Member',meta:{kind:'generalization',from:'d',to:'b'}},
  {id:'x1',label:'◆ Composition: Member — Book (part-whole)'},
  {id:'x2',label:'┄▷ Realization: Book implements Comparable'},
  {id:'x3',label:'▭ Class: Librarian'},
  {id:'x4',label:'◇ Aggregation: Library — Book'},
  {id:'x5',label:'▭ Class: Genre'}
 ],
 correctOrder:['a','b','c','d','e'],
 explanation:'The logical construction order: first the base classes (Book, Member), then the relationship between them (an Association, a plain "uses" relationship, NOT a Composition, because a book is not a "part" of a member and exists perfectly well without one), then the specialization (VIPMember) and its Generalization to the parent. A Composition would be the wrong relationship here: part-whole does not fit a "reads/borrows" relationship. The Realization with the Comparable interface, the Librarian class and the Genre class were not mentioned in the scenario, so they are extra elements.'},

{id:'class2',type:'class',title:'Order payment methods',
 scenario:'There is a PaymentMethod interface with payment methods. CreditCardPayment and PayPalPayment are two independent classes, each implementing this interface in its own way. An Order consists of several OrderLines; if the Order is deleted, all of its OrderLines are deleted with it (a strong lifecycle dependency).',
 pool:[
  {id:'a',label:'▭ Interface: «interface» PaymentMethod',meta:{kind:'interface',text:'PaymentMethod'}},
  {id:'b',label:'▭ Class: CreditCardPayment',meta:{kind:'class',text:'CreditCardPayment'}},
  {id:'c',label:'┄▷ Realization: CreditCardPayment implements PaymentMethod',meta:{kind:'realization',from:'b',to:'a'}},
  {id:'d',label:'▭ Class: PayPalPayment',meta:{kind:'class',text:'PayPalPayment'}},
  {id:'e',label:'┄▷ Realization: PayPalPayment implements PaymentMethod',meta:{kind:'realization',from:'d',to:'a'}},
  {id:'f',label:'▭ Class: Order',meta:{kind:'class',text:'Order'}},
  {id:'g',label:'▭ Class: OrderLine',meta:{kind:'class',text:'OrderLine'}},
  {id:'h',label:'◆ Composition: Order — OrderLine',meta:{kind:'composition',from:'f',to:'g'}},
  {id:'x1',label:'▷ Generalization: PayPalPayment → CreditCardPayment'},
  {id:'x2',label:'◇ Aggregation: Order — OrderLine'},
  {id:'x3',label:'— Association: Order — PaymentMethod (direct)'},
  {id:'x4',label:'▭ Class: Invoice'},
  {id:'x5',label:'— Association: CreditCardPayment — PayPalPayment'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h'],
 explanation:'The order: first the interface, then each implementing class IMMEDIATELY followed by its Realization (it is logical to group a class with its own relationship), then Order and OrderLine, and finally the Composition between them (it cannot be drawn before both participating classes exist). Composition is the right choice for Order/OrderLine (an OrderLine does NOT exist without its Order, a strong lifecycle dependency), rather than Aggregation (which fits a "weak" relationship where the part can exist on its own). A Generalization between CreditCardPayment and PayPalPayment would be wrong: they are independent, peer implementations, not a parent-child relationship.'},

{id:'seq1',type:'sequence',title:'System login',
 scenario:'The Client sends a username/password to the AuthServer (a synchronous call: the Client waits for the response). The AuthServer synchronously validates the credentials in the Database. The Database returns the validation result, after which the AuthServer returns a session token to the Client. Build the message sequence from start to finish.',
 pool:[
  {id:'a',label:'Client → AuthServer: login(username, password) [sync ▶]',meta:{kind:'msg',from:'Client',to:'AuthServer',text:'login()',style:'sync'}},
  {id:'b',label:'AuthServer → Database: validateCredentials() [sync ▶]',meta:{kind:'msg',from:'AuthServer',to:'Database',text:'validateCredentials()',style:'sync'}},
  {id:'c',label:'Database ⇢ AuthServer: return isValid [dashed return]',meta:{kind:'msg',from:'Database',to:'AuthServer',text:'return isValid',style:'return'}},
  {id:'d',label:'AuthServer ⇢ Client: return sessionToken [dashed return]',meta:{kind:'msg',from:'AuthServer',to:'Client',text:'return sessionToken',style:'return'}},
  {id:'x1',label:'AuthServer → EmailService: sendAlert() [async ▷]'},
  {id:'x2',label:'AuthServer → AuthServer: logAttempt() [self-message]'},
  {id:'x3',label:'Database → Client: return userProfile [dashed return]'},
  {id:'x4',label:'Client → Database: validateCredentials() [direct]'},
  {id:'x5',label:'AuthServer ⇢ Database: return token [wrong direction]'}
 ],
 correctOrder:['a','b','c','d'],
 explanation:'The correct sequence: the Client calls the AuthServer (synchronously, waiting for the response), the AuthServer calls the Database (also synchronously), the Database returns the result to the AuthServer (dashed return arrow), and only then does the AuthServer return the result to the Client. Note the STRICT LIFELINE HIERARCHY: the Database must never reply directly to the Client, as that would violate the architectural layers; the response always goes back through the caller. The Client likewise must not access the Database directly, bypassing the AuthServer. sendAlert() and logAttempt() were not mentioned in the scenario, so they are extra elements.'},

{id:'seq2',type:'sequence',title:'Checkout with an emailed receipt',
 scenario:'The Client calls Cart to place the order (checkout). Cart synchronously reserves the items in Inventory and receives a confirmation. Then Cart synchronously charges the payment via PaymentService and receives a receipt ID. After that, Cart ASYNCHRONOUSLY (fire-and-forget, without waiting for a response) sends the receipt via EmailService. Finally, Cart returns the order confirmation to the Client.',
 pool:[
  {id:'a',label:'Client → Cart: checkout() [sync ▶]',meta:{kind:'msg',from:'Client',to:'Cart',text:'checkout()',style:'sync'}},
  {id:'b',label:'Cart → Inventory: reserveItems() [sync ▶]',meta:{kind:'msg',from:'Cart',to:'Inventory',text:'reserveItems()',style:'sync'}},
  {id:'c',label:'Inventory ⇢ Cart: return confirmation [dashed return]',meta:{kind:'msg',from:'Inventory',to:'Cart',text:'return confirmation',style:'return'}},
  {id:'d',label:'Cart → PaymentService: charge(amount) [sync ▶]',meta:{kind:'msg',from:'Cart',to:'PaymentService',text:'charge()',style:'sync'}},
  {id:'e',label:'PaymentService ⇢ Cart: return receiptId [dashed return]',meta:{kind:'msg',from:'PaymentService',to:'Cart',text:'return receiptId',style:'return'}},
  {id:'f',label:'Cart → EmailService: sendReceipt(receiptId) [async ▷, no waiting]',meta:{kind:'msg',from:'Cart',to:'EmailService',text:'sendReceipt()',style:'async'}},
  {id:'g',label:'Cart ⇢ Client: return orderConfirmation [dashed return]',meta:{kind:'msg',from:'Cart',to:'Client',text:'return orderConfirmation',style:'return'}},
  {id:'x1',label:'EmailService ⇢ Cart: return deliveryStatus [dashed return]'},
  {id:'x2',label:'Client → Inventory: reserveItems() [direct]'},
  {id:'x3',label:'PaymentService → EmailService: notify() [sync ▶]'},
  {id:'x4',label:'Client → EmailService: sendReceipt() [direct]'},
  {id:'x5',label:'Cart → Cart: logCheckout() [self-message]'}
 ],
 correctOrder:['a','b','c','d','e','f','g'],
 explanation:'The key point: sending the receipt (f) is modeled as an ASYNCHRONOUS call (open arrowhead ▷, with NO dashed return). Cart does not wait for EmailService to actually send the email; it continues right away and returns the confirmation to the Client (g). That is exactly why the element "EmailService returns the delivery status" is extra: a fire-and-forget call has no synchronous return in this scenario. The Client must never access Inventory or EmailService directly, as that would violate the layers; everything goes through Cart only. PaymentService must not call EmailService directly either: that is not described in the scenario.'},

{id:'uc1',type:'usecase',title:'Online store: order with a discount',
 scenario:'The Customer places an order (Place Order). Placing an order ALWAYS includes payment (Make Payment), which is mandatory. Separately and OPTIONALLY, the customer may apply a discount promo code (Apply Discount Code), which does not always happen. Build the diagram in this order: actors and use cases → mandatory relationships → optional relationships.',
 pool:[
  {id:'a',label:'🧍 Actor: Customer',meta:{kind:'actor',text:'Customer'}},
  {id:'b',label:'⬭ Use Case: Place Order',meta:{kind:'usecase',text:'Place Order'}},
  {id:'c',label:'— Association: Customer — Place Order',meta:{kind:'assoc',from:'a',to:'b'}},
  {id:'d',label:'⬭ Use Case: Make Payment',meta:{kind:'usecase',text:'Make Payment'}},
  {id:'e',label:'┄▷ «include»: Place Order include Make Payment',meta:{kind:'include',from:'b',to:'d'}},
  {id:'f',label:'⬭ Use Case: Apply Discount Code',meta:{kind:'usecase',text:'Apply Discount Code'}},
  {id:'g',label:'┄▷ «extend»: Apply Discount Code extend Place Order',meta:{kind:'extend',from:'f',to:'b'}},
  {id:'x1',label:'▷ Generalization: Place Order → Make Payment'},
  {id:'x2',label:'🧍 Actor: Admin'},
  {id:'x3',label:'— Association: Customer — Make Payment (direct)'},
  {id:'x4',label:'⬭ Use Case: Cancel Order'},
  {id:'x5',label:'┄▷ «include»: Make Payment include Place Order (reverse direction)'}
 ],
 correctOrder:['a','b','c','d','e','f','g'],
 explanation:'"Payment is ALWAYS mandatory" = «include» (Place Order include Make Payment, the arrow goes from the base use case to the included one). "The discount does not always happen" = «extend» (Apply Discount Code extend Place Order, the arrow goes from the extending use case to the base one, the reverse direction!). The Customer is NOT linked directly to Make Payment: the Customer interacts only with Place Order, which itself includes Make Payment. A Generalization is wrong here: this is not inheritance but mandatory inclusion. Admin and Cancel Order were not mentioned in the scenario.'},

{id:'uc2',type:'usecase',title:'ATM: cash withdrawal',
 scenario:'A Bank Customer can withdraw cash (Withdraw Cash); this ALWAYS requires PIN verification (Verify PIN), a mandatory step. A Premium Customer is a special type of Bank Customer with extended privileges (inherits from the regular customer). There is also a separate withdrawal variant, biometric without a PIN (Withdraw Without PIN), which is a specialization of regular cash withdrawal.',
 pool:[
  {id:'a',label:'🧍 Actor: Bank Customer',meta:{kind:'actor',text:'Bank Customer'}},
  {id:'b',label:'🧍 Actor: Premium Customer',meta:{kind:'actor',text:'Premium Customer'}},
  {id:'c',label:'▷ Generalization: Premium Customer → Bank Customer',meta:{kind:'generalization',from:'b',to:'a'}},
  {id:'d',label:'⬭ Use Case: Withdraw Cash',meta:{kind:'usecase',text:'Withdraw Cash'}},
  {id:'e',label:'— Association: Bank Customer — Withdraw Cash',meta:{kind:'assoc',from:'a',to:'d'}},
  {id:'f',label:'⬭ Use Case: Verify PIN',meta:{kind:'usecase',text:'Verify PIN'}},
  {id:'g',label:'┄▷ «include»: Withdraw Cash include Verify PIN',meta:{kind:'include',from:'d',to:'f'}},
  {id:'h',label:'⬭ Use Case: Withdraw Without PIN (Biometric)',meta:{kind:'usecase',text:'Withdraw w/o PIN'}},
  {id:'i',label:'▷ Generalization: Withdraw Without PIN → Withdraw Cash',meta:{kind:'generalization',from:'h',to:'d'}},
  {id:'x1',label:'┄▷ «extend»: Verify PIN extend Withdraw Cash'},
  {id:'x2',label:'— Association: Premium Customer — Withdraw Cash (direct)'},
  {id:'x3',label:'🧍 Actor: Bank Teller'},
  {id:'x4',label:'⬭ Use Case: Check Balance'},
  {id:'x5',label:'— Association: Premium Customer — Verify PIN (direct)'}
 ],
 correctOrder:['a','b','c','d','e','f','g','h','i'],
 explanation:'The order: actors plus the Generalization between them, then the main Use Case with its association, then the include (PIN verification is MANDATORY, hence include, not extend), and finally the Generalization between Use Cases (Withdraw Without PIN is a specialization/alternative implementation of Withdraw Cash, not a separate independent scenario). Premium Customer does NOT need a direct link to Withdraw Cash: it already inherits that association through the Generalization from Bank Customer. "Verify PIN extend Withdraw Cash" is a common mistake: extend means "optional", while PIN verification is mandatory for everyone, so it is an include.'}
];

// ═══ DRAW PRACTICE: free-form diagram drawing exercises ═══
// level 1 — the palette contains only the required elements; level 2 — there are extra ones (extraNodes)
// kinds flow: start,end,task,send,gateway_x,fork,join   graph: actor,usecase,class,interface
// edge kinds flow: 'flow' (label for gateway branches)   graph: assoc,include,extend,generalization,realization,composition,aggregation
var DRAW_EXERCISES = [
{id:'d1',level:1,type:'bpmn',title:'Vacation request (Employee / Manager / HR)',
 scenario:'An employee submits a vacation request. The manager reviews it. If APPROVED, HR processes the vacation and the process ends. If NOT, the manager notifies the employee of the rejection and the process ends. Place the elements in their Lanes and connect them with Sequence Flows from left to right.',
 lanes:[{id:'emp',label:'Employee'},{id:'mgr',label:'Manager'},{id:'hr',label:'HR'}],
 nodes:[
  {id:'s',kind:'start',text:'Vacation needed',lane:'emp'},
  {id:'t1',kind:'task',text:'Submit request',lane:'emp'},
  {id:'t2',kind:'task',text:'Review request',lane:'mgr'},
  {id:'g',kind:'gateway_x',text:'Approved?',lane:'mgr'},
  {id:'t3',kind:'task',text:'Process vacation',lane:'hr'},
  {id:'t4',kind:'task',text:'Notify of rejection',lane:'mgr'},
  {id:'e1',kind:'end',text:'Vacation booked',lane:'hr'},
  {id:'e2',kind:'end',text:'Rejected',lane:'mgr'}
 ],
 edges:[
  {from:'s',to:'t1'},{from:'t1',to:'t2'},{from:'t2',to:'g'},
  {from:'g',to:'t3',label:'Yes'},{from:'g',to:'t4',label:'No'},
  {from:'t3',to:'e1'},{from:'t4',to:'e2'}
 ],
 explanation:'Each Lane is a ROLE: tasks sit in the lane of whoever performs them. The Exclusive Gateway (◆) asks "Approved?" and gives two labelled branches: "Yes" → HR processes the vacation, "No" → the Manager notifies of the rejection. Each branch has its own End Event — that is fine, BPMN allows several end points.'},

{id:'d2',level:1,type:'activity',title:'Cash withdrawal at an ATM',
 scenario:'The customer inserts a card and enters the PIN. If the PIN is correct, they select an amount, the ATM dispenses cash and returns the card, end. If the PIN is wrong, the ATM returns the card, end. Draw an Activity Diagram: Initial Node, Actions, a Decision Node with labelled branches, Activity Final.',
 nodes:[
  {id:'s',kind:'start',text:'Initial'},
  {id:'a1',kind:'task',text:'Insert card'},
  {id:'a2',kind:'task',text:'Enter PIN'},
  {id:'d',kind:'gateway_x',text:'PIN correct?'},
  {id:'a3',kind:'task',text:'Select amount'},
  {id:'a4',kind:'task',text:'Dispense cash'},
  {id:'m',kind:'merge',text:'Merge'},
  {id:'a5',kind:'task',text:'Return card'},
  {id:'e',kind:'end',text:'Activity Final'}
 ],
 edges:[
  {from:'s',to:'a1'},{from:'a1',to:'a2'},{from:'a2',to:'d'},
  {from:'d',to:'a3',label:'Yes'},{from:'a3',to:'a4'},{from:'a4',to:'m'},
  {from:'d',to:'m',label:'No'},{from:'m',to:'a5'},{from:'a5',to:'e'}
 ],
 explanation:'A Decision Node (◆) has one incoming edge and several outgoing edges with guards [Yes]/[No]. Both branches come together in a Merge Node (◇): in UML Activity, several incoming edges straight into an Action mean an implicit Join (the action waits for ALL of them), so alternative branches must be merged first. After the Merge comes "Return card" and a single Activity Final (◉).'},

{id:'d3',level:1,type:'bpmn',title:'Online store order processing',
 scenario:'An order is received. The system checks stock in the warehouse. If the item is IN STOCK, it reserves it and hands it to the courier (Send Task), end. If NOT, it notifies the customer about the shortage, end. One Pool without Lanes: just lay the process out from left to right.',
 nodes:[
  {id:'s',kind:'start',text:'Order received'},
  {id:'t1',kind:'task',text:'Check stock'},
  {id:'g',kind:'gateway_x',text:'In stock?'},
  {id:'t2',kind:'task',text:'Reserve item'},
  {id:'t3',kind:'send',text:'Hand to courier'},
  {id:'t4',kind:'task',text:'Notify of shortage'},
  {id:'e1',kind:'end',text:'Shipped'},
  {id:'e2',kind:'end',text:'Cancelled'}
 ],
 edges:[
  {from:'s',to:'t1'},{from:'t1',to:'g'},
  {from:'g',to:'t2',label:'Yes'},{from:'t2',to:'t3'},{from:'t3',to:'e1'},
  {from:'g',to:'t4',label:'No'},{from:'t4',to:'e2'}
 ],
 explanation:'A classic linear process with one Exclusive Gateway. A Send Task (filled envelope icon ✉) is a task that sends a message to another participant (the courier). Note: the Gateway itself does nothing, it only routes — the stock check happens BEFORE it.'},

{id:'d4',level:1,type:'usecase',title:'Online store: order with a discount',
 scenario:'The Customer places an order (Place Order). Placing an order ALWAYS includes payment (Make Payment). Sometimes the buyer applies a promo code (Apply Discount Code) — an optional extension of Place Order. Draw a Use Case Diagram with the correct directions of "include" and "extend".',
 nodes:[
  {id:'cust',kind:'actor',text:'Customer'},
  {id:'po',kind:'usecase',text:'Place Order'},
  {id:'mp',kind:'usecase',text:'Make Payment'},
  {id:'ad',kind:'usecase',text:'Apply Discount Code'}
 ],
 edges:[
  {from:'cust',to:'po',kind:'assoc'},
  {from:'po',to:'mp',kind:'include'},
  {from:'ad',to:'po',kind:'extend'}
 ],
 explanation:'"include": the arrow goes from the base use case (Place Order) to the mandatory included one (Make Payment). "extend": the arrow goes from the extending use case (Apply Discount Code) to the base one (Place Order) — the OPPOSITE direction. The actor is linked only to the Use Case it initiates.'},

{id:'d5',level:1,type:'activity',title:'Food delivery with parallel preparation',
 scenario:'After the order is placed, cooking the food and assigning a courier start AT THE SAME TIME. When BOTH are finished, the courier picks up the order, end. Use Fork and Join.',
 nodes:[
  {id:'s',kind:'start',text:'Initial'},
  {id:'a1',kind:'task',text:'Place order'},
  {id:'f',kind:'fork',text:'Fork'},
  {id:'a2',kind:'task',text:'Cook food'},
  {id:'a3',kind:'task',text:'Assign courier'},
  {id:'j',kind:'join',text:'Join'},
  {id:'a4',kind:'task',text:'Hand order to courier'},
  {id:'e',kind:'end',text:'Activity Final'}
 ],
 edges:[
  {from:'s',to:'a1'},{from:'a1',to:'f'},{from:'f',to:'a2'},{from:'f',to:'a3'},
  {from:'a2',to:'j'},{from:'a3',to:'j'},{from:'j',to:'a4'},{from:'a4',to:'e'}
 ],
 explanation:'Fork (▮) — one input, several outputs, the branches run IN PARALLEL. Join (▮) waits for ALL incoming branches to complete and only then lets the flow continue. No Decision is needed here: there is no condition, both pieces of work are required.'},

// ─── LEVEL 2: library with distractors ───
{id:'d6',level:2,type:'bpmn',title:'Support request (Customer / Support / Engineer)',
 scenario:'The customer creates a ticket. Support checks it. If the problem is SIMPLE, support replies to the customer, end. If it is COMPLEX, an engineer fixes it, then support replies to the customer, end. The library contains extra elements — use only the ones you need.',
 lanes:[{id:'cust',label:'Customer'},{id:'sup',label:'Support'},{id:'eng',label:'Engineer'}],
 nodes:[
  {id:'s',kind:'start',text:'Problem',lane:'cust'},
  {id:'t1',kind:'task',text:'Create ticket',lane:'cust'},
  {id:'t2',kind:'task',text:'Check ticket',lane:'sup'},
  {id:'g',kind:'gateway_x',text:'Complex?',lane:'sup'},
  {id:'t3',kind:'task',text:'Fix problem',lane:'eng'},
  {id:'t4',kind:'task',text:'Reply to customer',lane:'sup'},
  {id:'e',kind:'end',text:'Resolved',lane:'sup'}
 ],
 extraNodes:[
  {id:'x1',kind:'fork',text:'Parallel Gateway',why:'The branches do not run in parallel — it is a choice of one of two, so an Exclusive Gateway is needed.'},
  {id:'x2',kind:'task',text:'Issue invoice',why:'There is no payment in the scenario.'},
  {id:'x3',kind:'send',text:'Notify director',why:'The scenario does not mention a director.'},
  {id:'x4',kind:'start',text:'Second start',why:'The process has a single starting point.'}
 ],
 edges:[
  {from:'s',to:'t1'},{from:'t1',to:'t2'},{from:'t2',to:'g'},
  {from:'g',to:'t3',label:'Yes'},{from:'t3',to:'t4'},
  {from:'g',to:'t4',label:'No'},{from:'t4',to:'e'}
 ],
 explanation:'Both Gateway branches converge on the single task "Reply to customer" — BPMN allows this without a merging gateway. The Parallel Gateway, the invoice and the director are extras: the scenario does not describe them. An extra element on a diagram is just as much a mistake as a missing one.'},

{id:'d7',level:2,type:'activity',title:'User registration',
 scenario:'The user fills in a form. The system checks the e-mail. If the e-mail is ALREADY TAKEN, show an error and return to filling in the form. If it is FREE, create the account, send a confirmation e-mail, end. There are extra elements in the library — do not use them.',
 nodes:[
  {id:'s',kind:'start',text:'Initial'},
  {id:'a1',kind:'task',text:'Fill in form'},
  {id:'a2',kind:'task',text:'Check e-mail'},
  {id:'d',kind:'gateway_x',text:'E-mail taken?'},
  {id:'a3',kind:'task',text:'Show error'},
  {id:'a4',kind:'task',text:'Create account'},
  {id:'a5',kind:'task',text:'Send e-mail'},
  {id:'e',kind:'end',text:'Activity Final'}
 ],
 extraNodes:[
  {id:'x1',kind:'fork',text:'Fork',why:'There are no parallel branches.'},
  {id:'x2',kind:'join',text:'Join',why:'There is no Join without a Fork.'},
  {id:'x3',kind:'task',text:'Pay subscription',why:'There is no payment in the scenario.'},
  {id:'x4',kind:'end',text:'Flow Final',why:'The flow is never cut off — it either returns to the form or reaches the Activity Final.'}
 ],
 edges:[
  {from:'s',to:'a1'},{from:'a1',to:'a2'},{from:'a2',to:'d'},
  {from:'d',to:'a3',label:'Yes'},{from:'a3',to:'a1',back:true},
  {from:'d',to:'a4',label:'No'},{from:'a4',to:'a5'},{from:'a5',to:'e'}
 ],
 explanation:'A loop: the "Yes" branch leads to "Show error", and the flow RETURNS back to "Fill in form" — this is a backward arrow, drawn right to left. Fork/Join are not needed (nothing runs in parallel), and payment is not described.'},

{id:'d8',level:2,type:'usecase',title:'ATM: cash withdrawal',
 scenario:'The Bank Customer withdraws cash (Withdraw Cash). This ALWAYS requires a PIN check (Verify PIN). Sometimes the customer asks to print a receipt (Print Receipt) — optional. The library contains extra actors and Use Cases.',
 nodes:[
  {id:'bc',kind:'actor',text:'Bank Customer'},
  {id:'wc',kind:'usecase',text:'Withdraw Cash'},
  {id:'vp',kind:'usecase',text:'Verify PIN'},
  {id:'pr',kind:'usecase',text:'Print Receipt'}
 ],
 extraNodes:[
  {id:'x1',kind:'actor',text:'Bank Admin',why:'The administrator does not take part in the scenario.'},
  {id:'x2',kind:'usecase',text:'Transfer Money',why:'A transfer is not described.'},
  {id:'x3',kind:'usecase',text:'Check Balance',why:'A balance check is not described.'}
 ],
 edges:[
  {from:'bc',to:'wc',kind:'assoc'},
  {from:'wc',to:'vp',kind:'include'},
  {from:'pr',to:'wc',kind:'extend'}
 ],
 explanation:'"ALWAYS requires a PIN check" = "include" from Withdraw Cash to Verify PIN. "Sometimes a receipt" = "extend" from Print Receipt to Withdraw Cash. The actor is linked to the base Use Case, not to the included steps — the customer never launches Verify PIN on its own.'},

{id:'d9',level:2,type:'class',title:'Library system',
 scenario:'There are Book and Member. A Member borrows books (Association "borrows"). VIPMember is a special kind of Member (inheritance). The library contains extra classes and unsuitable relationship types.',
 nodes:[
  {id:'book',kind:'class',text:'Book'},
  {id:'mem',kind:'class',text:'Member'},
  {id:'vip',kind:'class',text:'VIPMember'}
 ],
 extraNodes:[
  {id:'x1',kind:'class',text:'Genre',why:'Genres are not mentioned in the scenario.'},
  {id:'x2',kind:'class',text:'Librarian',why:'A librarian is not described.'},
  {id:'x3',kind:'interface',text:'«interface» Searchable',why:'There are no interfaces in the scenario.'}
 ],
 edges:[
  {from:'mem',to:'book',kind:'assoc',label:'borrows'},
  {from:'vip',to:'mem',kind:'generalization'}
 ],
 explanation:'"Borrows books" is a plain Association (a book is not part of a member, so it is not Composition/Aggregation). "VIPMember is a special kind of Member" is Generalization: an arrow with a hollow triangle from the child to the parent. Do not add extra classes: the diagram describes exactly what is in the requirements.'},

{id:'d10',level:2,type:'bpmn',title:'Hiring an employee (Recruiter / Hiring Manager)',
 scenario:'The recruiter receives an application and runs a screening. If the candidate is SUITABLE, the Hiring Manager conducts an interview and makes a decision: if OFFER, the recruiter sends the offer, end; otherwise the recruiter sends a rejection, end. If the candidate is NOT suitable at screening, the recruiter sends a rejection right away. Two Gateways, extra elements in the library.',
 lanes:[{id:'rec',label:'Recruiter'},{id:'hm',label:'Hiring Manager'}],
 nodes:[
  {id:'s',kind:'start',text:'Application received',lane:'rec'},
  {id:'t1',kind:'task',text:'Run screening',lane:'rec'},
  {id:'g1',kind:'gateway_x',text:'Suitable?',lane:'rec'},
  {id:'t2',kind:'task',text:'Conduct interview',lane:'hm'},
  {id:'g2',kind:'gateway_x',text:'Offer?',lane:'hm'},
  {id:'t3',kind:'send',text:'Send offer',lane:'rec'},
  {id:'t4',kind:'send',text:'Send rejection',lane:'rec'},
  {id:'e1',kind:'end',text:'Hired',lane:'rec'},
  {id:'e2',kind:'end',text:'Rejected',lane:'rec'}
 ],
 extraNodes:[
  {id:'x1',kind:'fork',text:'Parallel Gateway',why:'There are no parallel branches.'},
  {id:'x2',kind:'task',text:'Set up health insurance',why:'Health insurance enrolment is not described.'},
  {id:'x3',kind:'task',text:'Check references',why:'The scenario does not mention a reference check.'},
  {id:'x4',kind:'start',text:'Vacancy opened',why:'The process starts with an application, not with opening a vacancy.'}
 ],
 edges:[
  {from:'s',to:'t1'},{from:'t1',to:'g1'},
  {from:'g1',to:'t2',label:'Yes'},{from:'t2',to:'g2'},
  {from:'g2',to:'t3',label:'Yes'},{from:'t3',to:'e1'},
  {from:'g2',to:'t4',label:'No'},{from:'g1',to:'t4',label:'No'},
  {from:'t4',to:'e2'}
 ],
 explanation:'Two consecutive Exclusive Gateways. Both "No" branches lead to the same task "Send rejection" — this keeps the diagram compact. Send Tasks for the offer and the rejection: the recruiter sends a message to the candidate, who is outside the process.'}
];
// ─── NEW DIAGRAM READING SVGs ───
SVGS_UML.dr1 = '<svg viewBox="0 0 500 200" width="480" height="195" xmlns="http://www.w3.org/2000/svg">'
+'<rect x="10" y="10" width="480" height="180" rx="6" fill="none" stroke="#2d3748" stroke-width="1" stroke-dasharray="6,3"/>'
+'<text x="475" y="26" text-anchor="end" fill="#64748b" font-size="10">«system» OnlineStore</text>'
+'<circle cx="60" cy="100" r="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="112" x2="60" y2="140" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="44" y1="126" x2="76" y2="126" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="140" x2="44" y2="158" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="140" x2="76" y2="158" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<text x="60" y="172" text-anchor="middle" fill="#94a3b8" font-size="10">Customer</text>'
+'<ellipse cx="220" cy="70" rx="65" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="220" y="75" text-anchor="middle" fill="#93c5fd" font-size="11">Browse catalog</text>'
+'<ellipse cx="220" cy="130" rx="65" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="220" y="135" text-anchor="middle" fill="#93c5fd" font-size="11">Place order</text>'
+'<ellipse cx="380" cy="100" rx="75" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="380" y="105" text-anchor="middle" fill="#93c5fd" font-size="11">Pay for order</text>'
+'<ellipse cx="380" cy="155" rx="75" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="380" y="160" text-anchor="middle" fill="#93c5fd" font-size="11">Apply promo code</text>'
+'<line x1="72" y1="96" x2="153" y2="76" stroke="#64748b" stroke-width="1.5"/>'
+'<line x1="72" y1="108" x2="153" y2="128" stroke="#64748b" stroke-width="1.5"/>'
+'<defs><marker id="dr1a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
+'<line x1="285" y1="130" x2="302" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr1a)"/>'
+'<text x="288" y="122" fill="#f59e0b" font-size="9" transform="rotate(-20,288,122)">«include»</text>'
+'<line x1="380" y1="122" x2="380" y2="131" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr1a)"/>'
+'<text x="390" y="140" fill="#f59e0b" font-size="9">«extend»</text>'
+'</svg>';

SVGS_UML.dr2 = '<svg viewBox="0 0 500 200" width="480" height="195" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr2a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
+'<marker id="dr2o" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
+'<rect x="20" y="8" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="55" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Client</text>'
+'<rect x="190" y="8" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="225" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">PaymentAPI</text>'
+'<rect x="370" y="8" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="410" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Database</text>'
+'<line x1="55" y1="30" x2="55" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<line x1="225" y1="30" x2="225" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<line x1="410" y1="30" x2="410" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<rect x="51" y="50" width="8" height="100" fill="#3b82f6" opacity="0.4"/>'
+'<rect x="221" y="65" width="8" height="75" fill="#3b82f6" opacity="0.4"/>'
+'<rect x="406" y="100" width="8" height="25" fill="#8b5cf6" opacity="0.4"/>'
+'<line x1="59" y1="55" x2="221" y2="65" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr2a)"/>'
+'<text x="132" y="53" text-anchor="middle" fill="#e2e8f0" font-size="9">1: pay(amount, card)</text>'
+'<line x1="229" y1="102" x2="406" y2="102" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr2a)"/>'
+'<text x="315" y="97" text-anchor="middle" fill="#e2e8f0" font-size="9">2: saveTransaction()</text>'
+'<line x1="406" y1="124" x2="229" y2="124" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#dr2o)"/>'
+'<text x="315" y="119" text-anchor="middle" fill="#64748b" font-size="9">3: txId</text>'
+'<rect x="155" y="138" width="80" height="22" rx="3" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>'
+'<text x="195" y="153" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">alt [success]</text>'
+'<line x1="221" y1="140" x2="59" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#dr2o)"/>'
+'<text x="132" y="145" text-anchor="middle" fill="#64748b" font-size="9">4: {status: ok, txId}</text>'
+'</svg>';

SVGS_UML.dr3 = '<svg viewBox="0 0 500 195" width="480" height="190" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr3a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
+'<marker id="dr3t" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.5"/></marker></defs>'
+'<circle cx="250" cy="20" r="8" fill="#3b82f6"/>'
+'<line x1="250" y1="28" x2="250" y2="48" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<rect x="195" y="48" width="110" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="250" y="68" text-anchor="middle" fill="#93c5fd" font-size="10">Receive request</text>'
+'<polygon points="250,95 272,113 250,131 228,113" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
+'<text x="250" y="117" text-anchor="middle" fill="#f59e0b" font-size="9">[approve?]</text>'
+'<rect x="90" y="148" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="140" y="167" text-anchor="middle" fill="#93c5fd" font-size="10">Send rejection</text>'
+'<rect x="310" y="148" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="360" y="167" text-anchor="middle" fill="#93c5fd" font-size="10">Prepare contract</text>'
+'<circle cx="250" cy="185" r="8" fill="none" stroke="#ef4444" stroke-width="3"/>'
+'<circle cx="250" cy="185" r="3" fill="#ef4444"/>'
+'<line x1="250" y1="80" x2="250" y2="94" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<line x1="228" y1="113" x2="140" y2="147" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<text x="170" y="133" fill="#94a3b8" font-size="9">[no]</text>'
+'<line x1="272" y1="113" x2="360" y2="147" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<text x="330" y="133" fill="#94a3b8" font-size="9">[yes]</text>'
+'<line x1="140" y1="178" x2="242" y2="185" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<line x1="360" y1="178" x2="258" y2="185" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'</svg>';

SVGS_UML.dr4 = '<svg viewBox="0 0 480 190" width="460" height="185" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr4a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>'
+'<rect x="10" y="10" width="460" height="70" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="1.5"/>'
+'<rect x="10" y="10" width="26" height="70" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="23" y="48" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold" transform="rotate(-90,23,48)">Online store</text>'
+'<line x1="36" y1="44" x2="470" y2="44" stroke="#2d3748" stroke-width="0.5" stroke-dasharray="4,3"/>'
+'<text x="250" y="28" text-anchor="middle" fill="#64748b" font-size="8">Manager</text>'
+'<text x="250" y="65" text-anchor="middle" fill="#64748b" font-size="8">Warehouse</text>'
+'<circle cx="60" cy="40" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
+'<rect x="80" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="125" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Accept order</text>'
+'<polygon points="190,40 208,28 226,40 208,52" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
+'<line x1="200" y1="29" x2="208" y2="29" stroke="#f59e0b" stroke-width="1.2"/><line x1="208" y1="29" x2="208" y2="35" stroke="#f59e0b" stroke-width="1.2"/>'
+'<rect x="240" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="285" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Reject</text>'
+'<rect x="360" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="405" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Confirm</text>'
+'<rect x="360" y="60" width="90" height="18" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="405" y="73" text-anchor="middle" fill="#93c5fd" font-size="9">Ship goods</text>'
+'<rect x="10" y="100" width="460" height="80" rx="4" fill="#0d1117" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<rect x="10" y="100" width="26" height="80" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="23" y="142" text-anchor="middle" fill="#c4b5fd" font-size="9" transform="rotate(-90,23,142)">Customer</text>'
+'<circle cx="70" cy="135" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
+'<rect x="47" y="124" width="16" height="11" rx="1" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<polyline points="47,124 55,130 63,124" fill="none" stroke="#3b82f6" stroke-width="1"/>'
+'<rect x="180" y="120" width="90" height="24" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="225" y="136" text-anchor="middle" fill="#c4b5fd" font-size="9">Receive notification</text>'
+'<circle cx="400" cy="155" r="11" fill="none" stroke="#ef4444" stroke-width="3"/>'
+'<line x1="71" y1="40" x2="79" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="170" y1="40" x2="188" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="226" y1="40" x2="238" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="330" y1="40" x2="358" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="405" y1="52" x2="405" y2="58" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="405" y1="78" x2="405" y2="152" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="285" y1="52" x2="225" y2="118" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr4a)"/>'
+'<line x1="270" y1="135" x2="388" y2="155" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'</svg>';

SVGS_UML.dr5 = '<svg viewBox="0 0 520 190" width="500" height="185" xmlns="http://www.w3.org/2000/svg">'
+'<rect x="10" y="20" width="140" height="100" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="80" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Order</text>'
+'<line x1="10" y1="44" x2="150" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="80" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- id: String</text>'
+'<text x="80" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- status: String</text>'
+'<text x="80" y="86" text-anchor="middle" fill="#cbd5e1" font-size="10">- totalAmount: Float</text>'
+'<line x1="10" y1="92" x2="150" y2="92" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="80" y="106" text-anchor="middle" fill="#a5b4fc" font-size="10">+ confirm()</text>'
+'<text x="80" y="118" text-anchor="middle" fill="#a5b4fc" font-size="10">+ cancel()</text>'
+'<rect x="200" y="20" width="140" height="90" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="270" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Customer</text>'
+'<line x1="200" y1="44" x2="340" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="270" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- name: String</text>'
+'<text x="270" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- email: String</text>'
+'<line x1="200" y1="78" x2="340" y2="78" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="270" y="92" text-anchor="middle" fill="#a5b4fc" font-size="10">+ register()</text>'
+'<rect x="380" y="20" width="130" height="80" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="445" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">OrderItem</text>'
+'<line x1="380" y1="44" x2="510" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="445" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- productId: String</text>'
+'<text x="445" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- quantity: Int</text>'
+'<text x="445" y="86" text-anchor="middle" fill="#cbd5e1" font-size="10">- price: Float</text>'
+'<rect x="160" y="140" width="140" height="40" rx="5" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="230" y="155" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="bold">«interface»</text>'
+'<text x="230" y="170" text-anchor="middle" fill="#c4b5fd" font-size="11">IPayable</text>'
+'<defs>'
+'<marker id="dr5c" markerWidth="7" markerHeight="5" refX="1" refY="2.5" orient="auto"><polygon points="0 2.5,7 0,7 5" fill="none" stroke="#94a3b8" stroke-width="1.5"/></marker>'
+'<marker id="dr5d" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><polygon points="0 3,8 0,8 6" fill="#94a3b8"/></marker>'
+'</defs>'
+'<line x1="150" y1="70" x2="198" y2="65" stroke="#94a3b8" stroke-width="1.5"/>'
+'<text x="163" y="60" fill="#64748b" font-size="9">1..*</text>'
+'<text x="185" y="60" fill="#64748b" font-size="9">1</text>'
+'<polygon points="198,65 186,59 186,71" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
+'<line x1="150" y1="80" x2="378" y2="60" stroke="#94a3b8" stroke-width="1.5"/>'
+'<polygon points="150,80 162,74 162,86" fill="#94a3b8"/>'
+'<text x="155" y="75" fill="#64748b" font-size="9">1</text>'
+'<text x="360" y="60" fill="#64748b" font-size="9">0..*</text>'
+'<line x1="80" y1="120" x2="200" y2="140" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>'
+'<polygon points="200,140 192,132 204,130" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>'
+'</svg>';


// ─── 5 DIAGRAM READING QUESTIONS ───
Q_UML.push({sec:"uml",lab:"UML — Reading Diagrams",type:"read_diagram",
 q:"Read the Use Case diagram. What does the «include» relationship between the use case 'Place order' and the use case 'Pay for order' mean?",
 svg:"dr1",
 opts:["Payment is an optional feature, performed only when a promo code is present",
       "When an order is placed, the use case 'Pay for order' is ALWAYS executed — it is a mandatory dependency",
       "The customer pays first, then places the order — it shows the sequence of actions",
       "'Pay for order' is a special case (subtype) of 'Place order'"],
 ans:1,
 exp:"«include» = the base use case ALWAYS includes the dependent one. 'Place order' → «include» → 'Pay for order' means: every order placement necessarily includes payment. The «include» arrow points FROM the base use case TO the included one (open arrowhead). 'Apply promo code' is connected via «extend» — a conditional extension that only fires when a promo code is present."});

Q_UML.push({sec:"uml",lab:"UML — Reading Diagrams",type:"read_diagram",
 q:"The Sequence Diagram shows a payment process. What does the dashed arrow from PaymentAPI to Client labeled '4: {status: ok, txId}' mean?",
 svg:"dr2",
 opts:["An asynchronous message — PaymentAPI sends a notification without waiting for a response",
       "A return message — the result of the synchronous call that Client previously made to PaymentAPI",
       "PaymentAPI creates a new Client object",
       "It is an error in the diagram — a return should be a solid arrow"],
 ans:1,
 exp:"A dashed arrow with an open arrowhead (- - -▷) in a Sequence Diagram = Return Message — the reply to a preceding synchronous call. Step 1 (solid arrow ▶) = Client → PaymentAPI: synchronous call. Step 4 (dashed ▷) = PaymentAPI → Client: returning the result. The 'alt [success]' block shows that this is the success branch of the scenario. An asynchronous message is a solid line with an OPEN arrowhead."});

Q_UML.push({sec:"uml",lab:"UML — Reading Diagrams",type:"read_diagram",
 q:"The Activity Diagram shows a request review process. Which element comes after 'Receive request' and what does it mean?",
 svg:"dr3",
 opts:["Fork Node (black bar) — the process splits into two parallel flows",
       "Decision Node (diamond with the condition [approve?]) — a conditional branch: yes → Prepare contract, no → Send rejection",
       "Join Node (black bar) — waits for two parallel flows to complete",
       "Merge Node — merges two alternative flows into one"],
 ans:1,
 exp:"A Decision Node (diamond) labeled [approve?] is a conditional branch. The two outgoing flows are marked with the guards [yes] and [no]. Only one path is taken. A Fork (black bar) splits into PARALLEL flows (all are activated). A Join waits for ALL parallel flows. A Merge combines alternative flows. The two flows at the bottom of the diagram both lead to the same final node."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Reading Diagrams",type:"read_diagram",
 q:"The BPMN diagram has two Pools: 'Online store' and 'Customer'. A dashed line goes from the task 'Confirm' (Store pool) to an event in the Customer pool. What does it mean?",
 svg:"dr4",
 opts:["Sequence Flow — the order of steps between departments of one Pool",
       "Message Flow — message exchange between different participants (Pools). It is the only legitimate way for Pools to communicate",
       "Data Flow — transferring order data between systems",
       "It is an error — connections between Pools are forbidden in BPMN 2.0"],
 ans:1,
 exp:"A dashed line with an open arrowhead between Pools = Message Flow. BPMN 2.0 rule: Sequence Flow (solid) works ONLY inside one Pool and may cross Lanes. Message Flow (dashed) goes ONLY between different Pools. Different Pools = different organizations/systems. Also on the diagram: an XOR Gateway (X) splits into Reject/Confirm — mutually exclusive paths."});

Q_UML.push({sec:"uml",lab:"UML — Reading Diagrams",type:"read_diagram",
 q:"On the Class Diagram: Order is connected to Customer by an arrow with an OPEN arrowhead (→), to OrderItem by a line with a FILLED diamond (◆), and to IPayable by a dashed arrow with an OPEN triangle (- - -▷). Identify all three relationship types.",
 svg:"dr5",
 opts:[
  "Order → Customer: inheritance; Order ◆ OrderItem: dependency; Order ---▷ IPayable: association",
  "Customer 1 — 1..* Order: association (each Order belongs to exactly one Customer; a Customer has one or more Orders); Order ◆ OrderItem: composition (an OrderItem cannot exist without its Order); Order ---▷ IPayable: interface realization",
  "Order → Customer: association; Order ◆ OrderItem: aggregation (hollow diamond); Order ---▷ IPayable: dependency",
  "All three arrows are different kinds of inheritance in UML"
 ],
 ans:1,
 exp:"Three different relationships: 1) Open arrow (→) = Association. Customer 1 — 1..* Order: each Order belongs to exactly one Customer; a Customer has one or more Orders. 2) Filled diamond (◆) = Composition — strong ownership: an OrderItem cannot exist without its Order; deleting the Order deletes its OrderItems. A hollow diamond = Aggregation (weak ownership). 3) Dashed line + open triangle = Realization — Order implements IPayable. Solid line + triangle = Generalization (inheritance)."});


// ─── INIT ───
// ─── NEW QUESTIONS: Article-based BPMN terminology (bilingual) ───
Q_UML.push({sec:"bpmn",lab:"BPMN — Core Objects",type:"concept",
 q:"How does the BPMN 2.0 specification (OMG) group its core elements?",
 opts:[
  "Into 3 categories: Tasks, Gateways and Events — everything else is decoration",
  "Into 5 categories: Flow Objects (Events, Activities, Gateways), Data (Data Objects, Data Inputs/Outputs, Data Stores), Connecting Objects (Sequence Flow, Message Flow, Association, Data Association), Swimlanes (Pools, Lanes) and Artifacts (Group, Text Annotation)",
  "Into 8 independent objects: Event, Activity, Gateway, Flow, Data, Artifact, Lane, Pool — with no further grouping",
  "Into 10 flat objects: Lane, Pool, Message, Data, Group, Annotation, Event, Gateway, Flow, Activity"
 ],
 ans:1,
 exp:"The OMG BPMN 2.0 specification defines five element categories. Flow Objects (Events, Activities, Gateways) define the behavior; Data (Data Objects, Data Inputs/Outputs, Data Stores) shows what information is used; Connecting Objects (Sequence Flow, Message Flow, Association, Data Association) link the elements; Swimlanes (Pools, Lanes) group elements by participant; Artifacts (Group, Text Annotation) add extra information without affecting execution. All other elements (event types, gateway types, task types) are variations within these categories."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Activity",type:"concept",
 q:"Which Activity subtype is a set of LOGICALLY RELATED actions to which a transaction protocol (all-or-nothing: successful completion, cancellation with compensation, or hazard) applies?",
 opts:[
  "Task — a simple unit of work",
  "Transaction — a set of logically related actions with a transaction protocol (all-or-nothing)",
  "Call Activity — an entry point to a global sub-process",
  "Event Sub-Process — triggered by its own event"
 ],
 ans:1,
 exp:"A Transaction is a group of actions logically bound into one atomic unit: either ALL of them complete, or ALL of them are ROLLED BACK (by analogy with a database transaction). BPMN explicitly defines a transaction protocol (all-or-nothing: successful completion, cancellation with compensation, or hazard). A Task is the simplest indivisible unit of work. A Call Activity invokes a GLOBALLY defined process. An Event Sub-Process is triggered by an internal event and may interrupt the parent process."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Activity",type:"concept",
 q:"How does a Call Activity fundamentally differ from a regular (embedded) Sub-Process?",
 opts:[
  "A Call Activity never has a visual notation",
  "A Call Activity is an entry point to a GLOBALLY defined sub-process that is reused in different places of the model; a Sub-Process is defined LOCALLY inside one process",
  "A Sub-Process works only with people, a Call Activity only with systems",
  "There is no difference, they are synonyms"
 ],
 ans:1,
 exp:"A Call Activity invokes a GLOBAL process — it is defined once and can be reused in several different diagrams/processes (for example, a standard KYC check used in account opening, loan issuance and insurance purchase). A Sub-Process is a local decomposition of a specific process, not intended for reuse elsewhere in the model."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateways",type:"concept",
 q:"Which gateway is the data-based Exclusive Gateway (XOR), and how does it behave when splitting?",
 opts:[
  "It activates ALL outgoing branches simultaneously",
  "When splitting, it routes the flow along ONLY ONE of the outgoing branches; when merging, it passes each arriving token straight through without synchronization",
  "It activates one or more branches at the performer's discretion",
  "It is used only to launch parallel sub-processes"
 ],
 ans:1,
 exp:"The Exclusive Gateway (XOR) is DATA-based (a condition on the data decides which branch is activated). When splitting — only ONE branch. When merging — each arriving token passes straight through without synchronization (it does not wait for the other branches, because they will never be activated)."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateways",type:"concept",
 q:"The Parallel Gateway (AND) — how exactly does it behave when splitting and when synchronizing parallel flows?",
 opts:[
  "When splitting, one branch is activated by condition; when synchronizing, it waits for the first branch to complete",
  "When splitting into parallel flows, ALL branches are activated SIMULTANEOUSLY; when synchronizing, it waits for ALL incoming branches to complete and then activates the outgoing flow",
  "It works only with one incoming and one outgoing flow",
  "It is used only to stop the process"
 ],
 ans:1,
 exp:"Parallel Gateway (AND): when splitting — ALL outgoing branches are activated SIMULTANEOUSLY (parallel execution). When synchronizing (join/merge) — the gateway waits for ALL incoming branches to complete and only then activates the outgoing flow. This rule is strict: an unbalanced AND Split/Join (e.g. a split into 3 branches while the join waits for only 2) is a modeling error."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateways",type:"concept",
 q:"The Inclusive Gateway (OR) is the most complex gateway. Describe its behavior when splitting and merging.",
 opts:[
  "When splitting, exactly one branch is activated; when merging, it waits for only one branch",
  "When splitting, one OR more branches are activated (depending on conditions); when merging, ALL incoming branches that are running must complete",
  "It works identically to the Parallel Gateway, just with a different icon",
  "It is used only in non-executable processes"
 ],
 ans:1,
 exp:"Inclusive Gateway (OR): when splitting, ONE or MORE branches are activated — how many depends on the conditions on each outgoing branch (anywhere from 1 to all of them). When merging, the gateway must wait for ALL the branches that were actually activated at the split (not all theoretically possible ones). It is the hardest gateway for a BPMN engine, because it requires tracking which paths were started."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Pool & Lane",type:"concept",
 q:"What do a Pool and a Lane show on a BPMN diagram, and how are they related?",
 opts:[
  "Pool is a synonym for Lane, they are completely identical",
  "A Pool represents a Participant (an organization, system or role) in a Collaboration and contains that participant's process; it may contain several Lanes showing specific participants of the process (a role, department or system) inside that process",
  "A Lane may contain several Pools inside it",
  "A Pool is used only to display data, not participants"
 ],
 ans:1,
 exp:"A Pool represents a Participant (an organization, system or role) in a Collaboration and contains that participant's process — a single diagram may have several pools (e.g. «Customer» and «Store»). Inside a pool there can be Lanes, which show specific participants of the process hidden within the pool: for example, in an order processing process — «Sales Manager», «Head of Sales», «Cashier». Lanes allow pools and other lanes to be divided hierarchically — a tool for distributing responsibilities within one process."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Data Object & Message",type:"concept",
 q:"What is the key feature of a Data Object — can the same data object be BOTH a result AND a starting condition at the same time?",
 opts:[
  "No, a Data Object is always either an input or an output — never both at once",
  "Yes: for one participant of the process a data object may be the RESULT of their action, while for ANOTHER participant it is the START of their action. Example: «Order» is a result for the manager and the start of work for the warehouse",
  "A Data Object is used only inside one Pool and cannot be passed between participants",
  "A Data Object is the same thing as a Message"
 ],
 ans:1,
 exp:"A classic example from the methodology: the data object «Order» is generated by the manager — for them it is the RESULT of a completed action. But the same «Order», once it reaches the warehouse, is the START of their action (picking and shipping the goods). A Data Object shows which data/documents are needed to start an action or are produced by it — a dual nature depending on the participant's point of view."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Artifacts",type:"concept",
 q:"Which TWO types of artifacts exist in BPMN, and what is the difference between them?",
 opts:[
  "Data Object and Message — these are the two artifact types",
  "Group — for visually combining elements under a common symbol to save space on the diagram; and Text Annotation — for comments and clarifications on the diagram",
  "Pool and Lane are the only artifacts in BPMN",
  "Start Event and End Event are considered artifacts"
 ],
 ans:1,
 exp:"Artifacts are objects that are NOT activities and have no direct relation to process execution. Type 1: Group — a rounded rectangle with a dash-dot border; it visually combines several elements and saves space on the diagram. Type 2: Text Annotation — an open rectangle drawn with a solid line, connected to an object by a dashed line; it serves for comments that improve the readability of the diagram."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Executable Processes",type:"concept",
 q:"What is the fundamental difference between an EXECUTABLE and a NON-EXECUTABLE business process in BPMN?",
 opts:[
  "An executable process is drawn with different software than a non-executable one",
  "An executable process must strictly follow ALL the rules of the BPMN notation, because it is actually run by dedicated software (Camunda, Bizagi, Appian); a non-executable process is only needed to demonstrate/study the business model, and minor deviations from the rules are not critical",
  "A non-executable process cannot contain Gateways",
  "They are synonyms, there is no difference"
 ],
 ans:1,
 exp:"An executable business process must be built in STRICT compliance with the notation rules — otherwise the BPMS (Camunda, Bizagi, Appian) cannot execute it correctly. It is used in process-oriented enterprises to track work in real time. A non-executable process is needed EXCLUSIVELY to demonstrate a model — it may be an as-is diagram or an illustration of re-engineering; here the rules matter only for mutual understanding between people. Beginners are advised to start with non-executable processes."});

Q_UML.push({sec:"bpmn",lab:"BPMN vs IT notations",type:"concept",
 q:"Why is it important to understand that BPMN is NOT a language for describing IT systems?",
 opts:[
  "Because BPMN is outdated and not used in modern IT projects",
  "Because BPMN is meant to describe the domain of a REAL BUSINESS, which may involve both software systems and PEOPLE (employees, customers, suppliers) — this is the key difference from graphical notations for describing software",
  "Because automated steps cannot be described in BPMN",
  "Because BPMN works only with databases"
 ],
 ans:1,
 exp:"The key difference between BPMN and software description languages (UML Class/Sequence, etc.) is that BPMN models the REAL business process as a whole, including steps performed by PEOPLE (sales manager, cashier, customer), not just software components. BPMN is an intermediate link between formalizing/visualizing a process and implementing it — it can be run by various process management systems (BPMS), but it describes the business logic itself, not the software architecture."});

// ─── Combined Fragments (loop / alt / opt) SVGs ───
SVGS_UML.cfLoop = '<svg viewBox="0 0 460 165" width="440" height="160" xmlns="http://www.w3.org/2000/svg">'
  +'<rect x="20" y="10" width="420" height="145" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.3"/>'
  +'<path d="M20,10 L60,10 L60,24 L52,30 L20,30 Z" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.3"/>'
  +'<text x="30" y="23" fill="#fcd34d" font-size="9" font-weight="bold">loop</text>'
  +'<text x="240" y="24" text-anchor="middle" fill="#fcd34d" font-size="9">[1, 3]</text>'
  +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Client</text>'
  +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">AuthServer</text>'
  +'<line x1="95" y1="65" x2="95" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="365" y1="65" x2="365" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="99" y1="85" x2="361" y2="85" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfl1)"/>'
  +'<defs><marker id="cfl1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="80" text-anchor="middle" fill="#e2e8f0" font-size="8">enterPassword()</text>'
  +'<line x1="361" y1="105" x2="99" y2="105" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#cfl2)"/>'
  +'<defs><marker id="cfl2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#64748b" stroke-width="1.2"/></marker></defs>'
  +'<text x="230" y="100" text-anchor="middle" fill="#64748b" font-size="8">incorrect</text>'
  +'</svg>';

SVGS_UML.cfAlt = '<svg viewBox="0 0 460 195" width="440" height="190" xmlns="http://www.w3.org/2000/svg">'
  +'<rect x="20" y="10" width="420" height="175" rx="3" fill="none" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<path d="M20,10 L58,10 L58,24 L50,30 L20,30 Z" fill="#1a1f2e" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="28" y="23" fill="#93c5fd" font-size="9" font-weight="bold">alt</text>'
  +'<text x="240" y="24" text-anchor="middle" fill="#93c5fd" font-size="9">[stock available]</text>'
  +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Order</text>'
  +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Warehouse</text>'
  +'<line x1="95" y1="65" x2="95" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="365" y1="65" x2="365" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="99" y1="82" x2="361" y2="82" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfa1)"/>'
  +'<defs><marker id="cfa1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="77" text-anchor="middle" fill="#e2e8f0" font-size="8">confirmOrder()</text>'
  +'<line x1="20" y1="100" x2="440" y2="100" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6,3"/>'
  +'<text x="28" y="114" fill="#fca5a5" font-size="9" font-weight="bold">[else]</text>'
  +'<line x1="99" y1="135" x2="361" y2="135" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfa2)"/>'
  +'<defs><marker id="cfa2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="130" text-anchor="middle" fill="#e2e8f0" font-size="8">backorder()</text>'
  +'<text x="230" y="155" text-anchor="middle" fill="#fca5a5" font-size="8">«awaiting delivery»</text>'
  +'</svg>';

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: loop",type:"concept",
 q:"On a Sequence Diagram a frame is labeled «loop [1, 5]». What do the numbers in square brackets mean?",
 opts:[
  "The message numbers inside the frame, from the first to the fifth",
  "A minimum of 1 and a maximum of 5 repetitions of the frame's contents — the loop runs at least once but no more than 5 times",
  "The range of allowed values of a variable used in the message",
  "The diagram versions in which this fragment is valid"
 ],
 ans:1,
 exp:"The format loop [minint, maxint] sets the repetition bounds: minimum 1 (the body runs at least once) and maximum 5 (after the fifth repetition the loop is forced to stop, even if the continuation condition is still true). This differs from the loop [condition] form (e.g. [for each item]), where no bounds are given explicitly and the loop runs while the condition is true."});

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: alt vs opt",type:"concept",
 q:"A developer says: «I modeled this as an alt with a single branch, without else». The analyst replies that this is incorrect from the notation's point of view. Why is the analyst right?",
 opts:[
  "Because alt cannot be used in Sequence Diagrams at all",
  "Because a fragment with ONE condition and no alternative branch is by definition «opt», not «alt»: an «alt» frame implies at least 2 sections separated by a dashed line",
  "Because the frame name must match the method name",
  "Because alt is used only in BPMN, not in UML"
 ],
 ans:1,
 exp:"«opt» is semantically a special case of «alt» with a single branch and no «else»: if the condition is false, nothing happens. Using the «alt» label for a single branch without an alternative is a terminology error that can mislead the reader (they will expect a dashed line and a second section). The correct notation is to rename the frame to «opt»."});

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: alt separator",type:"concept",
 q:"Inside an «alt» frame a horizontal DASHED line is drawn, dividing it into two parts. What happens when the scenario executes?",
 opts:[
  "BOTH parts execute simultaneously, as in a parallel «par» fragment",
  "EXACTLY ONE of the two sections executes — the one whose condition in square brackets is true; the other section is skipped entirely",
  "The dashed line is just visual decoration, it does not affect execution",
  "Both sections execute sequentially, one after the other"
 ],
 ans:1,
 exp:"The dashed separator line inside «alt» is the mandatory sign of mutually exclusive conditions (the analog of if/else if/else in code). At any moment of execution only ONE section is active — the one whose guard condition in square brackets is true at the time of the check. If both sections were meant to run in parallel, a «par» frame would be used instead of «alt», and the separator would denote parallel flows rather than alternatives."});

Q_UML.push({sec:"uml",lab:"Sequence — Reading a diagram: loop",type:"read_diagram",
 q:"On the diagram a «loop [1, 3]» frame surrounds the message exchange between Client and AuthServer: Client sends enterPassword(), AuthServer replies incorrect. The user has entered a wrong password 4 times in a row. What happens according to the diagram?",
 svg:"cfLoop",
 opts:[
  "The loop repeats indefinitely until the password is correct",
  "After the 3rd failed attempt the loop is forced to end — the diagram does not allow a 4th attempt inside this fragment; separate logic must take over (e.g. a lockout)",
  "AuthServer automatically unlocks the account after the first error",
  "The diagram imposes no limits — the number of attempts is unlimited, because maxint is not used in UML"
 ],
 ans:1,
 exp:"loop [1, 3] is a hard upper bound of 3 repetitions. When designing such a screen, the BA must specify WHAT happens once the loop limit is exceeded (usually a separate alt/opt fragment or a transition to another Use Case — «account lockout», «captcha», «timeout»). A diagram without this is incomplete, and this is exactly how an interviewer may test attention to detail."});

Q_UML.push({sec:"uml",lab:"Sequence — Reading a diagram: alt",type:"read_diagram",
 q:"The diagram shows an «alt [stock available]» / «[else]» frame between Order and Warehouse. The upper section: confirmOrder(). The lower section (else): backorder(). The item is out of stock. What will execute?",
 svg:"cfAlt",
 opts:[
  "confirmOrder(), because it is written first in the diagram",
  "Both operations — first confirmOrder(), then backorder() as compensation",
  "Only backorder() — since the condition [stock available] is false, the [else] section executes and the upper section is skipped entirely",
  "No operation executes, the diagram ends with an error"
 ],
 ans:2,
 exp:"Just like switch/if-else in code — when the upper section's condition is false (item not in stock), control goes STRAIGHT to the [else] section: only backorder() executes. confirmOrder() from the first section does not execute at all — it is not a «fallback after failure» but a mutually exclusive alternative."});

Q_UML.push({sec:"uml",lab:"Sequence — choosing the right fragment",type:"concept",
 q:"A BA formulates a business rule: «If the customer has a gift certificate, apply the certificate discount. If there is no certificate, place the order at the regular price; no additional actions are required». Which Combined Fragment describes this logic most precisely on a Sequence Diagram?",
 opts:[
  "loop — because applying the discount may repeat",
  "alt with two sections [has certificate] / [else] — since TWO branches are described (with and without the discount)",
  "opt [has certificate] — because «place the order at the regular price with no additional actions» means that when the condition is false there is simply NOTHING to show on the diagram; it is not a separate branch, it is «nothing happens»",
  "par — because both options happen in parallel"
 ],
 ans:2,
 exp:"The key phrase is «no additional actions are required» when there is no certificate. This means that in the «else» case there are simply NO messages to show on the diagram — so a separate [else] section is not needed. «opt» exists precisely for this kind of asymmetric logic (something happens only when the condition is true, and literally nothing when it is false): unlike «alt», it does not require describing an empty alternative branch."});


// UML initialized on demand via switchApp
DATA_SETS.en = {TC:TC,Q:Q,TABS:TABS,THEORY_UML:THEORY_UML,SVGS_UML:SVGS_UML,Q_UML:Q_UML,BUILD_TYPES:BUILD_TYPES,BUILD_EXERCISES:BUILD_EXERCISES,DRAW_EXERCISES:DRAW_EXERCISES};
})();
