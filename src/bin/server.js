import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

const host = process.env.NODE_HOST || '0.0.0.0';
const port = process.env.NODE_PORT || 3000;

const app = express();

app.use('/core/invite', bodyParser.json());

app.listen(port, host, () => console.log(`Server running on port ${port}`));
