export interface DomainResource {
  title: string;
  url: string;
  type: "book" | "course" | "tutorial" | "explainer" | "video" | "tool" | "paper" | "repo";
  author?: string;
}

export interface DomainSubtopic {
  id: string;
  label: string;
  resources: DomainResource[];
}

export const mlTitle = "Machine Learning & Data Analysis";
export const mlDescription = "Classical ML algorithms, data analysis techniques, and the mathematical foundations — from SVMs and decision trees to feature engineering and MLOps.";

export const mlSubtopics: DomainSubtopic[] = [
  {
    id: "math-foundations",
    label: "Math Foundations",
    resources: [
      { title: "Mathematics for Machine Learning and Data Science", url: "https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science", type: "course", author: "Coursera" },
      { title: "Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "video", author: "3Blue1Brown" },
      { title: "Gilbert Strang — Lectures on Linear Algebra", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D", type: "course", author: "MIT" },
      { title: "Math for Machine Learning", url: "https://www.youtube.com/playlist?list=PLD80i8An1OEGZ2tYimemzwC3xqkU0jKUg", type: "course" },
      { title: "Immersive Math — Interactive Linear Algebra", url: "https://immersivemath.com/ila/index.html", type: "book" },
      { title: "The Matrix Calculus You Need For Deep Learning", url: "https://explained.ai/matrix-calculus/", type: "explainer" },
      { title: "The Matrix Cookbook", url: "https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf", type: "book" },
      { title: "Matrix Visualizer", url: "https://shad.io/MatVis/", type: "tool" },
      { title: "Seeing Theory — A visual introduction to probability and statistics", url: "https://seeing-theory.brown.edu/", type: "explainer", author: "Brown University" },
      { title: "Linear Algebra Fundamentals", url: "https://www.iamtk.co/series/mathematics-for-machine-learning/linear-algebra-fundamentals", type: "tutorial" },
      { title: "Derivation and Intuition behind Poisson Distribution", url: "https://antaripasaha.notion.site/Derivation-and-Intuition-behind-Poisson-distribution-1255314a56398062bf9dd9049fb1c396", type: "tutorial" },
      { title: "How to Study Mathematics", url: "https://www.math.uh.edu/~dblecher/pf2.html", type: "tutorial" },
      { title: "My Math Academy Learning Workflow", url: "https://www.railly.dev/blog/how-i-study-math", type: "tutorial" },
      { title: "Sinerider — Learn math through play", url: "https://sinerider.com/", type: "tool" },
      { title: "Programming with Math | The Lambda Calculus", url: "https://youtu.be/ViPNHMSUcog?si=8kgJMgGzHnkh5bYW", type: "video" },
    ],
  },
  {
    id: "courses",
    label: "Courses",
    resources: [
      { title: "MIT 6.034 Artificial Intelligence, Fall 2010", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi", type: "course", author: "MIT" },
      { title: "Cornell CS4780 Machine Learning for Decision Making SP17", url: "https://www.youtube.com/playlist?list=PLl8OlHZGYOQ7bkVbuRthEsaLr7bONzbXS", type: "course", author: "Cornell" },
      { title: "Machine Learning in C", url: "https://www.youtube.com/playlist?list=PLpM-Dvs8t0VZPZKggcql-MmjaBdZKeDMw", type: "course" },
      { title: "Andrew Ng's Machine Learning Collection", url: "https://www.coursera.org/collections/machine-learning", type: "course", author: "Andrew Ng" },
      { title: "Stanford CS229: Machine Learning Full Course", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU", type: "course", author: "Andrew Ng" },
      { title: "Applied Machine Learning 2020", url: "https://www.youtube.com/playlist?list=PL_pVmAaAnxIRnSw6wiCpSvshFyCREZmlM", type: "course", author: "Andreas Mueller" },
      { title: "Machine Learning Notebook", url: "https://calvinfeng.gitbook.io/machine-learning-notebook", type: "tutorial" },
      { title: "Made With ML", url: "https://madewithml.com/#course", type: "course" },
    ],
  },
  {
    id: "books",
    label: "Books",
    resources: [
      { title: "Python for Data Analysis", url: "https://wesmckinney.com/book/", type: "book", author: "Wes McKinney" },
    ],
  },
  {
    id: "mlops",
    label: "MLOps",
    resources: [
      { title: "MLOps Basics", url: "https://github.com/graviraja/MLOps-Basics", type: "repo" },
      { title: "How to Learn MLOps in 2024", url: "https://neptune.ai/blog/how-to-learn-mlops", type: "tutorial" },
      { title: "MLOps guide", url: "https://huyenchip.com/mlops/", type: "tutorial", author: "Chip Huyen" },
    ],
  },
  {
    id: "svm",
    label: "SVM",
    resources: [
      { title: "MIT — Learning: Support Vector Machines", url: "https://www.youtube.com/watch?v=_PwhiWxHK8o", type: "video", author: "MIT" },
      { title: "Derive the Dual Formulation for Support Vector Machines", url: "https://www.youtube.com/watch?v=4TIbsTa3r24&t=5s", type: "video" },
      { title: "Support Vector Machines", url: "https://compphysics.github.io/ComputationalPhysics2/doc/LectureNotes/_build/html/supportvectormachines.html", type: "tutorial" },
      { title: "Machine Learning Lecture 14 — (Linear) Support Vector Machines", url: "https://www.youtube.com/watch?v=xpHQ6UhMlx4&list=PLl8OlHZGYOQ7bkVbuRthEsaLr7bONzbXS", type: "video", author: "Cornell CS4780" },
      { title: "SVM: Dual Formulation, Quadratic Programming & SMO", url: "https://towardsdatascience.com/support-vector-machines-dual-formulation-quadratic-programming-sequential-minimal-optimization-57f4387ce4dd#d326", type: "tutorial" },
      { title: "Support Vector Machine in Javascript, Demo", url: "https://cs.stanford.edu/~karpathy/svmjs/demo/", type: "tool", author: "Karpathy" },
      { title: "Interactive demo of Support Vector Machines (SVM)", url: "https://greitemann.dev/svm-demo", type: "tool" },
    ],
  },
  {
    id: "cross-entropy",
    label: "Cross Entropy",
    resources: [
      { title: "Cross Entropy and Log Likelihood", url: "https://www.awebb.info/probability/2017/05/18/cross-entropy-and-log-likelihood.html", type: "tutorial" },
      { title: "Things that confused me about cross-entropy", url: "https://chris-said.io/2020/12/26/two-things-that-confused-me-about-cross-entropy/", type: "explainer" },
      { title: "Understanding binary cross-entropy / log loss: a visual explanation", url: "https://towardsdatascience.com/understanding-binary-cross-entropy-log-loss-a-visual-explanation-a3ac6025181a", type: "explainer" },
    ],
  },
  {
    id: "feature-engineering",
    label: "Feature Engineering",
    resources: [
      { title: "Feature Engineering — Kaggle", url: "https://www.kaggle.com/learn/feature-engineering", type: "course", author: "Kaggle" },
      { title: "A Reference Guide to Feature Engineering Methods", url: "https://www.kaggle.com/code/prashant111/a-reference-guide-to-feature-engineering-methods", type: "tutorial", author: "Kaggle" },
      { title: "Advanced Feature Engineering", url: "https://www.kaggle.com/code/seneralkan/advanced-feature-engineering", type: "tutorial", author: "Kaggle" },
      { title: "Complete Guide to Feature Engineering: Zero to Hero", url: "https://www.analyticsvidhya.com/blog/2021/09/complete-guide-to-feature-engineering-zero-to-hero/", type: "tutorial" },
    ],
  },
];

export const mlGeneralResources: DomainResource[] = [
  { title: "ML Code Challenges", url: "https://www.deep-ml.com/", type: "tool" },
  { title: "UC Irvine Machine Learning Repository", url: "https://archive.ics.uci.edu/", type: "tool" },
  { title: "(Opinionated) Guide to ML Engineer Job Hunting", url: "https://www.yuan-meng.com/posts/mle_interviews/", type: "tutorial" },
];
