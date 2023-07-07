const isProduction = process.env.NODE_ENV === "production";

const baseUrl = isProduction
  ? "http://localhost:4000/api"
  : "http://localhost:4000/api";

export default baseUrl;
