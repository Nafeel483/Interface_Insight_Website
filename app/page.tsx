"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Smartphone, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LogoPic from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {`INTERFACE INSIGHT SOLUTIONS`}
                  </h1>
                  <p className="max-w-[600px] pt-5 text-silver md:text-xl/8">
                    {`Transforming ideas into exceptional digital experiences with cutting-edge technology and
                    pixel-perfect design.`}
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-8 min-[400px]:flex-row items-center">
                  <Link href="/portfolio">
                    <Button className="inline-flex h-12 items-center justify-center rounded-md bg-secondary text-dark px-8 text-sm font-medium shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[370px] w-[370px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  {/* <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-New-Transparent-u2Cg5IzsVc6NkyKY4Od95Ic2puJn6V.png"
                    alt="Interface Insight Solutions Logo"
                    width={450}
                    height={450}
                    className="object-contain"/> */}
                  <Image
                    src={LogoPic}
                    alt="Interface Insight Solutions Logo"
                    width={450}
                    height={450}
                    className="object-contain" />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-silver/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark pt-2">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide end-to-end solutions for your digital needs with expertise in the latest technologies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden transition-all card-hover-effect border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-dark">Mobile App Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    We build high-performance, feature-rich mobile applications using React Native that work seamlessly
                    across iOS and Android platforms.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/services#mobile">
                    <Button variant="ghost" className="p-0 text-primary px-3 py-2">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden transition-all card-hover-effect border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-dark">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    We create responsive, modern web applications using React and Next.js that deliver exceptional user
                    experiences and performance.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/services#web">
                    <Button variant="ghost" className="p-0 text-primary px-3 py-2">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden transition-all card-hover-effect border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-dark">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Our design team creates intuitive, engaging user interfaces and experiences that delight users and
                    drive business results.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/services#design">
                    <Button variant="ghost" className="p-0 text-primary px-3 py-2">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-dark font-medium">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark pt-2">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects that showcase our expertise and creativity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image
                  src={require("../assets/services/E-Commerce.png")}
                  alt="E-Commerce Mobile App"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">E-Commerce Mobile App</h3>
                  <p className="text-silver">React Native, Redux, Node.js</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image
                  src={require("../assets/services/SaaS.jpg")}
                  alt="SaaS Dashboard"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">SaaS Dashboard</h3>
                  <p className="text-silver">React, Next.js, Tailwind CSS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gold text-dark px-8 text-sm font-medium shadow transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Hire Us on Freelance Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

