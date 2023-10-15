import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = { name, chef, supplier, details, photo };
    console.log(coffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Wow....!",
            text: "Coffee Added Successfully.!",
          });
        }
      });
  };
  return (
    <div className="px-20 py-5 bg-[#F4F3F0]">
      <h1 className="text-3xl font-extrabold text-center mb-14">
        Add New Coffee
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="grid grid-cols-2 gap-5">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* chef */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* supplier */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  name="details"
                  type="text"
                  placeholder="Enter coffee Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" space-y-5">
            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter coffee photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* submit */}
            <div className="form-control">
              <label className="input-group">
                <input
                  type="submit"
                  value="Add Coffee"
                  className="input input-bordered w-full text-white bg-blue-950"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
