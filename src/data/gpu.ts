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

export const gpuTitle = "GPU & CUDA";
export const gpuDescription = "From parallel programming fundamentals to CUDA kernel optimization — everything you need to understand and program GPUs for deep learning.";

export const gpuSubtopics: DomainSubtopic[] = [
  {
    id: "parallel-programming",
    label: "Parallel Programming",
    resources: [
      { title: "Is Parallel Programming Hard, And, If So, What Can You Do About It", url: "https://mirrors.edge.kernel.org/pub/linux/kernel/people/paulmck/perfbook/perfbook.2023.06.11a.pdf", type: "book", author: "Paul E. McKenney" },
      { title: "Intro to Parallel Programming", url: "https://www.youtube.com/playlist?list=PLAwxTw4SYaPnFKojVQrmyOGFCqHTxfdv2", type: "course" },
      { title: "Programming Parallel Computers", url: "https://ppc.cs.aalto.fi/", type: "course", author: "Aalto University" },
      { title: "Python Parallel Computing", url: "https://www.youtube.com/playlist?list=PL30NBs02RsiUbmXVPDo56APsU0xa6gfL2", type: "course" },
      { title: "NHR@FAU - Parallel Programming", url: "https://www.youtube.com/playlist?list=PLxVedhmuwLq2Ie88ODuZufCGorawPO1AP", type: "course" },
      { title: "Parallel Programming", url: "https://leonardoaraujosantos.gitbook.io/opencl", type: "tutorial", author: "Leonardo Araujo Santos" },
    ],
  },
  {
    id: "cuda",
    label: "CUDA",
    resources: [
      { title: "How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance", url: "https://siboehm.com/articles/22/CUDA-MMM", type: "tutorial", author: "siboehm" },
      { title: "CUDA Programming Course — High-Performance Computing with GPUs", url: "https://www.youtube.com/watch?v=86FAWCzIe_4", type: "course", author: "elliotarledge" },
      { title: "GPU(CUDA) MODE", url: "https://www.youtube.com/@GPUMODE", type: "video" },
      { title: "Programming Massively Parallel Processors", url: "https://github.com/h3ct0rjs/HighPerformanceComputing/blob/master/BookRef/Programming%20Massively%20Parallel%20Processors.pdf", type: "book" },
      { title: "CUDA Toolkit Documentation", url: "https://docs.nvidia.com/cuda/", type: "tutorial", author: "NVIDIA" },
      { title: "CUDA C++ Programming Guide", url: "https://docs.nvidia.com/cuda/pdf/CUDA_C_Programming_Guide.pdf", type: "book", author: "NVIDIA" },
      { title: "CUDA Programming for NVIDIA H100s — Comprehensive Course", url: "https://www.youtube.com/watch?v=SqQUQHdYWyc", type: "course" },
    ],
  },
];

export const gpuGeneralResources: DomainResource[] = [
  { title: "GPU Glossary", url: "https://modal.com/gpu-glossary", type: "explainer", author: "Modal" },
  { title: "Making Deep Learning Go Brrrr From First Principles", url: "https://horace.io/brrr_intro.html", type: "explainer", author: "Horace He" },
];
