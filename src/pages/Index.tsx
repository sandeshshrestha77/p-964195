import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Star,
  Users,
  Trophy,
  MapPin,
  Calendar,
  ArrowRight,
  Play,
  Music,
  Mic,
  Globe,
  Award,
  Sparkles,
  Target,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { LucideIcon } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";

// Define interfaces for data structures
interface StatItem {
  Icon: LucideIcon;
  value: string;
  label: string;
}

interface CategoryItem {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface ProcessItem {
  Icon: LucideIcon;
  title: string;
  description: string;
}

// Data for stats section
const stats: StatItem[] = [
  {
    Icon: Users,
    value: "10,000+",
    label: "Participants",
  },
  {
    Icon: Star,
    value: "3",
    label: "Successful Seasons",
  },
  {
    Icon: MapPin,
    value: "20+",
    label: "Districts Covered",
  },
  {
    Icon: Music,
    value: "500+",
    label: "Performances",
  },
];

// Data for categories section
const categories: CategoryItem[] = [
  {
    Icon: Music,
    title: "Vocal Performance",
    description: "Showcase your singing talent across various genres and styles.",
    features: ["Classical Singing", "Modern Contemporary", "Folk Music", "Fusion Performances"],
  },
  {
    Icon: Users,
    title: "Dance",
    description: "Express yourself through traditional and contemporary dance forms.",
    features: ["Traditional Folk Dance", "Classical Dance", "Contemporary Styles", "Group Performances"],
  },
  {
    Icon: Globe,
    title: "Cultural Arts",
    description: "Celebrate and showcase Sikkim's rich cultural heritage.",
    features: ["Traditional Instruments", "Folk Art Forms", "Cultural Performances", "Heritage Showcase"],
  },
];

// Data for registration process section
const process: ProcessItem[] = [
  {
    Icon: Users,
    title: "Register Online",
    description:
      "Fill out the simple online registration form with your basic information and performance category.",
  },
  {
    Icon: Calendar,
    title: "Choose Audition Slot",
    description: "Select your preferred audition date and venue from our multiple regional centers.",
  },
  {
    Icon: Star,
    title: "Prepare Performance",
    description: "Get ready for your audition with our guidelines and preparation tips.",
  },
  {
    Icon: Award,
    title: "Attend Audition",
    description: "Showcase your talent in front of our expert panel of judges at your chosen venue.",
  },
];

// Main Component
const Index = () => {
  return (
    <MainLayout>
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative max-w-4xl mx-auto text-center py-24 px-4">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
            <img 
              src="https://images.unsplash.com/photo-1506604900144-7360175909e2"
              alt="Sikkim Rising Star"
              className="w-full h-full object-cover object-center rounded-[3rem] opacity-30"
            />
          </div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Season 4 Registrations Open
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your <br />
              <span className="text-primary">Star Potential</span>
            </h1>
            <p className="text-gray-600 text-lg mx-auto max-w-2xl mb-8">
              Join Sikkim's premier talent hunt platform celebrating artistry, 
              culture, and entertainment since 2018.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-xl text-base">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 h-12 px-8 rounded-xl text-base border border-gray-200">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <SlideIn 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                delay={index * 0.1}
              >
                <div className="bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <stat.Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </SlideIn>
            ))}
          </div>

          {/* Categories Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-medium">Performance Categories</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Showcase Your Talent</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Multiple categories to express your artistic abilities and cultural heritage.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <SlideIn 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                  delay={index * 0.1}
                >
                  <div className="bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <category.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Countdown Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-medium">Next Season</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Registration Closing Soon</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Don't miss your chance to participate in Season 4
              </p>
            </FadeIn>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <CountdownTimer targetDate={new Date("2024-06-01")} />
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-medium">How It Works</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Simple Registration Process</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Four easy steps to begin your journey with Sikkim Rising Star.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <SlideIn 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                  delay={index * 0.1}
                >
                  <div className="flex gap-6">
                    <div className="bg-primary/5 rounded-xl w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <step.Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center pb-24">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Begin Your Journey Today</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards your dreams. Register now for Sikkim Rising Star Season 4 auditions.
              </p>
              <Link to="/register">
                <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-xl text-base">
                  Register for Auditions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;