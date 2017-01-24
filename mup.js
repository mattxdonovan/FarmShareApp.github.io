module.exports = {
  servers: {
    one: {
      host: 'ec2-52-53-216-176.us-west-1.compute.amazonaws.com',
      username: 'ec2-user',
      pem: './Farmshare.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'FarmShare',
    path: '../FarmShare',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'ec2-52-53-216-176.us-west-1.compute.amazonaws.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
