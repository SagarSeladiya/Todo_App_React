import React from "react";

function AppItems({ AllItems, onHandDelete }) {
  const handelDelete = (item) => {
    onHandDelete(item);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {AllItems.map((items, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">{items.name}</h3>
                <p className="card-text font-weight-bold">
                  <b>Due Date:</b> {items.date}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handelDelete(items.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppItems;
