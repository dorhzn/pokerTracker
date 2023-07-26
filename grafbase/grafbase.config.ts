import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  pokerSessions: g
    .relation(() => PokerSessions)
    .list()
    .optional(),
});

const PokerSessions = g.model("PokerSessions", {
  date: g.date(),
  initialAmount: g.int(),
  finalAmount: g.int(),
  profit: g.int(),
  host: g.string(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
