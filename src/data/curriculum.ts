export interface Lesson {
  id: string;
  title: string;
  youtubeId?: string;
  notes?: string;
}

export interface Module {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  lessons: Lesson[];
  githubUrl?: string;
}

function ytId(url: string): string {
  return url.replace("https://youtu.be/", "");
}

export const modules: Module[] = [
  {
    id: "math-fundamentals",
    title: "Math Fundamentals",
    shortTitle: "Math",
    description:
      "The mathematical foundations you need for AI research — from functions and derivatives to information theory and SVD.",
    lessons: [
      {
        id: "functions",
        title: "Functions",
        youtubeId: ytId("https://youtu.be/B8wL04aLYNc"),
        notes: `Functions are the foundation of neural networks. A **function** is a mathematical relationship that maps inputs to outputs.

**Linear Function:** f(x) = 2x + 3 — takes any number x and returns 2x + 3.

**Quadratic Function:** f(x) = x² + 2x + 1

**Mathematical Definition:** A function f: A → B maps every element in set A to exactly one element in set B.

**Types of Functions:**
- **Linear Functions** — f(x) = mx + b (slope m, y-intercept b)
- **Polynomial Functions** — f(x) = aₙxⁿ + ... + a₁x + a₀
- **Exponential Functions** — f(x) = aˣ
- **Trigonometric Functions** — used in RoPE (Rotary Positional Embeddings)

**Neural Network Functions:**
- **Sigmoid** — f(x) = 1 / (1 + e^(-x)), squashes to (0,1)
- **ReLU** — f(x) = max(0, x), the most popular activation
- **Tanh** — f(x) = (eˣ - e⁻ˣ) / (eˣ + e⁻ˣ), squashes to (-1,1)`,
      },
      {
        id: "derivatives",
        title: "Derivatives",
        youtubeId: ytId("https://youtu.be/rOQbHm37Nx4"),
        notes: `Derivatives tell you how fast a function is changing at any point.

**Common Derivative Rules:**
- **Power Rule:** d/dx[xⁿ] = nxⁿ⁻¹
- **Constant Multiple:** d/dx[cf(x)] = c·f'(x)
- **Sum Rule:** d/dx[f(x) + g(x)] = f'(x) + g'(x)
- **Product Rule:** d/dx[f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)
- **Chain Rule:** d/dx[f(g(x))] = f'(g(x))·g'(x)

**Partial Derivatives:** When a function has multiple inputs (like neural network weights), we take the derivative with respect to one variable while holding others constant.

Key for neural networks: derivatives power backpropagation.`,
      },
      {
        id: "vectors",
        title: "Vectors",
        youtubeId: ytId("https://youtu.be/RD0Rvc4d5hg"),
        notes: `Vectors are ordered lists of numbers representing magnitude and direction.

**Key Operations:**
- **Addition:** [a₁, a₂] + [b₁, b₂] = [a₁+b₁, a₂+b₂]
- **Scalar Multiplication:** c·[a₁, a₂] = [ca₁, ca₂]
- **Dot Product:** a·b = a₁b₁ + a₂b₂ (measures similarity)
- **Magnitude:** ||v|| = √(v₁² + v₂² + ...)

In neural networks, inputs, weights, and embeddings are all vectors. In LLMs, word embeddings are high-dimensional vectors where similar words have similar vectors.`,
      },
      {
        id: "gradients",
        title: "Gradients",
        youtubeId: ytId("https://youtu.be/vp2oUoBDH4w"),
        notes: `The gradient generalizes derivatives to multiple dimensions. It's a vector pointing in the direction of steepest increase.

**What the Gradient Tells Us:**
- **Direction:** Which way to go to increase the function fastest
- **Magnitude:** How steep the slope is

**Gradient Descent:** The core of machine learning training. We move in the opposite direction of the gradient to minimize the loss function. The gradient tells us exactly how to update each weight to reduce error.`,
      },
      {
        id: "matrices",
        title: "Matrices",
        youtubeId: ytId("https://youtu.be/5H4crNlLK_A"),
        notes: `A matrix is a 2D array of numbers. Neural networks are essentially chains of matrix operations.

**Key Operations:**
- **Addition/Subtraction** — element-wise, same shapes required
- **Scalar Multiplication** — multiply every element
- **Matrix Multiplication** — (m×n) @ (n×p) = (m×p), inner dimensions must match
- **Transpose** — flip rows and columns, Aᵀ
- **Determinant** — scalar value, det(A) = 0 means non-invertible
- **Inverse** — A⁻¹ such that A·A⁻¹ = I

**Special Matrices:** Identity (I), Diagonal, Symmetric, Orthogonal.`,
      },
      {
        id: "derivation-rules",
        title: "Derivation Rules & Examples",
        youtubeId: ytId("https://youtu.be/RBYsmz3PqKg"),
        notes: `A derivative is "The Nudge" — how much the output changes when you nudge the input.

**Basic Rules:**
- **Power Rule:** d/dx[xⁿ] = nxⁿ⁻¹
- **Constant Multiple Rule:** d/dx[c·f(x)] = c·f'(x)
- **Addition Rule:** d/dx[f + g] = f' + g'
- **Product Rule:** (fg)' = f'g + fg'

These rules let you compute how every weight in a neural network affects the final output.`,
      },
      {
        id: "chain-rule",
        title: "The Chain Rule",
        youtubeId: ytId("https://youtu.be/sy55BPG8Lec"),
        notes: `**This is the most important rule in all of AI.** It is exactly how Backpropagation works.

**The Core Idea:** If y = f(g(x)), then dy/dx = f'(g(x)) · g'(x). Decompose complex derivatives into simpler ones.

**The Gear Intuition:** If gear A turns gear B, and gear B turns gear C — to know how fast C turns relative to A, multiply the two gear ratios. Each layer in a neural network is like a gear.`,
      },
      {
        id: "backprop-python",
        title: "Backprop in Python",
        youtubeId: ytId("https://youtu.be/76o6sM4aqXU"),
        notes: `Implementing backpropagation from scratch.

**The Goal:** Compute dL/dw for every weight w — how much each weight contributed to the loss.

**Forward Pass:** Input → multiply by weights → add bias → activation → output → loss

**Backward Pass (Chain Rule):** dL/dL → dL/dy → dL/dw2 → dL/db2 → dL/dh → dL/dw1 → dL/db1

**The Universal Pattern:** For each operation, propagate the gradient backward by multiplying by the local gradient.`,
      },
      {
        id: "jacobian-matrix",
        title: "The Jacobian Matrix",
        youtubeId: ytId("https://youtu.be/Rw3cImDy20s"),
        notes: `When you move to higher dimensions — the derivative of a vector function produces a matrix called the **Jacobian Matrix**.

It contains all partial derivatives of a vector-valued function. Essential for understanding backpropagation through layers with multiple inputs and outputs.`,
      },
      {
        id: "hadamard-product",
        title: "Hadamard Product (Element-wise Op)",
        youtubeId: ytId("https://youtu.be/cdExGGDKhBM"),
        notes: `The Hadamard Product is simply element-wise multiplication.

**Why it's the "King" of Efficiency:** Element-wise operations are much faster than matrix multiplication. The Jacobian of an element-wise operation is diagonal, making backprop through it very efficient.

**In Python:** Use \`*\` for element-wise, \`@\` for matrix multiplication.`,
      },
      {
        id: "entropy",
        title: "Entropy & Information Theory",
        youtubeId: ytId("https://youtu.be/9urO-72S6J0"),
        notes: `Claude Shannon's "atom of intelligence."

**Surprisal:** How surprising is an event? -log₂(p). Rare events = high surprisal.

**Entropy:** Average surprise across all events. H = -Σ p(x) log₂ p(x)
- **Low Entropy:** Predictable (biased coin)
- **High Entropy:** Uncertain (fair coin)

**Why this matters for AI:** Cross-Entropy Loss is the standard loss function for classification and language models.`,
      },
      {
        id: "kl-divergence",
        title: "KL Divergence",
        youtubeId: ytId("https://youtu.be/QEtvl5P5KMY"),
        notes: `KL Divergence measures how different two probability distributions are.

**The Formula:** D_KL(P || Q) = Σ P(x) log(P(x)/Q(x))

**Key Properties:**
- Not symmetric: D_KL(P||Q) ≠ D_KL(Q||P)
- Always ≥ 0
- = 0 only when P = Q

**"Zero-Forcing"** for Q: KL divergence penalizes Q heavily for assigning zero probability where P is non-zero. Summary: KL Divergence = "average extra surprise."`,
      },
      {
        id: "svd",
        title: "Singular Value Decomposition (SVD)",
        youtubeId: ytId("https://youtu.be/DTW_hK5d-C0"),
        notes: `**"The King of Linear Algebra."**

SVD decomposes any matrix A = UΣVᵀ where U and V are orthogonal and Σ is diagonal.

**Foundation of:**
- Compression (JPEG, MP3)
- Dimensionality Reduction (PCA)
- Recommender Systems (Netflix Prize)
- **LoRA** (Low-Rank Adaptation for LLMs) — the technique that makes fine-tuning large language models practical.`,
      },
      {
        id: "moving-averages",
        title: "Moving Averages (EMA)",
        youtubeId: ytId("https://youtu.be/iLq0JGBVT-0"),
        notes: `Dealing with noise in training signals.

**Simple Moving Average (SMA):** Average of last N values. Problem: requires storing N values.

**Exponential Moving Average (EMA):** v_t = β·v_{t-1} + (1-β)·x_t — recursive, memory-efficient.

**Why This Matters for Adam Optimizer:**
- **Momentum** = EMA of Gradients (first moment)
- **RMSProp** = EMA of Squared Gradients (second moment)
- Adam combines both for adaptive learning rates per parameter.`,
      },
      {
        id: "more-math",
        title: "More Math Lessons",
        youtubeId: ytId("https://youtu.be/xDXyepdjfMs"),
        notes: `A separate course that explains math fundamentals in a different way. Watch alongside previous lessons to strengthen your knowledge of the math foundations necessary for AI research.`,
      },
    ],
  },
  {
    id: "core-ai-intuitions",
    title: "Core AI Intuitions",
    shortTitle: "AI Intuitions",
    description:
      "Build deep intuition for the core operations that power all of AI — dot products, softmax, broadcasting, and norms.",
    lessons: [
      {
        id: "similarity-dot-product",
        title: "Similarity With Dot Product",
        youtubeId: ytId("https://youtu.be/B2ZSC9228ak"),
        notes: `The dot product is **the engine of AI** — it measures similarity between vectors.

**The Calculation:** a·b = Σ aᵢbᵢ

**Real-World Example:** Movie recommendations — compute dot product between user preference vector and movie feature vector. Higher = better match.

**Geometric Intuition:** a·b = ||a||·||b||·cos(θ). When vectors point the same way, dot product is large and positive. Perpendicular = 0. Opposite = negative.

This is the fundamental operation in attention mechanisms, embeddings, and similarity search.`,
      },
      {
        id: "softmax",
        title: "Softmax Probabilities",
        youtubeId: ytId("https://youtu.be/CmEoFz5_SgE"),
        notes: `Softmax converts raw scores into clean probabilities that sum to 1.

**The "Winner Takes All" Effect:** Exponential amplification makes the largest value dominate.

**Diverse Examples:**
- "I'm Sure" — one score dominates
- "I Don't Know" — scores are similar, probabilities spread evenly
- Handles negatives gracefully

**Advanced: Temperature (T):**
- T < 1: More confident (sharper distribution)
- T > 1: More uncertain (flatter distribution)
- Used in LLM generation to control creativity vs. accuracy.`,
      },
      {
        id: "tensor-broadcasting",
        title: "Tensor Broadcasting",
        youtubeId: ytId("https://youtu.be/qiTxwxlPGIs"),
        notes: `Broadcasting lets you operate on tensors of different shapes without copying data.

**The Strategy:** Automatically expand smaller tensors to match larger ones.

**Examples:**
- Scalar + Vector: adds scalar to every element
- Matrix + Vector: adds vector to every row (used for bias in neural networks)

**The Rules:**
1. Align shapes from the right
2. Dimensions are compatible if equal OR one of them is 1
3. Missing dimensions are treated as 1`,
      },
      {
        id: "l1-l2-norms",
        title: "L1 vs L2 Norms",
        youtubeId: ytId("https://youtu.be/HXgayhBYmPo"),
        notes: `Two ways to measure distance/size of vectors.

**L1 Norm (Manhattan Distance):** ||x||₁ = Σ|xᵢ| — walk along grid lines. Promotes **sparsity** (Lasso Regression pushes weights to exactly 0).

**L2 Norm (Euclidean Distance):** ||x||₂ = √(Σxᵢ²) — straight line. Promotes **smoothness** (Weight Decay / Ridge Regression keeps all weights small).

**Key Differences:**
- L1 spreads penalty evenly, L2 penalizes outliers more
- L1 creates zeros (feature selection), L2 shrinks toward zero
- L1 gradient is constant (±1), L2 gradient depends on value`,
      },
    ],
  },
  {
    id: "pytorch-fundamentals",
    title: "PyTorch Fundamentals",
    shortTitle: "PyTorch",
    description:
      "Master the tensor operations that are the building blocks of every neural network implementation.",
    lessons: [
      {
        id: "creating-tensors",
        title: "Creating Tensors",
        youtubeId: ytId("https://youtu.be/YyAhsI9GdcM"),
        notes: `Tensors are the fundamental data structure in PyTorch.

**Dimensions:**
- 0D: Scalar (single number)
- 1D: Vector [1, 2, 3]
- 2D: Matrix [[1,2],[3,4]]
- 3D+: Batches, images, sequences

**The Bracket Rule:** Count opening brackets to determine dimensions.

**Creating Tensors:**
- From Python lists: \`torch.tensor([1, 2, 3])\`
- From NumPy: \`torch.from_numpy(arr)\` (shares memory!)
- Data types: int32, int64, float32, float64, bool

**Why Tensors:** GPU acceleration, automatic differentiation, and optimized mathematical operations.`,
      },
      {
        id: "matrix-multiplication",
        title: "Matrix Multiplication",
        youtubeId: undefined,
        notes: `The most important operation in neural networks.

**The Dot Product (1D):** a·b = Σ aᵢbᵢ

**Matrix @ Matrix:** Each element of result = dot product of a row from A with a column from B.

**The Shape Rule:** (m×n) @ (n×p) = (m×p). Inner dimensions must match!

**Neural Network Layer:** output = input @ weights + bias. This is literally what \`nn.Linear\` does.

**In PyTorch:** Use \`@\` operator or \`torch.matmul()\`. Never use \`*\` for matrix multiplication (that's element-wise).`,
      },
      {
        id: "transposing-tensors",
        title: "Transposing Tensors",
        youtubeId: ytId("https://youtu.be/ZpjrVwJVC8I"),
        notes: `Transpose flips rows and columns.

**Why Transpose:** Making shapes compatible for matrix multiplication.

**In PyTorch:**
- \`.T\` for 2D tensors
- \`.transpose(dim0, dim1)\` for specific dimensions
- \`.permute(dims)\` for arbitrary reordering

**Common Use Cases:**
- Computing dot products: A @ B.T
- Batch matrix transpose: \`.transpose(1, 2)\`
- Reshaping weight matrices for different layer orientations`,
      },
      {
        id: "flatten-reshape-view",
        title: "flatten, reshape, view, squeeze, unsqueeze",
        youtubeId: ytId("https://youtu.be/tkkbxcM9sBY"),
        notes: `Reshaping tensors without changing data.

**The Golden Rule:** Total elements must stay the same. (2×3) can reshape to (3×2) or (6,) or (1×6).

**Key Operations:**
- **reshape/view:** Change shape arbitrarily
- **flatten:** Collapse to 1D
- **squeeze:** Remove dimensions of size 1
- **unsqueeze:** Add a dimension of size 1
- **-1:** Let PyTorch figure out that dimension

**reshape vs view:** view requires contiguous memory, reshape works always (may copy data).`,
      },
      {
        id: "indexing-slicing",
        title: "Indexing and Slicing",
        youtubeId: ytId("https://youtu.be/2t9iboeKJ2c"),
        notes: `Accessing specific elements or sub-tensors.

**Basics:** Indexing starts at 0. Negative indexing: -1 = last element.

**Slicing:** \`tensor[start:end]\` — end is exclusive.

**Matrix Indexing:** \`tensor[row, col]\` or \`tensor[row_slice, col_slice]\`

**Step Slicing:** \`tensor[::2]\` — every other element.

**Advanced:** Boolean masking, fancy indexing with lists of indices.`,
      },
      {
        id: "cat-stack",
        title: "cat, stack",
        youtubeId: ytId("https://youtu.be/xwnalPgfuRI"),
        notes: `Combining tensors.

**torch.cat:** Join along existing dimension. Like gluing side-by-side or end-to-end.
- dim=0: Stack rows (more rows, same columns)
- dim=1: Stack columns (same rows, more columns)
- Rule: All other dimensions must match!

**torch.stack:** Creates a NEW dimension. Like putting papers in a folder.
- All tensors must have identical shape
- Useful for creating batches

**Practical Uses:** Combining train/test data, building batches, concatenating features.`,
      },
      {
        id: "special-tensors",
        title: "Special Tensors (eye, rand, arange, linspace)",
        youtubeId: ytId("https://youtu.be/ZdizCw6yw5k"),
        notes: `Special tensor constructors for common patterns.

**torch.zeros / torch.ones:** Initialize tensors. Common for accumulators and masks.

**torch.eye:** Identity matrix — diagonal of 1s. Used in loss functions and linear algebra.

**Random Tensors:**
- \`torch.rand\` — Uniform [0, 1)
- \`torch.randn\` — Normal (mean=0, std=1)
- \`torch.randint\` — Random integers
- Why randomness? **Symmetry breaking** — without it, all neurons learn the same thing.

**Range Tensors:**
- \`torch.arange(start, end, step)\` — like Python range
- \`torch.linspace(start, end, steps)\` — evenly spaced points`,
      },
      {
        id: "new-full-lesson",
        title: "New Full Lesson",
        youtubeId: ytId("https://youtu.be/n_Kib2Gj39w"),
        notes: `A comprehensive lesson covering all PyTorch fundamentals together. Watch alongside previous lessons to strengthen your knowledge.`,
      },
      {
        id: "7-pytorch-tasks",
        title: "7 PyTorch Tasks (Advanced)",
        youtubeId: ytId("https://youtu.be/QtlDV2r1ryE"),
        notes: `Advanced PyTorch challenges to test and solidify your understanding of tensor operations.`,
      },
    ],
  },
  {
    id: "tensorflow-fundamentals",
    title: "TensorFlow Fundamentals",
    shortTitle: "TensorFlow",
    description:
      "Learn TensorFlow from the ground up — linear models, CNNs, transfer learning, adversarial examples, NLP, reinforcement learning, and more.",
    lessons: [
      {
        id: "simple-linear-model",
        title: "Simple Linear Model",
        youtubeId: ytId("https://youtu.be/wuo4JdG3SvU"),
        notes: `Build a Simple Linear Model in TensorFlow to recognize handwritten digits (MNIST).

**Model Structure:**
- **Placeholders:** Input image data (X) and true labels (Y-true) into the computational graph
- **Variables:** Weights and biases optimized during training
- **Linear Operation:** Images multiplied by weights + biases to generate logits
- **Cost:** Cross-entropy as a continuous performance measure
- **Optimizer:** Gradient descent to update variables and improve accuracy

**Key Takeaways:**
- TensorFlow builds a computational graph for efficient execution and automatic differentiation
- Mini-batch processing (100 images at a time) handles large datasets efficiently
- Model weights can be visualized as filters — reaches ~91% accuracy after 1,000 iterations
- Track performance via classification accuracy and confusion matrix`,
      },
      {
        id: "convolutional-neural-network",
        title: "Convolutional Neural Network",
        youtubeId: ytId("https://youtu.be/HMcx-zY8JSg"),
        notes: `Build a CNN in TensorFlow to classify MNIST digits with ~99% accuracy.

**Architecture:**
- **Input:** 28x28 grayscale images
- **Conv Layer 1:** 16 filters (5x5) → 14x14, ReLU + 2x2 Max Pooling
- **Conv Layer 2:** 36 filters (5x5) → 7x7, ReLU + 2x2 Max Pooling
- **Flatten:** 4D tensor → 2D vector
- **Dense:** 128 features → 10-class output with Softmax

**Key Concepts:**
- Computational graph: placeholders, variables, Cross Entropy loss, Adam optimizer
- Weights initialized randomly, optimized to minimize error
- Stride & "Same" padding maintains output dimensions
- CNNs use hierarchical feature extraction to learn spatial patterns`,
      },
      {
        id: "pretty-tensor",
        title: "Pretty Tensor",
        youtubeId: ytId("https://youtu.be/GCUfJQ_dec8"),
        notes: `Pretty Tensor simplifies CNN creation by abstracting low-level TensorFlow details.

**Core Concept:** Wraps TensorFlow tensors to allow chained method calls — syntax mirrors the network flowchart.

**Advantages:**
- Drastically reduces boilerplate for weight/bias allocation and layer creation
- Code structure follows data flow, easier to debug
- Fewer manual coding errors in complex graphs

**Drawbacks:**
- Retrieving internal weights or intermediate outputs is cumbersome
- Limited and sometimes confusing documentation

**Note:** The author recommends using the Keras API instead for modern projects.`,
      },
      {
        id: "layers-api",
        title: "Layers API",
        youtubeId: ytId("https://youtu.be/iYQNU2O8k3g"),
        notes: `The Layers API is a high-level "Builder API" in TensorFlow for constructing neural networks with pre-built helper functions.

**Key Features:**
- Modular layer-by-layer construction — maintain a "net" reference for easier debugging and branching
- Standard operations: conv layers, max pooling, dense (fully connected) layers
- Automatic variable allocation and parameter management

**Workflow:**
1. Define input placeholders and reshape data
2. Sequentially build layers (conv, pool, dense) with ReLU activations
3. Flatten multi-dimensional output for dense layers
4. Optimize with cross-entropy loss and an optimizer

More verbose than Pretty Tensor but offers better flexibility for complex architectures.`,
      },
      {
        id: "keras-api",
        title: "Keras API",
        youtubeId: ytId("https://youtu.be/3yfRJKA1BiQ"),
        notes: `Keras is the recommended high-level API for TensorFlow — prioritizes clarity and ease of use.

**Modeling Approaches:**
- **Sequential Model:** Stack layers in a linear sequence — simplest approach
- **Functional Model:** Complex architectures with branching and multiple inputs/outputs

**Workflow:**
- **Compile:** Define optimizer (Adam), loss function, and metrics
- **Train:** \`model.fit()\` — mirrors scikit-learn conventions
- **Evaluate:** \`model.evaluate()\` on test data
- **Save/Load:** Single function calls for model persistence

**Inspection:** View network structure, layer shapes, parameter counts, and learned weights.

Keras is the standard choice for most deep learning projects — best balance of power and usability.`,
      },
      {
        id: "save-restore",
        title: "Save & Restore",
        youtubeId: ytId("https://youtu.be/Lx8JUJROkh0"),
        notes: `Saving, restoring, and implementing early stopping for a CNN in TensorFlow.

**Saver Object:** Uses tf.train.Saver to save variables (filter weights, biases) of the computational graph to disk for later retrieval.

**Early Stopping:** Monitors validation accuracy throughout training — if it fails to improve for a set number of iterations (e.g., 1,000), training is aborted to prevent overfitting.

**Key Takeaways:**
- Binary checkpoints are saved in a non-human-readable format only TensorFlow can process
- Enables resuming training after crashes or reusing a trained model without retraining
- Combining checkpoint saving and early stopping efficiently manages long training sessions`,
      },
      {
        id: "ensemble-learning",
        title: "Ensemble Learning",
        youtubeId: ytId("https://youtu.be/AVKZrPCW91A"),
        notes: `Combining multiple neural networks to improve classification performance.

**The Process:**
- Build a single CNN graph, re-initialize and train it multiple times with different random subsets
- Save weights/biases for each network as separate checkpoint files
- Reload each network to make predictions on the test set

**Key Properties:**
- **Aggregation:** Averaging predicted probability vectors (Softmax outputs) outperforms simple voting
- **Performance:** Ensemble typically achieves higher accuracy than any single network (~99.2% vs ~98.8-99.0%)
- **Cost:** Training is significantly more expensive — requires training multiple models from scratch

Ensemble Learning = "reducing error through averaging predictions."`,
      },
      {
        id: "cifar-10",
        title: "CIFAR-10",
        youtubeId: ytId("https://youtu.be/3BXfw_1_TF4"),
        notes: `Training a CNN to recognize 10 classes of low-resolution images (32x32 pixels).

**Key Techniques:**
- **Data Augmentation:** RandomCrop(Flip(AdjustColor(Original))) increases training diversity
- **Batch Normalization:** Normalizes convolutional layer output to keep values stable, speeding up training
- **Variable Sharing:** Single "network" scope so training/testing graphs share exact same weights
- **Checkpointing:** Periodically saves model state to disk for resuming interrupted training

Higher-level convolutional layers produce feature maps that are unintelligible to humans — abstract grayscale patterns rather than recognizable objects.`,
      },
      {
        id: "inception-model",
        title: "Inception Model",
        youtubeId: ytId("https://youtu.be/ZG_hoLgNFNo"),
        notes: `Using the pre-trained Inception v3 model for high-accuracy image classification.

**The Process:** Input Image → Pre-trained Inception Graph → Softmax Layer → Top-K Predicted Classes

**Key Properties:**
- Requires images to be exactly 299x299 pixels — auto-resizes but can cause pixelation
- White-space padding maintains accuracy better than stretching non-square images
- Model stored as Protocol Buffer (.pb) file — cross-platform binary format from Google
- Occasional class bias: prioritizes accessories ("sunglasses") over people due to training data

Inception Model = "High-performance image recognition via pre-trained deep learning."

**Also recommended:** "Inception Network Motivation" by Andrew Ng (DeepLearningAI) — youtu.be/C86ZXvgpejM`,
      },
      {
        id: "transfer-learning",
        title: "Transfer Learning",
        youtubeId: ytId("https://youtu.be/upfgTWrhkpg"),
        notes: `Reusing a pre-trained model on a new task by replacing only the final classification layer.

**Transfer Values:** Outputs from the "Transfer Layer" (layer before final softmax) of a pre-trained model like Inception v3.

**Key Properties:**
- **Efficiency:** Drastically reduces training time and computational cost
- **Accuracy:** Often achieves higher accuracy on small datasets — base model already understands edges, shapes, etc.
- **Caching:** Transfer values only need to be calculated once and saved to disk
- **Visualization:** PCA or t-SNE can show how the model separates different image classes

Transfer Learning = "Standing on the shoulders of giants."

**Also recommended:** "Transfer Learning" by Andrew Ng (DeepLearningAI) — youtu.be/FQM13HkEfBk`,
      },
      {
        id: "video-data",
        title: "Video Data",
        youtubeId: ytId("https://youtu.be/9sYBC2_AVfA"),
        notes: `Using transfer learning with Inception to classify video frames from a custom "Knify-Spoony" dataset.

**Workflow:** Video → Frames (5fps, 200x200) → Inception Transfer Values → Cache → New Classifier

**Challenges:**
- **The "Fork" Problem:** Poor performance on forks because ImageNet had only 16 fork images vs thousands of spoons/knives
- **Background Bias:** Accuracy varies based on whether test background matches training set
- **Next Step:** If transfer learning fails, try fine-tuning the Inception model itself

Transfer values allow training a new classifier in seconds rather than weeks.`,
      },
      {
        id: "fine-tuning-tf",
        title: "Fine-Tuning",
        youtubeId: ytId("https://youtu.be/H8sXcAXrGR4"),
        notes: `Adapting a pre-trained neural network to a new dataset by further training some of its layers.

**Workflow:**
1. Load pre-trained model (e.g., VGG16) without original classification layers
2. Add new classifier (Dense + Softmax) for your dataset
3. Freeze pre-trained layers, train only new classifier
4. Unfreeze some layers, continue training with very low learning rate

**Key Properties:**
- Lower learning rate is crucial to avoid destroying pre-learned features
- Deeper layers (closer to output) are fine-tuned; earlier layers (general features) stay frozen
- Input preprocessing must match original training exactly
- Effective even with smaller datasets

Fine-Tuning = "Specializing pre-trained knowledge for a specific task."`,
      },
      {
        id: "adversarial-examples",
        title: "Adversarial Examples",
        youtubeId: ytId("https://youtu.be/Iwei8Lah0h8"),
        notes: `Specialized inputs created by adding imperceptible noise to trick neural networks into misclassifying.

**Mechanism:** Keep model fixed, update input image pixels via gradient descent to minimize loss for a target (incorrect) class.

**Key Properties:**
- **Imperceptibility:** Added noise is ~±1.2% of pixel range — human eye cannot distinguish it
- **High Confidence:** Inception v3 can classify a "parrot" as a "bookcase" with >99% confidence
- **Transferability:** Noise generated for one model often tricks other models — a fundamental vulnerability

Adversarial Examples = "mathematically crafted optical illusions for AI."

**Also recommended:** "How Neural Networks Learn — Part II: Adversarial Examples" by Arxiv Insights — youtu.be/4rFOkpI0Lcg`,
      },
      {
        id: "adversarial-noise-mnist",
        title: "Adversarial Noise for MNIST",
        youtubeId: ytId("https://youtu.be/ogP5Ehh_4Rk"),
        notes: `Finding a single universal noise pattern that forces a CNN to misclassify any MNIST digit into a target class.

**Optimization:** Network weights locked (trainable=False), optimize only noise variable:
- Cross-Entropy Loss using adversarial target class
- L2 Loss to keep noise subtle
- Combined: L_total = L_adversarial + λ · L2_noise

**Defense & Limitations:**
- **Fine-tuning for immunity:** Retrain with corrupted images to teach network to ignore the pattern
- **Cat and Mouse:** Immune to one pattern but vulnerable to new ones
- Cannot easily make a network immune to all adversarial targets simultaneously

Adversarial Noise = "Calculated distortion to exploit model blindspots."`,
      },
      {
        id: "visual-analysis",
        title: "Visual Analysis",
        youtubeId: ytId("https://youtu.be/bsyOsJHjSIo"),
        notes: `Understanding what convolutional filters recognize by "dreaming" up images that maximize their activity.

**Process:** Start with random noise → pass through pre-trained Inception v3 → calculate gradient of specific neuron w.r.t. input → update image to increase activation

**Key Properties:**
- **Layer Hierarchy:** Early layers = simple colors/lines; deeper layers = complex textures
- **Human Interpretability Gap:** Maximizing a class neuron (e.g., "Fox") produces abstract noise, not a recognizable image
- **Adversarial Sensitivity:** Networks react to infinitely many images, but only a tiny fraction are recognizable to humans

Feature Visualization = "Finding the input pattern a neuron likes best."`,
      },
      {
        id: "visual-analysis-mnist",
        title: "Visual Analysis for MNIST",
        youtubeId: ytId("https://youtu.be/elPTCt45ZGo"),
        notes: `Visualizing the internal workings of a CNN trained on MNIST by finding input images that maximize specific neuron responses.

**Process:** Instead of updating weights (training), use gradients to update the input image — start with random/blank image and iteratively change pixels to increase activation of a chosen feature.

**Key Components:**
- Conv Layer 1 learns basic shapes and edges
- Conv Layer 2 learns complex patterns
- Dense layers combine features to classify digits
- Optimized images reveal "templates" the network uses for decisions

Turns the "black box" into a more interpretable model.`,
      },
      {
        id: "deep-dream",
        title: "Deep Dream",
        youtubeId: ytId("https://youtu.be/ws-ZbiFV1Ms"),
        notes: `Amplifying patterns a neural network "sees" by adjusting the image to maximize specific layer activations.

**Core Idea:** Gradient ascent on the input image — calculate gradient of a layer's activation w.r.t. input, add it back.

**Key Techniques:**
- **Recursive Scaling (Octaves):** Downscale/upscale to create patterns at multiple scales
- **Gradient Blurring:** Gaussian blur maintains original colors and smoothness
- **Tile-Based Processing:** Random offset tiles prevent memory issues and visible seams

DeepDream = "algorithmic hallucination via feature amplification."

**Also recommended:** "Deep Dream (Google)" by Computerphile — youtu.be/BsSmBPmPeYQ`,
      },
      {
        id: "style-transfer",
        title: "Style Transfer",
        youtubeId: ytId("https://youtu.be/LoePx3QC5Js"),
        notes: `Mixing the contour lines of a Content Image with the textures/colors of a Style Image using VGG-16.

**Key Components:**
- **Content Loss:** MSE between feature activations of content and mixed images at higher layers
- **Style Loss:** Gram Matrix (dot products) matches simultaneous feature activation patterns
- **Denoising Loss:** Total variation loss reduces noise and ensures smoothness

**Implementation:** VGG-16 chosen over Inception for better visual results. Gram matrix captures style textures. Weight normalization keeps losses relative regardless of layers.

Style Transfer = "Content Contours + Style Textures."

**Also recommended:** "Neural Style Transfer with TensorFlow in 10 Minutes" by Nicholas Renotte — youtu.be/bFeltWvzZpQ`,
      },
      {
        id: "tf-gpu-cpu",
        title: "TensorFlow GPU vs CPU",
        youtubeId: ytId("https://youtu.be/e2VfNscJJUM"),
        notes: `Demonstrating massive performance gains from GPU vs CPU for deep learning.

**The Speedup:** GPU is roughly 15x to 25x faster than high-end quad-core CPU.

**Key Properties:**
- **Parallel Processing:** GPUs excel at simultaneous matrix operations; CPUs process more linearly
- **Environment:** Requires specific Anaconda environments for CUDA/cuDNN support
- **Memory:** TensorFlow allocates all available GPU VRAM by default to prevent fragmentation
- **Productivity:** 45-minute CPU task → under 2 minutes on GPU

GPU utilization up to 95%+ ensures computation is the bottleneck, not data transfer.`,
      },
      {
        id: "reinforcement-learning-tf",
        title: "Reinforcement Learning",
        youtubeId: ytId("https://youtu.be/Vz5l886eptw"),
        notes: `Q-Learning to determine action values in specific states for maximizing cumulative rewards.

**The Formula:** Q(s, a) = r + γ · max Q(s', a')

**Key Components:**
- **Experience Replay:** Stores thousands of past states to break correlation and stabilize training
- **Epsilon-Greedy:** Mostly choose best action, occasionally random for exploration
- **Deep CNN:** Approximates Q-values when state space (screen images) is too large for tables
- **Motion Tracing:** Gives AI a sense of direction/speed for moving objects

Q-Learning = "Learning the value of actions through trial, error, and memory."

**Also recommended:** "Q-Learning Intro/Table — Reinforcement Learning p.1" by sentdex — youtu.be/yMk_XtIEzH8`,
      },
      {
        id: "estimator-api",
        title: "Estimator API",
        youtubeId: ytId("https://youtu.be/BhQW2OLzx_c"),
        notes: `High-level TensorFlow interface for simplified model building, training, and evaluation.

**Key Components:**
- **Input Functions:** Stream data — loading, shuffling, batching
- **Canned Estimators:** Pre-defined models (DNNClassifier) for common tasks
- **Custom Estimators:** User-defined via model_fn for specialized architectures
- **EstimatorSpec:** Defines behavior for Train, Evaluate, and Predict modes

**Criticisms:** Requires "feature columns" inconsistently, reloads model from disk every predict() call, and can be unintuitive with long error messages.

Estimator API = "High-level automation at the cost of some flexibility."`,
      },
      {
        id: "tfrecords-dataset-api",
        title: "TFRecords & Dataset API",
        youtubeId: ytId("https://youtu.be/oxrcZ9uUblI"),
        notes: `Binary file format for efficient data storage, solving feed_dict performance bottlenecks.

**Workflow:** Convert raw data → TFRecords binary → Parse with tf.data.Dataset → Shuffle, repeat, batch

**Key Properties:**
- **High Efficiency:** Parallel data loading keeps GPU busy instead of waiting for CPU
- **Serialization:** Data wrapped in tf.train.Example and tf.train.Features
- **Large Datasets:** Handles data too big for memory by reading from disk in buffers

The feed_dict method often leaves GPUs at 30-50% utilization because Python is too slow. TFRecords enables multi-threaded input pipelines.`,
      },
      {
        id: "hyperparameter-optimization",
        title: "Hyper-Parameter Optimization",
        youtubeId: ytId("https://youtu.be/oaxf3rk0KGM"),
        notes: `Automating the search for best configurations using Bayesian Optimization with Scikit-Optimize.

**Strategy:** Gaussian Process models the fitness function, estimating performance across search space with uncertainty tracking.

**Key Properties:**
- **Exploitation vs Exploration:** Balances known good results with unexplored high-uncertainty areas
- **Dimensions:** Supports Real (learning rate), Integer (nodes), Categorical (activation functions)
- **Session Management:** Must clear Keras/TF session after each run to prevent memory leaks
- **Analysis:** Convergence plots and partial dependence plots show parameter impact

Bayesian Optimization = "smart searching by modeling uncertainty."

**Also recommended:** "Bayesian Optimization: Easy Explanation" by paretos — youtu.be/M-NTkxfd7-8`,
      },
      {
        id: "nlp-sentiment",
        title: "Natural Language Processing",
        youtubeId: ytId("https://youtu.be/DDByc9LyMV8"),
        notes: `Sentiment analysis — determining if text expresses positive or negative opinion.

**Pipeline:** Raw Text → Tokenization → Embedding Layer → RNN (GRU) → Dense + Sigmoid → Score (0.0-1.0)

**Key Components:**
- **Embedding Layer:** Maps integer tokens to real-valued vectors where similar words cluster
- **GRU:** Handles long sequences efficiently using gates to manage memory
- **Padding/Truncating:** Fixed-length inputs required per batch
- **Challenge:** Vanishing/exploding gradients on sequences of 500+ words

NLP models map human language into mathematical sentiment scores through embeddings and recurrent units.`,
      },
      {
        id: "machine-translation",
        title: "Machine Translation",
        youtubeId: ytId("https://youtu.be/vI2Y3I-JI2Q"),
        notes: `Sequence-to-sequence translation using an Encoder-Decoder architecture with RNNs.

**Architecture:**
- **Encoder:** Processes source language → compresses into fixed-length "thought vector"
- **Decoder:** Takes thought vector → generates target language one word at a time

**Key Techniques:**
- **GRU over LSTM:** Single internal state makes thought vector transfer simpler
- **Sequence Reversal:** Reversing source sequences often improves quality
- **Teacher Forcing:** Feed actual correct words during training
- **Inference Loop:** Start with "start" marker, predict until "end" marker

Machine Translation = "Mapping one sequence to another via a high-dimensional thought vector."

**Also recommended:** "Seq2Seq Encoder-Decoder Neural Networks, Clearly Explained!!!" by StatQuest — youtu.be/L8HKweZIOmg`,
      },
      {
        id: "image-captioning",
        title: "Image Captioning",
        youtubeId: ytId("https://youtu.be/uCSTpOLMC48"),
        notes: `Combining Computer Vision and NLP — "translating" an image into text.

**Architecture:**
- **Encoder (VGG16):** Pre-trained CNN extracts 4096-element transfer values
- **Mapping Layer:** Dense + tanh maps 4096 → RNN state size (512)
- **Decoder (GRU):** Takes image features as initial state, generates word sequence

**Key Properties:**
- Uses Transfer Learning from VGG16 trained on ImageNet
- Teacher forcing during training; autoregressive loop during inference
- RMSprop preferred over Adam for RNN stability
- Custom generator for multiple captions per image (COCO dataset)

Image Captioning = CNN (Image Features) + RNN (Sequence Generation).

**Also recommended:** "Image Caption Generator using Flickr Dataset" by Hackers Realm — youtu.be/fUSTbGrL1tc`,
      },
      {
        id: "timeseries-prediction",
        title: "Time-Series Prediction",
        youtubeId: ytId("https://youtu.be/6f67zrH-_IE"),
        notes: `Predicting future values of multiple time-series using GRU networks.

**Architecture:** 20 weather signals from 5 cities → GRU (state size 512) → Dense → 3 target values 24 hours ahead

**Key Techniques:**
- **Warm-up Period:** ~50 steps where predictions are ignored to let RNN state stabilize
- **Data Scaling:** Normalize to 0-1 range with MinMaxScaler
- **Shifted Targets:** Shift time-series backward so model maps current → future
- **Custom Loss:** MSE excluding warm-up period

**Error Handling:** Linear interpolation fills gaps; outlier spikes left in hoping model generalizes around noise.`,
      },
    ],
  },
  {
    id: "neural-network-from-scratch",
    title: "Neural Network from Scratch",
    shortTitle: "Neural Nets",
    description:
      "Build neural networks from the ground up — single neurons, layers, training loops, normalization, and optimization.",
    lessons: [
      {
        id: "single-neuron",
        title: "Single Neuron From Scratch",
        youtubeId: ytId("https://youtu.be/G2kER-3wmKQ"),
        notes: `The foundation of intelligence — a single artificial neuron.

**Five Parts of a Neuron:**
1. **Inputs** (x₁, x₂, ...)
2. **Weights** (w₁, w₂, ...) — learned importance
3. **Multiply** — xᵢ × wᵢ for each input
4. **Sum** — Σ(xᵢwᵢ) + bias
5. **Activation Function** — non-linearity (ReLU, sigmoid)

**Complete Formula:** y = f(Σ wᵢxᵢ + b)

**A single neuron can learn:** AND gate, OR gate, NOT gate. But not XOR — that requires multiple neurons. **Universal Approximation Theorem:** enough neurons can approximate any function.`,
      },
      {
        id: "building-layer",
        title: "Building a Layer",
        youtubeId: ytId("https://youtu.be/amdpmuR4hrU"),
        notes: `From single neuron to a layer of neurons.

**A Layer:** Multiple neurons operating in parallel on the same inputs but with different weights. Mathematically: Y = f(XW + b)

**Adding Activation Functions:** Each layer applies a non-linearity after the linear transformation.

**Custom Layers:** Can include BatchNorm, Dropout, and other regularization techniques.`,
      },
      {
        id: "implementing-network",
        title: "Implementing a Network",
        youtubeId: ytId("https://youtu.be/2xibA91wnB8"),
        notes: `Putting layers together into a full network.

**The Complete Training Pipeline:**
1. **Model** — Define architecture (layers, activations)
2. **Loss Function** — How wrong is the model? (MSE, CrossEntropy)
3. **Optimizer** — How to update weights? (SGD, Adam)
4. **Training Loop** — Forward → Loss → Backward → Update → Repeat

**Going Deeper:** More layers = more capacity. Add Dropout for regularization.

**Real-World Example:** MNIST digit classification — 28×28 images → network → 10 digit probabilities.`,
      },
      {
        id: "rmsnorm",
        title: "RMSNorm",
        youtubeId: ytId("https://youtu.be/HgSdYtPgJnU"),
        notes: `Root Mean Square Normalization — a simpler, faster alternative to LayerNorm used in modern LLMs like LLaMA and GPT.`,
      },
      {
        id: "learning-rate-decay",
        title: "Learning Rate, Decay",
        youtubeId: ytId("https://youtu.be/Z5kEG7AaA0c"),
        notes: `The learning rate controls how big each weight update step is. Learning rate decay reduces it over time — start with big steps, finish with fine-tuning.`,
      },
      {
        id: "adam-optimizer",
        title: "Adam Optimizer",
        youtubeId: ytId("https://youtu.be/5tygLBoN_io"),
        notes: `Adam = Adaptive Moment Estimation. Combines momentum (EMA of gradients) with RMSProp (EMA of squared gradients) for per-parameter adaptive learning rates.`,
      },
      {
        id: "neural-network-scratch",
        title: "Neural Network From Scratch",
        youtubeId: ytId("https://youtu.be/tWcH9LQKIPY"),
        notes: `Complete implementation of a neural network from scratch — bringing together all concepts from this module.`,
      },
    ],
  },
  {
    id: "transformers",
    title: "Transformers",
    shortTitle: "Transformers",
    description:
      "The architecture that changed everything — attention mechanisms, self-attention, and building GPT from scratch.",
    lessons: [
      {
        id: "attention-mechanism",
        title: "Attention Mechanism Explained",
        youtubeId: ytId("https://youtu.be/JEc4CUbwzb0"),
        notes: `**The Revolutionary Idea:** Attention = Weighted average based on relevance.

**The Formula:** Attention(Q, K, V) = softmax(QKᵀ/√d)V

**Query-Key-Value Mechanism:**
- **Query (Q):** "What am I looking for?"
- **Key (K):** "What do I contain?"
- **Value (V):** "What information do I provide?"

Compute similarity between Q and K (dot product), normalize with softmax, use as weights to combine V.

**Why Attention is Revolutionary:** RNNs process sequentially (slow, forgetting). Attention processes everything in parallel and can look at any position directly.`,
      },
      {
        id: "self-attention",
        title: "Self Attention from Scratch",
        youtubeId: ytId("https://youtu.be/4OoZV9Qtdf8"),
        notes: `**"Self"** means the queries, keys, and values all come from the same input sequence.

**Building Self-Attention:**
1. Project input X into Q, K, V using learned weight matrices
2. Compute attention scores: QKᵀ/√d
3. Apply softmax to get attention weights
4. Multiply by V to get output

Each word in a sentence can attend to every other word, learning which relationships matter.`,
      },
      {
        id: "gpt-from-scratch",
        title: "GPT From Scratch",
        youtubeId: ytId("https://youtu.be/Wbe2DT_1I94"),
        notes: `Building a decoder-only transformer from scratch — the architecture behind GPT.

**The Ultimate Autocomplete:** Given previous tokens, predict the next one.

**Key Components:**
1. **Rotary Positional Embedding (RoPE)** — encodes position using rotation matrices
2. **Causal Self-Attention** — mask future tokens so the model can't cheat
3. **TransformerBlock** — Attention + FeedForward + RMSNorm (with residual connections)
4. **Full GPT Model** — Embedding → N × TransformerBlock → Output head

**The Causal Mask:** Ensures position i can only attend to positions ≤ i. This is what makes it "autoregressive."`,
      },
    ],
  },
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    shortTitle: "RL",
    description:
      "How agents learn from interaction — from basic environments to PPO and modern LLM reasoning techniques.",
    lessons: [
      {
        id: "agents-environments",
        title: "Agents & Environments",
        youtubeId: ytId("https://youtu.be/bf0Nge-qdfo"),
        notes: `**The Concept:** An agent interacts with an environment, receives feedback, and learns to maximize reward.

**The Loop:** State → Action → New State → Reward → Repeat

**Real-World Examples:**
- Games (AlphaGo)
- Robotics
- Recommendation Systems
- LLM Alignment (RLHF)

**Two Great Challenges:**
1. **Credit Assignment:** Which action caused this reward?
2. **Exploration vs Exploitation:** Try new things or use what works?

**The Goal:** Maximize total future reward: G = Σ γᵗ rₜ (with discount factor γ).`,
      },
      {
        id: "policy-gradients",
        title: "Policy Gradients (REINFORCE)",
        youtubeId: ytId("https://youtu.be/0Rv9M5n93_U"),
        notes: `**Direct Learning:** Instead of learning values, directly learn the policy (action probabilities).

**How It Works:**
1. Play an episode using current policy
2. Score the episode (total reward)
3. Update: increase probability of actions that led to good outcomes
4. Repeat

**The Log-Derivative Trick:** Makes the gradient computable.

**The Fatal Flaw:** High variance — the credit assignment problem makes learning noisy.`,
      },
      {
        id: "deep-q-learning",
        title: "Deep Q-Learning (DQN)",
        youtubeId: ytId("https://youtu.be/VRDBBbtdnw8"),
        notes: `**Value-Based Thinking:** Instead of learning actions directly, learn how good each state-action pair is.

**From Tables to Neural Networks:** Use a neural network as a function approximator for Q-values. This allows generalization to unseen states.

**Bellman Equation:** Q(s,a) = r + γ·max Q(s',a') — the value of an action = immediate reward + discounted future value.`,
      },
      {
        id: "ppo-llm-reasoning",
        title: "PPO, LLM Reasoning, Importance Ratio, Advantage",
        youtubeId: ytId("https://youtu.be/UTwqLCVgtVE"),
        notes: `Proximal Policy Optimization — the algorithm behind RLHF for LLMs. Uses importance ratio and clipping to make stable policy updates.`,
      },
      {
        id: "qwen-deepseek-grpo",
        title: "Qwen 3 GSPO & DeepSeek GRPO — LLM Reasoning",
        youtubeId: ytId("https://youtu.be/L94MdLdP21s"),
        notes: `Modern approaches to improving LLM reasoning through reinforcement learning — Group Relative Policy Optimization and related techniques.`,
      },
    ],
  },
  {
    id: "llm-from-scratch",
    title: "LLM From Scratch",
    shortTitle: "LLMs",
    description:
      "Build state-of-the-art large language models from scratch — LLaMA 4, DeepSeek V3, Qwen 3, and more.",
    lessons: [
      {
        id: "llama-4",
        title: "Llama 4 From Scratch",
        youtubeId: ytId("https://youtu.be/wcDV3l4CD14"),
        notes: `Building Meta's LLaMA 4 architecture from scratch — understanding the design choices behind one of the most influential open-source LLMs.`,
      },
      {
        id: "deepseek-v3",
        title: "DeepSeek V3 From Scratch",
        youtubeId: ytId("https://youtu.be/TfEG0TwueTs"),
        notes: `Implementing DeepSeek V3's architecture — exploring the Mixture of Experts approach and efficiency innovations.`,
      },
      {
        id: "qwen-3",
        title: "Qwen 3 From Scratch",
        youtubeId: ytId("https://youtu.be/wM-KP_wNAeY"),
        notes: `Building Alibaba's Qwen 3 from scratch — understanding its architectural innovations and training approach.`,
      },
      {
        id: "self-study-llm",
        title: "Self-Study LLM",
        notes: `Complete implementation of a Mixture-of-Experts LLM that you can run in Google Colab.

**Includes:**
- MoE Model Configuration
- Newton-Schulz orthogonalization
- Muon optimizer
- Data loading and caching
- Rotary Positional Embeddings
- Multi-Head Attention
- Expert and TopK Router classes
- Full training pipeline

Uses HuggingFace SmolLM-135M tokenizer and cosmopedia-v2 dataset.`,
      },
    ],
  },
  {
    id: "write-research-paper",
    title: "Write Research Paper",
    shortTitle: "Research",
    description:
      "The complete workflow from coding experiments to writing and publishing an AI research paper.",
    lessons: [
      {
        id: "code-write-publish",
        title: "Code, Write & Publish AI Research Paper",
        youtubeId: ytId("https://youtu.be/O2yAMJu8LpI"),
        notes: `**The Complete Pipeline:**
1. Code LLM from scratch
2. Code experiments (Muon vs Adam optimizer comparison)
3. Write the paper

**Skills Covered:**
- **LLM Architecture:** MoE with expert layers, top-k routing, auxiliary loss, RoPE, multi-head attention
- **Optimization:** Implement Muon optimizer, benchmark against Adam
- **ML Engineering:** Structure projects, pipelines, trainers, run cloud experiments
- **Research:** Design experiments, turn results into a publishable paper

**Paper:** github.com/vukrosic/noptims`,
      },
    ],
  },
  {
    id: "fine-tuning",
    title: "How to Fine-Tune Models",
    shortTitle: "Fine-Tuning",
    description: "From LoRA to full fine-tuning — learn to adapt pre-trained models to your data and tasks.",
    lessons: [
      { id: "why-finetune", title: "Why Fine-Tune?", notes: "Pre-trained models are general. Fine-tuning makes them specific to your task — classification, summarization, code generation, domain adaptation. Transfer learning lets you leverage billions of parameters trained on massive data." },
      { id: "lora", title: "LoRA & QLoRA", notes: "**Low-Rank Adaptation** — instead of updating all weights, inject small trainable matrices. QLoRA adds 4-bit quantization. Train a 7B model on a single GPU.\n\n**Key concepts:**\n- Rank (r): controls capacity vs efficiency\n- Alpha: scaling factor\n- Target modules: which layers to adapt (attention, MLP)" },
      { id: "data-preparation", title: "Data Preparation", notes: "The most important step. Your model is only as good as your data.\n\n**Formats:**\n- Instruction tuning: {instruction, input, output}\n- Chat format: {role, content} messages\n- Preference data: (chosen, rejected) pairs for RLHF/DPO\n\n**Quality > Quantity:** 1000 high-quality examples often beats 100k noisy ones." },
      { id: "training-loop", title: "Training & Hyperparameters", notes: "**Key hyperparameters:**\n- Learning rate: 1e-5 to 5e-5 for full, 1e-4 to 3e-4 for LoRA\n- Epochs: 1-3 (more risks overfitting)\n- Batch size: as large as memory allows\n- Warmup: 5-10% of total steps\n- Weight decay: 0.01-0.1\n\nUse cosine learning rate schedule. Monitor eval loss — stop when it starts increasing." },
      { id: "evaluation", title: "Evaluation & Deployment", notes: "**Evaluation methods:**\n- Perplexity on held-out set\n- Task-specific metrics (BLEU, ROUGE, accuracy)\n- Human evaluation for open-ended tasks\n- LLM-as-judge (GPT-4/Claude evaluating outputs)\n\n**Deployment:** Merge LoRA weights, quantize with GGUF/GPTQ, serve with vLLM or Ollama." },
    ],
  },
  {
    id: "mlops",
    title: "Machine Learning Operations (MLOps)",
    shortTitle: "MLOps",
    description:
      "Deploy and maintain ML models in production — from Git and Docker to Kubernetes, CI/CD, and monitoring with Prometheus & Grafana.",
    lessons: [
      {
        id: "intro-to-mlops",
        title: "Introduction to MLOps",
        youtubeId: ytId("https://youtu.be/5pniK1RV_6o"),
        notes: `MLOps bridges the gap between ML model development and production-grade software engineering.

**Key Components:**
- **Model Deployment:** Moving trained models into production for real-time or batch predictions
- **CI/CD Pipelines:** Automating testing and delivery of ML code and models
- **Model Monitoring:** Tracking performance to detect data drift or degradation
- **Retraining:** Automated workflows to retrain when new data arrives or performance drops

**Core Learning Path:** Git & GitHub → Containerization (Docker) → Orchestration (Kubernetes) → Cloud Computing

**Also recommended:** "MLOps Explained" by TechWorld with Nana (102K views) — youtu.be/biqYkVf-a7Y`,
      },
      {
        id: "git-github-mlops",
        title: "Git & GitHub",
        youtubeId: ytId("https://youtu.be/hqQBF0EubVo"),
        notes: `Git is a Version Control System that tracks changes and enables seamless collaboration.

**Core Concepts:** Repository (project + history), Commits (snapshots), Branching (parallel versions)

**Key Properties:**
- **Distributed:** Every developer has a full local copy of project history
- **Rollback:** Revert to any previous state when bugs are introduced
- **Traceability:** Records who changed what and why
- **Collaboration:** Merge conflict resolution ensures code integrity

Git/GitHub = "Project Time Machine & Collaboration Hub."`,
      },
      {
        id: "oops-python",
        title: "Python OOP for MLOps",
        youtubeId: ytId("https://youtu.be/ntSYb-tzjBE"),
        notes: `Object-Oriented Programming for writing modular, reusable ML code beyond Jupyter Notebooks.

**Core Concepts:** Class (blueprint) → Object (instance)

**Key Properties:**
- **Encapsulation:** Bundle data and methods, restrict access to internals
- **Inheritance:** Child classes inherit from parent, promoting reusability
- **Polymorphism:** Different classes share same interface (method overriding)
- **Abstraction:** Hide complex implementation, expose only necessary features

OOP allows pipeline components (ingestion, transformation, training) to communicate through well-defined interfaces.

**Also recommended:** "Python OOP Tutorial: Classes and Instances" by Corey Schafer (4.9M views) — youtu.be/ZDa-Z5JzLYM`,
      },
      {
        id: "data-versioning-dvc",
        title: "Data Versioning with DVC",
        youtubeId: ytId("https://youtu.be/PPrPuxqWc7E"),
        notes: `DVC (Data Version Control) = "Git for Data." Stores large files in remote storage (S3, Google Drive) while keeping small .dvc metadata files in Git.

**Workflow:**
1. \`dvc init\` — set up project
2. \`dvc add data.csv\` — creates .dvc file, adds original to .gitignore
3. Git commit the .dvc files — track which data version matches which code version
4. \`dvc push/pull\` — sync actual data with remote storage

**Key Properties:** Storage efficient (tracks pointers, not full data), reproducible (switch data versions like git branches), platform agnostic (AWS S3, GCP, Azure, local).`,
      },
      {
        id: "ml-pipeline-dvc-aws",
        title: "ML Pipeline with DVC & AWS S3",
        youtubeId: ytId("https://youtu.be/SMt3T-K2b_4"),
        notes: `End-to-end NLP Spam Detection pipeline with MLOps best practices.

**Pipeline Stages:** Data Ingestion → Data Validation → Pre-processing → Model Training & Evaluation

**Key Properties:**
- **Modularity:** Each stage is independent — robust and maintainable
- **Data Versioning:** DVC tracks data/model versions with code-level rigor
- **Cloud Integration:** AWS S3 as DVC Remote for heavy datasets and models
- **Reproducibility:** Defined via dvc.yaml for automatic pipeline execution

**Infrastructure:** IAM User & S3 for secure storage, \`dvc stage add\` with dependencies (-d) and outputs (-o).`,
      },
      {
        id: "mlflow-experiment-tracking",
        title: "MLflow | Experiment Tracking",
        youtubeId: ytId("https://youtu.be/GlvgqliaQaA"),
        notes: `Open-source platform for managing the end-to-end ML lifecycle.

**Core Components:**
- **MLflow Tracking:** Logs parameters, metrics, code versions, and artifacts
- **MLflow Projects:** Standard format for packaging reusable data science code
- **MLflow Models:** Convention for packaging models for diverse serving environments
- **Model Registry:** Centralized store for model lineage, versioning, and stage transitions

**MLflow vs DVC:** DVC excels at data versioning/pipelines; MLflow excels at experiment tracking with superior UI for comparing hyperparameters and metrics.

MLflow = "The Flight Recorder for Machine Learning Experiments."

**Also recommended:** "MLOps with MLflow and Databricks — Full Course" by freeCodeCamp — youtu.be/tVskbekONlw`,
      },
      {
        id: "continuous-integration",
        title: "Continuous Integration",
        youtubeId: ytId("https://youtu.be/vEUVeCQ63Ew"),
        notes: `CI = Automation + Frequent Integration + Testing

**Key Properties:**
- **Automated Pipeline:** Triggered on every push/PR for immediate feedback
- **Early Bug Detection:** Catches integration errors early, reducing technical debt
- **Consistent Environment:** Code tested in standardized environments (Docker/Runners), not just "my machine"
- **Improved Velocity:** Less manual intervention and fewer merge conflicts

CI penalizes poor code quality by blocking merges if tests, linting, or security checks fail. CI = "automated peace of mind."`,
      },
      {
        id: "docker-mlops",
        title: "Docker",
        youtubeId: ytId("https://youtu.be/xeVZ6QcUb7Q"),
        notes: `Platform for packaging applications and dependencies into standardized containers.

**Core Components:** Docker Engine (builds/runs containers), Desktop (management UI), Hub (cloud registry), Dockerfile (assembly instructions)

**Key Concepts:**
- **Images vs Containers:** Image = read-only blueprint; Container = runnable instance
- **Port Mapping:** Forward host traffic to container ports
- **Registries:** Docker Hub (standard) or AWS ECR (enterprise)

**Key Properties:** Isolation (no "works on my machine" conflicts), Portability (runs consistently everywhere), Lightweight (shares host OS kernel, faster than VMs).

Docker = "Standardized shipping containers for software."

**Also recommended:** "Complete Docker For Data Science Tutorial" by Krish Naik (183K views) — youtu.be/8vmKtS8W7IQ`,
      },
      {
        id: "project-1-vehicle-insurance",
        title: "Project: Vehicle Insurance Domain",
        youtubeId: ytId("https://youtu.be/0rFNsOx9gUo"),
        notes: `Production-grade ML pipeline from local setup to cloud deployment.

**Pipeline:** Data Source → MongoDB → Validation → Transformation → Model Training → AWS S3/ECR → CI/CD → EC2

**Key Properties:**
- **Domain Specific:** Vehicle Insurance industry for realistic business context
- **Heavy Engineering:** Prioritizes SDLC and OOP over basic data science
- **Production Ready:** Docker + FastAPI on AWS EC2
- **Reusable Template:** Adaptable for Banking, Healthcare, etc.

Bridges "notebook-level" data science and "industry-level" MLOps engineering.`,
      },
      {
        id: "mongodb-setup",
        title: "MongoDB Setup & Notebook Experiment",
        youtubeId: ytId("https://youtu.be/T1U7rniplCE"),
        notes: `Transitioning from project introduction to practical execution with MongoDB and Jupyter Notebooks.

**Key Components:**
- **GitHub Repo Setup:** Structured workspace for code versions and documentation
- **MongoDB Integration:** Primary database for scalable data ingestion
- **Notebook Experimentation:** Prototype entire workflow — ingestion, transformation, training, evaluation
- **Pipeline Foundation:** Bridge from experimental notebook code to production-ready MLOps

MLOps penalizes loose notebook code by requiring modular, version-controlled scripts.`,
      },
      {
        id: "data-ingestion",
        title: "Data Ingestion Component",
        youtubeId: ytId("https://youtu.be/iHE4eRksidQ"),
        notes: `Building the first major pipeline component: pulling data from MongoDB with proper configuration.

**Workflow:** Constant Declaration → MongoDB Connection → Data Access Layer → Entity Configuration → Component Implementation → Pipeline Execution

**Key Properties:**
- **Modular Design:** SRC-based architecture separating constants, configs, entities, components
- **Artifact Versioning:** Timestamped folders for every run ensure traceability
- **Production Security:** Environment variables for credentials, never hardcoded
- **Robust Logging:** Custom exception handling tracks errors across file layers

Missing MONGO_DB_URL causes DNS query exception — requires manual environment setup before pipeline runs.`,
      },
      {
        id: "data-validation-transformation",
        title: "Data Validation & Transformation",
        youtubeId: ytId("https://youtu.be/tSwH1i1bl7A"),
        notes: `Structured pipeline for data integrity and model performance in production.

**Pipeline:** Data Validation → Transformation → Model Training

**Key Properties:**
- **Validation:** Ensures incoming data matches expected schema, columns, and types
- **Transformation:** Feature engineering — dummy variables, scaling (Standard/MinMax)
- **Training:** Automates training, evaluates against benchmarks, saves artifacts

The pipeline validates schemas early to prevent training on corrupted or drift-affected data.`,
      },
      {
        id: "model-eval-aws-s3",
        title: "Model Evaluation & AWS S3",
        youtubeId: ytId("https://youtu.be/g6XRDzCLzA0"),
        notes: `Evaluating model performance and automating deployment of superior models to AWS S3.

**AWS Setup:** IAM user with AdministratorAccess → Access Keys → Environment Variables

**Evaluation Logic:**
- Fetch current best model from S3, calculate F1-score on new test data
- New model "Accepted" only if it exceeds previous by a predefined threshold
- First run: compared against zero baseline, always accepted

**Model Pushing:** Conditional upload — only if ModelEvaluation confirms "Accepted." Updates S3 model registry.

Model Evaluation = "Gatekeeper for Quality Control."`,
      },
      {
        id: "fastapi-ml-app",
        title: "Building ML App with FastAPI",
        youtubeId: ytId("https://youtu.be/hqVeBtp7J_E"),
        notes: `Serving a trained ML model through a web interface using FastAPI.

**Routes:**
- \`/\` — Renders HTML form for user input (Jinja2 templates)
- \`/predict\` — POST: collects form data → DataFrame → model prediction (Yes/No)
- \`/train\` — Triggers entire training pipeline from web UI

**Key Concepts:**
- **CORS:** CORSMiddleware allows cross-origin requests
- **Async/Await:** Handle multiple requests without blocking
- **Static Files:** Mounted CSS directory for styling

FastAPI bridges the ML model and the user with a production-ready inference and retraining interface.

**Also recommended:** "Deploy ML Models with FastAPI, Docker, and Heroku" by AssemblyAI (126K views) — youtu.be/h5wLuVDr0oc`,
      },
      {
        id: "cicd-aws",
        title: "Complete CI/CD on AWS",
        youtubeId: ytId("https://youtu.be/skr08dnWXC8"),
        notes: `Automating deployment from local app to fully automated AWS pipeline.

**Components:** Dockerization (python:3.7-slim-buster) → AWS ECR (private registry) → AWS EC2 (host) → GitHub Actions (CI/CD engine) → S3 (model artifacts)

**Workflow:**
1. Code push to GitHub
2. GitHub Actions builds Docker image → pushes to ECR
3. GitHub Actions triggers EC2 → pulls latest image → restarts container

**Cleanup:** Terminate EC2, delete ECR repos, empty S3 buckets, remove IAM users to avoid AWS costs.`,
      },
      {
        id: "kubernetes-part-1",
        title: "Kubernetes Part 1",
        youtubeId: ytId("https://youtu.be/9LfjL2m8cxM"),
        notes: `Container orchestration platform for automating deployment, scaling, and management.

**Key Properties:**
- **Scalability:** Auto-scales containers based on traffic and resource demand
- **Self-Healing:** Restarts failed containers, replaces unresponsive ones
- **Load Balancing:** Distributes traffic across containers for stability
- **Declarative Config:** Describe desired state ("3 copies of my model"), K8s maintains it
- **Zero-Downtime:** Rolling updates replace old versions gradually

Kubernetes = "Automated Infrastructure Management" — simplifies distributed systems so you focus on models, not servers.

**Also recommended:** "Kubernetes Crash Course for Absolute Beginners" by TechWorld with Nana (3.6M views) — youtu.be/s_o8dwzRlu4`,
      },
      {
        id: "project-2-kubernetes",
        title: "Project: First Kubernetes Deployment",
        youtubeId: ytId("https://youtu.be/PAkvevHCEQU"),
        notes: `Building and deploying a containerized app on Kubernetes.

**Workflow:** Local App → Docker → Minikube → deployment.yaml → service.yaml → LoadBalancer

**Steps:**
1. Build & test Flask app locally
2. Create Dockerfile, build image
3. Set up local K8s cluster with Minikube
4. Deploy with replica count and container image spec
5. Expose via LoadBalancer or NodePort

Self-Healing: If a Pod crashes, K8s automatically spins up new instances to match desired state.`,
      },
      {
        id: "prometheus-grafana",
        title: "Prometheus & Grafana",
        youtubeId: ytId("https://youtu.be/QKYd4A1RDss"),
        notes: `Primary tools for monitoring and observability in MLOps.

**Prometheus:** Open-source monitoring toolkit — collects metrics via pull model, stores in time-series DB.
**Grafana:** Visualization platform — connects to Prometheus for interactive dashboards and real-time graphs.

**Key Properties:**
- **Pull-Based:** Prometheus actively fetches data at defined intervals
- **PromQL:** Specialized query language for metric extraction
- **Alerting:** Define thresholds (e.g., "CPU > 80%") that trigger notifications
- **Observability:** Deep insight into system performance and model drift

Prometheus & Grafana = "The eyes and ears of your infrastructure."

**Also recommended:** "How Prometheus Monitoring Works" by TechWorld with Nana (1.2M views) — youtu.be/h4Sl21AKiDg`,
      },
      {
        id: "project-3-monitoring",
        title: "Project: Prometheus-Grafana on Kubernetes",
        youtubeId: ytId("https://youtu.be/VutZ3E55O0o"),
        notes: `Implementing monitoring and alerting for ML applications within Kubernetes (Minikube).

**Components:** Minikube cluster → Python ML app → Prometheus (scraper) → Grafana (dashboards)

**Workflow:**
1. Initialize K8s cluster with Minikube
2. Deploy app, Prometheus, and Grafana as pods
3. Configure Services for discovery and connectivity
4. Build custom MLOps dashboard tracking app performance and health

Kubernetes Monitoring = "Infrastructure visibility at scale."`,
      },
      {
        id: "capstone-project-1",
        title: "Capstone Project: End-to-End MLOps",
        youtubeId: ytId("https://youtu.be/8T1dx1sP-X0"),
        notes: `Applying all MLOps tools in a real-world cloud scenario — not local/vanilla.

**Key Components:**
- **AWS EKS:** Production-grade Kubernetes orchestration
- **DVC + MLflow:** Data versioning and experiment tracking
- **Prometheus + Grafana:** Professional monitoring and alerting
- **GitHub Actions:** Full CI/CD from commit to deployment

High barrier to entry — requires persistence with EKS and AWS configuration challenges. Success here = "5% Club" of candidates who handle end-to-end MLOps.`,
      },
      {
        id: "mlflow-dagshub",
        title: "Experiment Tracking with MLflow & DagsHub",
        youtubeId: ytId("https://youtu.be/xpyfMLQa6Rk"),
        notes: `Logging parameters, metrics, and artifacts during model development for reproducibility.

**Setup:** Cookiecutter project structure → GitHub repo → MLflow tracking → DagsHub as remote server

**Key Components:**
- **MLflow:** Logs metrics, compares models across experiments
- **DagsHub:** Centralized platform hosting MLflow experiments and DVC data
- **DVC:** Tracks large datasets/weights without cluttering Git
- **Cost Monitoring:** Track AWS costs (especially EKS clusters) to stay within budget

DagsHub + MLflow prevent data loss by recording every experiment automatically.`,
      },
      {
        id: "app-building-automation-dvc",
        title: "App Building & Automation with DVC",
        youtubeId: ytId("https://youtu.be/bLAPFchSH00"),
        notes: `Transitioning from experimental ML to automated pipelines using DVC and modular code.

**Objective:** Single command triggers full pipeline — data ingestion to model evaluation.

**Key Components:**
- **Modular Code:** Move from notebooks to .py scripts for all pipeline stages
- **DVC Pipelines:** dvc.yaml defines stages, dependencies, outputs
- **params.yaml:** Track/modify hyperparameters without changing source code
- **\`dvc repro\`:** Detects changes and only reruns necessary stages

Transforms manual experiments into a robust, automated MLOps system versioning both code and data.`,
      },
      {
        id: "cicd-implementation-capstone",
        title: "CI/CD Implementation (Capstone)",
        youtubeId: ytId("https://youtu.be/ZEV7DNfn-08"),
        notes: `Automating ML model transition from development to production.

**Workflow:** GitHub Actions + Model Serving

**Key Properties:**
- **Continuous Integration:** Automates testing of data vectorization, input shapes, model outputs
- **Model Registry:** MLflow + DVC track experiments and manage versions
- **Automated Deployment:** Pipeline compares new vs production model, promotes "Best Model" automatically

The system archives outdated models as soon as a superior version is validated. CI/CD in MLOps = "Seamless model evolution."`,
      },
      {
        id: "eks-cluster-deployment",
        title: "EKS Cluster Deployment",
        youtubeId: ytId("https://youtu.be/T4UGsVn0D_I"),
        notes: `Deploying a Flask ML application onto Amazon EKS (Elastic Kubernetes Service).

**Process:**
1. Review CI/CD pipeline (GitHub Actions)
2. Optimize requirements.txt with pipreqs
3. Create Dockerfile, test locally
4. Initialize EKS cluster with eksctl
5. Deploy containerized app
6. Validate via LoadBalancer URL (HTTP 200)

**Key Properties:** Auto-scaling K8s nodes based on traffic, CI/CD auto-deploys on code changes, managed K8s reduces operational overhead.`,
      },
      {
        id: "prometheus-grafana-eks",
        title: "Prometheus-Grafana on EKS",
        youtubeId: ytId("https://youtu.be/Mg-wl_8xL7s"),
        notes: `Final capstone piece: monitoring ML application deployed on AWS EKS.

**Infrastructure:**
- **Prometheus Server (EC2 t3.medium):** Port 9090, scrapes /metrics every 15 seconds
- **Grafana Server (EC2 t3.medium):** Port 3000, queries Prometheus for dashboards
- **EKS Cluster:** Running Flask ML app exposing metrics

**Dashboards:** Track total request counts, model prediction counts (positive vs negative sentiment).

**Cleanup:** Terminate EC2 instances, delete EKS cluster/node groups, remove ECR repos and S3 buckets to avoid ongoing costs.`,
      },
    ],
  },
  {
    id: "bonus-lessons",
    title: "Bonus Lessons",
    shortTitle: "Bonus",
    description:
      "Advanced topics — training dynamics, activation functions, and cutting-edge reasoning architectures.",
    lessons: [
      {
        id: "seq-len-vs-batch",
        title: "Train LLM — Sequence Length vs Batch Size",
        youtubeId: ytId("https://youtu.be/bu5dhaLmr7E"),
        notes: `Exploring the trade-offs between batch size and sequence length when training LLMs.

**Experiment Setup:** Ablation study comparing different batch size × sequence length configurations while keeping total tokens constant.

**Key Components:**
- Experiment configuration with ablation matrix
- Hybrid Optimizer (Muon + AdamW)
- Mixed-precision training with GradScaler
- Gradient accumulation for large effective batch sizes`,
      },
      {
        id: "swiglu",
        title: "SwiGLU — Better Neural Networks",
        youtubeId: ytId("https://youtu.be/CXqx5LDOfs4"),
        notes: `SwiGLU activation function — a gated variant of Swish that has become the standard activation in modern LLMs like LLaMA, PaLM, and Mistral. Outperforms ReLU and GELU in practice.`,
      },
      {
        id: "tiny-recursive-model",
        title: "100x AI Reasoning — Tiny Recursive Model",
        youtubeId: ytId("https://youtu.be/51uVH-sEvk0"),
        notes: `**How a 7M parameter model beats 1T models at Sudoku, Mazes, and ARC-AGI.**

**TRM Architecture:** Uses recursive computation with three nested loops:
- **Innermost Loop (latent recursion):** Phase A (reasoning, updating z) + Phase B (refining answer y)
- **Middle Loop (deep recursion):** 2 warm-up rounds without gradients + 1 final with gradients
- **Outermost Loop:** Up to 16 repetitions with adaptive computation time via learned Q head

The key insight: small models can match or beat massive ones through recursive depth instead of parameter count.`,
      },
    ],
  },
];

export const totalLessons = modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0
);
export const totalModules = modules.length;
