/**
 * Represents a vote for a coffee option
 */
export interface Vote {
  option: string;
  votes: number;
}

/**
 * Available coffee options for voting
 */
export type CoffeeOption = "Espresso" | "Cappuccino" | "Latte";

/**
 * Statistics for all coffee options
 */
export interface VoteStats {
  espresso: number;
  cappuccino: number;
  latte: number;
}
