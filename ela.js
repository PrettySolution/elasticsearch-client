"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var elasticsearch_1 = require("@elastic/elasticsearch");
var client = new elasticsearch_1.Client({
    node: 'http://localhost:9200'
});
client.info()
    .then(console.log)
    .catch(console.log);
