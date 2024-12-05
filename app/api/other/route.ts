import { NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb';
import { dummy } from '@/models/dummy';

export async function GET() {
    try {
        await connectMongo();
        const posts = await dummy.find({});

        return NextResponse.json(posts, { status: 200 });
    } catch (error: any) {
        console.error('Server Error:', error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export const dynamic = "force-dynamic";