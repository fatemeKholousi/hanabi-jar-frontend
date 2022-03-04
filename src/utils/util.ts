export const getAppLanguages = () => {
  const value = window.localStorage.getItem("lang");
  if (value === "fa") return "fa";
  if (value === "en") return "en";
  window.localStorage.setItem("lang", "fa");
  return "fa";
};
