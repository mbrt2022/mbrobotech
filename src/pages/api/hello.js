// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// NEXT.JS może być wykorzystywany jako backend, wszystko w tym pliku działa po stronie serwera

// console.log('') tutaj nie zadziała, ale wyświetli się w terminalu

// http://localhost:3000/api/hello - dostaniemy odpowiedź
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
