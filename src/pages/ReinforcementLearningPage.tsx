import { Gamepad2 } from "lucide-react";
import { DomainPage } from "@/components/DomainPage";
import { rlTitle, rlDescription, rlSubtopics, rlResources } from "@/data/reinforcementLearning";

export default function ReinforcementLearningPage() {
  return (
    <DomainPage
      title={rlTitle}
      icon={Gamepad2}
      description={rlDescription}
      subtopics={rlSubtopics}
      generalResources={rlResources}
    />
  );
}
