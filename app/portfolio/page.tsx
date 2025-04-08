"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DATA from "./dataset"

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gold">Our Portfolio</h1>
              <p className="max-w-[900px] text-silver md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest projects and see how we've helped businesses transform their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="design">UI/UX Design</TabsTrigger>
              </TabsList>
            </div>

            {/*------------- All View  ---------- */}
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                  DATA?.allAppsData?.map((item, keyID) => (
                    <Card key={keyID} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item?.thumbnail}
                          alt={item?.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle style={{ fontSize: 18, color: "#0E0424" }}>{item?.title}</CardTitle>
                        {/* <CardDescription>React Native, Redux, Node.js</CardDescription> */}
                      </CardHeader>
                    </Card>
                  ))
                }

              </div>
            </TabsContent>


            {/*------------- Mobile View  ---------- */}

            <TabsContent value="mobile" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                  DATA?.mobileApps?.map((item, keyID) => (
                    <Card key={keyID} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item?.thumbnail}
                          alt={item?.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle style={{ fontSize: 18, color: "#0E0424" }}>{item?.title}</CardTitle>
                        {/* <CardDescription>React Native, Redux, Node.js</CardDescription> */}
                      </CardHeader>
                    </Card>
                  ))
                }
              </div>
            </TabsContent>

            {/*------------- Web View  ---------- */}

            <TabsContent value="web" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Web Project 1 */}
                {
                  DATA?.webApps?.map((item, keyID) => (
                    <Card key={keyID} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item?.thumbnail}
                          alt={item?.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle style={{ fontSize: 18, color: "#0E0424" }}>{item?.title}</CardTitle>
                        {/* <CardDescription>React Native, Redux, Node.js</CardDescription> */}
                      </CardHeader>
                    </Card>
                  ))
                }
              </div>
            </TabsContent>

            {/*------------- UI/UX View  ---------- */}

            <TabsContent value="design" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                  DATA?.designApps?.map((item, keyID) => (
                    <Card key={keyID} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item?.thumbnail}
                          alt={item?.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle style={{ fontSize: 18, color: "#0E0424" }}>{item?.title}</CardTitle>
                        {/* <CardDescription>React Native, Redux, Node.js</CardDescription> */}
                      </CardHeader>
                    </Card>
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-silver/40 text-hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient mb-8">
                {`Ready to Start Your Project?`}
              </h2>
              <p className="mx-auto max-w-[700px] text-dark md:text-xl mb-8">
                {`Let's collaborate to bring your vision to life with our expertise in design and development.`}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="https://www.fiverr.com/m_ruman"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gold text-dark px-8 text-sm font-medium shadow transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Hire Us on Freelance Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

