function AppItems({ AllItems }) {
  return (
    <div className="text-left pb-4">
      {AllItems.map((items) => (
        <div className="row" key={items.name}>
          <div className="col-sm-6 ">
            <p className="text-left">{items.name}</p>
          </div>
          <div className="col-sm-4">
            <p>{items.date}</p>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-danger ">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppItems;
