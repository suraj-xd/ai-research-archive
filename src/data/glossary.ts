export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedModule?: string;
  category: "fundamentals" | "architecture" | "training" | "deployment" | "research";
}

export const glossaryCategoryLabels: Record<string, string> = {
  fundamentals: "Fundamentals",
  architecture: "Architecture",
  training: "Training",
  deployment: "Deployment",
  research: "Research",
};

export const glossaryTerms: GlossaryTerm[] = [
  // --- Research ---
  {
    term: "Ablation Study",
    definition:
      "An experiment where components of a model are systematically removed or disabled to measure each part's contribution to overall performance.",
    category: "research",
  },
  {
    term: "Activation Function",
    definition:
      "A non-linear function applied to a neuron's output that allows neural networks to learn complex patterns. Common examples include ReLU, sigmoid, and tanh.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Adam Optimizer",
    definition:
      "An adaptive learning rate optimizer that combines momentum and RMSProp. It maintains per-parameter learning rates and is the default choice for most deep learning tasks.",
    relatedModule: "pytorch-fundamentals",
    category: "training",
  },
  {
    term: "Adversarial Examples",
    definition:
      "Inputs deliberately crafted with small perturbations to fool a model into making incorrect predictions, exposing vulnerabilities in learned representations.",
    category: "research",
  },
  {
    term: "API",
    definition:
      "Application Programming Interface — the contract through which software systems communicate. In ML deployment, APIs expose model inference as HTTP endpoints.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Attention",
    definition:
      "A mechanism that lets a model dynamically focus on relevant parts of the input when producing each element of the output, weighting tokens by their contextual importance.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Backpropagation",
    definition:
      "The algorithm used to compute gradients of the loss with respect to every weight by applying the chain rule backward through the network.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Batch Inference",
    definition:
      "Processing multiple inputs together in a single forward pass rather than one at a time, improving throughput and hardware utilization during deployment.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Batch Size",
    definition:
      "The number of training examples processed together in one forward and backward pass. Larger batches give more stable gradients but require more memory.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Benchmark",
    definition:
      "A standardized dataset and evaluation protocol used to compare model performance across different approaches, such as GLUE, ImageNet, or MMLU.",
    category: "research",
  },
  {
    term: "Bias",
    definition:
      "A learnable constant added to a neuron's weighted sum before the activation function. It shifts the activation, allowing the model to fit data that doesn't pass through the origin.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "BLEU Score",
    definition:
      "Bilingual Evaluation Understudy — a metric that evaluates machine-generated text by measuring n-gram overlap with reference translations.",
    category: "research",
  },
  {
    term: "CNN",
    definition:
      "Convolutional Neural Network — an architecture that uses learnable spatial filters to detect local patterns like edges and textures, widely used in computer vision.",
    relatedModule: "neural-network-from-scratch",
    category: "architecture",
  },
  {
    term: "Cross-Entropy",
    definition:
      "A loss function that measures the difference between two probability distributions. It is the standard loss for classification tasks and penalizes confident wrong predictions heavily.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Data Augmentation",
    definition:
      "Techniques that create modified copies of training data (flipping, cropping, noise injection) to increase dataset diversity and reduce overfitting.",
    category: "training",
  },
  {
    term: "Dataset",
    definition:
      "A structured collection of examples used for training, validation, or testing a machine learning model. Each example typically consists of input features and an optional label.",
    category: "fundamentals",
  },
  {
    term: "Decoder",
    definition:
      "The part of a sequence model that generates the output sequence token-by-token, typically using masked self-attention and cross-attention to the encoder.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Distributed Training",
    definition:
      "Splitting model training across multiple GPUs or machines using data parallelism or model parallelism to reduce wall-clock time for large models.",
    relatedModule: "mlops",
    category: "training",
  },
  {
    term: "Docker",
    definition:
      "A containerization platform that packages an application and its dependencies into a portable image, ensuring consistent environments from development to production.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Dropout",
    definition:
      "A regularization technique that randomly sets a fraction of neuron activations to zero during training, forcing the network to learn redundant representations.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Early Stopping",
    definition:
      "A training strategy that halts optimization when validation performance stops improving, preventing the model from overfitting to the training set.",
    category: "training",
  },
  {
    term: "Edge Deployment",
    definition:
      "Running ML models directly on end-user devices (phones, IoT sensors, browsers) rather than in the cloud, reducing latency and bandwidth requirements.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Embedding",
    definition:
      "A dense, low-dimensional vector representation that captures semantic meaning of discrete inputs like words, tokens, or categories.",
    relatedModule: "transformers",
    category: "fundamentals",
  },
  {
    term: "Emergent Abilities",
    definition:
      "Capabilities that appear in large language models only above a certain scale and are not present in smaller models, such as chain-of-thought reasoning.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Encoder",
    definition:
      "The component of a model that processes the full input sequence and produces contextual representations used by downstream layers or a decoder.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Epoch",
    definition:
      "One complete pass through the entire training dataset. Models are typically trained for multiple epochs until convergence.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Feature",
    definition:
      "An individual measurable property of the input data used by the model to make predictions, such as pixel values, word frequencies, or sensor readings.",
    category: "fundamentals",
  },
  {
    term: "Feed-Forward Network",
    definition:
      "A neural network where information flows strictly from input to output with no cycles. In transformers, a two-layer FFN is applied to each token after attention.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Few-Shot Learning",
    definition:
      "The ability of a model to perform a new task given only a handful of examples, typically provided as in-context demonstrations in the prompt.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Fine-Tuning",
    definition:
      "Continuing the training of a pre-trained model on a smaller, task-specific dataset to adapt its learned representations for a particular downstream task.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "GAN",
    definition:
      "Generative Adversarial Network — two networks (generator and discriminator) trained in competition, where the generator learns to produce realistic data that the discriminator cannot distinguish from real samples.",
    category: "architecture",
  },
  {
    term: "GGUF",
    definition:
      "A binary file format for storing quantized LLM weights optimized for fast CPU and GPU inference, commonly used with llama.cpp and local model runners.",
    category: "deployment",
  },
  {
    term: "Gradient",
    definition:
      "The vector of partial derivatives of the loss function with respect to model parameters. It indicates the direction and magnitude of steepest increase in loss.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Gradient Accumulation",
    definition:
      "A technique that sums gradients over multiple mini-batches before updating weights, effectively simulating a larger batch size when GPU memory is limited.",
    category: "training",
  },
  {
    term: "Gradient Descent",
    definition:
      "The core optimization algorithm that iteratively adjusts parameters in the direction opposite to the gradient to minimize the loss function.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "GRU",
    definition:
      "Gated Recurrent Unit — a simplified RNN variant that uses reset and update gates to control information flow, offering similar performance to LSTMs with fewer parameters.",
    category: "architecture",
  },
  {
    term: "Hallucination",
    definition:
      "When a language model generates text that sounds plausible but is factually incorrect or fabricated, not grounded in its training data or provided context.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Hyperparameter",
    definition:
      "A configuration value set before training begins (learning rate, batch size, number of layers) that controls the training process but is not learned from data.",
    category: "fundamentals",
  },
  {
    term: "Inception",
    definition:
      "A CNN architecture that applies multiple filter sizes in parallel within each layer and concatenates the results, capturing patterns at different spatial scales.",
    category: "architecture",
  },
  {
    term: "Kubernetes",
    definition:
      "An open-source container orchestration platform that automates deploying, scaling, and managing containerized ML services across clusters of machines.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "KV Cache",
    definition:
      "Key-Value Cache — a memory optimization for autoregressive transformers that stores previously computed key and value tensors so they are not recomputed at each generation step.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Label",
    definition:
      "The ground-truth answer or target value associated with a training example, used to compute the loss and guide the model's learning.",
    category: "fundamentals",
  },
  {
    term: "Learning Rate",
    definition:
      "A scalar that controls the step size of each parameter update during gradient descent. Too high causes instability; too low causes slow convergence.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "LoRA",
    definition:
      "Low-Rank Adaptation — a parameter-efficient fine-tuning method that freezes the original weights and injects small trainable low-rank matrices into each layer.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "Loss Function",
    definition:
      "A mathematical function that quantifies the difference between a model's predictions and the true labels. Training aims to minimize this value.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "LSTM",
    definition:
      "Long Short-Term Memory — an RNN variant with gated cells that can learn long-range dependencies by selectively remembering or forgetting information over many time steps.",
    category: "architecture",
  },
  {
    term: "Mini-batch",
    definition:
      "A small subset of the training dataset used in one iteration of gradient descent, balancing the noise of single-example updates with the cost of full-batch computation.",
    category: "fundamentals",
  },
  {
    term: "Mixed Precision",
    definition:
      "A training technique that uses 16-bit floats for most computations while keeping a 32-bit master copy of weights, cutting memory usage and speeding up training on modern GPUs.",
    category: "training",
  },
  {
    term: "Mixture of Experts (MoE)",
    definition:
      "An architecture where multiple specialist sub-networks (experts) exist but only a subset is activated per input via a gating network, enabling massive model capacity with lower compute cost.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "MLP",
    definition:
      "Multi-Layer Perceptron — the simplest deep network: stacked fully connected layers with non-linear activations. It forms the feed-forward blocks inside transformers.",
    relatedModule: "neural-network-from-scratch",
    category: "architecture",
  },
  {
    term: "Multi-Head Attention",
    definition:
      "Running multiple attention operations in parallel with different learned projections, then concatenating the results. This allows the model to attend to information from different representation subspaces.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Neuron",
    definition:
      "The basic computational unit of a neural network that computes a weighted sum of its inputs, adds a bias, and applies an activation function.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Normalization",
    definition:
      "Rescaling data or intermediate activations to a standard range (e.g., zero mean, unit variance) to stabilize and accelerate training. Common variants include batch norm and layer norm.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "ONNX",
    definition:
      "Open Neural Network Exchange — an open format for representing ML models that enables interoperability between frameworks like PyTorch, TensorFlow, and inference engines.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Overfitting",
    definition:
      "When a model memorizes the training data (including noise) and performs well on training examples but poorly on unseen data, indicating a failure to generalize.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Perplexity",
    definition:
      "A metric that measures how well a language model predicts a sample, defined as the exponentiated average cross-entropy. Lower perplexity indicates better prediction.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Pre-training",
    definition:
      "The initial phase of training a large model on a broad dataset (e.g., next-token prediction on web text) to learn general representations before task-specific fine-tuning.",
    relatedModule: "llm-from-scratch",
    category: "training",
  },
  {
    term: "QLoRA",
    definition:
      "Quantized LoRA — combines 4-bit quantization of the base model with LoRA adapters, enabling fine-tuning of very large models on a single consumer GPU.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "Quantization",
    definition:
      "Reducing the numerical precision of model weights (e.g., from 32-bit to 4-bit) to shrink model size and speed up inference with minimal accuracy loss.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Regularization",
    definition:
      "Techniques (L1/L2 penalties, dropout, weight decay) that constrain model complexity to prevent overfitting and improve generalization to unseen data.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Residual Connection",
    definition:
      "A skip connection that adds a layer's input directly to its output, enabling gradient flow through very deep networks and making optimization easier.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "RLHF",
    definition:
      "Reinforcement Learning from Human Feedback — a training method that aligns language model outputs with human preferences using a reward model trained on human comparisons.",
    relatedModule: "reinforcement-learning",
    category: "training",
  },
  {
    term: "RNN",
    definition:
      "Recurrent Neural Network — a network that processes sequences by maintaining a hidden state that gets updated at each time step, enabling it to model temporal dependencies.",
    category: "architecture",
  },
  {
    term: "Scaling Laws",
    definition:
      "Empirical power-law relationships showing that model performance improves predictably as compute, data, and parameter count increase, guiding resource allocation decisions.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Self-Attention",
    definition:
      "An attention mechanism where queries, keys, and values all come from the same sequence, allowing each token to attend to every other token in the input.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Serving",
    definition:
      "The infrastructure and process of making a trained model available for real-time or batch predictions in production, handling request routing, batching, and scaling.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Softmax",
    definition:
      "A function that converts a vector of raw scores (logits) into a probability distribution where all values are positive and sum to one.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Tensor",
    definition:
      "A multi-dimensional array that generalizes scalars, vectors, and matrices. Tensors are the fundamental data structure in deep learning frameworks like PyTorch and TensorFlow.",
    relatedModule: "pytorch-fundamentals",
    category: "fundamentals",
  },
  {
    term: "TensorRT",
    definition:
      "NVIDIA's high-performance deep learning inference optimizer and runtime that applies graph optimizations, kernel fusion, and precision calibration for GPU deployment.",
    category: "deployment",
  },
  {
    term: "Tokenizer",
    definition:
      "A component that splits raw text into tokens (subwords, words, or characters) and maps them to integer IDs that a language model can process.",
    relatedModule: "llm-from-scratch",
    category: "deployment",
  },
  {
    term: "Transfer Learning",
    definition:
      "Reusing a model trained on one task (often a large general task) as the starting point for a different but related task, dramatically reducing data and compute requirements.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "Transformer",
    definition:
      "The dominant neural network architecture built on self-attention mechanisms rather than recurrence, enabling parallel processing of sequences and forming the backbone of modern LLMs.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "U-Net",
    definition:
      "An encoder-decoder CNN with skip connections between corresponding layers, originally designed for biomedical image segmentation and now widely used in diffusion models.",
    category: "architecture",
  },
  {
    term: "vLLM",
    definition:
      "A high-throughput LLM serving engine that uses PagedAttention to efficiently manage GPU memory, enabling faster inference and higher concurrency for large language models.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Warm-up",
    definition:
      "A training schedule that starts with a very small learning rate and gradually increases it over the first few hundred or thousand steps to stabilize early optimization.",
    category: "training",
  },
  {
    term: "Weight",
    definition:
      "A learnable parameter in a neural network that scales the input signal at each connection. The collection of all weights defines what the model has learned.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Zero-Shot Learning",
    definition:
      "A model's ability to perform a task it was never explicitly trained on by leveraging general knowledge acquired during pre-training, without any task-specific examples.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },

  // ─── Additional Fundamentals ───

  {
    term: "Accuracy",
    definition:
      "The fraction of predictions a model gets correct. Simple but misleading on imbalanced datasets — a spam detector that always says 'not spam' gets 99% accuracy if 99% of emails are legitimate.",
    category: "fundamentals",
  },
  {
    term: "Bias-Variance Tradeoff",
    definition:
      "The tension between a model that is too simple (high bias, underfitting) and too complex (high variance, overfitting). The sweet spot minimizes total error on unseen data.",
    category: "fundamentals",
  },
  {
    term: "Broadcasting",
    definition:
      "Automatic expansion of tensor dimensions during element-wise operations so that tensors of different shapes can be combined without explicit copying.",
    relatedModule: "pytorch-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Confusion Matrix",
    definition:
      "A table showing true positives, false positives, true negatives, and false negatives for a classifier — the foundation for computing precision, recall, and F1.",
    category: "fundamentals",
  },
  {
    term: "Convolution",
    definition:
      "A mathematical operation that slides a small learnable filter across an input (e.g., an image) to produce a feature map that detects local patterns like edges or textures.",
    relatedModule: "tensorflow-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Cosine Similarity",
    definition:
      "A measure of similarity between two vectors based on the cosine of the angle between them, ranging from -1 (opposite) to 1 (identical direction). Widely used in embeddings and retrieval.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Cross-Validation",
    definition:
      "A technique that splits data into k folds, trains on k-1 folds and validates on the remaining one, rotating through all folds to get a robust performance estimate.",
    category: "fundamentals",
  },
  {
    term: "Curse of Dimensionality",
    definition:
      "The phenomenon where data becomes increasingly sparse as the number of features grows, making distance-based methods unreliable and requiring exponentially more data.",
    category: "fundamentals",
  },
  {
    term: "Dimensionality Reduction",
    definition:
      "Techniques (PCA, t-SNE, UMAP) that project high-dimensional data into fewer dimensions while preserving structure, used for visualization and preprocessing.",
    category: "fundamentals",
  },
  {
    term: "Dot Product",
    definition:
      "The sum of element-wise products of two vectors. Measures how aligned they are — the core operation behind attention scores, similarity, and linear layers.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "F1 Score",
    definition:
      "The harmonic mean of precision and recall, providing a single metric that balances both. Useful when classes are imbalanced and accuracy is misleading.",
    category: "fundamentals",
  },
  {
    term: "Feature Engineering",
    definition:
      "The process of creating, selecting, or transforming input features to improve model performance. Often the highest-leverage activity in classical ML.",
    category: "fundamentals",
  },
  {
    term: "Inference",
    definition:
      "Using a trained model to make predictions on new data. Distinct from training — inference is typically faster and doesn't update weights.",
    category: "fundamentals",
  },
  {
    term: "Kernel / Filter",
    definition:
      "A small matrix of learnable weights used in convolution operations to detect specific patterns. Multiple kernels detect different features like edges, corners, and textures.",
    relatedModule: "tensorflow-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Latent Space",
    definition:
      "A compressed, abstract representation space learned by a model where similar inputs map to nearby points. Used in autoencoders, VAEs, and diffusion models.",
    category: "fundamentals",
  },
  {
    term: "Logits",
    definition:
      "Raw, unnormalized output scores from a model's final layer before applying softmax. Higher logits correspond to higher predicted probabilities.",
    category: "fundamentals",
  },
  {
    term: "Matrix Multiplication",
    definition:
      "The fundamental operation in neural networks — multiplying input matrices by weight matrices. Every linear layer, attention head, and embedding lookup is a matmul.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "One-Hot Encoding",
    definition:
      "Representing a categorical variable as a binary vector with a single 1 and all other positions 0. Used for class labels before softmax and in sparse input representations.",
    category: "fundamentals",
  },
  {
    term: "Padding",
    definition:
      "Adding zeros (or other values) around the border of an input before convolution to control the output spatial dimensions, typically preserving the original size.",
    category: "fundamentals",
  },
  {
    term: "Pooling",
    definition:
      "A downsampling operation (max pooling or average pooling) that reduces spatial dimensions of feature maps while retaining the most important information.",
    relatedModule: "tensorflow-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Precision",
    definition:
      "Of all the positive predictions the model made, how many were actually correct. High precision means few false positives.",
    category: "fundamentals",
  },
  {
    term: "Recall",
    definition:
      "Of all the actual positives in the data, how many did the model correctly identify. High recall means few false negatives.",
    category: "fundamentals",
  },
  {
    term: "Scalar",
    definition:
      "A single number — a zero-dimensional tensor. Loss values, learning rates, and individual weights are all scalars.",
    category: "fundamentals",
  },
  {
    term: "Stride",
    definition:
      "The step size a convolutional filter moves across the input. Stride of 1 moves one pixel at a time; stride of 2 halves the spatial dimensions.",
    category: "fundamentals",
  },
  {
    term: "Temperature",
    definition:
      "A scaling factor applied to logits before softmax that controls output randomness. Low temperature (< 1) makes predictions sharper; high temperature (> 1) makes them more uniform.",
    relatedModule: "llm-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Underfitting",
    definition:
      "When a model is too simple to capture the underlying patterns in the data, performing poorly on both training and test sets.",
    category: "fundamentals",
  },
  {
    term: "Vanishing Gradients",
    definition:
      "A problem in deep networks where gradients become exponentially small as they propagate backward through many layers, causing early layers to stop learning.",
    relatedModule: "neural-network-from-scratch",
    category: "fundamentals",
  },
  {
    term: "Vector",
    definition:
      "An ordered list of numbers — a one-dimensional tensor. In ML, inputs, weights, embeddings, and gradients are all vectors or collections of vectors.",
    relatedModule: "math-fundamentals",
    category: "fundamentals",
  },
  {
    term: "Weight Initialization",
    definition:
      "The strategy for setting initial parameter values before training. Poor initialization (all zeros, too large) can cause vanishing/exploding gradients. Xavier and He initialization are standard.",
    category: "fundamentals",
  },

  // ─── Additional Architecture ───

  {
    term: "Autoencoder",
    definition:
      "A network trained to compress input into a low-dimensional latent representation (encoder) and reconstruct it (decoder). Used for denoising, anomaly detection, and representation learning.",
    category: "architecture",
  },
  {
    term: "Autoregressive Model",
    definition:
      "A model that generates output one token at a time, using all previously generated tokens as context for the next prediction. GPT and all decoder-only LLMs are autoregressive.",
    relatedModule: "llm-from-scratch",
    category: "architecture",
  },
  {
    term: "Batch Normalization",
    definition:
      "Normalizing layer activations across the batch dimension to stabilize and accelerate training. Adds learnable scale and shift parameters after normalization.",
    relatedModule: "tensorflow-fundamentals",
    category: "architecture",
  },
  {
    term: "Beam Search",
    definition:
      "A decoding strategy that maintains the top-k most probable partial sequences at each step, balancing between greedy search and exhaustive search for better output quality.",
    category: "architecture",
  },
  {
    term: "BERT",
    definition:
      "Bidirectional Encoder Representations from Transformers — a pre-trained encoder model that reads text in both directions simultaneously, excelling at understanding tasks like classification and NER.",
    category: "architecture",
  },
  {
    term: "Bottleneck Layer",
    definition:
      "A layer with fewer neurons than surrounding layers that forces the network to compress information, learning a compact representation of the input.",
    category: "architecture",
  },
  {
    term: "Causal Masking",
    definition:
      "A triangular mask applied in self-attention that prevents each position from attending to future positions, enforcing the autoregressive property in decoder models.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Cross-Attention",
    definition:
      "An attention mechanism where queries come from one sequence (e.g., decoder) and keys/values from another (e.g., encoder), enabling the model to align and combine information across sequences.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Depthwise Separable Convolution",
    definition:
      "A factorized convolution that applies a separate filter per input channel followed by a 1x1 pointwise convolution, drastically reducing parameters and compute compared to standard convolution.",
    category: "architecture",
  },
  {
    term: "Diffusion Model",
    definition:
      "A generative model that learns to reverse a gradual noising process — trained to denoise, then generates new data by iteratively removing noise from random noise. Powers Stable Diffusion, DALL-E 3, etc.",
    category: "architecture",
  },
  {
    term: "Flash Attention",
    definition:
      "An IO-aware exact attention algorithm that tiles the computation to minimize memory reads/writes, achieving 2-4x speedups without approximation.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "GPT",
    definition:
      "Generative Pre-trained Transformer — a decoder-only architecture trained with next-token prediction. The foundation of ChatGPT, GPT-4, and most modern LLMs.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Grouped Query Attention (GQA)",
    definition:
      "A variant of multi-head attention where groups of query heads share the same key/value heads, reducing KV cache memory at inference time with minimal quality loss.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Layer Normalization",
    definition:
      "Normalizing activations across the feature dimension (per sample) rather than across the batch. Standard in transformers because it works with variable-length sequences and small batches.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Positional Encoding",
    definition:
      "Information added to token embeddings that encodes each token's position in the sequence. Without it, transformers have no notion of word order since attention is permutation-invariant.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "RMSNorm",
    definition:
      "Root Mean Square Normalization — a simpler, faster alternative to Layer Norm that skips mean-centering and just divides by the RMS of activations. Used in LLaMA, Mistral, and Qwen.",
    relatedModule: "neural-network-from-scratch",
    category: "architecture",
  },
  {
    term: "RoPE",
    definition:
      "Rotary Positional Embedding — encodes position by rotating query and key vectors in 2D subspaces, providing relative position information that generalizes well to longer sequences than seen during training.",
    relatedModule: "transformers",
    category: "architecture",
  },
  {
    term: "Seq2Seq",
    definition:
      "Sequence-to-Sequence — an encoder-decoder framework that maps an input sequence to an output sequence of potentially different length. Used in translation, summarization, and speech-to-text.",
    relatedModule: "tensorflow-fundamentals",
    category: "architecture",
  },
  {
    term: "Speculative Decoding",
    definition:
      "An inference optimization where a smaller draft model generates candidate tokens and a larger model verifies them in parallel, speeding up generation without changing output quality.",
    category: "architecture",
  },
  {
    term: "SwiGLU",
    definition:
      "A gated activation function combining Swish and GLU that has become standard in modern LLMs (LLaMA, PaLM, Mistral). Outperforms ReLU and GELU in practice.",
    relatedModule: "llm-from-scratch",
    category: "architecture",
  },
  {
    term: "Top-k / Top-p Sampling",
    definition:
      "Decoding strategies that restrict token selection: top-k picks from the k most likely tokens; top-p (nucleus) picks from the smallest set whose cumulative probability exceeds p.",
    relatedModule: "llm-from-scratch",
    category: "architecture",
  },
  {
    term: "Variational Autoencoder (VAE)",
    definition:
      "An autoencoder that learns a smooth, continuous latent space by regularizing the encoder to output a probability distribution, enabling generation of new samples by sampling from the latent space.",
    category: "architecture",
  },
  {
    term: "Vision Transformer (ViT)",
    definition:
      "A transformer applied to images by splitting them into fixed-size patches, linearly embedding each patch, and processing them with standard transformer blocks — proving transformers work beyond NLP.",
    category: "architecture",
  },

  // ─── Additional Training ───

  {
    term: "AdamW",
    definition:
      "A corrected version of Adam that decouples weight decay from the adaptive learning rate, providing better regularization. The default optimizer for most LLM training.",
    relatedModule: "neural-network-from-scratch",
    category: "training",
  },
  {
    term: "Catastrophic Forgetting",
    definition:
      "The tendency of a neural network to lose previously learned knowledge when trained on a new task, a key challenge in continual learning and fine-tuning.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "Checkpointing",
    definition:
      "Periodically saving model weights and optimizer state during training so that training can be resumed from a saved point after interruptions or crashes.",
    category: "training",
  },
  {
    term: "Contrastive Learning",
    definition:
      "A self-supervised technique that learns representations by pulling similar examples closer and pushing dissimilar examples apart in embedding space. Powers CLIP, SimCLR, etc.",
    category: "training",
  },
  {
    term: "Convergence",
    definition:
      "The point during training where the loss stabilizes and additional updates no longer meaningfully improve performance. A model that hasn't converged needs more training.",
    category: "training",
  },
  {
    term: "Cosine Annealing",
    definition:
      "A learning rate schedule that decreases the learning rate following a cosine curve from its initial value to near zero, often with periodic warm restarts.",
    category: "training",
  },
  {
    term: "Curriculum Learning",
    definition:
      "A training strategy that presents examples in order of increasing difficulty, mimicking how humans learn. Can improve convergence speed and final performance.",
    category: "training",
  },
  {
    term: "DPO",
    definition:
      "Direct Preference Optimization — an alternative to RLHF that directly optimizes a language model to match human preferences without training a separate reward model, using a simpler classification-style loss.",
    relatedModule: "reinforcement-learning",
    category: "training",
  },
  {
    term: "Gradient Checkpointing",
    definition:
      "A memory optimization that recomputes intermediate activations during the backward pass instead of storing them all, trading compute time for significantly less GPU memory usage.",
    category: "training",
  },
  {
    term: "Gradient Clipping",
    definition:
      "Capping gradient values to a maximum norm during training to prevent exploding gradients that cause unstable updates and loss spikes.",
    category: "training",
  },
  {
    term: "Instruction Tuning",
    definition:
      "Fine-tuning a pre-trained LLM on a dataset of (instruction, response) pairs to make it follow user instructions rather than just completing text.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "Knowledge Distillation",
    definition:
      "Training a smaller student model to mimic the outputs (soft probabilities) of a larger teacher model, compressing knowledge into a more efficient architecture.",
    category: "training",
  },
  {
    term: "Learning Rate Scheduler",
    definition:
      "A rule that adjusts the learning rate during training (e.g., step decay, cosine annealing, warm-up + decay). Proper scheduling is often as important as the optimizer choice.",
    relatedModule: "neural-network-from-scratch",
    category: "training",
  },
  {
    term: "Momentum",
    definition:
      "An optimization technique that accumulates a moving average of past gradients to smooth updates and accelerate convergence, helping escape shallow local minima.",
    category: "training",
  },
  {
    term: "PEFT",
    definition:
      "Parameter-Efficient Fine-Tuning — a family of methods (LoRA, prefix tuning, adapters) that update only a small fraction of model parameters, making fine-tuning of large models feasible on limited hardware.",
    relatedModule: "fine-tuning",
    category: "training",
  },
  {
    term: "PPO",
    definition:
      "Proximal Policy Optimization — a policy gradient RL algorithm that uses clipped objective functions to prevent destructively large updates. The standard algorithm for RLHF in LLMs.",
    relatedModule: "reinforcement-learning",
    category: "training",
  },
  {
    term: "Pruning",
    definition:
      "Removing unnecessary weights or neurons from a trained model to reduce size and inference cost. Can be unstructured (individual weights) or structured (entire channels/heads).",
    category: "training",
  },
  {
    term: "Reward Model",
    definition:
      "A model trained on human preference data to predict which outputs humans would prefer. Used in RLHF to provide reward signals for policy optimization.",
    relatedModule: "reinforcement-learning",
    category: "training",
  },
  {
    term: "Self-Supervised Learning",
    definition:
      "Training on unlabeled data by creating supervision from the data itself (e.g., predicting masked words, next tokens, or rotations). Powers pre-training of LLMs and vision models.",
    category: "training",
  },
  {
    term: "SGD",
    definition:
      "Stochastic Gradient Descent — the simplest optimizer that updates parameters using the gradient of a randomly sampled mini-batch. The foundation all other optimizers build upon.",
    relatedModule: "math-fundamentals",
    category: "training",
  },
  {
    term: "Supervised Learning",
    definition:
      "Training a model on labeled data where each input has a known target output. The model learns to map inputs to outputs by minimizing prediction error.",
    category: "training",
  },
  {
    term: "Unsupervised Learning",
    definition:
      "Learning patterns from data without explicit labels — includes clustering, dimensionality reduction, and density estimation. Discovers hidden structure in the data.",
    category: "training",
  },
  {
    term: "Weight Decay",
    definition:
      "A regularization technique that adds a penalty proportional to the magnitude of weights to the loss, discouraging large weights and reducing overfitting. Equivalent to L2 regularization in SGD.",
    category: "training",
  },

  // ─── Additional Deployment ───

  {
    term: "A/B Testing",
    definition:
      "Deploying two model versions simultaneously to different user segments and comparing metrics to determine which performs better in production.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "CI/CD",
    definition:
      "Continuous Integration / Continuous Deployment — automated pipelines that test, build, and deploy code changes. In MLOps, extends to model training, validation, and serving.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Continuous Batching",
    definition:
      "An inference optimization that dynamically adds new requests to a running batch as slots free up, dramatically improving GPU utilization compared to static batching.",
    category: "deployment",
  },
  {
    term: "Data Drift",
    definition:
      "A shift in the distribution of incoming production data compared to the training data, potentially degrading model performance over time. Requires monitoring and retraining.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Feature Store",
    definition:
      "A centralized repository that stores, manages, and serves pre-computed features for both training and inference, ensuring consistency between offline and online environments.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Latency",
    definition:
      "The time between sending a request and receiving a response. In LLM serving, measured as time-to-first-token (TTFT) and inter-token latency.",
    category: "deployment",
  },
  {
    term: "llama.cpp",
    definition:
      "A C/C++ library for running LLM inference on CPUs and GPUs with aggressive quantization support. Enables running large models on consumer hardware.",
    category: "deployment",
  },
  {
    term: "MLOps",
    definition:
      "Machine Learning Operations — practices for deploying and maintaining ML models in production, bridging the gap between model development and reliable software engineering.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Model Compression",
    definition:
      "Umbrella term for techniques (quantization, pruning, distillation) that reduce model size and inference cost while preserving as much accuracy as possible.",
    category: "deployment",
  },
  {
    term: "Model Drift",
    definition:
      "Gradual degradation of a deployed model's performance as the real world changes. Caused by data drift, concept drift, or upstream data pipeline changes.",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "Model Registry",
    definition:
      "A centralized store for versioning, tracking, and managing trained models through their lifecycle stages (development → staging → production).",
    relatedModule: "mlops",
    category: "deployment",
  },
  {
    term: "PagedAttention",
    definition:
      "A memory management technique used by vLLM that stores KV cache in non-contiguous pages (like OS virtual memory), enabling efficient memory sharing and higher throughput.",
    category: "deployment",
  },
  {
    term: "Prefix Caching",
    definition:
      "Reusing previously computed KV cache entries for shared prompt prefixes across requests, avoiding redundant computation for system prompts or common prefixes.",
    category: "deployment",
  },
  {
    term: "Throughput",
    definition:
      "The number of requests or tokens a serving system can process per second. High throughput is critical for cost-effective deployment at scale.",
    category: "deployment",
  },
  {
    term: "Triton Inference Server",
    definition:
      "NVIDIA's open-source inference serving platform supporting multiple frameworks and model types with dynamic batching, model ensembling, and GPU scheduling.",
    category: "deployment",
  },

  // ─── Additional Research ───

  {
    term: "Agent / Agentic AI",
    definition:
      "An AI system that can autonomously plan, use tools, execute multi-step tasks, and interact with external systems to achieve goals — beyond simple prompt-response interaction.",
    category: "research",
  },
  {
    term: "Alignment",
    definition:
      "The challenge of making AI systems behave in accordance with human values and intentions. Includes techniques like RLHF, constitutional AI, and red teaming.",
    category: "research",
  },
  {
    term: "AUC-ROC",
    definition:
      "Area Under the Receiver Operating Characteristic Curve — a metric measuring a classifier's ability to distinguish between classes across all probability thresholds.",
    category: "research",
  },
  {
    term: "BPE",
    definition:
      "Byte Pair Encoding — a tokenization algorithm that iteratively merges the most frequent character pairs into subword tokens, balancing vocabulary size with representation efficiency.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Chain-of-Thought (CoT)",
    definition:
      "A prompting technique where the model is encouraged to show its reasoning step-by-step before giving a final answer, significantly improving performance on complex reasoning tasks.",
    category: "research",
  },
  {
    term: "Context Window",
    definition:
      "The maximum number of tokens a model can process in a single forward pass. Determines how much text the model can 'see' at once — ranges from 2K to 1M+ tokens in modern LLMs.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Data Contamination",
    definition:
      "When benchmark test data accidentally appears in a model's training set, inflating evaluation scores and giving a misleading picture of true generalization ability.",
    category: "research",
  },
  {
    term: "Distribution Shift",
    definition:
      "When the data a model encounters in production differs from its training distribution, causing degraded performance. A fundamental challenge in real-world ML deployment.",
    category: "research",
  },
  {
    term: "FLOPS",
    definition:
      "Floating Point Operations Per Second — a measure of computational throughput. Used to estimate training cost and compare hardware (e.g., H100 = ~1 petaFLOP for FP16).",
    category: "research",
  },
  {
    term: "Generalization",
    definition:
      "A model's ability to perform well on unseen data that wasn't part of training. The ultimate goal of machine learning — memorizing training data is not learning.",
    category: "research",
  },
  {
    term: "GPTQ",
    definition:
      "A post-training quantization method for LLMs that uses approximate second-order information to minimize quantization error, enabling 3-4 bit models with minimal quality loss.",
    category: "research",
  },
  {
    term: "GRPO",
    definition:
      "Group Relative Policy Optimization — DeepSeek's RL algorithm that replaces the critic model with group-based advantage estimation, simplifying RLHF training while maintaining performance.",
    relatedModule: "reinforcement-learning",
    category: "research",
  },
  {
    term: "In-Context Learning",
    definition:
      "An LLM's ability to learn new tasks from examples provided directly in the prompt, without any weight updates. A key emergent capability of large models.",
    relatedModule: "llm-from-scratch",
    category: "research",
  },
  {
    term: "Interpretability",
    definition:
      "The ability to understand and explain why a model makes specific predictions. Ranges from attention visualization to mechanistic interpretability of individual circuits.",
    category: "research",
  },
  {
    term: "Loss Landscape",
    definition:
      "The surface formed by the loss function over all possible parameter values. Its shape (smooth vs rugged, flat vs sharp minima) determines how easily optimization can find good solutions.",
    category: "research",
  },
  {
    term: "Multimodal",
    definition:
      "Models that process and generate multiple data types (text, images, audio, video) in a unified architecture. Examples: GPT-4V, Gemini, Claude's vision capabilities.",
    category: "research",
  },
  {
    term: "Out-of-Distribution (OOD)",
    definition:
      "Data that falls outside the distribution the model was trained on. OOD detection identifies when a model is being asked to extrapolate rather than interpolate.",
    category: "research",
  },
  {
    term: "Prompt Engineering",
    definition:
      "The practice of crafting input prompts to elicit desired behavior from language models — including system prompts, few-shot examples, chain-of-thought, and structured output formats.",
    category: "research",
  },
  {
    term: "RAG",
    definition:
      "Retrieval-Augmented Generation — a technique that retrieves relevant documents from an external knowledge base and includes them in the prompt, grounding LLM responses in factual sources.",
    category: "research",
  },
  {
    term: "Red Teaming",
    definition:
      "Systematically probing an AI model to discover failure modes, biases, harmful outputs, and security vulnerabilities before deployment.",
    category: "research",
  },
  {
    term: "Reproducibility",
    definition:
      "The ability to replicate an experiment's results given the same code, data, and configuration. A cornerstone of scientific research and trustworthy ML.",
    category: "research",
  },
  {
    term: "ROUGE Score",
    definition:
      "Recall-Oriented Understudy for Gisting Evaluation — a family of metrics comparing generated text to references using n-gram overlap. Standard for evaluating summarization.",
    category: "research",
  },
  {
    term: "SOTA",
    definition:
      "State of the Art — the best performance achieved on a benchmark or task at a given time. 'Achieving SOTA' means beating all previously published results.",
    category: "research",
  },
  {
    term: "Synthetic Data",
    definition:
      "Artificially generated training data created by models, simulations, or rules. Increasingly used to scale training data for LLMs and address data scarcity in specialized domains.",
    category: "research",
  },
  {
    term: "Tool Use / Function Calling",
    definition:
      "An LLM's ability to invoke external tools (calculators, APIs, databases, code execution) by generating structured function calls, extending its capabilities beyond text generation.",
    category: "research",
  },
];
