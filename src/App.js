import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, Code, Database, Brain, Zap, Users, TrendingUp, Calendar, MapPin, Download, Phone, X, FileText, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const Card = ({ children, className = "", delay = 0 }) => (
    <div 
      className={`bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 ${className}`}
      style={{
        animation: isLoaded ? `fadeInUp 0.6s ease-out ${delay}s both` : 'none'
      }}
    >
      {children}
    </div>
  );

  const SkillBadge = ({ skill, delay = 0 }) => (
    <span 
      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
      style={{
        animation: isLoaded ? `fadeInUp 0.4s ease-out ${delay}s both` : 'none'
      }}
    >
      {skill}
    </span>
  );

  const ProjectCard = ({ project, delay = 0 }) => (
    <Card className="group hover:border-blue-200 cursor-pointer h-full" delay={delay} onClick={() => openProjectDetail(project)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 border">
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-start justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full my-8 animate-fadeIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
              <button 
                onClick={closeProjectDetail}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 space-y-8">
              
              {/* Problem Statement */}
              {selectedProject.problemStatement && (
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Problem Statement</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
                    {selectedProject.problemStatement}
                  </p>
                </div>
              )}

              {/* Objectives */}
              {selectedProject.objectives && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Objectives</h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Data Sample */}
              {selectedProject.dataSample && (
                <div>
                  <div className="flex items-center mb-4">
                    <Database className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Data Sample</h3>
                  </div>
                  <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {selectedProject.dataSample.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {selectedProject.dataSample.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {selectedProject.dataSample.note && (
                    <p className="text-sm text-gray-500 mt-2 italic">{selectedProject.dataSample.note}</p>
                  )}
                </div>
              )}

              {/* Methodology */}
              {selectedProject.methodology && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Methodology</h3>
                  <div className="space-y-4">
                    {selectedProject.methodology.map((step, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet */}
              {selectedProject.codeSnippet && (
                <div>
                  <div className="flex items-center mb-4">
                    <Code className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Code Implementation</h3>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100 font-mono">
                      <code>{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Key Insights */}
              {selectedProject.insights && (
                <div>
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Key Insights</h3>
                  </div>
                  <div className="space-y-3">
                    {selectedProject.insights.map((insight, i) => (
                      <div key={i} className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <p className="text-gray-700">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visualizations */}
              {selectedProject.images && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Visualizations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 h-48 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">{img.placeholder}</span>
                        </div>
                        <div className="p-3 bg-white">
                          <p className="text-sm text-gray-600">{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {selectedProject.recommendations && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <ul className="space-y-3">
                      {selectedProject.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Conclusion */}
              {selectedProject.conclusion && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                    {selectedProject.conclusion}
                  </p>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {selectedProject.link && selectedProject.link !== '#' && (
                <div className="flex justify-center pt-4">
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                NP
              </div>
              <div>
                <span className="font-semibold text-gray-800">Narendra Patil</span>
                <p className="text-sm text-gray-500">Data Scientist & ML Engineer</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              style={{
                animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
              }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Hi, I'm <span className="text-blue-600">Narendra Patil</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Data Scientist in the making, ML enthusiast & Solution Builder. I design ML-powered systems, 
                craft automations that save hours, and turn messy data into clear, actionable products.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Data Science', 'Machine Learning', 'AI Engineering', 'Automation'].map((keyword, i) => (
                  <SkillBadge key={keyword} skill={keyword} delay={0.1 * i} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Projects
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
            
            <div 
              className="hidden lg:block"
              style={{
                animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'
              }}
            >
              <Card className="text-center bg-gradient-to-br from-white to-blue-50">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Make Impact</h3>
                  <p className="text-gray-600">Building intelligent solutions that solve real-world problems</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">10+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">60min→3min</div>
                    <div className="text-sm text-gray-500">Time Saved</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From analytics to AI engineering — I love turning ambiguous problems into elegant, data-driven products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card delay={0.1}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I started in business analytics, got obsessed with impact, and moved deeper into machine learning and AI engineering. 
                At work, I build automations and internal tools that save hours every day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, my focus areas are Data Science, Machine Learning, and AI Engineering — with a strong foundation 
                in software development so solutions don't stop at slides; they ship.
              </p>
            </Card>

            <Card delay={0.2}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'scikit-learn', 'TensorFlow', 'Power BI', 'Looker Studio', 'Apps Script', 'APIs', 'ETL'].map((badge, i) => (
                  <SkillBadge key={badge} skill={badge} delay={0.05 * i} />
                ))}
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Database, 
                title: "Data Integrity & Security", 
                desc: "Manage sensitive datasets, enforce access rules, and keep pipelines clean.",
                color: "blue"
              },
              { 
                icon: Zap, 
                title: "Automation-First Mindset", 
                desc: "Built reporting jobs that cut cycle time from ~60 minutes to a few minutes.",
                color: "green"
              },
              { 
                icon: Brain, 
                title: "Product Thinking", 
                desc: "Ship usable tools — not just analyses. Internal sites, scripts, and dashboards.",
                color: "orange"
              }
            ].map((highlight, i) => (
              <Card key={i} delay={0.1 * (i + 1)} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-${highlight.color}-100 flex items-center justify-center`}>
                  <highlight.icon className={`w-8 h-8 text-${highlight.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive toolkit built around delivering impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Science & ML",
                icon: Brain,
                color: "blue",
                items: [
                  "Python (pandas, numpy, scikit-learn)",
                  "Modeling: regression, classification, clustering",
                  "Time-series: ARIMA/Prophet (basics)",
                  "Feature engineering & validation",
                  "MLOps basics (environments, reproducibility)"
                ]
              },
              {
                title: "AI Engineering & Development",
                icon: Code,
                color: "green",
                items: [
                  "Automation scripts (reports, ETL)",
                  "Internal web tools (Apps Script/React)",
                  "APIs & integrations",
                  "SQL (Postgres, MySQL, MSSQL)"
                ]
              },
              {
                title: "Analytics & Visualization",
                icon: TrendingUp,
                color: "orange",
                items: [
                  "Power BI, Tableau, Looker Studio",
                  "Interactive dashboards",
                  "Storytelling with data"
                ]
              }
            ].map((group, i) => (
              <Card key={i} delay={0.1 * (i + 1)} className="h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${group.color}-100 flex items-center justify-center mr-4`}>
                    <group.icon className={`w-6 h-6 text-${group.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-gray-600 flex items-start text-sm">
                      <span className={`w-2 h-2 bg-${group.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600">
              Track record of delivering measurable value through data-driven solutions.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                role: "Data Analyst (Operations)",
                org: "Channel Partner Startup (Real Estate)",
                time: "2024 — Present",
                highlights: [
                  "Automated daily reporting with Python, reducing processing time from 60 minutes to under 5 minutes",
                  "Designed internal websites and tools for CRM workflows & task tracking",
                  "Built comprehensive Power BI & Looker Studio dashboards for sales & marketing teams",
                  "Managed large customer datasets while ensuring data integrity & security compliance"
                ]
              },
              {
                role: "Data Analyst Intern",
                org: "Cloud Counselage",
                time: "Jun 2024 — Present",
                highlights: [
                  "Performed data cleaning, transformation, and visualization for analytics requests",
                  "Supported data science team with exploratory data analysis & feature preparation"
                ]
              },
              {
                role: "Data Analyst Intern",
                org: "Unified Mentor",
                time: "May 2024 — Jun 2024",
                highlights: [
                  "Conducted EDA for HR & Finance domains with basic ML for predictive insights"
                ]
              }
            ].map((exp, i) => (
              <Card key={i} delay={0.1 * (i + 1)}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.org}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 lg:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.time}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A portfolio of machine learning experiments and production-ready solutions.
            </p>
          </div>

          {/* ML Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              Machine Learning Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Employee Attrition Prediction",
                  description: "Built classification model to identify churn risk factors and drivers, providing actionable insights for HR retention strategies.",
                  tech: ["Python", "pandas", "scikit-learn", "EDA"],
                  problemStatement: "Organizations face significant costs due to employee turnover, including recruitment expenses, training costs, and productivity loss. Understanding the key factors that lead to employee attrition can help HR departments implement targeted retention strategies.",
                  objectives: [
                    "Identify primary factors contributing to employee attrition",
                    "Build a predictive model to identify at-risk employees",
                    "Provide actionable recommendations for HR departments"
                  ],
                  dataSample: {
                    headers: ["Age", "Department", "Job Satisfaction", "Years at Company", "Attrition"],
                    rows: [
                      ["35", "Sales", "High", "8", "No"],
                      ["28", "R&D", "Medium", "2", "Yes"],
                      ["42", "HR", "High", "15", "No"],
                      ["31", "Sales", "Low", "3", "Yes"],
                      ["38", "R&D", "High", "10", "No"]
                    ],
                    note: "Sample showing 5 of 1,470 employee records used in analysis"
                  },
                  methodology: [
                    {
                      title: "1. Data Preprocessing",
                      description: "Cleaned dataset, handled missing values, encoded categorical variables, and scaled numerical features"
                    },
                    {
                      title: "2. Exploratory Data Analysis",
                      description: "Analyzed attrition patterns across departments, age groups, and satisfaction levels"
                    },
                    {
                      title: "3. Feature Engineering",
                      description: "Created new features such as work-life balance score and career progression rate"
                    },
                    {
                      title: "4. Model Training",
                      description: "Trained Random Forest, Logistic Regression, and XGBoost models with cross-validation"
                    }
                  ],
                  codeSnippet: `# Feature Importance Analysis
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Get feature importance
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)`,
                  insights: [
                    "Job satisfaction and work-life balance were the top two predictors of attrition (combined 42% importance)",
                    "Employees with 2-3 years tenure showed highest attrition rate (28%), suggesting critical retention period",
                    "Monthly income and career growth opportunities significantly impacted retention decisions",
                    "Model achieved 87% accuracy in predicting employee attrition with 0.82 F1-score"
                  ],
                  images: [
                    {
                      placeholder: "Feature Importance Chart",
                      caption: "Top 10 features contributing to employee attrition prediction"
                    },
                    {
                      placeholder: "Attrition by Department",
                      caption: "Distribution of attrition rates across different departments"
                    }
                  ],
                  recommendations: [
                    "Implement regular job satisfaction surveys with focus on work-life balance metrics",
                    "Create targeted retention programs for employees in their 2nd-3rd year",
                    "Establish clear career progression paths with transparent promotion criteria",
                    "Review compensation packages quarterly to remain competitive in the market"
                  ],
                  conclusion: "The predictive model successfully identified key attrition drivers, enabling HR to proactively address retention challenges. By focusing on job satisfaction, career development, and work-life balance, organizations can reduce attrition rates by an estimated 15-20%.",
                  link: "https://github.com/Narendraspatil/Employee_Attrition_Analysis"
                },
                {
                  title: "EV Market Forecasting",
                  description: "Developed time-series analysis for electric vehicle market trends and projections across 2-wheeler and 4-wheeler segments.",
                  tech: ["Python", "ARIMA", "pandas"],
                  problemStatement: "The Indian electric vehicle market is experiencing rapid growth, but stakeholders need accurate forecasts to make informed investment and policy decisions. Understanding segment-specific trends is crucial for manufacturers, investors, and government agencies.",
                  objectives: [
                    "Analyze historical EV sales data across 2W and 4W segments",
                    "Develop time-series forecasting models for future sales projections",
                    "Identify growth drivers and market dynamics"
                  ],
                  dataSample: {
                    headers: ["Year", "Month", "2W Sales", "4W Sales", "Total Sales"],
                    rows: [
                      ["2022", "Jan", "32,450", "2,340", "34,790"],
                      ["2022", "Feb", "35,120", "2,580", "37,700"],
                      ["2022", "Mar", "41,230", "3,120", "44,350"],
                      ["2022", "Apr", "38,900", "2,890", "41,790"],
                      ["2022", "May", "45,670", "3,450", "49,120"]
                    ],
                    note: "Monthly sales data from 2020-2023 covering both segments"
                  },
                  methodology: [
                    {
                      title: "1. Data Collection & Cleaning",
                      description: "Aggregated sales data from multiple sources and handled seasonal variations"
                    },
                    {
                      title: "2. Trend Analysis",
                      description: "Decomposed time series into trend, seasonal, and residual components"
                    },
                    {
                      title: "3. Model Selection",
                      description: "Tested ARIMA, SARIMA, and Prophet models for best fit"
                    },
                    {
                      title: "4. Forecast Generation",
                      description: "Generated 24-month forecasts with confidence intervals"
                    }
                  ],
                  insights: [
                    "2-wheeler segment shows 156% YoY growth, driven by last-mile delivery and urban commuting",
                    "4-wheeler segment demonstrates 89% YoY growth with strong government incentive correlation",
                    "Seasonal patterns indicate Q4 sales peaks aligned with festival periods",
                    "Market projected to reach 2.1M units by 2025 (combined segments)"
                  ],
                  images: [
                    {
                      placeholder: "Sales Trend Analysis",
                      caption: "Historical and forecasted EV sales with confidence intervals"
                    },
                    {
                      placeholder: "Segment Comparison",
                      caption: "Growth rate comparison between 2W and 4W segments"
                    }
                  ],
                  recommendations: [
                    "Manufacturers should increase 2W production capacity to meet projected demand surge",
                    "Policy makers should extend incentive programs through 2026 to sustain momentum",
                    "Charging infrastructure investment needed in tier-2 and tier-3 cities",
                    "Focus on affordable segment (₹80k-₹1.2L) for maximum market penetration"
                  ],
                  conclusion: "The EV market forecast indicates sustained high growth across both segments, with 2-wheelers leading adoption. Strategic investments in infrastructure and continued policy support will be critical for achieving projected growth targets.",
                  link: "https://github.com/Narendraspatil/Indian_EV_Market_Analysis"
                },
                {
                  title: "Climate Change Indicators Analysis",
                  description: "Long-term analysis and forecasting model for temperature and CO₂ emission trends using statistical methods.",
                  tech: ["Python", "ARIMA", "matplotlib"],
                  problemStatement: "Climate change poses significant global challenges, requiring accurate long-term trend analysis and forecasting. Understanding temperature and CO₂ emission trajectories is essential for policy formulation and public awareness.",
                  objectives: [
                    "Analyze historical climate data spanning multiple decades",
                    "Identify correlation between CO₂ levels and temperature changes",
                    "Project future climate indicators under current trends"
                  ],
                  dataSample: {
                    headers: ["Year", "Global Temp (°C)", "CO₂ (ppm)", "Sea Level (mm)", "Arctic Ice (km²)"],
                    rows: [
                      ["2018", "+0.98", "407.4", "+3.4", "4.71M"],
                      ["2019", "+1.02", "409.8", "+3.6", "4.15M"],
                      ["2020", "+1.15", "412.5", "+3.8", "3.92M"],
                      ["2021", "+1.09", "414.7", "+4.1", "4.23M"],
                      ["2022", "+1.21", "417.1", "+4.3", "3.74M"]
                    ],
                    note: "Annual climate indicators from 1960-2022 (62 years of data)"
                  },
                  methodology: [
                    {
                      title: "1. Data Aggregation",
                      description: "Compiled data from NASA, NOAA, and other climate monitoring agencies"
                    },
                    {
                      title: "2. Trend Decomposition",
                      description: "Separated long-term trends from cyclical patterns and anomalies"
                    },
                    {
                      title: "3. Correlation Analysis",
                      description: "Examined relationships between different climate indicators"
                    },
                    {
                      title: "4. Predictive Modeling",
                      description: "Applied ARIMA models for 30-year projections"
                    }
                  ],
                  insights: [
                    "Global temperature increased by 1.1°C since pre-industrial era, with acceleration post-2000",
                    "CO₂ levels show strong correlation (r=0.94) with temperature increases",
                    "Arctic sea ice declining at rate of 13% per decade",
                    "Current trends project 2.4°C increase by 2050 without intervention"
                  ],
                  images: [
                    {
                      placeholder: "Temperature Trend",
                      caption: "Global temperature anomaly over 60 years with forecast"
                    },
                    {
                      placeholder: "CO₂ Correlation",
                      caption: "Scatter plot showing CO₂ vs temperature relationship"
                    }
                  ],
                  recommendations: [
                    "Urgent need for aggressive carbon reduction policies to limit warming to 1.5°C",
                    "Invest in renewable energy infrastructure to achieve net-zero by 2050",
                    "Implement carbon pricing mechanisms to accelerate emission reductions",
                    "Enhance climate monitoring systems for better early warning capabilities"
                  ],
                  conclusion: "The analysis reveals alarming acceleration in climate change indicators. Immediate and sustained action is required to mitigate the most severe impacts. The strong correlation between emissions and warming underscores the importance of rapid decarbonization efforts.",
                  link: "https://github.com/Narendraspatil/Climate-Change-Indicators-Analysis"
                },
                {
                  title: "Myntra Pricing Optimization",
                  description: "Data-driven pricing analysis with dynamic discount recommendations based on customer segments and product categories.",
                  tech: ["Python", "EDA", "Feature Engineering"],
                  problemStatement: "E-commerce platforms struggle to balance competitive pricing with profitability. Static discount strategies often leave money on the table or reduce margins unnecessarily. A data-driven approach can optimize pricing and discounting for maximum revenue.",
                  objectives: [
                    "Analyze pricing patterns across product categories and brands",
                    "Identify optimal discount levels for different customer segments",
                    "Develop dynamic pricing recommendations based on multiple factors"
                  ],
                  dataSample: {
                    headers: ["Product Category", "Brand", "Original Price", "Discount %", "Final Price", "Units Sold"],
                    rows: [
                      ["T-Shirts", "Nike", "₹2,499", "40%", "₹1,499", "1,234"],
                      ["Jeans", "Levi's", "₹3,999", "30%", "₹2,799", "856"],
                      ["Shoes", "Adidas", "₹5,499", "50%", "₹2,749", "2,104"],
                      ["Shirts", "Arrow", "₹2,799", "35%", "₹1,819", "673"],
                      ["Dresses", "W", "₹3,499", "45%", "₹1,924", "1,567"]
                    ],
                    note: "Sample from 15,000+ product listings with sales data"
                  },
                  methodology: [
                    {
                      title: "1. Price Elasticity Analysis",
                      description: "Calculated demand sensitivity to price changes across categories"
                    },
                    {
                      title: "2. Customer Segmentation",
                      description: "Clustered customers based on purchase behavior and price sensitivity"
                    },
                    {
                      title: "3. Competitive Benchmarking",
                      description: "Analyzed competitor pricing strategies and market positioning"
                    },
                    {
                      title: "4. Optimization Model",
                      description: "Built recommendation engine for dynamic discount allocation"
                    }
                  ],
                  insights: [
                    "Sweet spot discount range is 35-45% for maximum conversion without excessive margin erosion",
                    "Premium brands (Nike, Adidas) maintain sales volume even with lower discounts (25-30%)",
                    "Footwear category shows highest price elasticity (-2.3), suggesting room for optimization",
                    "Festival periods see 3x conversion rate increase, justifying deeper temporary discounts"
                  ],
                  images: [
                    {
                      placeholder: "Discount vs Revenue",
                      caption: "Optimal discount curves for different product categories"
                    },
                    {
                      placeholder: "Customer Segments",
                      caption: "Price sensitivity analysis across customer segments"
                    }
                  ],
                  recommendations: [
                    "Implement tiered discounting: 25-30% for premium brands, 40-50% for mass market",
                    "Use dynamic pricing with 5-10% variance based on inventory levels and demand",
                    "Target price-sensitive segments with personalized discount coupons (15-20% additional)",
                    "Reserve deep discounts (50%+) for end-of-season clearance and slow-moving inventory"
                  ],
                  conclusion: "Data-driven pricing optimization can increase revenue by 12-18% while maintaining customer satisfaction. The key is balancing category-specific elasticity with brand positioning and competitive dynamics through intelligent, dynamic discount allocation.",
                  link: "https://github.com/Narendraspatil/Myntra_product_Analysis"
                }
              ].map((project, i) => (
                <ProjectCard key={i} project={project} delay={0.1 * (i + 1)} />
              ))}
            </div>
          </div>

          {/* Software Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-green-600" />
              </div>
              Software Solutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Automated Reporting System",
                  description: "Python-based automation that reduced daily reporting time from 60 minutes to under 5 minutes.",
                  tech: ["Python", "Task Scheduling", "ETL"]
                },
                {
                  title: "Internal CRM Support Tools",
                  description: "Web-based utilities for lead assignment, data validation, and compliance management.",
                  tech: ["Google Apps Script", "React", "SQL"]
                },
                {
                  title: "Team Task Scheduler",
                  description: "Hierarchy-aware task planner with integrated calendar views and role-based permissions.",
                  tech: ["Google Sheets", "Apps Script"]
                }
              ].map((project, i) => (
                <ProjectCard key={i} project={project} delay={0.1 * (i + 1)} />
              ))}
            </div>
          </div>

          {/* NarenP Solutions - Professional mention */}
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200" delay={0.5}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white mr-3">
                  N
                </div>
                <h3 className="text-xl font-semibold text-gray-800">NarenP Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A personal initiative focused on building practical, data-driven software solutions. 
                Currently exploring LLM integrations, dashboard optimization, ETL automation, and streamlined MLOps workflows.
              </p>
              <div className="text-sm text-gray-500 italic">
                Core Principles: "Ship fast, iterate faster • Automate before scaling • Focus on usability and clarity"
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600">
              Open to opportunities in Data Science, Machine Learning, and AI Engineering roles.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <a href="mailto:patil_narendra@outlook.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    patil_narendra@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 justify-start md:justify-end">
                <a href="https://www.linkedin.com/in/narendra-patil-/" className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a href="https://github.com/Narendraspatil" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 Narendra Patil • Data Science & AI Solutions
          </p>
          <p className="text-gray-400 text-sm">
            Built with modern web technologies for optimal performance
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
