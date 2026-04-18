import { BarChart3 } from "lucide-react";
import { DomainPage } from "@/components/DomainPage";
import { mlTitle, mlDescription, mlSubtopics, mlGeneralResources } from "@/data/machineLearning";

export default function MachineLearningPage() {
  return (
    <DomainPage
      title={mlTitle}
      icon={BarChart3}
      description={mlDescription}
      subtopics={mlSubtopics}
      generalResources={mlGeneralResources}
    />
  );
}
