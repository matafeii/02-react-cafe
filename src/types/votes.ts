/**
 * Available feedback options
 */
export type FeedbackOption = "good" | "neutral" | "bad";

/**
 * Feedback statistics
 */
export interface Feedback {
  good: number;
  neutral: number;
  bad: number;
}

/**
 * Props for components that handle feedback
 */
export interface FeedbackProps {
  onFeedback: (option: FeedbackOption) => void;
}

/**
 * Props for components that display feedback statistics
 */
export interface FeedbackStatsProps {
  stats: Feedback;
}
