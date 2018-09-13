module.exports = {
   development: {
       client: 'mysql',
       connection: {
           host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
           user: 'hz672535ragvqiem',
           password: 'utec2uop2kj90ywp',
           database: 'cy4y8t572n0socmm'
       }
   },
   production: {
       client: 'mysql',
       connection: process.env.JAWSDB_URL,

   }
}
