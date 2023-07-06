const isProduction = process.env.NODE_ENV === "production";

const baseUrl = isProduction
  ? "https://orcinus.com/api"
  : "http://localhost:4000/api";

export default baseUrl;
