import { Cpu } from "lucide-react";
import { DomainPage } from "@/components/DomainPage";
import { gpuTitle, gpuDescription, gpuSubtopics, gpuGeneralResources } from "@/data/gpu";

export default function GpuPage() {
  return (
    <DomainPage
      title={gpuTitle}
      icon={Cpu}
      description={gpuDescription}
      subtopics={gpuSubtopics}
      generalResources={gpuGeneralResources}
    />
  );
}
