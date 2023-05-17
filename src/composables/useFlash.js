import Swal from "sweetalert2";

export function useFlash() {
  const flashMessage = (message) => {
    return Swal.fire("Success!", message, "success");
  };

  return { flashMessage };
}
