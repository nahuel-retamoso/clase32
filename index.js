const clusterServer = require('./cluster');
const forkServer = require('./fork');
const yargs = require('yargs/yargs')(process.argv.slice(2));
const args = yargs.default({
    'port': 8080,
    'modo': 'FORK'
}
).alias('p', 'port').argv;

if (args.modo === 'CLUSTER') {
      
    clusterServer();
} else {
    forkServer();
}