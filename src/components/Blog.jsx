export default function Blog(title, detail) {
    console.log(title);
    console.log(detail);
  return (
    <div className="max-w-[500px] flex gap-5 shadow-2xl p-3">

      <div className="h-[100px] w-[100px] shrink-0 rounded-full bg-[red]"></div>

      <div>
        <h1 className="font-bold text-xl">Accesbility Training</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia vitae laboriosam consequuntur exercitationem, corporis iure quam ab rerum earum nisi quos quasi voluptatem saepe deleniti tenetur ea ducimus! Accusantium.</p>

      </div>



    </div>
  )
}