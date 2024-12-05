module.exports = {
  apps: [
    {
      name: "curtyans",
      script: "build/server.js",
      exec_mode: "cluster",
      instances: 1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

// pm2 [start|restart|stop|delete] ecosystem.config.js --env production
