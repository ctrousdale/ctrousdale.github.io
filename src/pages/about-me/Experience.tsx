import GlassCard from "@/components/glass-card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <GlassCard className="border border-red-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">Microsoft</CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2022 - 2025</p>
            <p>Full-Stack Software Engineer</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-neutral-50">
          <p>
            Created Billing and Usage tools that dramatically clarified Copilot
            Agent cost information for customers. This gave tenant admins the
            ability to intelligently manage costs for their organization's
            Agents without disrupting employee workflows.
          </p>
          <p>
            Built a complex E2E framework that enabled my entire team to create
            automated diagnostics capable of resolving common customer issues
            with minimal human intervention. These diagnostics were integrated
            into the Microsoft Admin Center for enterprise-wide deployment and
            later expanded to the Windows 11 Get Help App, bringing automated
            troubleshooting directly to user devices.
          </p>
          <p>
            Architected a unified lookup tool that consolidated multiple
            existing solutions into a single interface. This tool, built as a
            complex state machine orchestrating numerous API calls and managing
            intertwined dependencies, dramatically reduced resolution time for
            customer success agents.
          </p>
          <p>
            Completed several
            <a
              href="https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-400 underline hover:text-blue-300"
            >
              Secure Future Initiative
            </a>
            work items, including manually developing an encryption key rotation
            mechanism as described
            <a
              href="https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-400 underline hover:text-blue-300"
            >
              here
            </a>
            .
          </p>
          <p>
            Won the 2023 Amplify Protect Capture The Flag (CTF) competition.
          </p>
        </CardContent>
      </GlassCard>
      <GlassCard className="border border-red-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">OMP</CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2021 - 2022</p>
            <p>Infrastructure Software Engineer</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-neutral-50">
          <p>
            Created a C++ JSON serializer to support an internal REST API. This
            let us send/receive rich types such as
            <span className="p-1 font-mono">std::variant</span>in a performant,
            type-safe manner.
          </p>
          <p>
            Documented an existing API with Doxygen, enabling the team to
            understand and maintain the codebase more effectively. Completion of
            this task saw an increase in adoption of the API by other teams,
            leading to more modern usage patterns.
          </p>
        </CardContent>
      </GlassCard>
      <GlassCard className="border border-red-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">
            University of Florida - Machine Learning and Sensing Lab
          </CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2020 - 2021</p>
            <p>Research Assistant</p>
            <a
              href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12096/1209603/Bag-level-classification-network-for-infrared-target-detection/10.1117/12.2618325.short"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Multi-Sensor Data Fusion for Buried Object Detection
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-neutral-50">
          <p>
            Worked with graduate mentor to develop components of bag-level
            classification to the spec designed by our faculty advisor.
          </p>
          <p>
            Developed several scripts which supported scheduling, early-exit,
            and result saving for ML model training. This autonomous setup
            allowed us to run jobs without physically going to the lab and
            entering the secured environment in the middle of the night or on
            the weekend. The increased GPU pool utilization allowed us to
            complete model training significantly faster than before.
          </p>
        </CardContent>
      </GlassCard>
    </div>
  );
};

export default Experience;
