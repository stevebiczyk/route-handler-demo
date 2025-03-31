export const dynamic = "force-static"; // This will make the route static and not revalidate on every request

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Kitchen" },
    { id: 5, name: "Sports & Outdoors" },
  ];
  return Response.json({ categories }, { status: 200 });
}
