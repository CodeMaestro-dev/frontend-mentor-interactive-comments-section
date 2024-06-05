export default function Comment() {
  return (
    <div className="bg-white flex gap-3 items-start justify-between rounded-md px-3 py-5 col-start-4 col-end-10 h-fit">
      <img src="/images/avatars/image-juliusomo.webp" alt="juliu somo profile picture" className="w-8 h-8"/>

      <form className="flex justify-between items-start w-full gap-3">
        <textarea name="comment" id="comment" placeholder="Add a comment..." className="border border-gray-400 rounded-md px-3 py-2 flex-1"/>
        <input type="submit" value="SEND" className="bg-moderate-blue px-3 py-2 rounded-md text-white cursor-pointer"/>
      </form>
    </div>
  );
}
