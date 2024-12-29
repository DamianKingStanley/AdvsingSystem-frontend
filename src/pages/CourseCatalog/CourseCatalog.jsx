import React, { useState } from "react";
import "./CourseCatalog.css";

const CourseCatalog = () => {
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("100");
  const [semester, setSemester] = useState("1");
  const [CourseCatalog, setCourseCatalog] = useState([]);

  const courses = {
    commonCourses: [
      {
        code: "MTH 111",
        name: "Mathematics I",
        description: "Introductory algebra, calculus, and trigonometry.",
      },
      {
        code: "CHM 111",
        name: "Organic Chemistry I",
        description: "Study of organic compounds and reactions.",
      },
      {
        code: "BIO 111",
        name: "Biology I",
        description: "Introduction to cellular biology and genetics.",
      },
      {
        code: "GSS 111",
        name: "English I",
        description: "Development of academic writing and reading skills.",
      },
      {
        code: "GSS 113",
        name: "Physical and Health Science I",
        description: "Basic principles of health and physical education.",
      },
      {
        code: "GSS 115",
        name: "German I",
        description: "Introduction to the German language and grammar.",
      },
    ],
    ceetCourses: {
      Electrical: [
        {
          code: "ENG 211",
          name: "Electrical Circuit Analysis I",
          description: "Fundamentals of DC and AC circuit analysis.",
        },
        {
          code: "ENG 311",
          name: "Electrical Machines I",
          description: "Introduction to transformers and electric motors.",
        },
        {
          code: "ENG 411",
          name: "Power Systems I",
          description: "Basic concepts in power generation and distribution.",
        },
        {
          code: "ENG 511",
          name: "Control Systems",
          description: "Study of control system theory and applications.",
        },
      ],
      Mechanical: [
        {
          code: "ENG 221",
          name: "Fluid Mechanics I",
          description: "Principles of fluid statics and dynamics.",
        },
        {
          code: "ENG 321",
          name: "Thermodynamics I",
          description: "Basic laws and applications of thermodynamics.",
        },
        {
          code: "ENG 421",
          name: "Machine Design",
          description: "Design and analysis of mechanical systems.",
        },
        {
          code: "ENG 521",
          name: "Advanced Manufacturing",
          description: "Advanced manufacturing techniques and processes.",
        },
      ],
      Civil: [
        {
          code: "ENG 231",
          name: "Structural Mechanics",
          description: "Fundamentals of structural analysis and materials.",
        },
        {
          code: "ENG 331",
          name: "Concrete Technology",
          description: "Properties and design of concrete structures.",
        },
        {
          code: "ENG 431",
          name: "Foundation Engineering",
          description: "Principles of soil mechanics and foundation design.",
        },
        {
          code: "ENG 531",
          name: "Environmental Engineering",
          description: "Introduction to environmental engineering concepts.",
        },
      ],
    },
    colpasCourses: {
      ComputerScience: [
        {
          code: "CSC 211",
          name: "Data Structures I",
          description: "Introduction to data structures like arrays and lists.",
        },
        {
          code: "CSC 311",
          name: "Database Systems",
          description: "Study of database models and query languages.",
        },
        {
          code: "CSC 411",
          name: "Operating Systems",
          description:
            "Fundamentals of operating system architecture and design.",
        },
        {
          code: "CSC 511",
          name: "Artificial Intelligence",
          description: "Basic concepts and applications of AI.",
        },
      ],
      Statistics: [
        {
          code: "STA 211",
          name: "Probability Theory",
          description: "Introduction to probability concepts and models.",
        },
        {
          code: "STA 311",
          name: "Statistical Inference",
          description: "Methods of drawing inferences from data.",
        },
        {
          code: "STA 411",
          name: "Regression Analysis",
          description: "Study of linear and multiple regression techniques.",
        },
      ],
      Physics: [
        {
          code: "PHY 211",
          name: "Classical Mechanics I",
          description: "Newtonian mechanics and motion analysis.",
        },
        {
          code: "PHY 311",
          name: "Electromagnetism I",
          description: "Electric fields, magnetic fields, and circuits.",
        },
        {
          code: "PHY 411",
          name: "Quantum Mechanics",
          description: "Introduction to quantum theory and applications.",
        },
      ],
      Chemistry: [
        {
          code: "CHM 211",
          name: "Physical Chemistry I",
          description: "Study of thermodynamics and chemical kinetics.",
        },
        {
          code: "CHM 311",
          name: "Inorganic Chemistry",
          description: "Properties and reactions of inorganic compounds.",
        },
        {
          code: "CHM 411",
          name: "Analytical Chemistry",
          description: "Quantitative analysis techniques in chemistry.",
        },
      ],
    },
    colnasCourses: {
      Microbiology: [
        {
          code: "MCB 211",
          name: "Microbial Genetics",
          description: "Genetics and molecular biology of microorganisms.",
        },
        {
          code: "MCB 311",
          name: "Industrial Microbiology",
          description: "Microbial applications in industrial processes.",
        },
        {
          code: "MCB 411",
          name: "Medical Microbiology",
          description: "Pathogenesis and control of microbial diseases.",
        },
      ],
      Biochemistry: [
        {
          code: "BCM 211",
          name: "Biochemistry I",
          description: "Biochemical principles of cellular processes.",
        },
        {
          code: "BCM 311",
          name: "Enzymology",
          description: "Study of enzyme structure, function, and kinetics.",
        },
        {
          code: "BCM 411",
          name: "Molecular Biology",
          description: "Molecular basis of gene expression and regulation.",
        },
      ],
      PSB: [
        {
          code: "PSB 211",
          name: "Plant Physiology",
          description: "Plant processes including photosynthesis and growth.",
        },
        {
          code: "PSB 311",
          name: "Ecology",
          description: "Interactions between organisms and their environment.",
        },
        {
          code: "PSB 411",
          name: "Plant Biochemistry",
          description: "Chemical processes within plant cells.",
        },
      ],
    },
    cnremCourses: {
      EnvironmentalResourceManagement: [
        {
          code: "ERM 211",
          name: "Natural Resource Conservation",
          description: "Principles of conservation and sustainable use.",
        },
        {
          code: "ERM 311",
          name: "Environmental Impact Assessment",
          description: "Methods to assess environmental impacts of projects.",
        },
        {
          code: "ERM 411",
          name: "Sustainable Development",
          description:
            "Balancing economic growth with environmental stewardship.",
        },
      ],
      NaturalResourceManagement: [
        {
          code: "NRM 211",
          name: "Wildlife Management",
          description: "Conservation of wildlife populations and habitats.",
        },
        {
          code: "NRM 311",
          name: "Forestry Management",
          description: "Sustainable management of forest resources.",
        },
        {
          code: "NRM 411",
          name: "Water Resource Management",
          description: "Principles of hydrology and water conservation.",
        },
      ],
    },
  };

  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setCollege(selectedCollege);
    setDepartment("");
    setCourseCatalog([]);
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
  };

  const generateSemesterCourses = () => {
    const baseCourses = courses.commonCourses.map((course) => ({
      ...course,
      code: course.code.replace("1", semester),
    }));

    let departmentCourses = [];
    if (college === "CEET") {
      departmentCourses = courses.ceetCourses[department] || [];
    } else if (college === "COLPAS") {
      departmentCourses = courses.colpasCourses[department] || [];
    } else if (college === "COLNAS") {
      departmentCourses = courses.colnasCourses[department] || [];
    } else if (college === "CNREM") {
      departmentCourses = courses.cnremCourses[department] || [];
    }

    return [
      ...baseCourses,
      ...departmentCourses.map((course) => ({
        ...course,
        code: course.code.replace("1", semester),
      })),
    ];
  };

  return (
    <div className="course-catalog-unique-container">
      <h1>University Course Catalog</h1>
      <div className="course-catalog-unique-form">
        <label>Select Your College:</label>
        <select
          value={college}
          onChange={handleCollegeChange}
          className="course-catalog-unique-select"
        >
          <option value="">-- Select College --</option>
          <option value="CEET">CEET - Engineering College</option>
          <option value="COLPAS">COLPAS - Physical & Applied Sciences</option>
          <option value="COLNAS">COLNAS - Natural Sciences</option>
          <option value="CNREM">CNREM - Natural Resource Management</option>
        </select>

        {college && (
          <>
            <label>Select Your Department:</label>
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="course-catalog-unique-select"
            >
              <option value="">-- Select Department --</option>
              {Object.keys(courses[college.toLowerCase() + "Courses"]).map(
                (dept) => (
                  <option value={dept} key={dept}>
                    {dept}
                  </option>
                )
              )}
            </select>
          </>
        )}

        {department && (
          <>
            <label>Select Your Level:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="course-catalog-unique-select"
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </select>

            <label>Select Semester:</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="course-catalog-unique-select"
            >
              <option value="1">First Semester</option>
              <option value="2">Second Semester</option>
            </select>

            <button
              className="course-catalog-unique-generate"
              onClick={() => setCourseCatalog(generateSemesterCourses())}
            >
              Generate Course Catalog
            </button>
          </>
        )}
      </div>

      <div className="course-catalog-unique-results">
        {CourseCatalog.length > 0 && (
          <ul>
            {CourseCatalog.map((course) => (
              <li key={course.code}>
                <strong>{course.code}</strong>: {course.name} -{" "}
                {course.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
