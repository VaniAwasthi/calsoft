"use client";

import React from "react";
import logo_bg from "@/app/assets/caltia/logo_bg.webp";
import Image from "next/image";
import logo from "@/app/assets/caltia/calTIA.webp";
import git from "@/app/assets/caltia/logo/github.webp";
import slack from "@/app/assets/caltia/logo/Slack.webp";
import bucket from "@/app/assets/caltia/logo/bitbucket.webp";
import cy from "@/app/assets/caltia/logo/cypress.webp";
import gitlab from "@/app/assets/caltia/logo/gitlab.webp";
import jenkins from "@/app/assets/caltia/logo/jenkins.webp";
import jira from "@/app/assets/caltia/logo/jira.webp";
import py from "@/app/assets/caltia/logo/py_test.webp";
import robot from "@/app/assets/caltia/logo/robot.webp";
import teams from "@/app/assets/caltia/logo/teams.webp";
import rail from "@/app/assets/caltia/logo/testRail.webp";
import travis from "@/app/assets/caltia/logo/travis.webp";
import xRay from "@/app/assets/caltia/logo/x-ray.webp";
import { motion } from "framer-motion";

export default function Integration({
  data = {
    leftSideContent: {
      heading: "20+ Integrations",
      heading2: "Connecting to the Tools You Need for Efficient Workflows",
      desc: "CalTIATM™ seamlessly integrates with various tools through customized plugins, supporting GitHub, Bitbucket, TestRail, Jira, Xray, pytest, JUnit, Robot, Cypress, Jenkins, Travis CI, Google Docs, Teams, Slack, and more, enabling smooth DevOps testing automation across your ecosystem. ",
    },
    rightSideContent: {
      cards: [
        {
          title: "Code Repo",
          className: "ml-10",
          logos: [
            { logo: git, alt: "github" },
            { logo: bucket, alt: "bit bucket" },
            { logo: gitlab, alt: "Gitlab" },
          ],
        },
        {
          title: "Test\nManagement",
          className: "ml-32",
          logos: [
            { logo: jira, alt: "jira" },
            { logo: rail, alt: "test rail" },
            { logo: xRay, alt: "x-ray" },
          ],
        },
        {
          title: "Automation\nFrameworks",
          className: "ml-10",
          logos: [
            { logo: py, alt: "py-test" },
            { logo: robot, alt: "robot" },
            { logo: cy, alt: "cypress" },
          ],
        },
        {
          title: "CI/CD",
          className: "ml-32",
          logos: [
            { logo: travis, alt: "travis" },
            { logo: jenkins, alt: "jenkins" },
          ],
        },
        {
          title: "Collaboration",
          className: "ml-10",
          logos: [
            { logo: teams, alt: "MS-Teams" },
            { logo: slack, alt: "Slack" },
          ],
        },
      ],
    },
  },
}) {
  return (
    <div className="bg-[#f7f7f7] py-10">
      <div className="container flex flex-col lg:flex-row items-center h-full gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[linear-gradient(to_right,#2E3092_15%,#ED1C24_50%)] bg-clip-text text-transparent text-[38px] font-semibold"
          >
            {data.leftSideContent.heading}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl font-semibold"
          >
            {data.leftSideContent.heading2}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl mt-2"
          >
            {data.leftSideContent.desc}
          </motion.p>
        </div>
        <div className="flex-1 flex justify-center items-center gap-5">
          <div
            className="rounded-full size-40 bg-black p-5 z-20"
            style={{
              backgroundImage: `url(${logo_bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
              <Image src={logo} alt="calTIA" className="size-[80%]" />
            </div>
          </div>
          <div className="w-[70%] flex flex-col items-start gap-5 relative z-10">
            {/* Cards */}
            {data.rightSideContent.cards.map((ele, idx) => (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`px-3.5 py-2.5 bg-white shadow-xl rounded-lg flex gap-6 items-center w-fit ${ele.className}`}
              >
                <p className="text-[15px] font-medium whitespace-pre-line">
                  {ele.title}
                </p>
                <div className="flex justify-center items-center gap-3.5">
                  {ele.logos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.logo}
                      alt={logo.alt}
                      className="aspect-square size-8"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
            {/* <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="px-3.5 py-2.5 bg-white shadow-xl rounded-lg flex gap-6 items-center w-fit ml-32"
            >
              <p className="text-[15px] font-medium">
                Test
                <br />
                Management
              </p>
              <div className="flex justify-center items-center gap-3.5">
                <Image src={jira} alt="jira" className="aspect-square size-8" />
                <Image src={rail} alt="rail" className="aspect-square size-8" />
                <Image src={xRay} alt="xRay" className="aspect-square size-8" />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="px-3.5 py-2.5 bg-white shadow-xl rounded-lg flex gap-6 items-center w-fit ml-10"
            >
              <p className="text-[15px] font-medium">
                Automation
                <br />
                Frameworks
              </p>
              <div className="flex justify-center items-center gap-3.5">
                <Image
                  src={py}
                  alt="py-test"
                  className="aspect-square size-8"
                />
                <Image
                  src={robot}
                  alt="robot"
                  className="aspect-square size-8"
                />
                <Image src={cy} alt="cy" className="aspect-square size-8" />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="px-3.5 py-2.5 bg-white shadow-xl rounded-lg flex gap-6 items-center w-fit ml-32"
            >
              <p className="text-[15px] font-medium">CI/CD</p>
              <div className="flex justify-center items-center gap-3.5">
                <Image
                  src={travis}
                  alt="travis"
                  className="aspect-square size-8"
                />
                <Image
                  src={jenkins}
                  alt="jenkins"
                  className="aspect-square size-8"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="px-3.5 py-2.5 bg-white shadow-xl rounded-lg flex gap-6 items-center w-fit ml-10"
            >
              <p className="text-[15px] font-medium">Collaboration</p>
              <div className="flex justify-center items-center gap-3.5">
                <Image
                  src={teams}
                  alt="teams"
                  className="aspect-square size-8"
                />
                <Image
                  src={slack}
                  alt="slack"
                  className="aspect-square size-8"
                />
              </div>
            </motion.div> */}

            {/* arrows */}
            <div>
              {/* arr_1 */}
              <div className="absolute top-6 -left-24 -z-10">
                <svg
                  width="184"
                  height="71"
                  viewBox="0 0 184 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M184 1H11C5.47716 1 1 5.47715 1 11V71"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-dasharray="7 7"
                  />
                </svg>
              </div>
              {/* arr_2 */}
              <div className="absolute top-[6.5rem] -left-10 -z-10">
                <svg
                  width="232"
                  height="41"
                  viewBox="0 0 232 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M232 1H11C5.47714 1 0.999998 5.47715 0.999998 11V41"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-dasharray="7 7"
                  />
                </svg>
              </div>
              {/* arr_3 */}
              <div className="absolute top-48 -left-10 -z-10">
                <svg
                  width="118"
                  height="2"
                  viewBox="0 0 118 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="6.55671e-08"
                    y1="1.25"
                    x2="118"
                    y2="1.25001"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-dasharray="7 7"
                  />
                </svg>
              </div>
              {/* arr_4 */}
              <div className="absolute top-56 -left-10 -z-10">
                <svg
                  width="232"
                  height="43"
                  viewBox="0 0 232 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M232 42H11C5.47714 42 0.999998 37.5228 0.999998 32V1.86265e-06"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-dasharray="7 7"
                  />
                </svg>
              </div>
              {/* arr_5 */}
              <div className="absolute top-[15.5rem] -left-24 -z-10">
                <svg
                  width="184"
                  height="97"
                  viewBox="0 0 184 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M184 96H11C5.47716 96 1 91.5228 1 86V1.60933e-06"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-dasharray="7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
