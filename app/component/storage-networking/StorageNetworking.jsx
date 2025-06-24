"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
export const StorageTab = () => {
    const [activeTab, setActiveTab] = useState("Journey");
    const slide = {
        title: "Storage & Networking ",

        description: `Build agile, scalable, and resilient data and
        connectivity infrastructures for evolving business needs.`,
        buttonText: "Get in touch",
        image: BackgroundImage,
    };
    const navItems = [
        "Journey",
        "Personalization",
        "Forecasting",
        "Security",
        " Case studies",
        "Services",
    ];
    return (
        <>
            <BannerWithRightSec
                heroBg={BackgroundImage}
                title={slide.title}
                title2={slide.title2}
                description={slide.description}
                rightImage={slide.rightImage}
                buttonText={slide.buttonText}
                buttonImage={ButtonImage}
                hoverImage={ButtonImage}
                rightSec={false}
                backgroundMain="!h-[250px] md:!h-[650px]"
                ImageClassname="![object-position:37%_43%]"
                titleOneClass="font-semibold lg:text-[52px] md:text-[40px] text-[21px] mt-2"
                titleTwoClass={`font-semibold lg:text-[52px] md:text-[40px] text-[21px] md:mt-4 md:mb-[5rem]`}
                descriptionClass="hidden md:block mt-4 text-[12px] leading-6 w-[200px] md:w-full"
            />
            <Submenu
                navItems={navItems}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </>
    );
};

export const StorageChallenge= () => {
    const challengesData = [
        {
            title: "Storage modernization",
            description: "Legacy storage systems limit scalability, flexibility, and cost-efficiency",
            solution:
                "Develop SDS architectures for dynamic, scalable, and cost-optimized storage environments",
        },
        {
            title: "Network agility",
            description:
                "Traditional networks lack programmability, scalability, and automation",
            solution:
                "Engineer SDN frameworks to enable agile, automated network management",
        },
        {
            title: "Infrastructure consolidation",
            description:
                "Disparate compute, storage, and networking silos increase operational complexity",
            solution:
                "Integrate hyperconverged infrastructure platforms for simplified, scalable, and unified operations",
        },
        {
            title: "Edge readiness",
            description:
                "Centralized architectures cause latency and limit edge computing capabilities",
            solution:
                "Enable edge computing environments for faster, localized processing and decision-making",
        },
        {
            title: "Disaster resilience",
            description:
                "Systems are vulnerable to outages without robust disaster recovery strategies",
            solution:
                "Implement disaster recovery planning and architectures to ensure business continuity and uptime",
        },
    ];

    return (
        <ChallengeToSolution
            title="Challenge to solution:"
            blackTitle="Boost efficiency and consistency at lower costs"
            challenges={challengesData}
        />
    );
};

export const SoftwareSec = () => {
    return (
        <>
            <InfraSection
                title="Software-defined storage (SDS) development"
                description="Modernize data management with software defined, flexible, and scalable storage solutions."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Detach control from storage hardware",
                    "Build APIs and automation tools",
                    "Link storage across all cloud types",
                ]}
                businessImpact={[
                    "Scale storage on business demand",
                    "Cut costs with hardware freedom",
                    "Faster setup with less manual work",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={false}
                isDivider={true}
            />
        </>
    );
};

export const DefinedSec = () => {
    return (
        <>
            <InfraSection
                title="Software Defined Networking (SDN) controller
                & engineering"
                description="Transform network operations with programmable, automated, and scalable SDN architectures."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Centralize control via SDN layers",
                    "Build APIs to auto-manage traffic",
                    "Connect to edge and cloud stacks",
                ]}
                businessImpact={[
                    "Shift network config on the fly",
                    "Less manual work, fewer errors",
                    "One setup for hybrid networking",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Image"
                imageLeft={true}
                isDivider={true}
            />
        </>
    );
};

export const Hyperconverged = () => {
    return (
        <>
            <InfraSection
                title="Hyperconverged infrastructure (HCI) integration"
                description="Unify compute, storage, and networking into streamlined, scalable operational platforms."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Merge compute, storage, network stacks",
                    "Simplify ops with unified control",
                    "Extend HCI to edge and cloud zones",
                ]}
                businessImpact={[
                    "One system, fewer silos to manage",
                    "Scale infra without rework",
                    "Cut spend on licenses and upkeep",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={false}
                isDivider={false}
            />
        </>
    );
};
export const Gateway = () => {
    return (
        <>
            <InfraSection
                title="Storage gateway engineering"
                description="Enable smooth interoperability across cloud, on-premises, and hybrid storage environments."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Bridge cloud and on-prem storage",
                    "Sync across formats and systems",
                    "Tune speed and lower latency",
                ]}
                businessImpact={[
                    "Hybrid data access with ease",
                    "Better speed for shared storage",
                    "Unified multi-cloud control",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={false}
                isDivider={true}
            />
        </>
    );
};
export const AiSec = () => {
    return (
        <>
            <InfraSection
                title="AI-driven network automation"
                description="Enhance network performance, resilience, and management with AI-enabled automation."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Use AI to spot and fix issues fast",
                    "Auto-scale traffic and capacity",
                    "Build networks that self-heal",
                ]}
                businessImpact={[
                    "Faster fixes with fewer alerts",
                    "Plan growth using AI forecasts",
                    "Fewer tasks for network admins",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={true}
                isDivider={true}
            />
        </>
    );
};
export const NetworkSec = () => {
    return (
        <>
            <InfraSection
                title="Network function virtualization (NFV) services"
                description="Modernize networking with flexible, scalable,
                and software-driven NFV architectures."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Replace devices with VNFs in code",
                    "Automate scaling and provisioning",
                    "Sync NFV with SDN and cloud tools",
                ]}
                businessImpact={[
                    "Launch services without hardware",
                    "Lower costs via software models",
                    "Adapt fast to network load shifts",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={false}
                isDivider={true}
            />
        </>
    );
};
export const EdgeSec = () => {
    return (
        <>
            <InfraSection
                title="Edge computing"
                description="Deploy localized compute, storage, and analytics capabilities for real-time decision-making."
                buttonText="Case Study"
                link="#"
                whatWeDo={[
                    "Run processing close to devices",
                    "Sync edge, cloud, and core layers",
                    "Add controls for edge uptime",
                ]}
                businessImpact={[
                    "Act in real time near the user",
                    "Less data backhaul to core",
                    "Keep ops running at the edge",
                ]}
                imageSrc={cloudInfrIt}
                imageAlt="Infrastructure globe"
                imageLeft={true}
                isDivider={false}
            />
        </>
    );
};
