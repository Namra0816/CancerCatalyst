export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_ITLf0HESxP7W@ep-purple-dawn-a5422plp-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_ITLf0HESxP7W@ep-purple-dawn-a5422plp-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
