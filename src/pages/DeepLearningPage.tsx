import { Brain } from "lucide-react";
import { DomainPage } from "@/components/DomainPage";
import { dlTitle, dlDescription, dlSubtopics, dlGeneralResources } from "@/data/deepLearning";

export default function DeepLearningPage() {
  return (
    <DomainPage
      title={dlTitle}
      icon={Brain}
      description={dlDescription}
      subtopics={dlSubtopics}
      generalResources={dlGeneralResources}
    />
  );
}
