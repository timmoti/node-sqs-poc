import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'

const sqsClient = new SQSClient({ region: process.env.AWS_REGION })

const queueURL = process.env.AWS_SQS_URL

export const sendTask = async (taskName, payload) => {
  const params = {
    DelaySeconds: 10,
    MessageAttributes: {
      taskName: { DataType: "String", StringValue: taskName }
    },
    MessageBody: JSON.stringify(payload),
    QueueUrl: queueURL
  }

  try {
    console.log({ queueURL })
    const data = await sqsClient.send(new SendMessageCommand(params))
    console.log("Success, message sent. MessageId", data.MessageId)
    return data
  } catch (err) {
    console.error(err, err.stack)
  }
}

