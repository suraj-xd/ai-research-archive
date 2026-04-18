export interface MiscResource {
  title: string;
  url: string;
  category: "cs" | "engineering" | "physics" | "math" | "philosophy" | "career" | "hardware" | "medical" | "finance" | "other";
}

export const miscCategoryLabels: Record<string, string> = {
  cs: "Computer Science",
  engineering: "Engineering",
  physics: "Physics",
  math: "Mathematics",
  philosophy: "Philosophy",
  career: "Career",
  hardware: "Hardware",
  medical: "Medical",
  finance: "Finance",
  other: "Other",
};

export const miscCategoryColors: Record<string, string> = {
  cs: "text-blue-400 border-blue-400/30",
  engineering: "text-orange-400 border-orange-400/30",
  physics: "text-purple-400 border-purple-400/30",
  math: "text-green-400 border-green-400/30",
  philosophy: "text-amber-400 border-amber-400/30",
  career: "text-cyan-400 border-cyan-400/30",
  hardware: "text-red-400 border-red-400/30",
  medical: "text-rose-400 border-rose-400/30",
  finance: "text-emerald-400 border-emerald-400/30",
  other: "text-text-dim border-border",
};

export const miscResources: MiscResource[] = [
  // Computer Science
  { title: "System Design For Beginners: Everything You Need in One Article", url: "https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b", category: "cs" },
  { title: "Putting the 'You' in CPU", url: "https://cpu.land/", category: "cs" },
  { title: "Building Blocks for Theoretical Computer Science", url: "https://mfleck.cs.illinois.edu/building-blocks/index-sp2020.html", category: "cs" },
  { title: "Compiler Explorer", url: "https://godbolt.org/", category: "cs" },
  { title: "Reversing Bits", url: "https://mohitmishra786.github.io/reversingBits/", category: "cs" },
  { title: "Practices of Reliable Software Design", url: "https://entropicthoughts.com/practices-of-reliable-software-design", category: "cs" },
  { title: "Multithreading in Python", url: "https://medium.com/@ArtificialintelligenceEn/multithreading-in-python-d3631e4e4234", category: "cs" },
  { title: "Creating a Brainrot Language Server in Golang", url: "https://jitesh117.github.io/blog/creating-a-brainrot-language-server-in-golang/", category: "cs" },
  { title: "Andrej Karpathy: Software Is Changing (Again)", url: "https://youtu.be/LCEmiRjPEtQ?si=2SkhuhEtWrk54E_G", category: "cs" },
  { title: "My LLM codegen workflow atm", url: "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/", category: "cs" },
  { title: "How I backup", url: "https://sive.rs/backup", category: "cs" },
  { title: "How Discord Stores Trillions of Messages", url: "https://discord.com/blog/how-discord-stores-trillions-of-messages", category: "cs" },
  { title: "How LedgerStore Supports Trillions of Indexes at Uber", url: "https://www.uber.com/en-CA/blog/how-ledgerstore-supports-trillions-of-indexes/", category: "cs" },
  { title: "How to learn compilers: LLVM Edition", url: "https://lowlevelbits.org/how-to-learn-compilers-llvm-edition/", category: "cs" },
  { title: "TCP Server in Zig — Part 1", url: "https://www.openmymind.net/TCP-Server-In-Zig-Part-1-Single-Threaded/", category: "cs" },
  { title: "How HTTPS Works", url: "https://howhttps.works/", category: "cs" },
  { title: "How Many Computers Are In Your Computer?", url: "https://gwern.net/computers", category: "cs" },

  // Engineering
  { title: "Engineering for Slow Internet", url: "https://brr.fyi/posts/engineering-for-slow-internet", category: "engineering" },
  { title: "How to Build a $20 Billion Semiconductor Fab", url: "https://www.construction-physics.com/p/how-to-build-a-20-billion-semiconductor", category: "engineering" },
  { title: "South Pole Electrical Infrastructure", url: "https://brr.fyi/posts/south-pole-electrical-infrastructure", category: "engineering" },
  { title: "The Insane Engineering of the A-10 Warthog", url: "https://youtu.be/wk6Qr6OO5Xo?si=dst0Xa3Av83rWRd9", category: "engineering" },
  { title: "The Insane Engineering of James Webb Telescope", url: "https://youtu.be/aICaAEXDJQQ?si=P6lDA2XJDQxPAD_V", category: "engineering" },
  { title: "What is Engineering?: Crash Course Engineering #1", url: "https://youtu.be/btGYcizV0iI?si=Ik6-5BC_bKDCnAdZ", category: "engineering" },
  { title: "The Map of Engineering", url: "https://www.youtube.com/watch?v=pQgxiQAMTTo", category: "engineering" },
  { title: "How Hotstar Scaled 25 Million Concurrent Users", url: "https://youtu.be/9b7HNzBB3OQ?si=FKY-PXiNyfK9VOYn", category: "engineering" },
  { title: "The History of Engineering (in exactly 20 minutes)", url: "https://youtu.be/ibaqq-smj5g?si=riNAZHlZ2HEQtYL6", category: "engineering" },

  // Physics
  { title: "Bicycle — Bartosz Ciechanowski", url: "https://ciechanow.ski/bicycle/", category: "physics" },
  { title: "Airfoil — Bartosz Ciechanowski", url: "https://ciechanow.ski/airfoil/", category: "physics" },
  { title: "Why is the Speed of Light So Fast? (Part 1)", url: "https://profmattstrassler.com/2024/10/01/why-is-the-speed-of-light-so-fast-part-1/", category: "physics" },
  { title: "Space Elevator", url: "https://neal.fun/space-elevator/", category: "physics" },

  // Math (fun/non-ML)
  { title: "Proving God exists using Math", url: "https://youtu.be/z0hxb5UVaNE?si=O8wcvKgHUAYOpizA", category: "math" },
  { title: "Animation vs. Math", url: "https://youtu.be/B1J6Ou4q8vE?si=pahj3O0FT3aH9lQT", category: "math" },

  // Philosophy
  { title: "When To Do What You Love", url: "https://paulgraham.com/when.html", category: "philosophy" },
  { title: "Embrace The Chaos of Your Life", url: "https://noghartt.dev/blog/embrace-the-chaos-of-your-life/", category: "philosophy" },
  { title: "lifehacks — Alexey Guzey", url: "https://guzey.com/lifehacks", category: "philosophy" },
  { title: "What Can You Learn from Photographing Your Life?", url: "https://www.newyorker.com/culture/open-questions/what-can-you-learn-from-photographing-your-life", category: "philosophy" },
  { title: "Studying Yourself", url: "https://docs.google.com/document/d/1T-OjfiiiQ82XeMzSDXHy-o1QPCrMr_E0MJ7h8oTOdcU/edit", category: "philosophy" },
  { title: "As a society, we're not death phobic, we're death complacent", url: "https://psyche.co/ideas/as-a-society-were-not-death-phobic-were-death-complacent", category: "philosophy" },
  { title: "Purpose", url: "https://www.stonechat.dev/posts/purpose", category: "philosophy" },

  // Career
  { title: "Advice — Patrick Collison", url: "https://patrickcollison.com/advice", category: "career" },
  { title: "Mistakes I Made When I Started Programming", url: "https://minami.bearblog.dev/my-mistakes-as-a-noob-programmer/", category: "career" },
  { title: "How to learn at college", url: "https://brennancolberg.com/writing/how-to-learn-at-college", category: "career" },
  { title: "The hardest question to answer", url: "https://youtu.be/hQNHb4kNHVE?si=oRiKZrlRJbFkwVrV", category: "career" },
  { title: "THE STAR METHOD", url: "https://www.vawizard.org/wiz-pdf/STAR_Method_Interviews.pdf", category: "career" },

  // Hardware
  { title: "Inside the miracle of modern chip manufacturing", url: "https://ig.ft.com/microchips/", category: "hardware" },
  { title: "How a Car Works", url: "https://www.howacarworks.com/", category: "hardware" },
  { title: "Underactuated Robotics", url: "https://underactuated.csail.mit.edu/index.html", category: "hardware" },
  { title: "How I Built an Electric Car at 16", url: "https://youtu.be/X3_G4lo7YCs?si=TotItaT7uMhPIUQD", category: "hardware" },
  { title: "nand2tetris", url: "https://www.nand2tetris.org/", category: "hardware" },
  { title: "Internal Combustion Engine — Bartosz Ciechanowski", url: "https://ciechanow.ski/internal-combustion-engine/", category: "hardware" },
  { title: "Starship | Fifth Flight Test", url: "https://youtu.be/hI9HQfCAw64?si=OJvUbfwSLzhDQ2mQ", category: "hardware" },
  { title: "How NASA Is Hacking Voyager 1 Back to Life", url: "https://spectrum.ieee.org/voyager-1", category: "hardware" },

  // Medical
  { title: "Neurotechnology Numbers Worth Knowing", url: "https://milan.cvitkovic.net/writing/neurotechnology_numbers_worth_knowing/", category: "medical" },
  { title: "Your Immune System is Not a Muscle", url: "https://rachel.fast.ai/posts/2024-08-13-crowds-vs-friends/", category: "medical" },
  { title: "Addiction Pathways in the Brain", url: "https://www.science.org/content/blog-post/addiction-pathway-brain", category: "medical" },

  // Finance
  { title: "Buy Wisely", url: "https://stephango.com/buy-wisely", category: "finance" },
  { title: "Double-Entry Bookkeeping as a Directed Graph", url: "https://matheusportela.com/double-entry-bookkeeping-as-a-directed-graph", category: "finance" },
  { title: "Eventually consistent plain text accounting", url: "https://tylercipriani.com/blog/2024/10/24/plain-text-accounting/", category: "finance" },
  { title: "Naval on Wealth", url: "https://x.com/naval/status/1002103360646823936", category: "finance" },

  // Other
  { title: "Why do I let myself sabotage my own best-laid plans?", url: "https://aeon.co/essays/why-do-i-let-myself-sabotage-my-own-best-laid-plans", category: "other" },
  { title: "A from-scratch tour of Bitcoin in Python", url: "https://karpathy.github.io/2021/06/21/blockchain/", category: "other" },
  { title: "You can think like an animal by silencing your chattering brain", url: "https://psyche.co/ideas/you-can-think-like-an-animal-by-silencing-your-chattering-brain", category: "other" },
  { title: "The Deep Sea", url: "https://neal.fun/deep-sea/", category: "other" },
];
