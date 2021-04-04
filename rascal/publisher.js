const Broker = require('rascal').BrokerAsPromised;
const config = require('./config.json');

async function rascal_produce(){
    console.log("Publishing");
    var msg = 'Hello rabbit 4-a!';
    const broker = await Broker.create(config);
    broker.on('error', console.error);
    const publication = await broker.publish('demo_publication', msg);
    publication.on('error', console.error);
    console.log("Published")
}

rascal_produce().catch(console.error);