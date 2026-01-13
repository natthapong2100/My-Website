import skillsPic from '../../images/svg-2.svg'

//black background (dark)
export const skillsObj = {
    id: 'skills',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'Skills',
    headline: "Programming Languages & Soft Skills",
    // description1: "Languages: Java, Python, C++, C, JavaScript, HTML, CSS, R, Go, SQL",
    // description2: "Frameworks & Libraries: React.js, Next.js, Node.js, Express.js, Tailwind CSS, PostgreSQL, Django, Robot framework, Selenium, jUnit, Qt, Parse, Git, GitHub, Docker",
    // description3: "Data Science & Analytics: numpy, pandas, matplotlib, scikit-learn, modAL, XGBoost, Tableau, Power BI, D3.js, Neo4j",
    // description4: "Large Language Models (LLM): Natural Language Toolkit (NLTK), Retrieval Augmented Generation (RAG), Ollama, LangChain, ChromaDB, FAISS",

    description1: {
        title: "Languages",
        content: "Java, Python, C++, C, JavaScript, HTML, CSS, R, Go, SQL"
    },
    description2: {
        title: "Frameworks & Libraries",
        content: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, PostgreSQL, Django, Robot Framework, Selenium, jUnit, Qt, Parse, Git, GitHub, Docker"
    },
    description3: {
        title: "Data Science & Analytics",
        content: "numPy, pandas, matplotlib, scikit-learn, modAL, XGBoost, Tableau, Power BI, D3.js, Neo4j"
    },
    description4: {
        title: "Large Language Models (LLM)",
        content: "Natural Language Toolkit (NLTK), Retrieval Augmented Generation (RAG), Ollama, LangChain, ChromaDB, FAISS"
    },

    imgStart: true,
    img: skillsPic,
    alt: 'Skills', 
    dark: true,
    primary: true,
    dartText: false

};


// // white background (light)
// export const skillsObj = {
//     id: 'skills',
//     lightBg: true,
//     lightText: false,
//     lightTextDesc: false,

//     topLine: 'Skills',
//     headline: "Programming Languages & Soft Skills",
//     description1: "Languages: Java, Python, C++, C, JavaScript, HTML5, CSS",
//     description2: "Modules/Library/Technologies: React, Qt, Pygame, Android Studio, Parse",
//     description3: "Soft Skills: Growth mindset, Problem solving, Teamwork",

//     imgStart: true,
//     img: skillsPic,
//     alt: 'Skills', 
//     dark: false,
//     primary: false,
//     darkText: true

// };
