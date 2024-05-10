import Swal from "sweetalert2";

export enum SweetAlertIcons {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  QUESTION = "question",
}
export enum SweetPosition {
  TopStart = "top-start",
  Center = "center",
  BottomEnd = "bottom-end",
}
export const notify = (
  msg: string,
  icon: SweetAlertIcons,
  position: SweetPosition
) =>
  Swal.fire({
    title: "Anthony Todo App!",
    text: msg,
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
    position: position,
  });
