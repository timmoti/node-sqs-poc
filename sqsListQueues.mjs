// Import required AWS SDK clients and commands for Node.js
import { ListQueuesCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "./libs/sqsClient.mjs";

const run = async () => {
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.error(err, err.stack);
  }
};

run();
