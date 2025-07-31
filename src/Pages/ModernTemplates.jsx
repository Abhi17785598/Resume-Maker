import React from "react";

const ModernTemplates = () => {
  const resumeData = {
    name: "Madhusudhan",
    title: "Product Designer",
    contact: {
      website: "yourwebsite.com",
      email: "your@gmail.com",
      linkedin: "Linkedin : @id",
    },
    education: [
      {
        institute: "University",
        date: "Aug 2022",
        location: "Location",
        details:
          "Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces.",
      },
      {
        institute: "College",
        date: "Aug 2022",
        location: "Location",
        details:
          "Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces.",
      },
    ],
    experience: new Array(6).fill({
      company: "Company",
      role: "Product Designer",
      date: "Aug 2022 – Present",
      details:
        "Collaborated with cross-functional teams including product managers and developers to create user-friendly interfaces for web applications, and developers to create user-friendly interfaces for web applications.",
    }),
    skills: {
      design: [
        "User Interviews",
        "Affinity Diagramming",
        "Card Sorting",
        "Information Architecture",
        "A/B Testing",
        "Design Handoff",
      ],
      tools: ["Framer", "Webflow", "Sketch", "Adobe XD", "HTML/CSS", "Zeplin"],
    },
    extras: [
      {
        title: "10K Designer Memeber",
        description: "Collaborated with cross functional teams",
      },
      {
        title: "Winner Of Design Context",
        description: "Collaborated with cross functional teams",
      },
    ],
  };

  return (
    <div className="bg-white px-4 md:px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-4 py-1">
          STYLISH TEMPLATES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Modern Templates Made To Impress
        </h2>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-white border shadow-sm rounded-lg p-6 space-y-6"
            >
              {/* Top Profile */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold">{resumeData.name}</h3>
                    <p className="text-sm text-gray-600">{resumeData.title}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-right space-y-1">
                  <p>{resumeData.contact.website}</p>
                  <p>{resumeData.contact.email}</p>
                  <p>{resumeData.contact.linkedin}</p>
                </div>
              </div>

              {/* Two-column body layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Education */}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Education</h4>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-3">
                        <p className="text-sm font-medium">{edu.institute}</p>
                        <p className="text-xs text-gray-500">
                          {edu.date} | {edu.location}
                        </p>
                        <p className="text-xs text-gray-600">{edu.details}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Skill</h4>
                    <div className="flex gap-6">
                      <div>
                        <h5 className="text-xs font-semibold mb-1">Design</h5>
                        <ul className="text-xs text-gray-700 list-disc ml-4 space-y-1">
                          {resumeData.skills.design.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold mb-1">Tools</h5>
                        <ul className="text-xs text-gray-700 list-disc ml-4 space-y-1">
                          {resumeData.skills.tools.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Extras */}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Extras</h4>
                    <ul className="text-xs text-gray-700 list-disc ml-4 space-y-2">
                      {resumeData.extras.map((extra, idx) => (
                        <li key={idx}>
                          <p className="font-medium">{extra.title}</p>
                          <p className="text-gray-500">{extra.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm mb-1">Experience</h4>
                  {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium">
                        {exp.company} · {exp.role}
                      </p>
                      <p className="text-xs text-gray-500">{exp.date}</p>
                      <p className="text-xs text-gray-600">{exp.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-sm text-gray-500 pt-4">Modern</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ModernTemplates;
