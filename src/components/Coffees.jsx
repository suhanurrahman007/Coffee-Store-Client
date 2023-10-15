import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = coffees.filter(coffee => coffee._id !== id)
              setCoffees(remaining)
            }
        })
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center">
          <div className="mx-5">
            <h2 className="card-title">{name}</h2>
            <p>{supplier}</p>
            <p>{chef}</p>
            <p>{details}</p> 
          </div>
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn btn-active">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffees;
