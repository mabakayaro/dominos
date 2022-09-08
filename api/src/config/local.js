/* eslint-disable */


module.exports = {
  port: process.env.PORT || 1337,
  node_env: process.env.NODE_ENV || 'development',
  env: 'LOCAL',
  app: 'app_local',
  websiteUrl: 'http://localhost:3500',
  apiUrl: 'http://localhost:1337',
  cdnUrl: 'http://localhost:3400',

  tokenSecret: `88783edc748a343438d576ec56a8a7e3d96ffc858d30aa528cc9f3946f678931
  200674c108c3cff8f2d27bd9cd11f8ed1a1e623e98a12b313ce822fa851f632d
  33356e5d764c6deb476c36256a4544c2cb5f8ec8302d55547cd4ef966e656c73
  9f58cc1a329d975b1f9d0d13dc2c4543dfb1e706e0e57381f27e48df92716469
  921e23ad264e676defe72bef7417fd2a9344ac0d7e738d0d08a002c2f67c6fb6
  1df28e0fd2f50d5ff81aee365040fbec74345cad22004de594ebfa2c3f71ba90
  9b900432eefeaa0e79707758d2e467d8f5e87545523190c3c84647147c15c20c
  c4467d2c34cb50b9901aa5d44a6c68afff4f56f1e699578b6b4d1032833a1447
  a500793c1d9f9840c61a2811a0790e8de42e51f866a1ce5bee3a84ba68031d5f
  7901ecc40e5ddc4a71eed6dbcb3c0622b3e7c4a977bdcc3186c5b664bd42417a`,
  disableCron: process.env.ENABLE_CRON !== undefined ? process.env.ENABLE_CRON :  false,
  sqldb: {
    user: process.env.DATABASE_USER || 'wsl_root',
    password: process.env.DATABASE_PASSWORD || '1234',
    host: process.env.DATABASE_HOST || '172.20.0.1',
    database: process.env.DATABASE_NAME || 'dominos',
    port: process.env.DATABASE_PORT || 3306,
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    options: {
      dialect: process.env.DATABASE_DIALECT || 'mysql',
      logging: false, // use DEBUG=sequelize:*  to see sql logs
    }
  },

  mail: {
    transport: 'smtp', // aws | gmail | sendgrid | smtp
    protocol: 'SMTP',
    options: {
      host: '127.0.0.1',
      port: 25,
      tls: {
        rejectUnauthorized: false
      }
    },
    from: 'hello@applocal.com'
  },
  sendgrid: {
    auth: {
      api_key: ''
    }
  },
  slack: {
    webhook: '',
    channel: '#app_dev'
  },

  google: {
    clientId: '',
    clientSecret: '',
    redirectUrl: '',
  },
  facebook: {
    clientId: '',
    clientSecret: '',
    redirectUrl: '',
    graphApiUrl: ''
  }
};


