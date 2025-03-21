import { Link } from "react-router-dom";

const EstatesCard = ({ postItem }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="company flex items-center justify-between">
        <img src="/images/user.png" alt="company" />
        <Link className="text-secondary text-xl">{postItem.Account.name}</Link>
      </div>
      <div className="h-56 w-full">
        <img
          className="mx-auto h-full dark:hidden"
          src={`${import.meta.env.VITE_API_URL}${postItem.mainImageUrl}`}
          alt="postImg"
        />
      </div>
      <div className="pt-6">
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl leading-tight font-extrabold text-gray-900 dark:text-white">
            ${postItem.salePrice}
          </p>

          <button
            type="button"
            className="bg-primary hover:text-primary border-primary inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:border hover:bg-white"
          >
            تصفح العقار
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstatesCard;
