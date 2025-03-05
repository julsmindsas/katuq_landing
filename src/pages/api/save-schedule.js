import { promises as fs } from 'fs'
import path from 'path'

export async function post({ request }) {
    const data = await request.json()
    const filePath = path.join(process.cwd(), 'data', 'schedules.json')
    const schedules = JSON.parse(await fs.readFile(filePath, 'utf-8'))
    schedules.push(data)
    await fs.writeFile(filePath, JSON.stringify(schedules, null, 2))
    return new Response(JSON.stringify({ message: 'Schedule saved' }), { status: 200 })
}
