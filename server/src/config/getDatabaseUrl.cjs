const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/git-app-node_development",
      test: "postgres://postgres:postgres@localhost:5432/git-app-node_test",
      e2e: "postgres://postgres:postgres@localhost:5432/git-app-node_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
