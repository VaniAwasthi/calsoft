"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/testing/HeroSection";
import WhyItMatters, {
  Migration,
} from "@/app/component/VirtualizationSolutions/WhyItMatters";
import IntelligentPlanning from "@/app/component/testing/IntelligentPlanning";
import UseCases from "@/app/component/sustenance/UseCases";
import WhyCalsoft from "@/app/component/infra/WhyCalsoft";
import img from "@/app/assets/sustenance/bookMeeting.webp";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";
import RealWorldImpact from "@/app/component/sustenance/RealWorldImpact";
import BookMeeting from "@/app/component/utilities/BookMeeting";
import Img from "@/app/assets/DigitalEngineering/virtualisation/Virtualization_Banner_5.webp";
import Agility from "@/app/component/infra/Agility";
import HowToStart from "@/app/component/VirtualizationSolutions/HowToStart";
import WhereItFits from "@/app/component/VirtualizationSolutions/WhereItFitsMiddle";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

export default function Page() {
  const [activeTab, setActiveTab] = useState("pulse-check");
  const navItems = [
    "Pulse Check",
    "Discovery & Planning",
    "Automated Execution",
    "Optimization-First",
    "Real-World Impact",
    "Where It Fits",
    "How to Start",
  ];
  return (
    <>
      <HeroSection
        title="Migrate Smarter. Not Just Faster."
        description="Seamless, policy-driven migration across platforms— without business disruption."
        buttonText="Book Discovery Call"
        heroImage={Img}
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        buttonClicked={()=>showHubSpotForm("book-discovery-call")}
        buttonText2=""
      />
      <WhyItMatters
        id="pulse-check"
        title="Pulse Check"
        heading="What’s broken in your current docs?"
        desc=" Outdated, fragmented, or siloed documentation is one of the top causes of productivity loss and onboarding delays. Most teams face:"
        buttonText="Get in Touch"
        data={[
          {
            top: 5,
            text: "Over-provisioned legacy workloads inflating cloud costs",
          },
          {
            top: 10,
            text: "Lack of dependency mapping → unexpected downtime",
          },
          {
            top: 15,
            text: "Unclear rollback plans and risk mitigation",
          },
          {
            top: 20,
            text: "Minimal visibility into post-migration performance",
          },
          {
            top: 25,
            text: "Manual lift-and-shift without optimization",
          },
        ]}
        buttonClick={()=>showHubSpotForm(("get-in-touch"))}
        Component={Migration}
      />
      <IntelligentPlanning
        heading="No guesswork. Just clarity."
        description="Calsoft begins with a dependency-aware migration roadmap — tailored to workload types, runtime patterns, and business criticality."
        data={[
          {
            title: null,
            subTitle: "Infra & app inventory assessment",
          },
          {
            title: null,
            subTitle: "Application dependency mapping",
          },
          {
            title: null,
            subTitle:
              "Risk classification (compliance, uptime, latency, data residency)",
          },
          {
            title: null,
            subTitle:
              "Workload grouping (by tech stack, complexity, criticality)",
          },
          {
            title: null,
            subTitle: "Target platform strategy (cloud, container, hypervisor)",
          },
          {
            title: null,
            subTitle: "TCO modeling and license rationalization",
          },
          // {
          //   title:
          //     "Markdown/AsciiDoc/Confluence/JIRA/Notion-compatible formats",
          //   subTitle: null,
          // },
        ]}
        buttonText="Request PoC"
        buttonClick={()=>showHubSpotForm("request-a-poc")}
        id="discovery-&-planning"
        title="Discovery & Planning"
        bottomContent={null}
        arrow={true}
      />
      <RealWorldImpact
        title="Runbook-driven, tool-powered, low-touch migration"
        desc="We use purpose-fit automation to move workloads with minimal disruption:"
        id="Automated Execution"
        heading="Automated Execution"
        buttonText=""
        cardData={[
          {
            title: null,
            desc: " Agentless discovery and migration tools (CloudEndure, Velostrata, Azure Migrate, etc.)",
          },
          {
            title: null,
            desc: "OS/Hypervisor-agnostic compatibility validation",
          },
          {
            title: null,
            desc: "Storage migration with block-level sync",
          },
          {
            title: null,
            desc: " Pre/post-migration performance benchmarking",
          },
          {
            title: null,
            desc: "Rollback and fallback plans built into execution",
          },
          {
            title: null,
            desc: "Downtime-aware cutovers with validation playbooks",
          },
        ]}
        bottomContent={null}
        arrow={true}
      />
      <div className="container">
        <BookMeeting title="Reduce infra migration efforts by 50%." img={img} />
      </div>

      <UseCases
        id="optimization-first"
        title="Optimization-First"
        data={[
          {
            title: null,
            subTitle: "VM rightsizing (CPU/mem/disk)",
            svg: (
              <svg
                width="54"
                height="64"
                viewBox="0 0 54 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 56C16.46 56 24 55.16 24 52V47.53C20.91 49.7 15.02 50 12 50C8.97998 50 3.09003 49.7 0 47.53V52C0 55.16 7.53998 56 12 56ZM11 52C11.55 52 12 52.45 12 53C12 53.55 11.55 54 11 54C10.45 54 10 53.55 10 53C10 52.45 10.45 52 11 52ZM7 52C7.54999 52 8 52.45 8 53C8 53.55 7.54999 54 7 54C6.45001 54 6 53.55 6 53C6 52.45 6.45001 52 7 52ZM52 54H32V52H52V54ZM52 56H23.23C22.88 56.19 22.52 56.36 22.13 56.52C18.92 57.8 14.49 58 12 58C8.97998 58 3.09003 57.7 0 55.53V60C0 63.16 7.53998 64 12 64C16.46 64 24 63.16 24 60V58H30V62C30 63.1 30.9 64 32 64H52C53.1 64 54 63.1 54 62V58C54 56.9 53.1 56 52 56ZM7 62C6.45001 62 6 61.55 6 61C6 60.45 6.45001 60 7 60C7.54999 60 8 60.45 8 61C8 61.55 7.54999 62 7 62ZM11 62C10.45 62 10 61.55 10 61C10 60.45 10.45 60 11 60C11.55 60 12 60.45 12 61C12 61.55 11.55 62 11 62ZM35 61C34.45 61 34 60.55 34 60C34 59.45 34.45 59 35 59C35.55 59 36 59.45 36 60C36 60.55 35.55 61 35 61ZM39 61C38.45 61 38 60.55 38 60C38 59.45 38.45 59 39 59C39.55 59 40 59.45 40 60C40 60.55 39.55 61 39 61ZM52 42H40.5147L36.9433 37H41C47.07 37 52 32.07 52 26C52 21.06 48.68 16.74 43.99 15.41C44 15.28 44 15.14 44 15C44 6.72998 37.27 0 29 0C24.5 0 20.34 1.95996 17.48 5.39001C16.69 5.13 15.85 5 15 5C10.59 5 7 8.58997 7 13C7 13.36 7.02002 13.71 7.07001 14.05C2.81 15.97 0 20.27 0 25C0 31.62 5.38 37 12 37H15.0567L12.9005 40.0186C12.5971 40.0115 12.2813 40 12 40C7.53998 40 0 40.84 0 44C0 47.16 7.53998 48 12 48C16.46 48 24 47.16 24 44C24 41.98 20.92 40.91 17.54 40.4L15.27 43.58C14.9642 44.0145 14.3458 44.1464 13.88 43.81C13.43 43.49 13.33 42.87 13.65 42.42L22.82 29.58C23.14 29.13 23.76 29.03 24.21 29.35C24.66 29.67 24.76 30.29 24.44 30.74L19.97 37H34.4853L38.0567 42H32C30.9 42 30 42.9 30 44V48C30 49.1 30.9 50 32 50H52C53.1 50 54 49.1 54 48V44C54 42.9 53.1 42 52 42ZM35 47C34.45 47 34 46.55 34 46C34 45.45 34.45 45 35 45C35.55 45 36 45.45 36 46C36 46.55 35.55 47 35 47ZM39 47C38.45 47 38 46.55 38 46C38 45.45 38.45 45 39 45C39.55 45 40 45.45 40 46C40 46.55 39.55 47 39 47Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
          {
            title: null,
            subTitle: "Auto-scaling setup for cloud targets",
            svg: (
              <svg
                width="64"
                height="62"
                viewBox="0 0 64 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clipRule="evenodd"
                  d="M26.626 7.54356C27.0679 7.61589 27.5477 7.61589 27.9896 7.54356V17.8222H26.626V7.54356ZM35.6564 9.91493C35.6564 9.49386 35.8231 9.11158 36.0958 8.83773C36.366 8.56133 36.7398 8.38825 37.1489 8.38825H44.3459C44.2752 7.93619 44.2752 7.44536 44.3459 6.99329H37.1463C35.573 6.99329 34.2927 8.30816 34.2927 9.91236V17.8196H35.6564L35.6564 9.91493ZM9.49214 19.4675C9.05023 19.5398 8.57042 19.5398 8.1285 19.4675C8.23708 20.8908 7.68658 23.9752 8.96689 24.9981C9.48205 25.5251 10.1992 25.8558 10.9846 25.8558H20.7041V24.4608H10.9846C8.75227 24.3911 9.67147 21.1646 9.49214 19.4675ZM50.8457 21.1414H41.558C41.6388 21.5366 41.6161 22.1256 41.6186 22.5363H50.8456C50.7749 22.0817 50.775 21.5934 50.8457 21.1414ZM17.1915 51.3828C15.6385 51.3466 14.3885 50.0421 14.3885 48.4482V46.1466C8.32037 43.7984 3.8835 41.0292 0.701606 36.2138C3.34299 48.727 12.9741 58.5791 25.209 61.2838C21.7368 58.9434 19.353 55.7634 17.1916 51.3821L17.1915 51.3828ZM14.386 44.6692C13.732 39.9058 12.4542 34.9844 12.5931 29.9605H0C0.194443 32.9235 1.61364 35.7159 3.97219 38.1673C6.49488 40.7892 10.0782 43.0211 14.386 44.6692ZM31.3175 38.8001V29.9605H13.9567C14.0022 33.4349 14.3153 36.6846 14.9492 39.9964C15.4845 39.2628 16.3103 38.803 17.2547 38.8004L31.3175 38.8001ZM35.3251 54.3586C35.7796 55.1078 36.8907 55.33 37.5599 54.7255L47.6938 46.2912C48.4337 45.7151 48.4337 44.47 47.6938 43.8965L37.5599 35.4596C36.8907 34.8552 35.7796 35.0799 35.3251 35.8265C34.916 36.2992 35.1609 38.8979 35.1003 39.4972C35.1003 39.8821 34.7948 40.1947 34.4185 40.1947H17.2543C16.4285 40.1973 15.7467 40.887 15.7467 41.7343V48.4478C15.7467 49.2925 16.4285 49.99 17.2543 49.99H34.4185C34.7947 49.99 35.1003 50.3026 35.1003 50.6875C35.1609 51.2816 34.916 53.873 35.3251 54.3586ZM31.3175 61.9974V51.3854H18.7115C21.5297 56.8205 25.5142 61.4756 31.3175 61.9974ZM46.2747 49.2646L38.4189 55.8053C36.6563 57.394 33.6512 55.9267 33.7396 53.5295V51.3854H32.6815V62C39.2069 61.3955 43.5298 55.5471 46.2747 49.2646ZM50.0424 29.9605H32.6816V38.8001H33.7397V36.6561C33.6513 34.2588 36.6563 32.7915 38.419 34.3803L48.4469 42.7292C49.4772 38.6064 49.9898 34.3412 50.0429 29.9601L50.0424 29.9605ZM49.3934 46.2299C49.3757 46.2712 49.358 46.3126 49.3404 46.3539C49.1484 46.7801 48.8252 47.1599 48.4414 47.4595C46.1434 53.5999 43.4389 58.0741 38.7949 61.2821C51.0272 58.5801 60.6557 48.7279 63.2997 36.2174C60.0724 41.0919 55.5574 43.8869 49.3934 46.2299ZM63.9996 29.9605H51.4065C51.3534 34.7834 50.7146 39.681 49.4746 44.1812C49.5252 44.3413 49.563 44.5067 49.5832 44.6772C56.6413 41.8692 63.2393 37.4207 63.9996 29.9605ZM55.1889 24.9387C59.1536 24.918 59.1536 18.7544 55.1889 18.7364C51.2218 18.7545 51.2243 24.9206 55.1889 24.9387ZM40.2569 21.8388C40.2594 20.3948 39.1029 19.2195 37.6938 19.2169H24.6282C23.9413 19.2169 23.3125 19.4985 22.8529 19.9505C22.3706 20.4336 22.065 21.0975 22.0676 21.8389V28.5683H40.2571L40.2569 21.8388ZM27.3076 6.2023C31.2723 6.18164 31.2723 0.0180536 27.3076 0C23.343 0.0180827 23.343 6.18425 27.3076 6.2023ZM10.9541 12.8306C8.06262 9.9761 3.86818 14.3391 6.69904 17.253C9.52983 20.0455 13.7293 15.6824 10.9541 12.8306ZM50.8305 9.88312C53.6032 6.95374 49.4037 2.663 46.5426 5.49682C43.7699 8.4262 47.9694 12.7196 50.8305 9.88312Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
          {
            title: null,
            subTitle: "OS patching and security hardening",
            svg: (
              <svg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.3036 23.6518C43.3018 23.6518 41.6741 22.0241 41.6741 20.0223C41.6741 19.4402 41.2026 18.9688 40.6205 18.9688H18.3773C17.7952 18.9688 17.3237 19.4402 17.3237 20.0223C17.3237 22.0241 15.6959 23.6518 13.6942 23.6518C13.1121 23.6518 12.6406 24.1233 12.6406 24.7054V29.7046C12.6406 33.7951 13.6758 37.6908 15.5168 41.1256C15.6117 41.1177 15.7038 41.0966 15.8013 41.0966H22.6493C23.2314 41.0966 23.7029 40.6252 23.7029 40.0431V34.7752C23.7029 31.87 26.0655 29.5074 28.9707 29.5074C32.4554 29.5074 35.2921 32.3441 35.2921 35.8288V38.9895H37.926C40.0674 38.9895 41.9901 39.9114 43.3387 41.3732C45.2641 37.8806 46.3545 33.8954 46.3545 29.7048V24.7056C46.3545 24.1235 45.8831 23.652 45.301 23.652L45.3036 23.6518Z"
                  fill="#2E3092"
                />
                <path
                  d="M37.9286 41.0837H33.1876V35.8158C33.1876 33.4927 31.2964 31.6016 28.9733 31.6016C27.2297 31.6016 25.8126 33.0186 25.8126 34.7623V40.0301C25.8126 41.7737 24.3955 43.1908 22.6519 43.1908H14.75V56.8868H21.685C22.4989 56.8868 23.3128 57.0791 24.0424 57.4426L25.5859 58.2143C26.6052 58.7226 27.7457 58.9939 28.8835 58.9939H37.9256C40.8308 58.9939 43.1935 56.6313 43.1935 53.7261V46.3508C43.1935 43.4456 40.8308 41.0829 37.9256 41.0829L37.9286 41.0837Z"
                  fill="#2E3092"
                />
                <path
                  d="M29.4993 8.42846C31.9778 8.42846 34.3483 8.8815 36.561 9.67171L39.8086 1.86217C36.5979 0.661134 33.1237 0 29.4995 0C25.8753 0 22.4014 0.661114 19.1904 1.86217L22.438 9.67171C24.6505 8.88152 27.0179 8.42846 29.4993 8.42846Z"
                  fill="#2E3092"
                />
                <path
                  d="M8.42846 29.4969C8.42846 27.0183 8.8815 24.6478 9.67171 22.4351L1.86217 19.1875C0.661134 22.3982 0 25.8724 0 29.4966C0 33.4054 0.753309 37.2037 2.23882 40.7854C2.40739 41.1911 2.79984 41.4334 3.21336 41.4334C3.34769 41.4334 3.48465 41.4071 3.61635 41.3544L9.41363 38.9549C9.62961 38.8758 9.81925 38.7257 9.94568 38.5229C10.1459 38.2042 10.1564 37.8065 9.98782 37.4825C8.95267 34.9329 8.42592 32.2463 8.42592 29.499L8.42846 29.4969Z"
                  fill="#2E3092"
                />
                <path
                  d="M20.4923 10.4838L17.2473 2.67969C10.8153 5.62967 5.62405 10.821 2.67676 17.253L10.4809 20.4979C12.5643 16.1151 16.1122 12.567 20.4954 10.4835L20.4923 10.4838Z"
                  fill="#2E3092"
                />
                <path
                  d="M57.1383 19.1875L49.3287 22.4351C50.1189 24.6476 50.572 27.0155 50.572 29.4969C50.572 32.2941 50.0347 35.0044 48.9785 37.5539C48.8705 37.812 48.8705 38.1017 48.9785 38.3599C49.0864 38.618 49.2893 38.8234 49.5474 38.9314L55.3841 41.3547C55.6422 41.4626 55.932 41.4626 56.1901 41.3547C56.4482 41.2493 56.6536 41.0438 56.7616 40.7857C58.2472 37.2036 59.0005 33.4057 59.0005 29.4969C59.0005 25.8726 58.3393 22.3984 57.1383 19.1875Z"
                  fill="#2E3092"
                />
                <path
                  d="M41.7528 2.67969L38.5078 10.4838C42.8906 12.5699 46.4387 16.1152 48.5223 20.4983L56.3264 17.2533C53.3764 10.8212 48.1851 5.63001 41.7558 2.68002L41.7528 2.67969Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
          {
            title: null,
            subTitle: "Policy-as-code integration",
            svg: (
              <svg
                width="87"
                height="41"
                viewBox="0 0 87 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.4754 9.63905L30.1797 14.3586L34.9952 19.0781L41.8767 12.0967L36.9613 7.28125L31.8501 7.87263C31.0667 8.06848 30.4754 8.65596 30.4754 9.63905Z"
                  fill="#2E3092"
                />
                <path
                  d="M49.9411 20.2602L54.0692 16.3279L53.8734 11.4125C53.8734 10.5293 53.282 9.83802 52.3988 9.74207L47.3835 9.05469L43.1556 13.1828L36.178 20.36L31.6543 24.7838L35.5866 25.4712C37.257 25.7669 38.34 27.1417 38.34 28.8121V31.9571L42.8637 27.5333L49.9411 20.2602Z"
                  fill="#2E3092"
                />
                <path
                  d="M55.5438 11.4098L55.6436 14.7506L57.6098 12.8844C61.1504 9.44363 66.4574 8.85221 70.6856 11.0181L76.4842 11.118C77.3674 11.118 78.0587 10.5266 78.2545 9.74323L79.1377 5.0237C71.0773 -1.95769 58.5935 -1.66198 50.8243 5.90693L48.958 7.67725L52.6945 8.16878C54.2651 8.36079 55.4479 9.63946 55.5438 11.4098Z"
                  fill="#2E3092"
                />
                <path
                  d="M9.73546 10.9165L15.4381 11.0163C17.1085 10.1331 18.9787 9.64161 20.845 9.64161C23.6943 9.64161 26.4477 10.7246 28.6097 12.7867L28.7095 12.8865L28.9053 9.54562C29.0052 7.87518 30.1841 6.5964 31.8546 6.40058L35.591 6.00888L35.4912 5.90904C27.8224 -1.56388 15.6341 -1.95553 7.47363 4.82609L8.16102 9.54562C8.16102 10.3252 8.84836 10.9165 9.73546 10.9165Z"
                  fill="#2E3092"
                />
                <path
                  d="M35.2959 26.9496L30.2807 26.0625L28.6102 27.7329C24.8738 31.3695 19.1712 31.8611 14.9475 29.2075L14.6518 32.3526C14.552 34.023 13.2771 35.3018 11.6027 35.4017L7.47461 35.6974C11.307 38.9423 16.1264 40.5129 20.8464 40.5129C26.1534 40.5129 31.4645 38.5467 35.4922 34.6144L36.7709 33.3356V28.6161C36.7709 27.8327 36.1792 27.1454 35.2959 26.9496Z"
                  fill="#2E3092"
                />
                <path
                  d="M57.8057 27.9312C57.7059 27.8314 57.6099 27.8314 57.51 27.7354L51.0202 21.4453L44.1387 28.4267L50.6285 34.8167C50.7284 34.9165 50.8244 34.9165 50.8244 35.0125L51.2161 31.2761C51.4119 29.6056 52.6907 28.3268 54.3611 28.3268L57.8057 27.9312Z"
                  fill="#2E3092"
                />
                <path
                  d="M73.7303 30.9725L73.3386 27.3359L73.0429 27.6316C69.5023 31.1723 63.9995 31.6638 59.7715 29.4019L54.4645 29.6976C53.5812 29.6976 52.9899 30.385 52.89 31.2721L52.3984 36.1875C56.1349 39.1367 60.7546 40.6113 65.2787 40.6113C70.5857 40.6113 75.8968 38.6452 79.9245 34.7129C80.1203 34.517 80.2201 34.4172 80.3161 34.2213L76.8754 34.0217C75.205 33.9218 73.9262 32.6469 73.7303 30.9725Z"
                  fill="#2E3092"
                />
                <path
                  d="M80.4163 6.29742L79.7289 9.934C79.4332 11.6044 78.0585 12.6874 76.388 12.6874L72.9473 12.5876C73.0471 12.6874 73.0471 12.6874 73.1431 12.7834C75.2091 14.7495 76.2882 17.403 76.2882 20.2563C76.2882 22.1226 75.7966 23.8929 74.9134 25.4674L75.405 30.8743C75.5048 31.7575 76.0923 32.3489 76.9794 32.4488L81.699 32.7445C84.4524 29.2038 86.0229 24.8799 86.0229 20.3558C86.0191 15.0449 84.0529 10.1304 80.4163 6.29742Z"
                  fill="#2E3092"
                />
                <path
                  d="M13.0756 32.2568L13.4673 28.0288C13.3675 27.929 13.1716 27.833 13.0756 27.7331C11.0096 25.767 9.93058 23.1135 9.93058 20.2602C9.93058 17.4109 11.0135 14.8533 13.0756 12.7873L13.2715 12.5914L9.63489 12.5953C7.96445 12.5953 6.5858 11.4164 6.38997 9.74595L5.89843 6.10938C2.16197 9.94178 0 14.957 0 20.2636C0 25.5703 2.06602 30.4856 5.7026 34.3226L11.4052 33.831C12.2884 33.7312 12.9758 33.1439 13.0756 32.2568Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
          {
            title: null,
            subTitle: "Service mesh readiness (where applicable)",
            svg: (
              <svg
                width="61"
                height="55"
                viewBox="0 0 61 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.6782 0H5.31845C2.39043 0 0 2.37616 0 5.31845V12.9672C0 15.9095 2.39329 18.2856 5.31845 18.2856H55.6811C58.6091 18.2856 60.9995 15.9095 60.9995 12.9672V5.31845C60.9995 2.37616 58.6062 0 55.6811 0H55.6782ZM6.7971 9.14127C7.00584 2.74765 16.2729 2.76771 16.4764 9.14127C16.2705 15.5177 7.00572 15.532 6.7971 9.14127ZM19.31 9.14127C19.5187 2.74765 28.7858 2.76771 28.9893 9.14127C28.7834 15.5177 19.5186 15.532 19.31 9.14127ZM44.8672 11.7405C44.8672 10.8741 45.5763 10.1678 46.4398 10.1678H52.6247C53.4911 10.1678 54.1973 10.877 54.1973 11.7405C54.1973 12.6069 53.4882 13.3131 52.6247 13.3131H46.4398C45.5734 13.3131 44.8672 12.604 44.8672 11.7405ZM52.6279 8.12049H46.443C45.5766 8.12049 44.8704 7.41136 44.8704 6.54785C44.8704 5.68145 45.5795 4.97521 46.443 4.97521H52.6279C54.6924 5.01524 54.6952 8.08338 52.6279 8.12342V8.12049Z"
                  fill="#2E3092"
                />
                <path
                  d="M13.329 9.13645C13.2946 6.93188 9.98347 6.91467 9.94629 9.13645C9.98632 11.3582 13.2946 11.341 13.329 9.13645Z"
                  fill="#2E3092"
                />
                <path
                  d="M25.8407 9.13645C25.8064 6.93188 22.4952 6.91467 22.458 9.13645C22.498 11.3582 25.8063 11.341 25.8407 9.13645Z"
                  fill="#2E3092"
                />
                <path
                  d="M58.5301 22.5838C57.6179 22.8669 56.6743 23.0099 55.6821 23.0099L5.3195 23.007C3.88697 23.0013 2.54872 22.7154 1.25915 22.1406C0.472826 23.0528 0.000976562 24.2508 0.000976562 25.5548V33.2181C0.000976562 36.1461 2.39426 38.5366 5.31943 38.5366H28.9266V44.7529H26.2673C24.5203 44.7529 23.1191 46.1683 23.1191 47.9011C23.2192 48.0498 9.2967 47.904 9.29084 47.9526C7.23779 47.9783 7.20917 51.0664 9.29084 51.1008H23.1191C23.0963 52.8621 24.5059 54.2919 26.2673 54.2919H34.7337C36.498 54.2947 37.9076 52.8593 37.8819 51.0979H51.7153C53.7712 51.0693 53.797 47.9926 51.7153 47.9497H37.8819C37.9076 46.2026 36.498 44.7529 34.7337 44.7558H32.0745V38.5394H55.6816C58.6096 38.5394 61.0001 36.1461 61.0001 33.221V25.5576C61.0001 24.2509 60.5283 23.0556 59.7419 22.1435C59.3473 22.3322 58.9389 22.4752 58.5301 22.5838ZM46.4432 26.5956H52.6281C53.4945 26.5956 54.2007 27.3047 54.2007 28.1682C54.2007 29.0346 53.4916 29.7409 52.6281 29.7409H46.4432C44.3787 29.7008 44.3759 26.6327 46.4432 26.5927V26.5956ZM46.4432 31.8054H52.6281C54.6925 31.834 54.6982 34.9136 52.6281 34.9536H46.4432C44.3759 34.9164 44.3759 31.834 46.4432 31.8054ZM24.1398 25.9351C30.5391 26.1038 30.522 35.4512 24.1398 35.6144C17.7634 35.4085 17.749 26.1437 24.1398 25.9351ZM11.6298 25.9351C18.0291 26.1038 18.012 35.4512 11.6298 35.6144C5.2534 35.4085 5.23905 26.1437 11.6298 25.9351Z"
                  fill="#2E3092"
                />
                <path
                  d="M11.6296 32.4686C13.8571 32.4371 13.8742 29.1203 11.6296 29.0859C9.40784 29.126 9.42504 32.4343 11.6296 32.4686Z"
                  fill="#2E3092"
                />
                <path
                  d="M24.1394 32.4686C26.3669 32.4371 26.3811 29.1203 24.1394 29.0859C21.9176 29.126 21.9348 32.4343 24.1394 32.4686Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
          {
            title: null,
            subTitle: "Cost vs performance balancing",
            svg: (
              <svg
                width="61"
                height="55"
                viewBox="0 0 61 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.6782 0H5.31845C2.39043 0 0 2.37616 0 5.31845V12.9672C0 15.9095 2.39329 18.2856 5.31845 18.2856H55.6811C58.6091 18.2856 60.9995 15.9095 60.9995 12.9672V5.31845C60.9995 2.37616 58.6062 0 55.6811 0H55.6782ZM6.7971 9.14127C7.00584 2.74765 16.2729 2.76771 16.4764 9.14127C16.2705 15.5177 7.00572 15.532 6.7971 9.14127ZM19.31 9.14127C19.5187 2.74765 28.7858 2.76771 28.9893 9.14127C28.7834 15.5177 19.5186 15.532 19.31 9.14127ZM44.8672 11.7405C44.8672 10.8741 45.5763 10.1678 46.4398 10.1678H52.6247C53.4911 10.1678 54.1973 10.877 54.1973 11.7405C54.1973 12.6069 53.4882 13.3131 52.6247 13.3131H46.4398C45.5734 13.3131 44.8672 12.604 44.8672 11.7405ZM52.6279 8.12049H46.443C45.5766 8.12049 44.8704 7.41136 44.8704 6.54785C44.8704 5.68145 45.5795 4.97521 46.443 4.97521H52.6279C54.6924 5.01524 54.6952 8.08338 52.6279 8.12342V8.12049Z"
                  fill="#2E3092"
                />
                <path
                  d="M13.329 9.13645C13.2946 6.93188 9.98347 6.91467 9.94629 9.13645C9.98632 11.3582 13.2946 11.341 13.329 9.13645Z"
                  fill="#2E3092"
                />
                <path
                  d="M25.8407 9.13645C25.8064 6.93188 22.4952 6.91467 22.458 9.13645C22.498 11.3582 25.8063 11.341 25.8407 9.13645Z"
                  fill="#2E3092"
                />
                <path
                  d="M58.5301 22.5838C57.6179 22.8669 56.6743 23.0099 55.6821 23.0099L5.3195 23.007C3.88697 23.0013 2.54872 22.7154 1.25915 22.1406C0.472826 23.0528 0.000976562 24.2508 0.000976562 25.5548V33.2181C0.000976562 36.1461 2.39426 38.5366 5.31943 38.5366H28.9266V44.7529H26.2673C24.5203 44.7529 23.1191 46.1683 23.1191 47.9011C23.2192 48.0498 9.2967 47.904 9.29084 47.9526C7.23779 47.9783 7.20917 51.0664 9.29084 51.1008H23.1191C23.0963 52.8621 24.5059 54.2919 26.2673 54.2919H34.7337C36.498 54.2947 37.9076 52.8593 37.8819 51.0979H51.7153C53.7712 51.0693 53.797 47.9926 51.7153 47.9497H37.8819C37.9076 46.2026 36.498 44.7529 34.7337 44.7558H32.0745V38.5394H55.6816C58.6096 38.5394 61.0001 36.1461 61.0001 33.221V25.5576C61.0001 24.2509 60.5283 23.0556 59.7419 22.1435C59.3473 22.3322 58.9389 22.4752 58.5301 22.5838ZM46.4432 26.5956H52.6281C53.4945 26.5956 54.2007 27.3047 54.2007 28.1682C54.2007 29.0346 53.4916 29.7409 52.6281 29.7409H46.4432C44.3787 29.7008 44.3759 26.6327 46.4432 26.5927V26.5956ZM46.4432 31.8054H52.6281C54.6925 31.834 54.6982 34.9136 52.6281 34.9536H46.4432C44.3759 34.9164 44.3759 31.834 46.4432 31.8054ZM24.1398 25.9351C30.5391 26.1038 30.522 35.4512 24.1398 35.6144C17.7634 35.4085 17.749 26.1437 24.1398 25.9351ZM11.6298 25.9351C18.0291 26.1038 18.012 35.4512 11.6298 35.6144C5.2534 35.4085 5.23905 26.1437 11.6298 25.9351Z"
                  fill="#2E3092"
                />
                <path
                  d="M11.6296 32.4686C13.8571 32.4371 13.8742 29.1203 11.6296 29.0859C9.40784 29.126 9.42504 32.4343 11.6296 32.4686Z"
                  fill="#2E3092"
                />
                <path
                  d="M24.1394 32.4686C26.3669 32.4371 26.3811 29.1203 24.1394 29.0859C21.9176 29.126 21.9348 32.4343 24.1394 32.4686Z"
                  fill="#2E3092"
                />
              </svg>
            ),
          },
        ]}
        heading="Don't just lift-and-shift. Tune and scale."
        description="Calsoft ensures workloads are optimized for their target environment post-migration:"
        bottomText={null}
      />
      <Agility
        id="real-world-impact"
        data={{
          leftSideContent: {
            title: "Real-World Impact",
            subTitle: null,
            description: "Our customers saw real, measurable benefits",
          },
          rightSideContent: [
            {
              title: "30–60% lower",
              subTitle: "TCO through infra rightsizing and optimization",
            },
            {
              title: "90% faster",
              subTitle: "cutovers compared to manual VM moves",
            },
            {
              title: "Zero disruption",
              subTitle: "migrations across production environments",
            },
            {
              title: "Significant TCO",
              subTitle:
                "reduction compared to vendor-locked private cloud platforms",
            },
          ],
        }}
        bookMeetingData={null}
        buttonText="Request ROI"
      />
      <WhereItFits
        title1="When intelligent migration is your edge"
        title2="Use Calsoft’s Intelligent Migration if:"
        data={[
          {
            heading: null,
            title: null,
            desc: "You’re moving from VMware to KVM, AHV, Azure, or AWS",
          },
          {
            heading: null,
            title: null,
            desc: "You want license rationalization and performance-tuned workloads",
          },
          {
            heading: null,
            title: null,
            desc: "You’re consolidating infrastructure across global/regional DCs",
          },
          {
            heading: null,
            title: null,
            desc: "You need compliance-backed, rollback-ready plans",
          },
          {
            heading: null,
            title: null,
            desc: "You want container-first or cloud-native platforms post-migration",
          },
        ]}
      />
      <WhyCalsoft
        id="how-to-start"
        sectionDescription=""
        title="What makes our approach intelligent"
        heading="How to Start"
        data={{
          tableHeadings: [
            "Capability",
            "Calsoft Container Services",
            "DIY or Siloed Implementations",
          ],
          tableContent: [
            {
              name: "Dependency + Cost Mapping",
              calsoft: " Built-in",
              vendor: "Often Skipped",
            },
            {
              name: "Rollback + Validation Automation",
              calsoft: " Structured",
              vendor: "Manual",
            },
            {
              name: "Post-Migration Rightsizing",
              calsoft: " Included",
              vendor: "Not Prioritized",
            },
            {
              name: "Hypervisor-to-Cloud Versatility",
              calsoft: "VMware/KVM/Nutanix → Any",
              vendor: "Tool-Limited",
            },
            {
              name: "Migration ROI Visibility",
              calsoft: "Real-time TCO Tracker",
              vendor: "No Business Benchmarking",
            },
          ],
        }}
      />
      <HowToStart
        headerContent={{
          title1: "How to Start",
          description: "Migrate with insight, not just intent",
        }}
        data={{
          Assess: "App inventory, dependencies, infra sprawl, usage telemetry",
          Plan: "Workload grouping, risk modeling, migration wave strategy",
          Migrate: "Tool-driven moves with validation and rollback capability",
          Optimise: "Post-move tuning for performance, cost, and compliance",
          Enable:
            "Dashboards, automation scripts, runbooks, and SLA validation",
        }}
      />
      <ContactSecDataAi
        lightContent={
          "Drive intelligent migrations with reduced downtime."
        }
      />
    </>
  );
}
