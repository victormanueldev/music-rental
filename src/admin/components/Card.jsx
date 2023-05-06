import { StarIcon } from './StarIcon';

export const Card = ({
  image = '/public/MusicRental.svg',
  name = 'Track Name Of The Song Selected by the User',
  duration = 131,
  unitPrice = 199,
  artistName = 'Artist',
  popularity = 199
}) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img className="w-full h-auto rounded-t-xl" src={image} alt="Image Description"></img>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{name}</h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">{artistName}</p>
        <div className="flex flex-row">
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
        </div>
        <div className="flex flex-row items-center place-content-between">
          <p className="text-xl font-semibold">$ {unitPrice}</p>
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
