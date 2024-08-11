document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    fadeElems.forEach(elem => observer.observe(elem));

    // Technology card click functionality
    const techCards = document.querySelectorAll('.tech-card');
    const techDetails = document.getElementById('tech-details');

    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            showTechDetails(tech);
        });
    });

    function showTechDetails(tech) {
        let content = '';
        switch(tech) {
            case 'closedBagh':
                content = `
                    <h3>closedBagh AI Model</h3>
                    <p>Our flagship AI model, closedBagh, is specifically designed for Bangladesh's unique linguistic and cultural context. It incorporates:</p>
                    <ul>
                        <li>Advanced Bangla language processing</li>
                        <li>Cultural nuance understanding</li>
                        <li>Multi-dialect support for regional variations</li>
                    </ul>
                    <p>closedBagh powers many of our industry-specific solutions, enabling highly accurate and contextually relevant AI interactions for Bangladeshi users.</p>
                `;
                break;
            case 'llm':
                content = `
                    <h3>Large Language Models (LLM)</h3>
                    <p>Our LLMs are at the forefront of natural language processing, offering:</p>
                    <ul>
                        <li>Bilingual capabilities in Bangla and English</li>
                        <li>Context-aware text generation</li>
                        <li>Sentiment analysis and entity recognition</li>
                    </ul>
                    <p>These models enable sophisticated language understanding and generation, powering applications from chatbots to content summarization.</p>
                `;
                break;
            case 'lvm':
                content = `
                    <h3>Large Vision Models (LVM)</h3>
                    <p>Our LVMs bring advanced computer vision capabilities to various industries:</p>
                    <ul>
                        <li>Object detection and classification</li>
                        <li>Facial recognition with privacy safeguards</li>
                        <li>Scene understanding for autonomous systems</li>
                    </ul>
                    <p>These models enable applications ranging from medical image analysis to agricultural crop monitoring.</p>
                `;
                break;
            case 'rag':
                content = `
                    <h3>Retrieval-Augmented Generation (RAG)</h3>
                    <p>Our RAG system enhances AI responses by combining language generation with information retrieval:</p>
                    <ul>
                        <li>Real-time data integration for up-to-date responses</li>
                        <li>Improved accuracy in domain-specific applications</li>
                        <li>Reduced hallucination in AI-generated content</li>
                    </ul>
                    <p>RAG technology ensures our AI solutions provide accurate, contextually relevant, and current information to users.</p>
                `;
                break;
        }
        techDetails.innerHTML = content;
        techDetails.scrollIntoView({ behavior: 'smooth' });
    }

    // Use case slider functionality
    const useCaseSlider = document.querySelector('.use-case-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    useCaseSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - useCaseSlider.offsetLeft;
        scrollLeft = useCaseSlider.scrollLeft;
    });

    useCaseSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    useCaseSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    useCaseSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - useCaseSlider.offsetLeft;
        const walk = (x - startX) * 3;
        useCaseSlider.scrollLeft = scrollLeft - walk;
    });

    // Roadmap animation
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                roadmapObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    roadmapItems.forEach(item => roadmapObserver.observe(item));
});

// Add this code after the existing code in technology.js

// Agentic Workflow functionality
const workflowSteps = document.querySelectorAll('.workflow-step');
const workflowDetails = document.getElementById('workflow-details');

workflowSteps.forEach(step => {
    step.addEventListener('click', function() {
        const stepNumber = this.getAttribute('data-step');
        showWorkflowDetails(stepNumber);
    });
});

