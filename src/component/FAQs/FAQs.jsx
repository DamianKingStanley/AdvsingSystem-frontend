import React, { useState } from 'react';
import './FAQs.css'; // CSS for animations

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How do I calculate my GPA?", answer: "To calculate your GPA, divide the total number of grade points earned by the total number of credit hours attempted." },
    { question: "How do I calculate my CGPA?", answer: "CGPA is the cumulative GPA over all semesters. It’s calculated by dividing the total grade points earned by the total credit hours of all semesters." },
    { question: "What is the job of a course advisor?", answer: "A course advisor helps students select courses, provides academic advice, and assists with educational planning to ensure students meet graduation requirements." },
    { question: "How do I register for courses?", answer: "To register for courses, log in to your student portal, go to 'Course Registration,' and select the courses you wish to enroll in for the upcoming semester." },
    { question: "What is a credit hour?", answer: "A credit hour is the unit that measures educational credit, usually based on the number of hours of instruction per week throughout a term." },
    { question: "How can I drop a course?", answer: "You can drop a course by going to your student portal, navigating to the 'Course Registration' section, and selecting the course to drop. Make sure it's within the allowed drop period." },
    { question: "What is academic probation?", answer: "Academic probation occurs when a student's GPA falls below the institution's minimum requirement. The student must improve their GPA in subsequent semesters to avoid suspension." },
    { question: "What are general education requirements?", answer: "General education requirements are a set of courses outside your major that all students must take, such as English, mathematics, and social sciences." },
    { question: "How do I apply for graduation?", answer: "To apply for graduation, visit your student portal, fill out the graduation application form, and submit it by the specified deadline." },
    { question: "What is the difference between a major and a minor?", answer: "A major is your primary field of study, while a minor is a secondary field that requires fewer courses." },
    { question: "How do I get my transcript?", answer: "You can request your transcript through the student portal or the Registrar’s Office. Some universities offer digital copies as well." },
    { question: "What is a prerequisite course?", answer: "A prerequisite course is one that you must complete before enrolling in another, more advanced course." },
    { question: "What is the difference between a Bachelor of Arts (B.A.) and a Bachelor of Science (B.S.)?", answer: "A B.A. typically focuses on liberal arts, while a B.S. is more focused on science and technical fields." },
    { question: "How do I appeal a grade?", answer: "To appeal a grade, contact your professor first. If unresolved, follow the university’s formal grade appeal process, which usually involves submitting a written appeal." },
    { question: "How do I find my advisor?", answer: "You can find your advisor’s information by logging into the student portal under 'My Profile' or 'Advising.' You can also visit the Academic Advising Office." },
    { question: "What is a course syllabus?", answer: "A course syllabus is a document that outlines course objectives, required readings, assignments, grading criteria, and policies." },
    { question: "How do I apply for financial aid?", answer: "To apply for financial aid, fill out the Free Application for Federal Student Aid (FAFSA) or the equivalent form used by your institution, and check the deadlines." },
    { question: "What is an internship?", answer: "An internship is a temporary position that provides students with real-world experience in their field of study. It may or may not be paid." },
    { question: "How do I change my major?", answer: "To change your major, you’ll need to meet with your academic advisor and complete the necessary paperwork. Some majors may have additional requirements." },
    { question: "What is a capstone course?", answer: "A capstone course is typically the final course in a degree program that allows students to apply what they’ve learned in a comprehensive project or research paper." },
    { question: "How do I apply for a student loan?", answer: "To apply for a student loan, visit your financial aid office or apply online through the appropriate student loan programs available in your country." },
    { question: "What should I do if I’m struggling with a course?", answer: "If you're struggling with a course, consider speaking with your professor, attending tutoring sessions, or visiting your academic advisor for guidance." }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
