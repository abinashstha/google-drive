import { google } from 'googleapis';
import { useEffect } from 'react';
import React from 'react';
google.options({
  http2: true,
});
const Test = () => {
  const blogger = google.blogger({
    version: 'v3',
    auth: 'YOUR API KEY',
  });

  const params = {
    blogId: '3213900',
  };
  async function runSample() {
    try {
      const res = await blogger.blogs.get(params);
      //   console.log(`The blog url is ${res.data.url}`);
    } catch (error) {
      //   console.error;
    }
  }
  useEffect(() => {
    runSample();
  }, []);
  return <div>Test</div>;
};

export default Test;
