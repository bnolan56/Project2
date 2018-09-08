module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'jpw5eysx3yl53maa',
            password: 'eege6xw65ohddjao',
            database: 'bgoadoggejw67ejp'
        }
    },
    production: {
        client: 'mysql',
        connection: process.env.JAWSDB_URL,
       
    }
}