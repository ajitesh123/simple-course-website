# Simple Course Website Template

A flexible and customizable Next.js-based course website template powered by Tough Tongue AI integration. This template allows you to quickly create interactive coaching websites for various purposes like book writing coaching, apology delivery coaching, or any skill-based coaching.

## Features

- ✅ Modern, responsive design with dark mode support
- ✅ Interactive voice-based learning through Tough Tongue AI
- ✅ Course sidebar navigation
- ✅ Multiple media embed types (YouTube, Loom, Tough Tongue AI, iframes)
- ✅ Built with Next.js and TypeScript for type safety
- ✅ Styled with Tailwind CSS for easy customization

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser

## How to Customize This Template

### 1. Modify the Landing Page (app/page.tsx)

The landing page contains several key sections you should update:

- **Header**: Change the course name and description
- **BenefitsGrid**: Update the benefits to match your coaching topic
- **CourseModules**: Add your specific modules
- **CTAButtons**: Customize call-to-action text if needed
- **Footer**: Update links to your resources

### 2. Update Course Content (app/course/CourseClient.tsx)

The `courseData` object contains all information about your course:

```typescript
const courseData: Course = {
  title: "Your Course Title",
  lessons: [
    {
      id: "unique-lesson-id",
      title: "Lesson Title",
      duration: "Duration (e.g., 5:00)",
      videoUrl: "URL to video or interactive content",
      mediaType: "youtube|loom|toughtongue|iframe|placeholder"
    },
    // Add more lessons...
  ]
};
```

### 3. Integrate with Tough Tongue AI

This template supports Tough Tongue AI embeddings for interactive voice coaching:

