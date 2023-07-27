const isProduction = process.env.NODE_ENV === "production";

const baseUrl = isProduction
  ? "https://orcin-LoadB-EL1JCQ8FGK3G-c427a6cf923b8fa0.elb.us-east-1.amazonaws.com/api"
  : "http://localhost:4000/api";

export default baseUrl;
