import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme cookie:", theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "10", {});
  console.log(cookieStore.get("resultsPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "set-Cookie": "theme=dark",
    },
  });
}
