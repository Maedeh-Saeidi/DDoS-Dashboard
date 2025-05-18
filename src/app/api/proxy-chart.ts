import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://156.255.1.102:6523/task/chart', {
      timeout: 60000,
      responseType: 'json',
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch chart data' });
  }
}