function showWorkflowDetails(stepNumber) {
    let content = '';
    switch(stepNumber) {
        case '1':
            content = `
                <h3>Task Assignment</h3>
                <p>In this initial step, the user provides a complex task to the AI agent. Our system uses natural language processing to understand the task requirements and objectives.</p>
                <ul>
                    <li>Task interpretation using NLP</li>
                    <li>Identification of key objectives</li>
                    <li>Initial resource assessment</li>
                </ul>
            `;
            break;
        case '2':
            content = `
                <h3>Task Analysis</h3>
                <p>The AI agent analyzes the assigned task and breaks it down into manageable subtasks. This step involves:</p>
                <ul>
                    <li>Task decomposition algorithms</li>
                    <li>Dependency mapping between subtasks</li>
                    <li>Resource allocation for each subtask</li>
                </ul>
            `;
            break;
        case '3':
            content = `
                <h3>Execution</h3>
                <p>During this phase, the AI agent autonomously carries out the identified subtasks. This involves:</p>
                <ul>
                    <li>Parallel processing of independent subtasks</li>
                    <li>Real-time problem-solving and adaptation</li>
                    <li>Continuous monitoring and optimization</li>
                </ul>
            `;
            break;
        case '4':
            content = `
                <h3>Result Delivery</h3>
                <p>In the final step, the AI agent compiles the results of all subtasks and presents a comprehensive output to the user. This includes:</p>
                <ul>
                    <li>Data synthesis and result compilation</li>
                    <li>Generation of user-friendly reports</li>
                    <li>Explanation of processes and decisions made</li>
                </ul>
            `;
            break;
    }
    workflowDetails.innerHTML = content;
    workflowDetails.scrollIntoView({ behavior: 'smooth' });
}

// Add animation to workflow steps
const workflowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            workflowObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

workflowSteps.forEach(step => workflowObserver.observe(step));

// Add this code to your existing technology.js file

// Security card click functionality
const securityCards = document.querySelectorAll('.security-card');
const securityDetails = document.getElementById('security-details');

securityCards.forEach(card => {
    card.addEventListener('click', function() {
        const security = this.getAttribute('data-security');
        showSecurityDetails(security);
    });
});

function showSecurityDetails(security) {
    let content = '';
    switch(security) {
        case 'encryption':
            content = `
                <h3>End-to-End Encryption</h3>
                <p>Our end-to-end encryption ensures that your data is secure from the moment it leaves your device until it reaches its destination. We use industry-standard encryption protocols, including:</p>
                <ul>
                    <li>AES-256 for data at rest</li>
                    <li>TLS 1.3 for data in transit</li>
                    <li>Homomorphic encryption for secure data processing</li>
                </ul>
            `;
            break;
        case 'privacy':
            content = `
                <h3>Privacy by Design</h3>
                <p>Privacy is not an afterthought at SocioFi; it's built into every aspect of our technology. Our Privacy by Design approach includes:</p>
                <ul>
                    <li>Data anonymization techniques</li>
                    <li>Secure multi-party computation for collaborative AI</li>
                    <li>Differential privacy to protect individual data in aggregated datasets</li>
                </ul>
            `;
            break;
        case 'compliance':
            content = `
                <h3>Regulatory Compliance</h3>
                <p>We stay up-to-date with global data protection regulations to ensure our technology meets or exceeds compliance requirements. Our compliance measures include:</p>
                <ul>
                    <li>GDPR compliance for EU data subjects</li>
                    <li>CCPA compliance for California residents</li>
                    <li>Regular compliance audits and certifications</li>
                </ul>
            `;
            break;
        case 'minimization':
            content = `
                <h3>Data Minimization</h3>
                <p>We believe in collecting and retaining only the data that's necessary for our AI systems to function effectively. Our data minimization strategies include:</p>
                <ul>
                    <li>Purpose-specific data collection</li>
                    <li>Automated data deletion after specified periods</li>
                    <li>Use of synthetic data for testing and development</li>
                </ul>
            `;
            break;
        case 'access':
            content = `
                <h3>Access Control</h3>
                <p>We implement strict access controls to ensure only authorized personnel can access sensitive data. Our access control measures include:</p>
                <ul>
                    <li>Multi-factor authentication</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Regular access audits and reviews</li>
                </ul>
            `;
            break;
        case 'audits':
            content = `
                <h3>Regular Audits</h3>
                <p>We conduct regular security audits to identify and address potential vulnerabilities. Our audit process includes:</p>
                <ul>
                    <li>Automated vulnerability scans</li>
                    <li>Third-party penetration testing</li>
                    <li>Continuous monitoring and threat intelligence</li>
                </ul>
            `;
            break;
    }
    securityDetails.innerHTML = content;
    securityDetails.scrollIntoView({ behavior: 'smooth' });
}