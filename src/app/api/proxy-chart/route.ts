import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('http://156.255.1.102:6523/task/chart', {
      timeout: 60000,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })
    return NextResponse.json(response.data)
  } catch (err) {
    console.error('Proxy error:', err)
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}
