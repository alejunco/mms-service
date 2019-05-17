import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import CoreRoutes from './routes/core';
import TwilioRoutes from './routes/twilio';

const host = process.env.NODE_HOST || '0.0.0.0';
const port = process.env.NODE_PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/core', CoreRoutes);
app.use('/twilio', TwilioRoutes);
// app.use(bodyParser.json()); //And so on.

app.listen(port, host, () => console.log(`Server running on port ${port}`));
