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

export const dlTitle = "Deep Learning";
export const dlDescription = "From neural network fundamentals to transformers and LLMs — books, courses, explainers, and hands-on tutorials across every core deep learning topic.";

export const dlSubtopics: DomainSubtopic[] = [
  {
    id: "books",
    label: "Books",
    resources: [
      { title: "Deep Learning", url: "https://www.deeplearningbook.org/", type: "book", author: "Ian Goodfellow" },
      { title: "Understanding Deep Learning", url: "https://udlbook.github.io/udlbook/", type: "book" },
      { title: "Dive into Deep Learning", url: "https://d2l.ai/", type: "book" },
      { title: "The Little Book of Deep Learning", url: "https://fleuret.org/public/lbdl.pdf", type: "book", author: "François Fleuret" },
      { title: "Grokking Deep Learning", url: "https://cdn.ttgtmedia.com/rms/pdf/grokking_deep_learning.pdf", type: "book" },
      { title: "Practical Deep Learning for Coders", url: "https://course.fast.ai/Resources/book.html", type: "book", author: "fast.ai" },
      { title: "Meta Learning: How To Learn Deep Learning And Thrive In The Digital Age", url: "https://studylib.net/doc/26113326/radek-osmulski---meta-learning--how-to-learn-deep-learnin...", type: "book", author: "Radek Osmulski" },
      { title: "Information Theory, Inference, and Learning Algorithms", url: "https://www.inference.org.uk/itprnn/book.pdf", type: "book", author: "David MacKay" },
    ],
  },
  {
    id: "courses",
    label: "Courses",
    resources: [
      { title: "DeepLearning.AI", url: "https://deeplearning.ai/", type: "course", author: "Andrew Ng" },
      { title: "NYU Deep Learning", url: "https://atcold.github.io/NYU-DLSP21/", type: "course", author: "Yann LeCun & Alfredo Canziani" },
      { title: "The Complete Mathematics of Neural Networks and Deep Learning", url: "https://www.youtube.com/watch?v=Ixl3nykKG9M", type: "video" },
      { title: "Intro to Deep Learning", url: "https://www.youtube.com/playlist?list=PLTKMiZHVd_2KJtIXOW0zFhFfBaJJilH51", type: "course", author: "Sebastian Raschka" },
      { title: "Practical Deep Learning for Coders", url: "https://course.fast.ai/", type: "course", author: "fast.ai" },
      { title: "Full Stack Deep Learning 2022", url: "https://fullstackdeeplearning.com/course/2022/", type: "course" },
      { title: "Information Theory, Pattern Recognition, and Neural Networks", url: "https://www.youtube.com/playlist?list=PLruBu5BI5n4aFpG32iMbdWoRVAA-Vcso6", type: "course", author: "David MacKay" },
      { title: "UC Berkeley CS 182: Deep Learning", url: "https://www.youtube.com/playlist?list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A", type: "course" },
      { title: "MIT — Introduction to Deep Learning", url: "https://introtodeeplearning.com/", type: "course", author: "MIT" },
      { title: "CS231n — Deep Learning for Computer Vision", url: "https://cs231n.stanford.edu/", type: "course", author: "Stanford" },
      { title: "CS224d: Deep Learning for Natural Language Processing", url: "https://www.youtube.com/playlist?list=PL4PDl8a0S5tvphRVF45G8B7z0pDO6MT7C", type: "course", author: "Stanford" },
      { title: "UNIGE 14x050 — Deep Learning", url: "https://fleuret.org/dlc/", type: "course", author: "François Fleuret" },
      { title: "Dataflowr — Deep Learning DIY", url: "https://dataflowr.github.io/website/", type: "course" },
    ],
  },
  {
    id: "cnn",
    label: "CNN",
    resources: [
      { title: "CNN from Scratch with pure Mathematical Intuition", url: "https://lunar-joke-35b.notion.site/CNN-from-Scratch-with-pure-Mathematical-Intuition-a201ef0ca1314058a1707a3ae260981e", type: "tutorial" },
      { title: "Convolutional Neural Network (CNN): A Complete Guide", url: "https://learnopencv.com/understanding-convolutional-neural-networks-cnn/", type: "tutorial" },
      { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/", type: "explainer", author: "Polo Club" },
      { title: "ConvNetJS — Deep Learning in your browser", url: "https://cs.stanford.edu/people/karpathy/convnetjs/index.html", type: "tool", author: "Karpathy" },
      { title: "Convolutional Neural Networks Explained (CNN Visualized)", url: "https://www.youtube.com/watch?v=pj9-rr1wDhM", type: "video" },
      { title: "CNNs from different viewpoints", url: "https://cs231n.github.io/understanding-cnn/", type: "explainer", author: "CS231n" },
      { title: "Image Kernels", url: "https://setosa.io/ev/image-kernels/", type: "explainer" },
      { title: "Visualizing what ConvNets learn", url: "https://cs231n.github.io/understanding-cnn/", type: "explainer", author: "CS231n" },
      { title: "Convolutions in Image Processing", url: "https://www.youtube.com/watch?v=8rrHTtUzyZA", type: "video" },
      { title: "Understanding 'convolution' operations in CNN", url: "https://medium.com/analytics-vidhya/convolution-operations-in-cnn-deep-learning-compter-vision-128906ece7d3", type: "tutorial" },
      { title: "Convolutional Neural Networks, Explained", url: "https://towardsdatascience.com/convolutional-neural-networks-explained-9cc5188c4939", type: "explainer" },
    ],
  },
  {
    id: "rnn",
    label: "RNN",
    resources: [
      { title: "Recurrent Neural Networks Tutorial, Part 1 — Introduction to RNNs", url: "https://dennybritz.com/posts/wildml/recurrent-neural-networks-tutorial-part-1/", type: "tutorial", author: "Denny Britz" },
      { title: "Understanding LSTM Networks", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", type: "explainer", author: "Christopher Olah" },
      { title: "Predict Stock Prices Using RNN: Part 1", url: "https://lilianweng.github.io/posts/2017-07-08-stock-rnn-part-1/", type: "tutorial", author: "Lilian Weng" },
      { title: "Recurrent Neural Networks (RNN)", url: "https://madewithml.com/courses/foundations/recurrent-neural-networks/", type: "tutorial", author: "Made With ML" },
      { title: "RNNs and LSTMs", url: "https://web.stanford.edu/~jurafsky/slp3/8.pdf", type: "explainer", author: "Jurafsky, Stanford" },
      { title: "The Unreasonable Effectiveness of Recurrent Neural Networks", url: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/", type: "explainer", author: "Andrej Karpathy" },
      { title: "NLP from Scratch — PyTorch", url: "https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html", type: "tutorial", author: "PyTorch" },
    ],
  },
  {
    id: "llm",
    label: "LLM",
    resources: [
      { title: "Umar Jamil (YouTube)", url: "https://www.youtube.com/@umarjamilai", type: "video", author: "Umar Jamil" },
      { title: "Build a Large Language Model (From Scratch)", url: "https://livebook.manning.com/book/build-a-large-language-model-from-scratch/title/", type: "book", author: "Sebastian Raschka" },
      { title: "Create a Large Language Model from Scratch with Python", url: "https://www.youtube.com/watch?v=UU1WVnMk4E8&t=4303s", type: "video", author: "elliotarledge" },
      { title: "Intro to Transformers (slides)", url: "https://docs.google.com/presentation/d/1ZXFIhYczos679r70Yu8vV9uO6B1J0ztzeDxbnBxD1S0/edit#slide=id.ge2832e38b9_0_21", type: "explainer", author: "giffmana" },
      { title: "[M2L 2024] Transformers", url: "https://www.youtube.com/watch?v=bMXqnLiVgLk", type: "video", author: "Lucas Beyer (giffmana)" },
      { title: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/", type: "explainer", author: "Polo Club" },
      { title: "The Illustrated GPT-2", url: "https://jalammar.github.io/illustrated-gpt2/", type: "explainer", author: "Jay Alammar" },
      { title: "Attention Is All You Need — Implementation", url: "https://github.com/LvanderGoten/AttentionIsAllYouNeed?tab=readme-ov-file", type: "repo" },
      { title: "Linear Relationships in the Transformer's Positional Encoding", url: "https://blog.timodenk.com/linear-relationships-in-the-transformers-positional-encoding/", type: "tutorial" },
      { title: "Implement and Train ViT From Scratch — PyTorch", url: "https://www.youtube.com/watch?v=Vonyoz6Yt9c", type: "video" },
      { title: "A Smol Course", url: "https://github.com/huggingface/smol-course", type: "repo", author: "Hugging Face" },
      { title: "How I Studied LLMs in Two Weeks: A Comprehensive Roadmap", url: "https://towardsdatascience.com/how-i-studied-llms-in-two-weeks-a-comprehensive-roadmap-e8ac19667a31", type: "tutorial" },
      { title: "How Large Language Models work — From zero to ChatGPT", url: "https://medium.com/data-science-at-microsoft/how-large-language-models-work-91c362f5b78f", type: "explainer" },
      { title: "Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents", type: "explainer", author: "Anthropic" },
      { title: "LLM Visualization", url: "https://bbycroft.net/llm", type: "explainer" },
      { title: "NLP Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1", type: "course", author: "Hugging Face" },
      { title: "Neural Networks: Zero to Hero", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", type: "course", author: "Andrej Karpathy" },
      { title: "CS25 Stanford — Transformers United 2023", url: "https://www.youtube.com/watch?v=XfpMkf4rD6E", type: "video", author: "Stanford (w/ Karpathy)" },
      { title: "Transformer Taxonomy (the last lit review)", url: "https://kipp.ly/transformer-taxonomy/", type: "tutorial", author: "kipply" },
      { title: "Normcore LLM Reads — Curated Reading List", url: "https://gist.github.com/veekaybee/be375ab33085102f9027853128dc5f0e", type: "tutorial", author: "Vicki Boykis" },
      { title: "mlabonne/llm-course — Roadmaps and Colab notebooks", url: "https://github.com/mlabonne/llm-course", type: "repo", author: "mlabonne" },
      { title: "How to make LLMs go fast", url: "https://vgel.me/posts/faster-inference/", type: "tutorial", author: "VGEL" },
      { title: "Low Level Technicals of LLMs", url: "https://www.youtube.com/watch?v=pRM_P6UfdIc", type: "video", author: "Daniel Han" },
      { title: "Multimodality and Large Multimodal Models (LMMs)", url: "https://huyenchip.com/2023/10/10/multimodal.html", type: "tutorial", author: "Chip Huyen" },
      { title: "Transformers [Week 2] — Notion notes", url: "https://trite-song-d6a.notion.site/Transformers-Week-2-1210af77bef38088b253e28a351b7212", type: "tutorial" },
      { title: "Basics of NLP [Week 5] — Notion notes", url: "https://trite-song-d6a.notion.site/Basics-of-NLP-1-Week-5-1340af77bef380718a51e0e9ee84a4bd", type: "tutorial" },
      { title: "What is Temperature in LLMs", url: "https://medium.com/@ArtificialintelligenceEn/what-is-temperature-in-llms-de607501dd38", type: "explainer" },
    ],
  },
  {
    id: "pytorch",
    label: "PyTorch",
    resources: [
      { title: "Zero to Mastery Learn PyTorch for Deep Learning", url: "https://www.learnpytorch.io/", type: "course", author: "Daniel Bourke" },
      { title: "Learn PyTorch for deep learning in a day. Literally.", url: "https://www.youtube.com/watch?v=Z_ikDlimN6A", type: "video", author: "Daniel Bourke" },
      { title: "PyTorch internals", url: "http://blog.ezyang.com/2019/05/pytorch-internals/", type: "tutorial", author: "ezyang" },
      { title: "MiniTorch", url: "https://minitorch.github.io/", type: "tool" },
      { title: "PyTorch is dead. Long live JAX.", url: "https://neel04.github.io/my-website/blog/pytorch_rant/", type: "tutorial" },
      { title: "Inside the Matrix: Visualizing Matrix Multiplication, Attention and Beyond", url: "https://pytorch.org/blog/inside-the-matrix/", type: "explainer", author: "PyTorch" },
    ],
  },
  {
    id: "karpathy",
    label: "Karpathy",
    resources: [
      { title: "Blog", url: "https://karpathy.github.io/", type: "tutorial", author: "Andrej Karpathy" },
      { title: "Neural Networks: Zero to Hero", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", type: "course", author: "Andrej Karpathy" },
      { title: "CS231n Winter 2016", url: "https://www.youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC", type: "course", author: "Andrej Karpathy" },
      { title: "CS231n Winter 2016 — Course Site", url: "https://cs231n.stanford.edu/2016/", type: "course", author: "Stanford" },
      { title: "Eureka Labs AI", url: "https://github.com/EurekaLabsAI", type: "repo", author: "Andrej Karpathy" },
      { title: "karpathy (GitHub)", url: "https://github.com/karpathy", type: "repo", author: "Andrej Karpathy" },
    ],
  },
  {
    id: "3blue1brown",
    label: "3Blue1Brown",
    resources: [
      { title: "Neural Networks (Articles)", url: "https://www.3blue1brown.com/topics/neural-networks", type: "explainer", author: "3Blue1Brown" },
      { title: "Neural Networks (Playlist)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video", author: "3Blue1Brown" },
      { title: "Neural Networks and Deep Learning", url: "http://neuralnetworksanddeeplearning.com/", type: "book", author: "Suggested by 3B1B" },
      { title: "Calculus on Computational Graphs: Backpropagation", url: "https://colah.github.io/posts/2015-08-Backprop/", type: "explainer", author: "Christopher Olah (suggested by 3B1B)" },
      { title: "Neural Networks Demystified", url: "https://www.youtube.com/playlist?list=PLiaHhY2iBX9hdHaRr6b7XevZtgZRa1PoU", type: "video", author: "Suggested by 3B1B" },
      { title: "Learning To See", url: "https://www.youtube.com/playlist?list=PLiaHhY2iBX9ihLasvE8BKnS2Xg8AhY6iV", type: "video", author: "Suggested by 3B1B" },
    ],
  },
  {
    id: "build-from-scratch",
    label: "Build from Scratch",
    resources: [
      { title: "zero_to_gpt — Go from no DL knowledge to implementing GPT", url: "https://github.com/VikParuchuri/zero_to_gpt", type: "repo", author: "Vik Paruchuri" },
      { title: "llama3-from-scratch — One matrix multiplication at a time", url: "https://github.com/naklecha/llama3-from-scratch", type: "repo", author: "naklecha" },
      { title: "fromthetensor — From the Tensor to Stable Diffusion (9-week course)", url: "https://github.com/jla524/fromthetensor", type: "repo" },
      { title: "Building autograd engine (tinytorch)", url: "https://pythonstuff.com/blog/buinging%20own%20autograd%20engine%20tinytorch%2001", type: "tutorial" },
      { title: "Autodidax: JAX core from scratch", url: "https://jax.readthedocs.io/en/latest/autodidax.html", type: "tutorial", author: "JAX" },
      { title: "seemore: Implement a Vision Language Model from Scratch", url: "https://huggingface.co/blog/AviSoori1x/seemore-vision-language-model", type: "tutorial", author: "Hugging Face" },
      { title: "Building a neural network FROM SCRATCH (no TF/PyTorch, just numpy & math)", url: "https://www.youtube.com/watch?v=w8yWXqWQYmU&t=10s", type: "video" },
      { title: "ARENA 3 — Transformer from Scratch", url: "https://arena3-chapter1-transformer-interp.streamlit.app/%5B1.1%5D_Transformer_from_Scratch", type: "tool" },
    ],
  },
  {
    id: "diffusion",
    label: "Diffusion Models",
    resources: [
      { title: "How diffusion models work: the math from scratch", url: "https://theaisummer.com/diffusion-models/", type: "tutorial", author: "AI Summer" },
      { title: "Understanding Diffusion Models: A Unified Perspective", url: "https://calvinyluo.com/2022/08/26/diffusion-tutorial.html", type: "tutorial", author: "Calvin Luo" },
      { title: "Step-by-Step Diffusion: An Elementary Tutorial", url: "https://arxiv.org/pdf/2406.08929", type: "paper" },
      { title: "Generative score-based diffusion (Equinox example)", url: "https://docs.kidger.site/equinox/examples/score_based_diffusion/", type: "tutorial" },
      { title: "Diffusion Models — bit by bit", url: "https://lunar-joke-35b.notion.site/Diffusion-Models-bit-by-bit-10fba4b6a3fa80458d16e58036875747", type: "tutorial" },
    ],
  },
  {
    id: "interpretability",
    label: "Interpretability",
    resources: [
      { title: "Concrete Steps to Get Started in Transformer Mechanistic Interpretability", url: "https://www.neelnanda.io/mechanistic-interpretability/getting-started", type: "tutorial", author: "Neel Nanda" },
      { title: "OpenAI Microscope — Neural network visualization", url: "https://microscope.openai.com/models", type: "tool", author: "OpenAI" },
      { title: "Why Neural Networks can learn (almost) anything", url: "https://www.youtube.com/watch?v=0QczhVg5HaI", type: "video" },
      { title: "Watching Neural Networks Learn", url: "https://www.youtube.com/watch?v=TkwXa7Cvfr8", type: "video" },
      { title: "What Are Neural Networks Even Doing? (Manifold Hypothesis)", url: "https://www.youtube.com/watch?v=pdNYw6qwuNc", type: "video" },
    ],
  },
];

export const dlGeneralResources: DomainResource[] = [
  { title: "Deep Learning Roadmap", url: "https://aigents.co/learn/roadmaps/deep-learning-roadmap", type: "tutorial" },
  { title: "A Short Chronology Of Deep Learning For Tabular Data", url: "https://sebastianraschka.com/blog/2022/deep-learning-for-tabular-data.html", type: "explainer", author: "Sebastian Raschka" },
  { title: "Understanding AI", url: "https://leerob.com/n/ai", type: "explainer", author: "Lee Robinson" },
  { title: "A Neural Network Playground", url: "https://playground.tensorflow.org/", type: "tool", author: "TensorFlow" },
  { title: "An Opinionated Guide to ML Research", url: "http://joschu.net/blog/opinionated-guide-ml-research.html", type: "tutorial", author: "John Schulman" },
  { title: "Microsoft AI For Beginners", url: "https://microsoft.github.io/AI-For-Beginners/?id=getting-started", type: "course", author: "Microsoft" },
  { title: "Why are Modern Neural Nets the way they are?", url: "https://sweet-hall-e72.notion.site/Why-are-Modern-Neural-Nets-the-way-they-are-And-Hidden-Hypernetworks-6c7195709e7b4abbada921875a951c54", type: "explainer" },
  { title: "A Gentle Introduction to Graph Neural Networks", url: "https://distill.pub/2021/gnn-intro/", type: "explainer", author: "Distill" },
  { title: "How a Neuron Learns", url: "https://qtnx.ai/posts/how_neuron_learns/", type: "explainer" },
  { title: "How to Read a Paper", url: "https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf", type: "tutorial", author: "Stanford" },
];
