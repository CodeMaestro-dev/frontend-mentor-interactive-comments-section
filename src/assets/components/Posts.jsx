export default function Posts() {
  return (
    <div className="bg-white flex gap-3 items-start justify-between rounded-md px-3 py-5 col-start-4 col-end-10 h-fit">
      <div className="flex flex-col items-center bg-slate-100 rounded-md px-2 py-3 gap-1">
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-light-greyish-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
        <span className="text-moderate-blue font-bold">12</span>
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-light-greyish-blue"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex">
          <div className="flex items-center flex-1 gap-3">
            <img
              src="/images/avatars/image-amyrobson.webp"
              alt="amy robson profile picture"
              className="w-8 h-8"
            />
            <span className="font-bold">amyrobson</span>
            <span>1 month ago</span>
          </div>
          <div className="text-moderate-blue font-bold flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Reply
          </div>
        </div>
        <div>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
            facere debitis sunt voluptates eveniet blanditiis vitae odio
            perspiciatis maxime. Odit atque rerum neque maxime, eos vitae esse
            repellendus iste quod aspernatur voluptatibus commodi temporibus
            voluptatum cupiditate perspiciatis dolorem tempore autem officiis
            ex? Dolores architecto placeat deleniti a beatae. Perferendis.
          </p>
        </div>
      </div>
    </div>
  );
}
