export interface Blog {
  name: string;
  url: string;
  type: "individual" | "organization";
}

export const blogs: Blog[] = [
  // Individual blogs
  { name: "rsrch.space", url: "https://rsrch.space/", type: "individual" },
  { name: "Andrej Karpathy", url: "https://karpathy.github.io/", type: "individual" },
  { name: "Lilian Weng", url: "https://lilianweng.github.io/", type: "individual" },
  { name: "Christopher Olah", url: "https://colah.github.io/", type: "individual" },
  { name: "Chip Huyen", url: "https://huyenchip.com/blog/", type: "individual" },
  { name: "Eugene Yan", url: "https://eugeneyan.com/writing/", type: "individual" },
  { name: "Sebastian Raschka", url: "https://sebastianraschka.com/blog/", type: "individual" },
  { name: "Aleksa Gordić", url: "https://www.aleksagordic.com/blog", type: "individual" },
  { name: "himanshu", url: "https://lunar-joke-35b.notion.site/Intuition-and-Insights-122ba4b6a3fa8086b561e4069da59cf4", type: "individual" },
  { name: "Sander Dieleman", url: "https://sander.ai/posts/", type: "individual" },
  { name: "Emilien Dupont", url: "https://emiliendupont.github.io/blog", type: "individual" },
  { name: "cneuralnetwork", url: "https://cneuralnets.netlify.app/blogs", type: "individual" },
  { name: "siboehm", url: "https://siboehm.com/", type: "individual" },
  { name: "Michael Brenndoerfer", url: "https://mbrenndoerfer.com/writing", type: "individual" },
  { name: "Mat Miller", url: "https://blog.matdmiller.com/", type: "individual" },
  { name: "Alessio Devoto", url: "https://alessiodevoto.github.io/blog/", type: "individual" },
  { name: "Alfredo Canziani", url: "https://atcold.github.io/blog.html", type: "individual" },
  { name: "sumit.ml", url: "https://www.sumit.ml/", type: "individual" },
  { name: "maharshi", url: "https://maharshi.bearblog.dev/blog/", type: "individual" },
  { name: "naklecha", url: "https://www.naklecha.com/", type: "individual" },
  { name: "Nicholas Carlini", url: "https://nicholas.carlini.com/writing", type: "individual" },
  { name: "Greg Brockman", url: "https://blog.gregbrockman.com/", type: "individual" },
  { name: "Michael Nielsen", url: "https://michaelnotebook.com/index.html", type: "individual" },
  { name: "Simon Willison", url: "https://simonwillison.net/", type: "individual" },
  { name: "saurabhalone", url: "https://saurabhalone.com/blogs/blogs", type: "individual" },
  { name: "Hamel Husain", url: "https://hamel.dev/", type: "individual" },
  { name: "saurabh", url: "https://saurabhai.com/blogs/blogs", type: "individual" },
  { name: "paneer", url: "https://paneer.bearblog.dev/blog/", type: "individual" },
  { name: "Ishaan", url: "https://medium.com/@darkyboy_", type: "individual" },
  { name: "Florian Hartmann", url: "https://florian.github.io/", type: "individual" },
  { name: "Leonardo Araujo Santos", url: "https://leonardoaraujosantos.gitbook.io/artificial-inteligence", type: "individual" },
  { name: "Alexandru Burlacu", url: "https://alexandruburlacu.github.io/", type: "individual" },
  { name: "Victor Zhou", url: "https://victorzhou.com/", type: "individual" },
  { name: "Yash Shah", url: "https://yashshahh.notion.site/Applied-AI-Resources-7c1d4e6dc38f4964874e2fece1705a13", type: "individual" },
  { name: "Denny Britz", url: "https://dennybritz.com/", type: "individual" },
  { name: "Jay Alammar", url: "https://jalammar.github.io/", type: "individual" },
  { name: "inFERENCe", url: "https://www.inference.vc/", type: "individual" },
  { name: "Machine Learning is Fun", url: "https://www.machinelearningisfun.com/", type: "individual" },
  { name: "VGEL", url: "https://vgel.me/posts/", type: "individual" },
  { name: "Jay Mody", url: "https://jaykmody.com/blog/gpt-from-scratch/", type: "individual" },
  { name: "Finbarr Timbers", url: "https://finbarr.ca/blog/", type: "individual" },
  { name: "Machine Learning Mastery", url: "https://machinelearningmastery.com/", type: "individual" },

  // Organization / Lab blogs
  { name: "BAIR Blog", url: "https://bair.berkeley.edu/blog/", type: "organization" },
  { name: "Connectionism - Thinking Machines", url: "https://thinkingmachines.ai/blog/", type: "organization" },
  { name: "Anthropic Research", url: "https://www.anthropic.com/research", type: "organization" },
  { name: "OpenAI Research", url: "https://openai.com/news/research/", type: "organization" },
  { name: "Google Research", url: "https://research.google/blog/", type: "organization" },
  { name: "Polo Club", url: "https://poloclub.github.io/#research-ai", type: "organization" },
];
