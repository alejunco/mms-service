import fs from 'fs';
import rp from 'request-promise';
import request from 'request';

async function Download(uri, filename) {
  const headers = await rp.head(uri);
  console.log('content-type:', headers['content-type']);
  console.log('content-length:', headers['content-length']);

  return new Promise((resolve, reject) => {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', (err, result) => {
        if (err) reject(err);
        resolve();
      });
  });
}

export default Download;
