const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3001,
  jwtScret: process.env.JWT_SECRET || "Your_secret_key",
  db_name: "e-shopay",
  db_username: "postgres",
  db_password: "root",
  URL_DOMAIN: "",
};

export default config;
