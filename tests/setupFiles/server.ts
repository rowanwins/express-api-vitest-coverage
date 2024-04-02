import { startupTestServer } from '../../src/index';

export async function setup() {
  await startupTestServer();
  console.log('TEST SERVER RUNNING');
}