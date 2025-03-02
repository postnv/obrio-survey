import { promises as fs } from "fs";

import { NextResponse } from "next/server";

// lets pretend we have feature flag or process.env
export async function GET(): Promise<NextResponse<string>> {
    const survey = process.env.SURVEY ?? 'astrology';
    const file = await fs.readFile(process.cwd() + `/public/surveys/${survey}.json`, 'utf8');

    return NextResponse.json(JSON.parse(file), {
        headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=300" }
    });
}