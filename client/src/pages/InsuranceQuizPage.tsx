/**
 * Interactive Insurance Quiz - "What Insurance Do You Need?"
 * 7 questions about life situation with personalized coverage recommendations
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { generateSlug } from "@/lib/utils-slug";
import NewsletterSignup from "@/components/NewsletterSignup";

type Question = {
  id: string;
  question: string;
  options: { value: string; label: string }[];
};

type QuizAnswers = Record<string, string>;

type Recommendation = {
  type: string;
  priority: "Essential" | "Recommended" | "Consider";
  reason: string;
  relatedTerms: string[];
};

const questions: Question[] = [
  {
    id: "employment",
    question: "What is your current employment status?",
    options: [
      { value: "employed", label: "Employed full-time" },
      { value: "self-employed", label: "Self-employed or business owner" },
      { value: "part-time", label: "Part-time or contract worker" },
      { value: "unemployed", label: "Unemployed or retired" },
    ],
  },
  {
    id: "dependents",
    question: "Do you have dependents (spouse, children, or others who rely on your income)?",
    options: [
      { value: "yes-multiple", label: "Yes, multiple dependents" },
      { value: "yes-one", label: "Yes, one dependent" },
      { value: "no", label: "No dependents" },
    ],
  },
  {
    id: "home",
    question: "What is your housing situation?",
    options: [
      { value: "own-house", label: "I own a house" },
      { value: "own-condo", label: "I own a condo/townhouse" },
      { value: "rent", label: "I rent my home" },
      { value: "live-with-family", label: "I live with family" },
    ],
  },
  {
    id: "vehicle",
    question: "Do you own or regularly drive a vehicle?",
    options: [
      { value: "own-multiple", label: "Yes, I own multiple vehicles" },
      { value: "own-one", label: "Yes, I own one vehicle" },
      { value: "drive-not-own", label: "I drive but don't own a vehicle" },
      { value: "no-vehicle", label: "No, I don't drive" },
    ],
  },
  {
    id: "health",
    question: "What is your current health insurance situation?",
    options: [
      { value: "employer", label: "Covered through employer" },
      { value: "marketplace", label: "I buy my own insurance" },
      { value: "government", label: "Medicare or Medicaid" },
      { value: "none", label: "No health insurance" },
    ],
  },
  {
    id: "age",
    question: "What is your age range?",
    options: [
      { value: "18-30", label: "18-30 years old" },
      { value: "31-45", label: "31-45 years old" },
      { value: "46-60", label: "46-60 years old" },
      { value: "60+", label: "60+ years old" },
    ],
  },
  {
    id: "assets",
    question: "Do you have significant assets (savings, investments, property worth over $100k)?",
    options: [
      { value: "yes-substantial", label: "Yes, substantial assets" },
      { value: "yes-moderate", label: "Yes, moderate assets" },
      { value: "no", label: "No significant assets" },
    ],
  },
];

function generateRecommendations(answers: QuizAnswers): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Auto Insurance
  if (answers.vehicle === "own-multiple" || answers.vehicle === "own-one") {
    recommendations.push({
      type: "Auto Insurance",
      priority: "Essential",
      reason: "Required by law in most states and protects you from financial liability in accidents.",
      relatedTerms: ["Liability Insurance", "Collision Coverage", "Comprehensive Coverage", "Deductible"],
    });
  } else if (answers.vehicle === "drive-not-own") {
    recommendations.push({
      type: "Non-Owner Auto Insurance",
      priority: "Recommended",
      reason: "Provides liability coverage when you drive vehicles you don't own.",
      relatedTerms: ["Liability Insurance", "Non-Owned Auto"],
    });
  }

  // Health Insurance
  if (answers.health === "none") {
    recommendations.push({
      type: "Health Insurance",
      priority: "Essential",
      reason: "Medical expenses can be financially devastating without coverage. Explore marketplace options or Medicaid eligibility.",
      relatedTerms: ["Premium", "Deductible", "Copayment", "Out-of-Pocket Maximum"],
    });
  }

  // Homeowners/Renters Insurance
  if (answers.home === "own-house" || answers.home === "own-condo") {
    recommendations.push({
      type: "Homeowners Insurance",
      priority: "Essential",
      reason: "Protects your home and belongings from damage, theft, and liability claims. Usually required by mortgage lenders.",
      relatedTerms: ["Dwelling Coverage", "Replacement Cost", "Actual Cash Value", "Liability Insurance"],
    });
  } else if (answers.home === "rent") {
    recommendations.push({
      type: "Renters Insurance",
      priority: "Recommended",
      reason: "Protects your personal belongings and provides liability coverage. Very affordable at $15-30/month.",
      relatedTerms: ["Personal Property", "Liability Insurance", "Loss of Use"],
    });
  }

  // Life Insurance
  if (answers.dependents === "yes-multiple" || answers.dependents === "yes-one") {
    recommendations.push({
      type: "Life Insurance",
      priority: "Essential",
      reason: "Provides financial security for your dependents if something happens to you.",
      relatedTerms: ["Term Life Insurance", "Whole Life Insurance", "Beneficiary", "Death Benefit"],
    });
  } else if (answers.age === "18-30" || answers.age === "31-45") {
    recommendations.push({
      type: "Life Insurance",
      priority: "Consider",
      reason: "Premiums are lowest when you're young and healthy. Consider term life insurance.",
      relatedTerms: ["Term Life Insurance", "Beneficiary", "Premium"],
    });
  }

  // Disability Insurance
  if (answers.employment === "employed" || answers.employment === "self-employed") {
    recommendations.push({
      type: "Disability Insurance",
      priority: "Recommended",
      reason: "Replaces income if you become unable to work due to illness or injury. Critical for income protection.",
      relatedTerms: ["Disability Insurance", "Elimination Period", "Benefit Period"],
    });
  }

  // Business Insurance
  if (answers.employment === "self-employed") {
    recommendations.push({
      type: "Business Insurance",
      priority: "Essential",
      reason: "Protects your business from liability claims, property damage, and business interruption.",
      relatedTerms: ["General Liability", "Professional Liability", "Business Owners Policy"],
    });
  }

  // Umbrella Insurance
  if (answers.assets === "yes-substantial" || answers.assets === "yes-moderate") {
    recommendations.push({
      type: "Umbrella Insurance",
      priority: "Recommended",
      reason: "Provides extra liability protection beyond your auto and home policies to protect your assets.",
      relatedTerms: ["Umbrella Policy", "Liability Insurance", "Excess Liability"],
    });
  }

  // Long-Term Care Insurance
  if (answers.age === "46-60" || answers.age === "60+") {
    recommendations.push({
      type: "Long-Term Care Insurance",
      priority: "Consider",
      reason: "Covers nursing home, assisted living, and in-home care costs as you age.",
      relatedTerms: ["Long-Term Care", "Nursing Home Care", "Benefit Period"],
    });
  }

  // Sort by priority
  const priorityOrder = { "Essential": 1, "Recommended": 2, "Consider": 3 };
  return recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export default function InsuranceQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - generate recommendations
      const recs = generateRecommendations(answers);
      setRecommendations(recs);
      setShowResults(true);

      // Track quiz completion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quiz_completed', {
          event_category: 'engagement',
          event_label: 'insurance_quiz',
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (showResults) {
    return (
      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <CardTitle className="text-3xl">Your Personalized Insurance Recommendations</CardTitle>
              </div>
              <CardDescription className="text-base">
                Based on your answers, here are the insurance types we recommend for your situation.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="space-y-6 mb-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border-l-4" style={{
                borderLeftColor: 
                  rec.priority === "Essential" ? "#ef4444" :
                  rec.priority === "Recommended" ? "#f59e0b" :
                  "#3b82f6"
              }}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{rec.type}</CardTitle>
                      <div className="mt-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          rec.priority === "Essential" ? "bg-red-100 text-red-700" :
                          rec.priority === "Recommended" ? "bg-orange-100 text-orange-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {rec.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{rec.reason}</p>
                  <div>
                    <p className="text-sm font-medium mb-2">Learn more about:</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.relatedTerms.map((term) => (
                        <Link key={term} href={`/term/${generateSlug(term)}`}>
                          <Button variant="outline" size="sm" className="text-xs">
                            <BookOpen className="w-3 h-3 mr-1" />
                            {term}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/50">
            <CardHeader>
              <CardTitle>Want More Insurance Tips?</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for weekly insights on insurance coverage, cost-saving tips, and industry updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NewsletterSignup />
            </CardContent>
          </Card>

          <div className="mt-8 flex gap-4">
            <Button onClick={handleRestart} variant="outline">
              Retake Quiz
            </Button>
            <Link href="/">
              <Button>Browse Glossary</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-2xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What Insurance Do You Need?</CardTitle>
            <CardDescription>
              Answer 7 quick questions to get personalized insurance recommendations for your situation.
            </CardDescription>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
              <RadioGroup value={currentAnswer} onValueChange={handleAnswer}>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label 
                        htmlFor={option.value} 
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
