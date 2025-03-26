// app/api/get-product/route.ts
import { fetchProductsFromAccurate } from '@/actions/accurate/getProduct';
import { createProductInSupabase } from '@/actions/supabase/addProduct';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const accurateData = await fetchProductsFromAccurate();
        console.log(fetchProductsFromAccurate)
        if (accurateData.error) {
            console.error("Error fetching from Accurate:", accurateData.error);
            return NextResponse.json({ error: accurateData.error }, { status: 500 });
        }

        // Mengirimkan array accurateData.d ke createProductInSupabase
        const products = await createProductInSupabase(accurateData.d);

        if (products.error) {
            console.error("Error creating product in Supabase:", products.error);
            return NextResponse.json({ error: products.error }, { status: 500 });
        }

        console.log("Products created:", products);
        return NextResponse.json({ message: "Products created successfully", data: products }, { status: 200 });
    } catch (err) {
        console.error("Unexpected error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}