1. Create your scenarios in the [Tough Tongue AI platform](https://app.toughtongueai.com/)
2. Get the embed URL for your scenario
3. Add it to your course lessons with `mediaType: "toughtongue"`

### 4. Customize Theme and Styling

The website uses Tailwind CSS for styling:

- **globals.css**: Modify base styles and theme colors
- **component files**: Update specific component styles as needed

### 5. Adapt for Your Coaching Niche

Depending on your coaching niche, you should:

- **Book Writing Coach**: Add modules focused on story structure, character development, etc.
- **Apology Delivery Coach**: Create scenarios for different types of apologies
- **Dating Coach**: Include conversation practice for various dating scenarios
- **Language Learning**: Structure content around vocabulary, grammar, and conversational practice

## Coaching Ideas and Content Suggestions

Here are various coaching niches you can build with this template, along with detailed content suggestions for each:

### Book Writing Coach

Listens to storytelling sessions, asks clarifying questions, tracks character arcs, then merges transcripts into an outline, suggests chapter breaks, and drafts prose in your voice.

**Content Suggestions:**
- **Module 1: Story Foundations**
  - Lesson: Creating Compelling Characters
  - Lesson: Building Your World
  - Lesson: Plotting Your Narrative Arc
- **Module 2: Writing Techniques**
  - Lesson: Finding Your Voice
  - Lesson: Dialogue That Feels Real
  - Lesson: Show Don't Tell Masterclass
- **Module 3: Editing and Refinement**
  - Lesson: Self-Editing Basics
  - Lesson: Receiving and Incorporating Feedback
  - Lesson: Polishing Your Final Draft

### Elder-Care Check-In

Makes daily wellness calls to confirm medication, meals, and mood; logs adherence, flags anomalies, and emails caregivers a concise report.

**Content Suggestions:**
- **Module 1: Daily Wellness**
  - Lesson: Medication Reminders
  - Lesson: Meal Planning and Nutrition
  - Lesson: Activity and Exercise Tracking
- **Module 2: Mental Wellbeing**
  - Lesson: Mood Tracking Conversations
  - Lesson: Memory Exercises
  - Lesson: Social Connection Planning
- **Module 3: Caregiver Support**
  - Lesson: Creating Effective Reports
  - Lesson: Recognizing Warning Signs
  - Lesson: Communication Best Practices

### Multilingual Concierge

Seamlessly switches languages (e.g., English → Japanese → German) to handle bookings, taxis, late check-outs, and more.

**Content Suggestions:**
- **Module 1: Hotel Services**
  - Lesson: Room Booking and Reservation Handling
  - Lesson: Special Requests and Accommodations
  - Lesson: Check-in and Check-out Procedures
- **Module 2: Local Guide**
  - Lesson: Restaurant Recommendations
  - Lesson: Transportation Services
  - Lesson: Cultural Attractions and Events
- **Module 3: Problem Solving**
  - Lesson: Handling Complaints
  - Lesson: Emergency Situations
  - Lesson: Lost and Found Services

### Kid's Storytelling Guide

Lets children steer a choose-your-own-adventure tale while narrating the unfolding story.

**Content Suggestions:**
- **Module 1: Adventure Basics**
  - Lesson: Creating Your Hero
  - Lesson: Choosing Your Setting
  - Lesson: Understanding Story Decisions
- **Module 2: Story Themes**
  - Lesson: Fantasy Adventures
  - Lesson: Space Exploration
  - Lesson: Animal Kingdom Stories
- **Module 3: Storytelling Skills**
  - Lesson: Adding Details to Your Story
  - Lesson: Creating Exciting Endings
  - Lesson: Sharing Your Stories with Others

### Dynamic Meditation Guide

Leads breathing or body-scan sessions, adapting pace when you sound anxious or low-energy.

**Content Suggestions:**
- **Module 1: Meditation Foundations**
  - Lesson: Breath Awareness Basics
  - Lesson: Body Scanning Technique
  - Lesson: Setting Your Meditation Space
- **Module 2: Targeted Practices**
  - Lesson: Anxiety Reduction Meditation
  - Lesson: Energy-Boosting Sessions
  - Lesson: Sleep Preparation Meditation
- **Module 3: Advanced Techniques**
  - Lesson: Extended Meditation Sessions
  - Lesson: Integrating Mindfulness into Daily Life
  - Lesson: Creating Your Personal Practice

### Pronunciation & Accent Tutor

Guides sentence-by-sentence practice, highlights problem phonemes, replays model pronunciations, tracks mispronunciation heat-maps, and schedules spaced-repetition drills.

**Content Suggestions:**
- **Module 1: Phonetic Foundations**
  - Lesson: Understanding Vowel Sounds
  - Lesson: Mastering Consonants
  - Lesson: Stress and Intonation Patterns
- **Module 2: Accent Refinement**
  - Lesson: American English Accent Drills
  - Lesson: British English Pronunciation
  - Lesson: Common Problem Sounds by Language
- **Module 3: Conversation Practice**
  - Lesson: Everyday Conversations
  - Lesson: Professional Speaking
  - Lesson: Public Speaking Pronunciation

### Language-Exchange Referee

Moderates two learners alternating languages, spots misunderstandings, and offers clarifying paraphrases.

**Content Suggestions:**
- **Module 1: Exchange Fundamentals**
  - Lesson: Setting Up Effective Exchanges
  - Lesson: Basic Conversation Structure
  - Lesson: Handling Misunderstandings
- **Module 2: Topic Explorations**
  - Lesson: Daily Life Conversations
  - Lesson: Cultural Exchange Topics
  - Lesson: Professional Vocabulary
- **Module 3: Advanced Techniques**
  - Lesson: Idiomatic Expressions
  - Lesson: Debate and Discussion Skills
  - Lesson: Literature and Media Discussions

### Habit Accountability Coach

Conducts daily voice check-ins on workouts, journaling, and more—delivering encouragement or gentle nudges; logs your progress, flags missed days, and auto-schedules calendar alerts or Slack reminders to keep you on track.

**Content Suggestions:**
- **Module 1: Habit Formation**
  - Lesson: Identifying Key Habits
  - Lesson: Setting Realistic Goals
  - Lesson: Creating Your Tracking System
- **Module 2: Accountability Methods**
  - Lesson: Daily Check-in Structure
  - Lesson: Positive Reinforcement Techniques
  - Lesson: Overcoming Common Obstacles
- **Module 3: Long-term Success**
  - Lesson: Adapting Habits Over Time
  - Lesson: Recovering from Setbacks
  - Lesson: Building Habit Stacks

### Wedding Speech Coach

Best-man speech rehearsal with live laughter/aww cues. Identifies overused clichés, recommends pacing, and formats final script.

**Content Suggestions:**
- **Module 1: Speech Fundamentals**
  - Lesson: Finding Your Theme and Tone
  - Lesson: Speech Structure and Flow
  - Lesson: Balancing Humor and Sentiment
- **Module 2: Delivery Practice**
  - Lesson: Voice Projection and Clarity
  - Lesson: Timing and Pacing
  - Lesson: Handling Audience Reactions
- **Module 3: Final Preparations**
  - Lesson: Memory Techniques
  - Lesson: Managing Nerves
  - Lesson: Day-of Speech Strategies

### Apology Delivery Coach

User practices apologizing for a mistake; agent models reactions (hurt, forgiving). Then use the transcript to check ownership language, propose a concise apology template, and set a follow-up reminder.

**Content Suggestions:**
- **Module 1: Apology Foundations**
  - Lesson: Understanding Impact
  - Lesson: Taking Ownership
  - Lesson: Avoiding Defensive Language
- **Module 2: Apology Scenarios**
  - Lesson: Personal Relationship Apologies
  - Lesson: Workplace Apology Techniques
  - Lesson: Public Apologies
- **Module 3: Rebuilding Trust**
  - Lesson: Follow-up Actions
  - Lesson: Consistent Behavior Change
  - Lesson: Managing Rejection

### Dump Me Coach

Practice ending relationships. AI companions will try to hold on and throw tantrums. Use transcript to detect blunt language, emotional tone, and offer softening alternatives.

**Content Suggestions:**
- **Module 1: Preparation**
  - Lesson: Clarifying Your Reasons
  - Lesson: Setting Boundaries
  - Lesson: Compassionate Communication
- **Module 2: Conversation Techniques**
  - Lesson: Opening the Conversation
  - Lesson: Handling Emotional Responses
  - Lesson: Staying Calm Under Pressure
- **Module 3: Aftermath Management**
  - Lesson: Post-Breakup Communication
  - Lesson: Self-Care After Difficult Conversations
  - Lesson: Moving Forward Healthily

### Night-Owl Shutdown Coach

At 11 PM it prompts, "State the task you're finishing and ETA." Ten minutes later it reminds you of your promise.

**Content Suggestions:**
- **Module 1: Evening Routine Design**
  - Lesson: Creating Wind-Down Triggers
  - Lesson: Task Completion Strategies
  - Lesson: Setting Up Your Environment
- **Module 2: Productivity Techniques**
  - Lesson: Time-Boxing Evening Tasks
  - Lesson: Priority Management
  - Lesson: Handling "One More Thing" Syndrome
- **Module 3: Sleep Improvement**
  - Lesson: Digital Detox Practices
  - Lesson: Relaxation Techniques
  - Lesson: Morning Preparation

### Court Trainer

Acts as opposing counsel in mock trials; Analysis / Workflow: Logs argument weaknesses, monitors case law citations, and builds a rebuttal outline.

**Content Suggestions:**
- **Module 1: Case Preparation**
  - Lesson: Organizing Case Materials
  - Lesson: Developing Strong Arguments
  - Lesson: Anticipating Opposition
- **Module 2: Trial Skills**
  - Lesson: Opening Statements
  - Lesson: Witness Examination Techniques
  - Lesson: Objection Handling
- **Module 3: Advanced Strategies**
  - Lesson: Rebuttal Construction
  - Lesson: Case Law Application
  - Lesson: Closing Argument Delivery

## Media Embedding Options

The `MediaEmbed` component supports multiple content types:

- **YouTube**: Regular YouTube video URLs
- **Loom**: Loom video sharing URLs
- **Tough Tongue AI**: Interactive voice practice scenarios
- **iframe**: Generic iframe embeds for other content
- **placeholder**: Placeholder for when no content is provided

## Project Structure

- **/app**: Main application code
  - **/components**: Reusable UI components
  - **/course**: Course page and related components
  - **/lib**: Utility functions
  - **page.tsx**: Landing page
  - **layout.tsx**: Root layout

## Contributing

Contributions, issues, and feature requests are welcome!

## License

[MIT](https://choosealicense.com/licenses/mit/)
