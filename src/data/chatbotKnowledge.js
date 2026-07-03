export const chatbotKnowledge = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hi there! 👋 I'm Akhil's AI assistant. How can I help you today? You can ask me about his skills, projects, or contact info.",
  },
  {
    keywords: ["who are you", "what are you", "bot"],
    response: "I'm a virtual assistant created to help you navigate Akhil's portfolio. Think of me as his digital representative! 🤖",
  },
  {
    keywords: ["skills", "tech", "stack", "technologies", "languages"],
    response: "Akhil is skilled in multiple technologies including React.js, Node.js, Express, MongoDB, Tailwind CSS, Python, and Java. He loves building full-stack web applications! 💻",
  },
  {
    keywords: ["project", "projects", "work", "portfolio"],
    response: "Akhil has worked on several awesome projects! Some notable ones include 'AI-Job-Hunter' (an AI-powered job tracking platform), 'Vyaparpro' (a business management solution), and 'Foodie' (an online food ordering system). Feel free to scroll up to the 'Projects' section to check them out! 🚀",
  },
  {
    keywords: ["contact", "email", "hire", "freelance", "message", "connect"],
    response: "You can easily reach out to Akhil! Just head over to the 'Contact' section at the bottom of the page, or send an email directly. He's always open to new opportunities! ✉️",
  },
  {
    keywords: ["education", "study", "degree", "college", "university"],
    response: "Akhil has a strong educational background in Computer Science and Engineering. Check out the 'Education' section for more details! 🎓",
  },
  {
    keywords: ["bye", "goodbye", "see ya", "cya"],
    response: "Goodbye! Have a great day! Don't hesitate to reach out if you need anything else. 👋",
  },
  {
    keywords: ["thanks", "thank you", "thx"],
    response: "You're very welcome! Let me know if you have any other questions. 😊",
  }
];

export const getBotResponse = (userMessage) => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  for (const knowledge of chatbotKnowledge) {
    // Check if any of the keywords are present in the user's message
    if (knowledge.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
      return knowledge.response;
    }
  }

  // Default response if no keywords match
  return "I'm not quite sure about that. I'm still learning! 🤔 However, you can ask me about Akhil's 'skills', 'projects', or how to 'contact' him.";
};
