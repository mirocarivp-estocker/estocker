const client = new Appwrite.Client();

client
  .setEndpoint("https://SEU-ENDPOINT.appwrite.io/v1")
  .setProject("SEU_PROJECT_ID");

const account = new Appwrite.Account(client);
