import React from "react";

const EditInfo = ({ item, setItem, putTutorial }) => {
  const { title, description } = item;
  return (
    <div
      class="modal fade"
      id="editModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fs-5" id="exampleModalLabel">
              Modal
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {/* inputs */}
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                id="title"
                className="form-control mt-2"
                value={title || ""}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <br />
              <input
                type="text"
                id="desc"
                className="form-control mt-2"
                value={description || ""}
                onChange={(e) =>
                  setItem({ ...item, description: e.target.value })
                }
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => putTutorial(item)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
