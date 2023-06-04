/**
 * Default config to be used if environment specific config for the specific key is absent
 * Every config key to be added to `default.js` to keep a track of all config keys used in the project.
 * Use placeholders as values wherever required.
 *
 * Documentation: https://github.com/lorenwest/node-config/wiki/Configuration-Files
 */

//  const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  port: 3000,
  enableFileLogs: true,
  enableConsoleLogs: true,

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
  
  services: { 
    rdsApi: { 
      baseUrl: `http://localhost:3000`, 
    }, 
    discordBot: { 
      baseUrl: "DISCORD_BASE_URL", 
    }, 
  },
  
  cors: {
    allowedOrigins: /(https:\/\/([a-zA-Z0-9-_]+\.)?realdevsquad\.com$) | (localhost) | (.*)/, // Allow realdevsquad.com, *.realdevsquad.com //allow all sources of traffic
  },
  
    userToken: { 
     publicKey: 
       "-----BEGIN PUBLIC KEY-----\n" + 
       "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHo6sGbw8qk+XU9sBVa4w2aEq01i\n" + 
       "oKDMFFQa9mPy0MRScTCsrfEjbypD4VqIjJcwXGmDWKVhMcJ8SMZuJumIJ10vU9ca\n" + 
       "WSh/aHhAxiOIqOEe54IyYTwjcn5avdZry3zl62RYQ7tDZCPAR/WvFCIkgRXwjXfC\n" + 
       "Xpm4LR6ynKDMvsDNAgMBAAE=\n" + 
       "-----END PUBLIC KEY-----", 
     privateKey: 
       "-----BEGIN RSA PRIVATE KEY-----\n" + 
       "MIICWwIBAAKBgHo6sGbw8qk+XU9sBVa4w2aEq01ioKDMFFQa9mPy0MRScTCsrfEj\n" + 
       "bypD4VqIjJcwXGmDWKVhMcJ8SMZuJumIJ10vU9caWSh/aHhAxiOIqOEe54IyYTwj\n" + 
       "cn5avdZry3zl62RYQ7tDZCPAR/WvFCIkgRXwjXfCXpm4LR6ynKDMvsDNAgMBAAEC\n" + 
       "gYAhxa2QA+tIkA7ALxyahZqX7PhX/XRceYb0Zi7GFwVP+WeFB3FYO24vw2m01h3i\n" + 
       "eF5QWRZZO63ACw8gpLbjt9cIJoGU0HG2qa81hc+EuxEIQMxZKYWc4Xh2YeMxZ0Z3\n" + 
       "vOyd8ZtimVoLnP4rQBiX/NL6uFNJ86kvy4H3v6MGQaBgAQJBAOvwj49kH14XbONp\n" + 
       "p925+AN5/4m44i0dA4PXfif6qRS/e40Y9c+yvvHhcG7evLo611TZvF0nE/nRcaG0\n" + 
       "19VXDgECQQCEnx5Yl6DceCGhfSIAA/TmbquTBDXlhQpFxXFlAx0rpVZa9DKyAGFB\n" + 
       "2Xt+BP0Po9cwV7GSEqjoWXsqpx9AfIrNAkEAgtpRFGqoBuwhBOMlKZCpX2w68Cvs\n" + 
       "rK6Js4ZBPnUDbzFfmXp9Yeq1gbrRO3wm2XYm1LVJhbRVnNivF8sPZQ+6AQJAOqNk\n" + 
       "NoWsgW64Z/+89cbKFMzgHdvhvL7rQNhBAAm1byPmn8aTV7LlTclMWfb4sV6e+ef8\n" + 
       "QnrvpfRSihRktA2dDQJAH+dQBx3nG3bZ9khVAZQ1jTJ7j0cKixaGndFuYS1TJvJ2\n" + 
       "Zzn584h/xbSIcP9/4SXmEK3wtoueUtMkvS3yKTvk+w==\n" + 
       "-----END RSA PRIVATE KEY-----", 
   }, 
  
   botToken: { 
     botPublicKey: 
       "-----BEGIN PUBLIC KEY-----\n" + 
       "MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBK3CkprcpAYxme7vtdjpWO\n" + 
       "gFFjoYsqU3OmhMEty/s1gnW5tgbK4ief4xk+cU+mu3YvjzWudT/SV17tAWxL4Y+G\n" + 
       "incJwL5gpQwlnw9qOAdRGkpBriQLec7kNVIydZXbUitziy+iSimxNzdDmjvlK9ZG\n" + 
       "miVLZm+MePbUtgaIpfgd+4bRWzudlITiNmWY7HppLzyBw+037iEICM4kwPPFI+SO\n" + 
       "GJhpAAmD6vk0MeZk1NeQmyQp/uOPpWmVRzgyK+XVc6AwZHV+/n6xAIT91/DjJlD1\n" + 
       "N+nS7Sqo3RJ04+KlNRUclzINOC7JBYkKtG7YQ0U9nNLkRrRlON+O6tY4OT86T1O1\n" + 
       "AgMBAAE=\n" + 
       "-----END PUBLIC KEY-----", 
     botPrivateKey: 
       "-----BEGIN RSA PRIVATE KEY-----\n" + 
       "MIIEoQIBAAKCAQBK3CkprcpAYxme7vtdjpWOgFFjoYsqU3OmhMEty/s1gnW5tgbK\n" + 
       "4ief4xk+cU+mu3YvjzWudT/SV17tAWxL4Y+GincJwL5gpQwlnw9qOAdRGkpBriQL\n" + 
       "ec7kNVIydZXbUitziy+iSimxNzdDmjvlK9ZGmiVLZm+MePbUtgaIpfgd+4bRWzud\n" + 
       "lITiNmWY7HppLzyBw+037iEICM4kwPPFI+SOGJhpAAmD6vk0MeZk1NeQmyQp/uOP\n" + 
       "pWmVRzgyK+XVc6AwZHV+/n6xAIT91/DjJlD1N+nS7Sqo3RJ04+KlNRUclzINOC7J\n" + 
       "BYkKtG7YQ0U9nNLkRrRlON+O6tY4OT86T1O1AgMBAAECggEAAhInHV0ObEuRiOEJ\n" + 
       "mSP5pTCNj9kHNYuLdn7TrUWoVGmgghu0AmbRO84Xg6+0yWMEOPqYPJRHyLTcDmhs\n" + 
       "q4i45Lrt4hov6hKGzH+i+IhGQ4sbpMeBfcPH4m5LMNQp6iBSzWZ7Ud0FXD6vy7H3\n" + 
       "mDZnPhrDj1ttGJC8G1RRx/P3cjTccU3lsae6wNjkXaSveWGgPS3m0x95eOPPwa2C\n" + 
       "KvVLx+kYr2r0uLF5vHN6H9uWqUTWo1GVX3nO+obapYbtcIqCbGQI4eTkvgq0qG7J\n" + 
       "Nh5IwYJz0bzYFfSQSRwRz9JaCzFRiP55aZnJgk2um5JdbxYCHpw5E1NV/7OsPXlE\n" + 
       "e4vGHQKBgQCSD/ZQu/1TeyqBF8RRdl9YtOhVAFJDiHTPFNNz9V8eak+x6hFOOGOf\n" + 
       "QHnbg0X4meYuilaBwXiEsSswPuVAW87VnRHrR2yyyC8knCMcvii3g9q+ed0+ri2+\n" + 
       "cslDPaDkcvl98qoZEfv/lk7BA7jPFToLMNfNdoHrZXVezZxetVbsuwKBgQCDNJFB\n" + 
       "XDxXlkIVkT8ozD/qvyQsDXz/wlOob6AkY0J7IdND5jPCi799Q1O1H7pJu50cAi+O\n" + 
       "ar5EuFxA8TfTKJnIVJBZFrN0O1un86WhCvB8PjgguxqtmJlEPVveiZXnTTfvXVeq\n" + 
       "G6+3eU/yRw9VDX61iidbWNc+SbMJ9sFQPKNyTwKBgFoaFqx/CyqwU+wGqUhHaVHj\n" + 
       "Z17oL9cRGl2UT0y9FMxCcJ8j8UD7cBkRQRq0xDkzVtdm5y5sFthkImxEoE8vU0xa\n" + 
       "9G7bRKaU7t/6oX5dn+h1Ij9WFbFQ6U8OqDEel13Vvyp+w4drnLRyGGrgzOSSB5hX\n" + 
       "rQhGDqcTk2/EDq4t1015AoGAWDnv9vhz5x22AFS0GNYHoO25ABpt1Hmy0Y+GKxHH\n" + 
       "8Y6URpM0ePyJ3kx4rFHSbaRICD58BhNHMGScPFs4A7jIeApNKmr2bxE/F9fhp0H4\n" + 
       "5kLccT3/uX3kihuMfD8eWvP0yfOFcHC/nutnU+5uo+24J5Dn2CgMTOk4CFoyMack\n" + 
       "7UcCgYBHdbFcXWGHfEqLJZChRrKhWLxn9jkJ0apvnO1j6c5yiAo3yJkSV5Z9IdAc\n" + 
       "lgOC/dJBTZLcBtixdERqcJ+o4P7oFRS6hz/9n4s+kkzxXVqEmtJmBQvHUo3I/Qgc\n" + 
       "Ba+XMCP64pXPC3r1llhKRwIl+6UFn+QlpbxtgQjhbULnSbc7fw==\n" + 
       "-----END RSA PRIVATE KEY-----", 
   }, 
  
   rdsServerlessBot: { 
     rdsServerLessPublicKey: "RSA PUBLIC KEY", 
     rdsServerLessPrivateKey: "RSA PRIVATE KEY", 
     ttl: 60, 
   },
  
};
