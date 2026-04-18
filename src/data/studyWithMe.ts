export interface StudyBuddy {
  name: string;
  handle: string;
  color: string;
}

export interface StudyTweet {
  id: string;
}

// Learners & daily sharers in the AI/ML space
export const studyBuddies: StudyBuddy[] = [
  { name: "Anu", handle: "aiwithanu", color: "bg-purple-400" },
  { name: "Fudo", handle: "0xfud0", color: "bg-blue-400" },
  { name: "Santiago", handle: "svpino", color: "bg-green-400" },
  { name: "AK", handle: "_akhaliq", color: "bg-orange-400" },
  { name: "Aran", handle: "arankomatsuzaki", color: "bg-red-400" },
  { name: "Machina", handle: "EXM7777", color: "bg-cyan-400" },
  { name: "Patatri", handle: "patatrimaity", color: "bg-pink-400" },
  { name: "Sameer", handle: "_sammeeer", color: "bg-violet-400" },
  { name: "Anurag", handle: "PotdarAnurag", color: "bg-emerald-400" },
  { name: "Sandipan", handle: "futurebeast_04", color: "bg-rose-400" },
  { name: "Suraj", handle: "notsurajgaud", color: "bg-yellow-400" },
];

// Real tweet IDs — rendered as native Twitter embeds via widgets.js
export const studyTweets: StudyTweet[] = [
  // Featured learners
  { id: "2027335973391200373" },  // @aiwithanu — Day 69, PCA & regression with code screenshots
  { id: "1965064979444617243" },  // @patatrimaity — Day 1 of #MachineLearning journey
  { id: "1894778378366193883" },  // @_sammeeer — Day 9 of #100DaysOfML, backpropagation
  { id: "2016160442603995321" },  // @EXM7777 — How to master AI in 30 days roadmap
  { id: "1986853218958414293" },  // @PotdarAnurag — Day 52 of #100DaysOfML, SVM Theory
  { id: "1844746338396770616" },  // @_akhaliq — Daily AI papers on HuggingFace
  // More posts (paginated)
  { id: "1896637941495238917" },  // @futurebeast_04 — Day 76 of #100DaysOfML
  { id: "1965253577221587218" },  // @arankomatsuzaki — Google AI scientific software
  { id: "1979576336978223291" },  // @0xfud0 — Andrew Ng ML Specialization
  { id: "1611357154514186241" },  // @svpino — 11 ways ChatGPT saves hours
  { id: "1794801052027613380" },  // @trentmankelow — Day 50 of #100DaysOfAI
  { id: "1779491330038681918" },  // @johnsonwhitney — Day 1 of #100DaysOfAI
];

export const TWEETS_PER_PAGE = 6;
