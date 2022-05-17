import  { SQSClient } from "@aws-sdk/client-sqs";
import 'dotenv/config'
// Set the AWS Region.
const REGION = process.env.AWS_REGION;

// Create SQS service object.
export const sqsClient = new SQSClient({ region: REGION });
