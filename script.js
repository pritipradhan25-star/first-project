
let currentLanguage = "en";

const translations = {
  en: {
    heading: "What help do you need today?",
    language: "Choose your language",
    intro: "Select a service below. We will guide you step by step.",
    pension: "Pension Information",
    documents: "Required Documents",
    banking: "Banking Assistance",
    centres: "Find Help Centres",
    welcome: "Your selected service information will appear here.",
    callTitle: "Need Personal Help?",
    callIntro: "You can contact these helplines for assistance.",
    csc: "For CSC-related assistance",
    pensionHelp: "For pension-related grievances"
  },
  hi: {
    heading: "Aaj aapko kis cheez mein madad chahiye?",
    language: "Apni bhasha chunein",
    intro: "Neeche seva chunein. Hum aapko step-by-step madad denge.",
    pension: "Pension ki jankari",
    documents: "Zaroori documents",
    banking: "Banking mein madad",
    centres: "Madad kendra khojein",
    welcome: "Aapki chuni hui seva ki jankari yahan dikhegi.",
    callTitle: "Kya aapko phone par madad chahiye?",
    callIntro: "Madad ke liye helpline se sampark karein.",
    csc: "CSC se judi madad ke liye",
    pensionHelp: "Pension ki shikayat ke liye"
  }
};

const services = {
  pension: {
    en: {
      title: "Pension Information",
      text: "Learn about pension schemes. Eligibility and benefits depend on the scheme and state."
    },
    hi: {
      title: "Pension ki jankari",
      text: "Pension yojana ke baare mein jaanein. Yogyata aur labh yojana aur rajya par nirbhar karte hain."
    }
  },
  documents: {
    en: {
      title: "Required Documents",
      text: "Common examples include identity proof, address proof, bank details and scheme-specific documents. Verify the official list."
    },
    hi: {
      title: "Zaroori documents",
      text: "Aam taur par pahchan proof, pate ka proof, bank details aur yojana se jude documents maange ja sakte hain. Official list zaroor check karein."
    }
  },
  banking: {
    en: {
      title: "Banking Assistance",
      text: "Ask about basic banking services and authorised banking points. Never share your PIN or OTP."
    },
    hi: {
      title: "Banking mein madad",
      text: "Banking services aur authorised banking points ke baare mein jaankari lein. Apna PIN ya OTP kisi ko na batayein."
    }
  },
  centres: {
    en: {
      title: "Find Help Centres",
      text: "Ask your Gram Panchayat about nearby help centres. Confirm the address and opening hours before travelling."
    },
    hi: {
      title: "Madad kendra khojein",
      text: "Apni Gram Panchayat se paas ke madad kendron ke baare mein poochhein. Jaane se pehle pata aur khulne ka samay confirm karein."
    }
  }
};

function setLanguage(language) {
  currentLanguage = language;
  const t = translations[language];

  document.querySelector("section h2").textContent = t.heading;
  document.querySelector(".language-options").previousElementSibling.textContent =
    language === "hi" ? "Apni bhasha chunein" : "Choose your language";
  document.querySelector(".language-options").nextElementSibling.textContent = t.intro;

  const buttons = document.querySelectorAll(".services button");
  const keys = ["pension", "documents", "banking", "centres"];

  buttons.forEach((button, index) => {
    button.textContent = t[keys[index]];
  });

  const callHelp = document.querySelector(".call-help");
  if (callHelp) {
    const headings = callHelp.querySelectorAll("h2, div h3");
    const paragraphs = callHelp.querySelectorAll("p");

    if (headings[0]) headings[0].textContent = t.callTitle;
    if (paragraphs[0]) paragraphs[0].textContent = t.callIntro;
    if (headings[1]) headings[1].textContent = "Common Service Centre (CSC)";
    if (paragraphs[1]) paragraphs[1].textContent = t.csc;
    if (headings[2]) headings[2].textContent = "Pension Helpline";
    if (paragraphs[2]) paragraphs[2].textContent = t.pensionHelp;
  }

  const result = document.getElementById("result");
  if (result) {
    result.replaceChildren();
    const p = document.createElement("p");
    p.textContent = t.welcome;
    result.appendChild(p);
  }
}

function showService(key) {
  const result = document.getElementById("result");
  const service = services[key];

  if (!service || !result) return;

  const content = service[currentLanguage];

  result.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = content.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content.text;

  result.append(heading, paragraph);
}
