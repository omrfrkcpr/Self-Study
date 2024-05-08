import Swal from "sweetalert2";

export enum SweetAlertIcons {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  QUESTION = "question",
}

export const notify = (msg: string, icon: SweetAlertIcons) => {
  Swal.fire({
    title: "Ömer Todo App",
    text: msg,
    icon: icon,
    timer: 3000,
    confirmButtonText: "Cool",
  });
};
