import { updateProductsWithAccurateDetails } from '@/actions/supabase/addDetailProduct';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await updateProductsWithAccurateDetails();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}