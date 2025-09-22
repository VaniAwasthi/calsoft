import Image from "next/image";
import aws from "@/app/assets/infra/aws.webp";
import azure from "@/app/assets/infra/azure.webp";
import icon from "@/app/assets/infra/icon.webp";
import prometheus from "@/app/assets/infra/prometheus.webp";
import newrelic from "@/app/assets/infra/newrelic.webp";
import grafana from "@/app/assets/infra/grafana.webp";
import datadog from "@/app/assets/infra/dataDog.webp";
import pagerduty from "@/app/assets/infra/pagerDuty.webp";
import opsgenie from "@/app/assets/infra/opsgenie.webp";
import jiraops from "@/app/assets/infra/jiraOps.webp";
import gitlab from "@/app/assets/infra/gitLab.webp";
import jenkins from "@/app/assets/infra/jenkins.webp";
import terraform from "@/app/assets/infra/terraForm.webp";
import ansible from "@/app/assets/infra/ansible.webp";
import spinnaker from "@/app/assets/infra/spinnaker.webp";
import slack from "@/app/assets/infra/slack.webp";
import teams from "@/app/assets/infra/microsoftTeams.webp";
import elastic from "@/app/assets/infra/elastic.webp";
import fluentd from "@/app/assets/infra/fluentd.webp";
import opentelemetry from "@/app/assets/infra/openTelemetry.webp";
import jaeger from "@/app/assets/infra/jaeger.webp";
import grafanaloki from "@/app/assets/infra/grafanaLoki.webp";
import googleCloud from "@/app/assets/infra/googleCloud.webp";
import Kubernetes from "@/app/assets/infra/kubernetes.webp";
import circleCI from "@/app/assets/infra/circleCI.webp";
import argo from "@/app/assets/infra/argo.webp";

import UseCases from "../../assets/infra/UseCases.webp";

export default function IntegratedToolchain({
  id="integrated-toolchain",
  sections=[
    {
      title: "Cloud Platforms:",
      tools: [aws, googleCloud, azure, Kubernetes],
      border: "border-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)]",
    },
    {
      title: "Monitoring:",
      tools: [prometheus, newrelic, grafana, datadog],
      border: "border-gray-300",
    },
    {
      title: "Incident Management:",
      tools: [pagerduty, opsgenie, jiraops],
      border: "border-gray-300",
    },
    {
      title: "CI/CD:",
      tools: [circleCI, gitlab, icon, jenkins],
      border: "border-red-500",
    },
    {
      title: "Automation:",
      tools: [terraform, argo, ansible, spinnaker],
      border: "border-blue-500",
    },
    {
      title: "Collaboration:",
      tools: [slack, teams],
      border: "border-red-500",
    },
    {
      title: "Logging & Tracing:",
      tools: [elastic, fluentd, opentelemetry, jaeger, grafanaloki],
      border: "border-blue-500",
    },
  ]}) {
  
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-3 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent leading-20">
            Integrated Toolchain
          </h2>
          <p className="text-xl font-semibold text-black">
            We align SRE with your cloud and DevOps pipelines
          </p>
          <p className="mt-2 text-black">
            Our SRE practice integrates seamlessly with:
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {sections.map((section, idx) => (
              <div key={idx} 
              className={`flex flex-col relative ${idx === sections.length - 1 ? "col-span-2" : ""
                }`}>
                {/* Title ABOVE the border */}
                <span className="mb-1 text-sm font-semibold text-black">
                  {section.title}
                </span>

                {/* Equal-sized bordered box */}
                <div className="bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] p-0.5 rounded-lg">
                <div
                  className={`rounded-lg p-3 shadow-sm flex flex-wrap gap-2 items-center border ${section.border} min-h-[80px] bg-white`}
                >
                  {section.tools.map((tool, tIdx) => (
                    <Image
                      key={tIdx}
                      src={tool}
                      alt="tool"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={UseCases}
              alt="Integrated Toolchain"
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
