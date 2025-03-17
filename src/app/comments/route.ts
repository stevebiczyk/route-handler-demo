import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
// export async function POST(request: Request) {
//   try {
//     const bodyText = await request.text(); // Read raw body text
//     if (!bodyText) {
//       return new Response(JSON.stringify({ error: "Empty body" }), {
//         status: 400,
//       });
//     }

//     const comment = JSON.parse(bodyText); // Now parse JSON safely

//     const newComment = {
//       id: comments.length + 1,
//       text: comment.text,
//     };

//     return new Response(JSON.stringify(newComment), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Invalid JSON" }), {
//       status: 400,
//     });
//   }
// }
