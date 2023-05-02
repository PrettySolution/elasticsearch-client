// src/index.ts
import { Client } from '@elastic/elasticsearch'

const client = new Client({
  node: 'http://localhost:9200'
})

client.info()
  .then(console.log)
  .catch(console.log)

