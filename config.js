// ============================================================
//  SURVEY CONFIGURATION — edit this file for each new survey
// ============================================================

const SURVEY_TITLE = "सोलर वॉटर पंप स्थिती सर्वेक्षण";
const SURVEY_SUBTITLE = "Murbad Taluka — Solar Water Pump Status Survey";

// Paste your Google Apps Script deployment URL here after setup
const SUBMIT_URL = "https://script.google.com/macros/s/AKfycbxfnjttzcFoVPxO-_so4aRP3yld3dgJp9EVOq7Tjp6Oa3eSTn8emrKaZn2JI92AwozUJQ/exec";

// Name of the tab in Google Sheet — change this for each new survey
const SHEET_TAB = "Murbad Solar Pump 2026";

// ── School List ──────────────────────────────────────────────
const SCHOOLS = [
  { udise: "TEST", name: "Test School (Admin Preview)", taluka: "Admin" },
  { udise: "27210900302", name: "जि.प.शाळा वाघिवलीपाडा", taluka: "Murbad" },
  { udise: "27210900701", name: "जि.प.शाळा वडू", taluka: "Murbad" },
  { udise: "27210901701", name: "जि.प.शाळा तिवारपाडा", taluka: "Murbad" },
  { udise: "27210901901", name: "जि.प.शाळा इंदे", taluka: "Murbad" },
  { udise: "27210902001", name: "जि.प.शाळा आंबेळे खु", taluka: "Murbad" },
  { udise: "27210902601", name: "जि.प.शाळा धानिवली", taluka: "Murbad" },
  { udise: "27210902701", name: "जि.प.शाळा ब्राम्हणगाव", taluka: "Murbad" },
  { udise: "27210903001", name: "जि.प.शाळा फनसोली", taluka: "Murbad" },
  { udise: "27210903101", name: "जि.प.शाळा वेहरे", taluka: "Murbad" },
  { udise: "27210904701", name: "जि.प.शाळा बोरिवली", taluka: "Murbad" },
  { udise: "27210906001", name: "जि.प.शाळा तळवलीपाडा", taluka: "Murbad" },
  { udise: "27210906201", name: "जि.प.शाळा उमरोली खु", taluka: "Murbad" },
  { udise: "27210908001", name: "जि.प.शाळा बोरगांव", taluka: "Murbad" },
  { udise: "27210909202", name: "जि.प.शाळा वडाचापाडा", taluka: "Murbad" },
  { udise: "27210909402", name: "जि.प.शाळा टेभरेवाडी", taluka: "Murbad" },
  { udise: "27210910901", name: "जि.प.शाळा खोपीवली", taluka: "Murbad" },
  { udise: "27210912701", name: "जि.प.शाळा न्याहाडी", taluka: "Murbad" },
  { udise: "27210912703", name: "जि.प.शाळा न्याहाडीपाडा", taluka: "Murbad" },
  { udise: "27210913801", name: "जि.प.शाळा शिरवली", taluka: "Murbad" },
  { udise: "27210914203", name: "जि.प.शाळा जांभुळवाडी", taluka: "Murbad" },
  { udise: "27210914601", name: "जि.प.शाळा सोनवळे", taluka: "Murbad" },
  { udise: "27210915101", name: "जि.प.शाळा तळेगाव", taluka: "Murbad" },
  { udise: "27210915401", name: "जि.प.शाळा खरशेत", taluka: "Murbad" },
  { udise: "27210916101", name: "जि.प.शाळा साकुर्ली", taluka: "Murbad" },
  { udise: "27210917101", name: "जि.प.शाळा तुळई", taluka: "Murbad" },
  { udise: "27210918201", name: "जि.प.शाळा खांडपे", taluka: "Murbad" },
];

// ── Questions ────────────────────────────────────────────────
// Types: yesno | number | text
// showIf: { id: "qX", value: "yes" or "no" or a number }
// optional: true means the question can be skipped

const QUESTIONS = [
  {
    id: "q0",
    text: "तुमच्या शाळेत पाणीपुरवठ्यासाठी सोलर पंप आहे का?",
    subtext: "Does your school have a solar pump for water supply?",
    type: "yesnodk",
    showRestIf: "yes",
  },
  {
    id: "q1",
    text: "जेव्हा बोअरवेलमध्ये पुरेसे पाणी असते, तेव्हा सोलर पंप पाणी उपसतो का?",
    subtext: "When the borewell has sufficient water, does the solar pump work?",
    type: "yesno",
    showIf: { id: "q0", value: "yes" },
  },
  {
    id: "q2",
    text: "कोणता सोलर पॅनेल खराब किंवा तुटलेला आहे का?",
    subtext: "Are any solar panels damaged or broken?",
    type: "yesno",
    showIf: { id: "q0", value: "yes" },
  },
  {
    id: "q3",
    text: "किती पॅनेल खराब आहेत?",
    subtext: "How many panels are damaged? (enter 1 to 4)",
    type: "number",
    min: 1,
    max: 4,
    showIf: { id: "q2", value: "yes" },
  },
  {
    id: "q4",
    text: "जर परिस्थिती अधिक क्लिष्ट असेल तर येथे वर्णन करा:",
    subtext: "If the situation is more complex, describe here (optional)",
    type: "text",
    optional: true,
    showIf: { id: "q0", value: "yes" },
  },
];
