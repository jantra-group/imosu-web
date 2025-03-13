type InstagramPost = {
      id: string;
      caption?: string;
      media_type: string;
      media_url: string;
      thumbnail_url?: string;
      permalink: string;
};

type InstagramResponse = {
      data: InstagramPost[];
};

export async function GET() {
      const token = process.env.INSTAGRAM_ACCESS_TOKEN;
      if (!token) {
            return new Response(
                  JSON.stringify({ error: "Access token is missing" }),
                  { status: 400, headers: { "Content-Type": "application/json" } }
            );
      }

      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${token}`;

      try {
            const response = await fetch(url);

            if (!response.ok) {
                  throw new Error(`Instagram API returned error: ${response.statusText}`);
            }

            const data: InstagramResponse = await response.json();

            return new Response(JSON.stringify(data), {
                  status: 200,
                  headers: { "Content-Type": "application/json" },
            });
      } catch (error: unknown) {
            console.error("Error fetching Instagram feed:", error);
            return new Response(
                  JSON.stringify({ error: "Failed to fetch Instagram feed" }),
                  { status: 500, headers: { "Content-Type": "application/json" } }
            );
      }
}
