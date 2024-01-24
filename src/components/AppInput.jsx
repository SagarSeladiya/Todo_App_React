function AppInput() {


  return (
    <div className="pb-4">
      <div className="row">
        <div className="col-sm-6">
          <input placeholder="Enter Value" type="text"></input>
        </div>
        <div className="col-sm-4">
          <input placeholder="Enter Date" type="date"></input>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success text-left">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AppInput;
