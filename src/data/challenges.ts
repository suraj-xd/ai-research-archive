export interface Challenge {
  id: string;
  title: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  category: "beginner" | "intermediate" | "advanced" | "research";
  description: string;
  objective: string;
  prerequisites: string[];
  tools: string[];
  hints: string[];
}

export const challenges: Challenge[] = [
  // ---------- Beginner (difficulty 1-2) ----------
  {
    id: "mnist-from-scratch",
    title: "Train MNIST from Scratch to 95%+ Accuracy",
    difficulty: 1,
    category: "beginner",
    description:
      "Build a feedforward neural network that classifies handwritten digits using only NumPy and basic matrix operations. No high-level frameworks allowed for the core model.",
    objective:
      "Achieve at least 95% test accuracy on the MNIST dataset with a model you implement from scratch, including forward pass, backpropagation, and gradient descent.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals"],
    tools: ["Python", "NumPy", "Matplotlib"],
    hints: [
      "Start with a two-layer network (one hidden layer with ReLU) before adding complexity.",
      "Normalize pixel values to [0, 1] — it makes a huge difference for convergence.",
      "Use mini-batch SGD with a batch size of 64 and a learning rate around 0.01.",
    ],
  },
  {
    id: "linear-regression-gd",
    title: "Implement Linear Regression with Gradient Descent",
    difficulty: 1,
    category: "beginner",
    description:
      "Code linear regression from first principles using only Python and NumPy. Derive the gradient of MSE loss by hand and implement batch gradient descent.",
    objective:
      "Fit a linear model to a synthetic or real dataset, visualize the loss curve converging, and compare your solution to the closed-form normal equation.",
    prerequisites: ["Math Fundamentals"],
    tools: ["Python", "NumPy", "Matplotlib"],
    hints: [
      "Write out the MSE gradient on paper before coding — it's just X^T(Xw - y) / n.",
      "Plot the loss at each iteration to verify your learning rate isn't too high or too low.",
      "Try both a 1D and a multi-feature dataset to test your implementation.",
    ],
  },
  {
    id: "word-tokenizer",
    title: "Build a Word Tokenizer from Scratch",
    difficulty: 2,
    category: "beginner",
    description:
      "Implement BPE (Byte-Pair Encoding) tokenization from scratch. Handle vocabulary building, merge rules, encoding, and decoding without any tokenization libraries.",
    objective:
      "Train a BPE tokenizer on a small text corpus, encode arbitrary strings into token IDs, decode them back perfectly, and compare compression ratios against character-level tokenization.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals"],
    tools: ["Python"],
    hints: [
      "Start by splitting text into characters and counting all adjacent pairs.",
      "The most frequent pair gets merged first — repeat until you hit your target vocabulary size.",
      "Keep a list of merge rules in order so you can replay them at encoding time.",
    ],
  },
  {
    id: "cifar10-cnn",
    title: "Classify CIFAR-10 Images with a CNN",
    difficulty: 2,
    category: "beginner",
    description:
      "Design and train a convolutional neural network to classify 32x32 color images into 10 categories. Use data augmentation and batch normalization to push accuracy above 90%.",
    objective:
      "Reach at least 90% test accuracy on CIFAR-10 using a CNN you design from scratch in PyTorch, with proper train/val/test splits and training visualization.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals"],
    tools: ["Python", "PyTorch", "torchvision", "Matplotlib"],
    hints: [
      "Use Conv-BatchNorm-ReLU blocks — batch normalization dramatically improves training stability.",
      "Random horizontal flips and random crops with padding are the most impactful augmentations for CIFAR-10.",
      "Start with a simple 3-block architecture before trying anything fancy like ResNet connections.",
    ],
  },

  // ---------- Intermediate (difficulty 3) ----------
  {
    id: "lora-finetuning",
    title: "Fine-Tune a Model with LoRA on a Custom Dataset",
    difficulty: 3,
    category: "intermediate",
    description:
      "Apply Low-Rank Adaptation (LoRA) to fine-tune a pre-trained language model on a domain-specific dataset. Compare full fine-tuning vs LoRA in terms of parameter count, memory usage, and downstream performance.",
    objective:
      "Fine-tune a 1B+ parameter model using LoRA with less than 1% trainable parameters, achieving comparable performance to full fine-tuning on your evaluation metrics.",
    prerequisites: ["PyTorch Fundamentals", "Transformers"],
    tools: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "Datasets"],
    hints: [
      "Target the query and value projection matrices in attention layers — they give the best bang for your rank budget.",
      "A rank of 8-16 is usually sufficient for most tasks; higher ranks hit diminishing returns fast.",
      "Use bitsandbytes for 4-bit quantization (QLoRA) if your GPU has limited VRAM.",
    ],
  },
  {
    id: "multihead-attention",
    title: "Implement Multi-Head Self-Attention from Scratch",
    difficulty: 3,
    category: "intermediate",
    description:
      "Write multi-head self-attention in PyTorch from raw linear layers and matrix multiplications. No nn.MultiheadAttention allowed. Include scaled dot-product attention, causal masking, and proper head splitting.",
    objective:
      "Create a working multi-head attention module that produces identical outputs to PyTorch's built-in version when given the same weights, and integrate it into a small transformer block.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals", "Transformers"],
    tools: ["Python", "PyTorch"],
    hints: [
      "Remember to scale queries by 1/sqrt(d_k) before the softmax — without this, gradients vanish in large dimensions.",
      "Reshape from (batch, seq, d_model) to (batch, heads, seq, d_k) to parallelize across heads.",
      "For causal masking, use torch.triu to create an upper-triangular mask and fill with -inf before softmax.",
    ],
  },
  {
    id: "sentiment-pipeline",
    title: "Build a Sentiment Analysis Pipeline End-to-End",
    difficulty: 3,
    category: "intermediate",
    description:
      "Create a complete NLP pipeline: data collection, cleaning, tokenization, model training, evaluation, and a simple inference API. Compare at least two approaches (e.g., TF-IDF + logistic regression vs a fine-tuned transformer).",
    objective:
      "Deliver a reproducible pipeline that achieves >88% accuracy on a standard sentiment dataset, with proper cross-validation, error analysis, and a REST endpoint for inference.",
    prerequisites: ["PyTorch Fundamentals", "Transformers", "MLOps"],
    tools: ["Python", "PyTorch", "Hugging Face Transformers", "scikit-learn", "FastAPI"],
    hints: [
      "Start with the simple baseline (TF-IDF + logistic regression) first — it sets a strong floor and helps you understand the data.",
      "Look at the misclassified examples to find labeling issues and edge cases before trying to improve the model.",
      "Use stratified k-fold cross-validation to get reliable performance estimates on imbalanced classes.",
    ],
  },
  {
    id: "ml-deployment",
    title: "Deploy an ML Model with FastAPI + Docker",
    difficulty: 3,
    category: "intermediate",
    description:
      "Package a trained model into a production-ready API with FastAPI, containerize it with Docker, add health checks, input validation, and basic load testing.",
    objective:
      "Serve a model that handles at least 50 requests/second on a single container, with proper error handling, input validation via Pydantic, and a Dockerfile that builds reproducibly.",
    prerequisites: ["PyTorch Fundamentals", "MLOps"],
    tools: ["Python", "FastAPI", "Docker", "Pydantic", "locust"],
    hints: [
      "Load the model once at startup (in a lifespan event), not on every request — this is the number one performance mistake.",
      "Use multi-stage Docker builds to keep the final image small: build dependencies in one stage, copy only the artifacts to a slim runtime image.",
      "Add a /health endpoint that actually runs a dummy inference to verify the model is loaded correctly.",
    ],
  },
  {
    id: "gan-digits",
    title: "Train a GAN to Generate Handwritten Digits",
    difficulty: 3,
    category: "intermediate",
    description:
      "Implement a Generative Adversarial Network from scratch in PyTorch. Train the generator and discriminator on MNIST until the generator produces convincing digit images.",
    objective:
      "Generate a grid of 64 fake digit images that are visually indistinguishable from real MNIST samples, with a stable training curve showing neither mode collapse nor discriminator domination.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals"],
    tools: ["Python", "PyTorch", "Matplotlib"],
    hints: [
      "Use label smoothing (real labels = 0.9 instead of 1.0) to prevent the discriminator from becoming overconfident too early.",
      "Train the discriminator for one step, then the generator for one step — don't let either get too far ahead.",
      "Log generated images every few hundred steps so you can visually track whether the generator is improving or collapsing.",
    ],
  },

  // ---------- Advanced (difficulty 4) ----------
  {
    id: "transformer-from-scratch",
    title: "Build a Transformer (Encoder-Decoder) from Scratch",
    difficulty: 4,
    category: "advanced",
    description:
      "Implement the full transformer architecture from the 'Attention Is All You Need' paper in PyTorch — positional encoding, multi-head attention, feed-forward layers, residual connections, layer norm, and masked decoding.",
    objective:
      "Train your transformer on a small machine translation dataset (e.g., Multi30k EN-DE) and achieve a BLEU score above 25, proving the architecture works end-to-end.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals", "Transformers"],
    tools: ["Python", "PyTorch", "torchtext", "SentencePiece"],
    hints: [
      "Implement and test each component in isolation (positional encoding, attention, FFN) before assembling the full model.",
      "The decoder has THREE sub-layers: masked self-attention, cross-attention over encoder output, and a feed-forward network. Don't forget the cross-attention.",
      "Use a learning rate warmup schedule — transformers are notoriously sensitive to the initial learning rate.",
    ],
  },
  {
    id: "ppo-cartpole",
    title: "Implement PPO for CartPole from Scratch",
    difficulty: 4,
    category: "advanced",
    description:
      "Code Proximal Policy Optimization (PPO) from scratch in PyTorch. Implement the clipped surrogate objective, generalized advantage estimation (GAE), and value function baseline.",
    objective:
      "Solve CartPole-v1 (500 reward) consistently within 300 episodes, with training curves showing stable policy improvement and proper advantage estimation.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals", "Reinforcement Learning"],
    tools: ["Python", "PyTorch", "Gymnasium"],
    hints: [
      "The clipping ratio epsilon = 0.2 is standard — it prevents the policy from changing too drastically in one update.",
      "Use GAE with lambda = 0.95 and gamma = 0.99 for advantage estimation; it balances bias and variance well.",
      "Collect at least 2048 timesteps per update batch and run multiple epochs (3-4) over each batch.",
    ],
  },
  {
    id: "adversarial-examples",
    title: "Create Adversarial Examples That Fool Inception",
    difficulty: 4,
    category: "advanced",
    description:
      "Implement FGSM and PGD adversarial attacks against a pre-trained InceptionV3 model. Visualize the perturbations and measure how accuracy degrades as the attack strength increases.",
    objective:
      "Generate adversarial images that cause InceptionV3 to misclassify with >90% success rate while keeping perturbations imperceptible (L-inf norm < 8/255).",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals"],
    tools: ["Python", "PyTorch", "torchvision", "Matplotlib"],
    hints: [
      "FGSM is just one step: perturbed = original + epsilon * sign(gradient of loss w.r.t. input).",
      "PGD is iterative FGSM with projection back onto the epsilon-ball after each step — it's much stronger.",
      "Visualize the perturbation separately (amplified) so you can see what the attack is actually changing.",
    ],
  },
  {
    id: "neural-style-transfer",
    title: "Build a Neural Style Transfer App",
    difficulty: 4,
    category: "advanced",
    description:
      "Implement Gatys et al.'s neural style transfer using a pre-trained VGG-19. Extract content and style representations from intermediate layers and optimize a generated image to match both.",
    objective:
      "Produce stylized images that convincingly blend the content of a photograph with the artistic style of a painting, with configurable content/style weight balancing.",
    prerequisites: ["Math Fundamentals", "PyTorch Fundamentals", "TensorFlow Fundamentals"],
    tools: ["Python", "PyTorch", "torchvision", "PIL", "Matplotlib"],
    hints: [
      "Use conv4_2 for content and conv1_1 through conv5_1 for style — deeper layers capture content, shallower layers capture texture.",
      "The Gram matrix (feature maps multiplied by their transpose) captures style as correlations between feature channels.",
      "Initialize the output image as a clone of the content image, not random noise — it converges much faster.",
    ],
  },

  // ---------- Research (difficulty 5) ----------
  {
    id: "vllm-qwen-optimization",
    title: "Optimize Qwen 2.5-7B Inference Latency by 20% on vLLM",
    difficulty: 5,
    category: "research",
    description:
      "Profile and optimize the inference pipeline for Qwen 2.5-7B running on vLLM. Explore techniques such as KV-cache tuning, custom CUDA kernels, speculative decoding, quantization-aware serving, and batch scheduling optimization — all without degrading output quality.",
    objective:
      "Achieve a measurable 20%+ reduction in time-to-first-token and tokens-per-second on a standardized benchmark (e.g., ShareGPT traces), with perplexity degradation under 0.5% on a held-out eval set.",
    prerequisites: ["PyTorch Fundamentals", "Transformers", "MLOps"],
    tools: ["Python", "vLLM", "PyTorch", "CUDA", "Nsight Systems", "Qwen 2.5-7B"],
    hints: [
      "Start by profiling with Nsight Systems to find the actual bottleneck — it's often not where you think (memory-bound vs compute-bound).",
      "Speculative decoding with a smaller draft model (e.g., Qwen 2.5-0.5B) can give 1.5-2x speedup on long-generation tasks.",
      "Tune the vLLM scheduler's max_num_batched_tokens and max_num_seqs — the defaults are conservative and leave GPU utilization on the table.",
    ],
  },
  {
    id: "novel-attention-variant",
    title: "Design and Benchmark a Novel Attention Variant",
    difficulty: 5,
    category: "research",
    description:
      "Propose a modification to standard scaled dot-product attention that improves efficiency, length generalization, or downstream performance. Implement it, train small-scale models, and run rigorous ablations against baselines (standard attention, linear attention, Flash Attention).",
    objective:
      "Produce a technical report with wall-clock training comparisons, perplexity curves on at least two datasets, and evidence that your variant offers a meaningful tradeoff improvement over existing approaches.",
    prerequisites: [
      "Math Fundamentals",
      "PyTorch Fundamentals",
      "Transformers",
      "Reinforcement Learning",
    ],
    tools: ["Python", "PyTorch", "Flash Attention", "Weights & Biases", "LaTeX"],
    hints: [
      "Read the linear attention literature (Performers, RWKV, RetNet) to understand the design space before proposing something new.",
      "Control your experiments tightly — same data, same compute budget, same hyperparameter sweep. The difference should be ONLY your attention mechanism.",
      "Length generalization (training on short sequences, evaluating on long ones) is a compelling axis to show improvement on.",
    ],
  },
];

export const challengeCategoryLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  research: "Research",
};

export const difficultyLabels: Record<number, string> = {
  1: "Starter",
  2: "Easy",
  3: "Medium",
  4: "Hard",
  5: "Research",
};
