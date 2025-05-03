"use client";

/**
 * Course Sidebar Component
 * 
 * This component renders the sidebar navigation for course lessons.
 * It displays all lessons from the course data and highlights the active lesson.
 * 
 * CUSTOMIZATION GUIDE:
 * 1. Modify the styling classes to match your brand colors
 * 2. Add additional information to each lesson item if needed
 * 3. The active lesson highlighting uses teal colors by default - change the border-teal-500
 *    and bg-teal-100/dark:bg-teal-900/20 classes to use your brand color
 */

import { PlayCircle } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Lesson interface
 * Defines the structure of a lesson object
 * 
 * id: Unique identifier for the lesson
 * title: Display title of the lesson
 * duration: String representation of lesson duration (e.g., "5:00")
 */
interface Lesson {
  id: string;
  title: string;
  duration: string;
}

/**
 * Course interface
 * Defines the structure of a course object
 * 
 * title: Course title
 * lessons: Array of Lesson objects
 */
interface Course {
  title: string;
  lessons: Lesson[];
}

/**
 * CourseSidebar props interface
 * 
 * course: The course data object containing title and lessons
 * activeLesson: ID of the currently active/selected lesson
 * setActiveLesson: Function to call when a lesson is selected
 */
interface CourseSidebarProps {
  course: Course;
  activeLesson: string;
  setActiveLesson: (id: string) => void;
}

export const CourseSidebar = ({ 
  course,
  activeLesson,
  setActiveLesson
}: CourseSidebarProps) => {
  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-black border-r border-black/30 dark:border-gray-800 h-full overflow-y-auto">
      {/* Course title section - you can add course image/logo here */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{/* Add course.title here if needed */}</h2>
      </div>
      
      {/* Scrollable lessons list with max height calculation */}
      <div className="overflow-auto max-h-[calc(100vh-150px)]">
        <div className="py-4">
          <div className="space-y-1">
            {/* Map through all lessons and render them as buttons */}
            {course.lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson.id)}
                className={cn(
                  "w-full flex items-center p-3 text-left gap-3",
                  // Conditional styling for active lesson - customize these colors for your brand
                  activeLesson === lesson.id 
                    ? "bg-teal-100 dark:bg-teal-900/20 border-l-4 border-teal-500" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <div className="flex items-center gap-2 flex-1">
                  {/* Lesson icon - can be customized based on lesson type */}
                  <PlayCircle className="h-5 w-5 flex-shrink-0" />
                  {/* Lesson title */}
                  <span className="text-sm">{lesson.title}</span>
                </div>
                {/* Lesson duration */}
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({lesson.duration})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 