import { User, Session } from "next-auth";

export type FormState = {
  date: string;
  initialAmount: number;
  finalAmount: number;
  profit: number;
  host: string;
};

export interface PokerSessionsInterface {
  date: string;
  initialAmount: number;
  finalAmount: number;
  profit: string;
  id: string;
  createdBy?: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  description: string | null;
  avatarUrl: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  projects: {
    edges: { node: PokerSessionsInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface PokerSessionsForm {
  date: string;
  initialAmount: number;
  finalAmount: number;
  profit: number;
  host: string;
}
