'use server';

import { syncProducts } from "./syncProduct";

export async function triggerSyncProducts() {
      const result = await syncProducts();
      if (result.error) {
            console.error("Error syncing products:", result.error);
            return { error: result.error };
      }
      console.log("Products synced successfully");
      return { message: "Products synced successfully" };
}