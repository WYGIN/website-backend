/**
 * Default config to be used if environment specific config for the specific key is absent
 * Every config key to be added to `default.js` to keep a track of all config keys used in the project.
 * Use placeholders as values wherever required.
 *
 * Documentation: https://github.com/lorenwest/node-config/wiki/Configuration-Files
 */

const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  port: 3000,
  enableFileLogs: true,
  enableConsoleLogs: false,

  githubOauth: {
    clientId: "2bfae6ca8d1170ab6ddd",
    clientSecret: "db479962d72eaa2fa373d1b386a43033fdbbb4fb",
  },

  firestore: `{
  "type": "service_account",
  "project_id": "rds-backend-node",
  "private_key_id": "28af700130d8b92ba6d74d300be6d5828d8f89de",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfKdZ6slHMLF5U\\nq5CY2Bg1S1ndrs5kdSa+/MMoQeWf6BIA/rdGxeYrS3XVapAgJJbZ8XC3q+1DeH8Y\\n5bZzGaCOebtfYuAo6lGUz6hlNacksGaKXfgO9VOl/azOgzotfwT/5DP9ITTBA8X4\\nn26x2TwhKBCryZY3cJlrpeUFo/7FlpTjyAPQDEnJ1ke9qjTzoI1XKT9XKp5jJvUB\\nekg65/epLrZm3ISHGHa9j3bosRzrNN6HtlKqSc+agxgACJHpvoEZRns37PE1tAgl\\nj9TV7b3EQDp6nb5PKa6TX9jNly32WgV+4AYVT8xI7dXzpQTSNl/hpSP+Qc8KVA7o\\njVM/g07XAgMBAAECggEABGpKstijgEBy1XJ07miAM2pFseqZexvs2Tt1xnYdgpQT\\ne8eVGfd/bRAI0sTD/sBFFwKll9LDIC4FiJFGwGajl5A07G53vWrSnIguKbCVVGU4\\nUvpMWU3g5iflVU06nex6HQcdkhYLupb6NO1nSrO2AU11OO68pgkPmHbfpYppFN4P\\nS/7xSkF7D/9H4MGAsrk66IrVoZNvYxlLgYBe1kARu9NYIkZO7rW1AuI/8Y/+cZKh\\nEw1ba+YKtbjcOrHueK6EXixKnJJ3ANTYioJenT62HurTuDTr62Uy29VvMn4e+Msm\\n+jUfBmx5CigZOtQo3MtxAwg1T8c6dbm+h8uPzkdBEQKBgQDM1vPbcAf3WmSV/P8G\\nTY8PN7Kvtll+nqNgxMZRFtlJO3aTpiMXNatbMpIL48oOGp/zZ+w0o2K0QxiPDyGd\\n/sqrQanXMCorD2HRrpda2yEgEzTVopUjX0XnMc7C6+U3XnxetTR+AuQyq3wgW6Yy\\nTW2n07obZtckFT0QkbWukirUKwKBgQDG6m+3jhhp4kzRkkmIvOPrtVNVRfuDq6J5\\nFrNav/OltoJZuVb4BHOf0zDW6L+hCnIv4uWmcJbB0SPaZOkKpLAYxcbGRHDhSPuP\\nRLZq03dfOO/8fvLm7psVPyq1kzeHyNoFyV/hsZxltPDPX3lfwvsoW3nFSMQxKOFy\\nt22GkMB+BQKBgBq8a7PWmZOVfs986CSAdw27bV015dR7DEQTKvdmjhHa6w02gBoF\\nbUpH/XwDzVmt6/avN8tfEAELSOdTSEYA/Z8AwRRPOxHHvjLKIQNA2r//AcRopiKp\\nysv0WlJiy9ZAROdvq1xPME3UyCzJCZZDOO7Q2de9wpL5GrFQ82/HsENlAoGAKxDk\\nwRvtozcQpKsEaqtiuUyXzzWIn9hQI+FLUZGPgchC7oQXFTl5gxfpUg4wNwCY+k8o\\no2Fq8mmCVq1UWy6Oxb5EK/bzbYMsm7cnu3cvOBmOs98UXfU49F+psog+FJLiyS/x\\nJ18Z2ldTb8Je9+GyGOm9Mn5vo6kTLpASEXlTg7UCgYAfuRg2a3WZtuBN/jOb1My6\\nfmRa0gQR5WBHuNjvw+lDBl1WCHD1+4dRTEfF9zQ3EY9qi73CxnfRkJmjt2UgO4dr\\nNBYAbr4idqVVLzfSaanGeb1jTbKVVsvrevYjrfpNlK7pwuvQ+/R3teeD+cUzkwxB\\nLxyqG3mMcwk0mNsMjQjgvg==\\n-----END PRIVATE KEY-----\\n",
  "client_email": "firebase-adminsdk-88cdr@rds-backend-node.iam.gserviceaccount.com",
  "client_id": "101447402106293807654",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-88cdr%40rds-backend-node.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}`,

  cors: {
    allowedOrigins: /(.*)/, // Allow realdevsquad.com, *.realdevsquad.com //allow all sources of traffic
  },

};
