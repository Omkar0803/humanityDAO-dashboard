import React from "react";

const Todo = () => {
  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <p className="text-lg text-gray-400">page</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          To-do details
        </p>
      </div>
      <div className="mainContainer m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl mx-4">
        <div className="task flex gap-7 items-center my-5">
          <input
            className="h-10 w-10 border border-gray-300 transition duration-200"
            type="checkbox"
            value=""
          />
          <label className="text-3xl font-bold">To-Do 1</label>
        </div>
        <div className="details text-lg my-14 gap-5 flex flex-col font-medium">
          <p>Project :</p>
          <p>Assignees :</p>
          <p>Due On :</p>
          <p>TimeLine :</p>
        </div>
        <div className="description">
          <h3 className="text-2xl font-semibold">Description :</h3>
          <p className="my-3 mr-10">
            do consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className="commentSection my-32">
          <h3 className="text-2xl font-semibold">Comments :</h3>
        </div>
      </div>
    </div>
  );
};

export default Todo;
