"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-10">
      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[#0077b6] to-[#0099e6] pb-4">
          <CardTitle className="text-2xl md:text-3xl text-center text-white">Projects So Far</CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#0077b6]/10 p-2 rounded-full">
                  <Brain className="h-6 w-6 text-[#0077b6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0077b6]">AI-Powered Sanitation Solutions</h3>
              </div>

              <p className="text-lg leading-relaxed mb-4">
                We are developing an AI-powered tool that uses numerical data and advanced modeling techniques to assist
                developers, academics, and decision-makers in optimizing faecal sludge treatment plant operations.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This tool enhances decision-making by providing data-driven insights for efficient and sustainable
                sanitation solutions.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-[#0077b6]/10 text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium">
                  AI Technology
                </span>
                <span className="bg-[#0077b6]/10 text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium">
                  Sanitation
                </span>
                <span className="bg-[#0077b6]/10 text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium">
                  Data Modeling
                </span>
                <span className="bg-[#0077b6]/10 text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium">
                  Sustainability
                </span>
              </div>

              <Button asChild className="bg-[#0077b6] hover:bg-[#00628f]">
                <a
                  href="https://fssimulator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl bg-gray-50 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <Image src="/images/fs-simulator-logo.png" alt="FS Simulator Logo" fill className="object-contain" />
                </div>
              </div>

              <div className="mt-4 bg-[#0077b6]/5 p-4 rounded-lg border border-[#0077b6]/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="font-medium text-[#0077b6]">Project Status: Active Development</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team is continuously improving the tool with new features and data models.
                </p>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

