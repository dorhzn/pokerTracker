import { g, auth, config } from "@grafbase/sdk";

// @ts-ignore
const User = g
  .model("User", {
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
  })
  .auth((rules) => {
    rules.public().read();
  });

// @ts-ignore
const PokerSessions = g
  .model("PokerSessions", {
    date: g.date(),
    initialAmount: g.int(),
    finalAmount: g.int(),
    profit: g.int(),
    host: g.string(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read(), rules.private().create().delete().update();
  });

const jwt = auth.JWT({
  issuer: "grafbase",
  secret: g.env("NEXTAUTH_SECRET"),
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
