function AppItems() {
  let name = "Milk";
  let date = "23/01/2024";
  return (
    <div className="text-left pb-4">
      <div className="row">
        <div className="col-sm-6 ">
          <p className="text-left">{name}</p>
        </div>
        <div className="col-sm-4">
          <p>{date}</p>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-danger ">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default AppItems;
