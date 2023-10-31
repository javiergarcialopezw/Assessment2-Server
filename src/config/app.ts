require("dotenv").config();

export const appConfig = {
  PORT: Number(process.env.PORT) || 80,
  GITHUB: {
    ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN || "",
    OWNER: process.env.GITHUB_OWNER || "",
  },
};
