"use client";

/**
 * MediaEmbed Component
 * 
 * This component handles embedding different types of media content:
 * - YouTube videos
 * - Loom videos
 * - ToughTongue AI interactive voice agents
 * - Generic iframes
 * - Placeholder for when no content is provided
 * 
 * CUSTOMIZATION GUIDE:
 * 1. To add a new media type, extend the MediaEmbedType type and add a new case in renderEmbed
 * 2. For ToughTongue AI integration, create your scenarios at https://app.toughtongueai.com/
 *    and use the embed URL with mediaType: "toughtongue"
 * 3. Adjust the styling and appearance to match your branding
 */

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { PlayCircle } from "lucide-react";

/**
 * Supported media embed types
 * - loom: For Loom video embeds
 * - youtube: For YouTube video embeds 
 * - iframe: For generic iframe embeds
 * - toughtongue: For ToughTongue AI interactive voice agent embeds
 * - placeholder: Default placeholder when no content is provided
 */
type MediaEmbedType = "loom" | "youtube" | "iframe" | "toughtongue" | "placeholder";

/**
 * MediaEmbed component props
 * @property {MediaEmbedType} type - Type of media to embed
 * @property {string} url - URL of the media to embed
 * @property {string} title - Title of the media (for accessibility)
 * @property {string} aspectRatio - Aspect ratio of the media (16:9, 4:3, or 1:1)
 * @property {string} height - Custom height for the embed (especially for ToughTongue AI embeds)
 * @property {string} allow - Permissions to grant the iframe (for custom iframes)
 * @property {string} frameBorder - Border width for the iframe
 */
interface MediaEmbedProps {
  type?: MediaEmbedType;
  url?: string;
  title?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  height?: string;
  allow?: string;
  frameBorder?: string;
}

export function MediaEmbed({
  type = "placeholder",
  url = "",
  title = "Video content",
  aspectRatio = "16:9",
  height,
  allow = "",
  frameBorder = "0",
}: MediaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Calculate aspect ratio class
  const aspectRatioClass = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  }[aspectRatio];

  // Render appropriate embed based on type
  const renderEmbed = () => {
    switch (type) {
      case "youtube":
        // Handle YouTube embed
        // Extract video ID from different YouTube URL formats
        const youtubeId = url.includes("youtu.be") 
          ? url.split("/").pop() 
          : url.includes("?v=") 
            ? new URLSearchParams(url.split("?")[1]).get("v") 
            : url;
        
        return (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "loom":
        // Handle Loom embed
        // Works with both full Loom share URLs and just the video ID
        return (
          <iframe
            src={url.includes("/share/") ? url : `https://www.loom.com/embed/${url}`}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "toughtongue":
        // ToughTongueAI specific embed
        // Requires microphone permissions for voice interaction
        return (
          <iframe
            src={url}
            title={title}
            width="100%"
            height={height || "700px"}
            frameBorder={frameBorder}
            allow="microphone; camera; display-capture"
            className="w-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "iframe":
        // Generic iframe embed
        // For any other type of embeddable content
        return (
          <iframe
            src={url}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            height={height}
            allow={allow}
            frameBorder={frameBorder}
          />
        );
      
      case "placeholder":
      default:
        // Placeholder for when no content is provided
        // Customize this to match your branding
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
            <PlayCircle className="h-16 w-16 text-gray-400" />
            <p className="mt-4 text-gray-500">Video or interactive content will be displayed here</p>
            <p className="text-sm text-gray-400 mt-2">Supports Loom, YouTube, or custom iframes</p>
          </div>
        );
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className={`p-0 ${type === "toughtongue" ? "" : aspectRatioClass}`}>
        {renderEmbed()}
        {/* Loading indicator - shown while the iframe is loading */}
        {isLoading && type !== "placeholder" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 