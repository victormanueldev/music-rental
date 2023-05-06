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
          <p className="text-2xl">$ {unitPrice}</p>
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Add
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
