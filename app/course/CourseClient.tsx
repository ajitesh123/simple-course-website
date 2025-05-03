"use client";

/**
 * Course Client Component
 * 
 * CUSTOMIZATION GUIDE:
 * This is the main course viewing page that displays lessons and interactive content.
 * To customize this for your specific coaching type:
 * 
 * 1. Update the courseData object with your actual course content
 * 2. Modify the CourseContent component to match your content style and needs
 * 3. Adjust the styling to match your brand colors and design
 * 4. Add additional functionality like progress tracking or certification if needed
 */

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { MediaEmbed } from "../components/MediaEmbed";
import { cn } from "../lib/utils";
import { CourseSidebar } from "../components/course/CourseSidebar";

/**
 * Media embed types for different content formats
 * - loom: For Loom video embeds
 * - youtube: For YouTube video embeds
 * - iframe: For generic iframe embeds
 * - toughtongue: For ToughTongue AI interactive voice agent embeds
 * - placeholder: Default placeholder when no content is provided
 */
type MediaEmbedType = "loom" | "youtube" | "iframe" | "toughtongue" | "placeholder";

/**
 * Lesson interface
 * Defines the structure of each lesson in the course
 * 
 * id: Unique identifier for the lesson
 * title: Display title of the lesson
 * duration: String representation of lesson duration (e.g., "5:00")
 * videoUrl: URL for the lesson content (video or interactive content)
 * mediaType: Type of media to embed
 */
interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  mediaType: MediaEmbedType;
}

/**
 * Course interface
 * Defines the structure of the course
 * 
 * title: Course title
 * lessons: Array of Lesson objects
 */
interface Course {
  title: string;
  lessons: Lesson[];
}

/**
 * Sample course data
 * 
 * CUSTOMIZE:
 * - Replace with your actual course content
 * - Update the title to match your course name
 * - Add your lessons with appropriate content
 * - For ToughTongue AI integration, create scenarios at https://app.toughtongueai.com/
 *   and use the embed URL with mediaType: "toughtongue"
 * 
 * Examples for different coaching types:
 * - Book Writing: Lessons on story structure, character development, dialogue, etc.
 * - Apology Coach: Scenarios for different apology situations and techniques
 * - Dating Coach: Conversation practice, profile creation, relationship advice
 */
const courseData: Course = {
  title: "Product Management Interview Preparation",
  lessons: [
    {
      id: "favorite-product-question",
      title: "Integrate Voice agent into the website",
      duration: "5:00",
      videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
      mediaType: "youtube"
    },
    {
      id: "answer-favorite-product-question",
      title: "Get your questions answered by AI",
      duration: "1:31",
      videoUrl: "https://app.toughtongueai.com/embed/677e5dbd261d3f3e3803b968?bg=black&skipPrecheck=true",
      mediaType: "toughtongue"
    },
    {
      id: "practice-favorite-product-question",
      title: "Practice Favorite Product Question",
      duration: "10:00",
      videoUrl: "https://app.toughtongueai.com/embed/677e7676de365dba3af0055a?bg=black&skipPrecheck=true",
      mediaType: "toughtongue"
    },
    {
      id: "practice-favorite-product-question-2",
      title: "Practice Favorite Product Question 2",
      duration: "10:00",
      videoUrl: "https://app.toughtongueai.com/embed/67b0248abc39997a6c6a4cc7?bg=black&skipPrecheck=true",
      mediaType: "toughtongue"
    }
  ]
};

/**
 * Course content component
 * Displays the selected lesson content and navigation controls
 * 
 * CUSTOMIZE:
 * - Modify the layout and styling to match your brand
 * - Add additional content like downloadable resources or notes
 * - Consider adding social sharing or progress indicators
 */
const CourseContent = ({
  lesson,
  onPrevious,
  onNext
}: {
  lesson: Lesson;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Lesson title and navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="md:hidden"
            aria-label="Previous lesson"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            className="hidden md:flex"
          >
            Previous
          </Button>

          <h1 className="text-xl md:text-2xl font-bold truncate">{lesson.title}</h1>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="md:hidden"
            aria-label="Next lesson"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onNext}
            className="hidden md:flex"
          >
            Next
          </Button>
        </div>

        {/* Media content - uses the MediaEmbed component */}
        <MediaEmbed
          type={lesson.mediaType}
          url={lesson.videoUrl}
          title={lesson.title}
          aspectRatio="16:9"
        />

        {/* Lesson content - customize this with your actual content */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Answers to any interview question has three distinct parts: beginning, middle, and end. Each
            part requires different skills and techniques to deliver a solid answer.
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Main CourseClient component
 * Manages the course UI, lesson navigation, and sidebar
 */
export default function CourseClient() {
  // State for tracking the active lesson - change the default if needed
  const [activeLesson, setActiveLesson] = useState(courseData.lessons[1].id);
  const currentLesson = courseData.lessons.find(l => l.id === activeLesson) || courseData.lessons[0];
  const [showSidebar, setShowSidebar] = useState(false);

  const currentIndex = courseData.lessons.findIndex(l => l.id === activeLesson);

  // Navigation handlers
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveLesson(courseData.lessons[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < courseData.lessons.length - 1) {
      setActiveLesson(courseData.lessons[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden relative">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 z-50 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        aria-label={showSidebar ? "Close menu" : "Open menu"}
      >
        {showSidebar ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Sidebar - shows course navigation */}
      <div className={cn(
        "absolute md:relative inset-0 z-40 md:z-auto",
        showSidebar ? "block" : "hidden md:block"
      )}>
        <CourseSidebar
          course={courseData}
          activeLesson={activeLesson}
          setActiveLesson={(id) => {
            setActiveLesson(id);
            setShowSidebar(false); // Close sidebar on mobile when lesson is selected
          }}
        />
      </div>

      {/* Content - displays the selected lesson */}
      <CourseContent
        lesson={currentLesson}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
} 