import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ResourcesPage from "@/pages/ResourcesPage";
import CommunityPage from "@/pages/CommunityPage";
import StudyWithMePage from "@/pages/StudyWithMePage";
import ArticlesPage from "@/pages/ArticlesPage";
import RoadmapPage from "@/pages/RoadmapPage";
import ToolsPage from "@/pages/ToolsPage";
import ClaudeCodePage from "@/pages/ClaudeCodePage";
import SystemDesignPage from "@/pages/SystemDesignPage";
import HardwarePage from "@/pages/HardwarePage";
import ChallengesPage from "@/pages/ChallengesPage";
import GlossaryPage from "@/pages/GlossaryPage";
import NewslettersPage from "@/pages/NewslettersPage";
import TracksPage from "@/pages/TracksPage";
import GuidesPage from "@/pages/GuidesPage";
import PapersPage from "@/pages/PapersPage";
import InterviewsPage from "@/pages/InterviewsPage";
import JobsPage from "@/pages/JobsPage";
import DeepLearningPage from "@/pages/DeepLearningPage";
import MachineLearningPage from "@/pages/MachineLearningPage";
import ReinforcementLearningPage from "@/pages/ReinforcementLearningPage";
import GpuPage from "@/pages/GpuPage";
import BlogsPage from "@/pages/BlogsPage";
import MiscPage from "@/pages/MiscPage";
import NewbiesPage from "@/pages/NewbiesPage";
import LandingPage from "@/pages/LandingPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="overview" element={<HomePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="study-with-me" element={<StudyWithMePage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="claude-code" element={<ClaudeCodePage />} />
          <Route path="system-design" element={<SystemDesignPage />} />
          <Route path="hardware" element={<HardwarePage />} />
          <Route path="challenges" element={<ChallengesPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="newsletters" element={<NewslettersPage />} />
          <Route path="tracks" element={<TracksPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="papers" element={<PapersPage />} />
          <Route path="interviews" element={<InterviewsPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="deep-learning" element={<DeepLearningPage />} />
          <Route path="machine-learning" element={<MachineLearningPage />} />
          <Route path="reinforcement-learning" element={<ReinforcementLearningPage />} />
          <Route path="gpu" element={<GpuPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="misc" element={<MiscPage />} />
          <Route path="newbies" element={<NewbiesPage />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
