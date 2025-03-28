'use server';

import crypto from 'crypto';

function generateAccurateHeaders(signatureSecret: string) {
      const timestamp = Date.now().toString();
      const signature = crypto
            .createHmac('sha256', signatureSecret)
            .update(timestamp)
            .digest('base64');

      console.log("X-Api-Timestamp", timestamp);
      console.log("X-Api-Signature", signature);

      return {
            'X-Api-Timestamp': timestamp,
            'X-Api-Signature': signature,
      };
}

export async function fetchProductDetailFromAccurate(itemNo: string): Promise<any> {
      const apiKey = process.env.ACCURATE_API_KEY;
      const apiUrl = `${process.env.ACCURATE_API_URL}/api/item/detail.do?no=${itemNo}`;
      const signatureSecret = process.env.ACCURATE_SIGNATURE_SECRET;

      console.log("API URL:", apiUrl);

      if (!apiKey || !apiUrl || !signatureSecret) {
            return { error: "API Key, API URL, atau Signature Secret tidak ditemukan." };
      }

      try {
            const headers = generateAccurateHeaders(signatureSecret);

            const response = await fetch(apiUrl, {
                  method: 'GET',
                  headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        'X-Api-Timestamp': headers['X-Api-Timestamp'],
                        'X-Api-Signature': headers['X-Api-Signature'],
                  },
            });

            if (!response.ok) {
                  throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
            }

            const responseData = await response.json();
            return responseData;

      } catch (error) {
            console.error("Error fetching from Accurate:", error);
            return { error: (error as Error).message };
      }
}