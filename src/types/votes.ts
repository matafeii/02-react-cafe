/**
 * Available vote types
 */
export type VoteType = "good" | "neutral" | "bad";

/**
 * Votes statistics interface
 */
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

/**
 * Props for components that display vote statistics
 */
export interface VoteStatsProps {
  votes: Votes;
}
