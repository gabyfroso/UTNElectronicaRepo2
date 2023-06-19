import styles from "./components/admin.module.css";
import PositionedMenu from "./components/navAdmin";

function Admin() {
  const admin = sessionStorage.getItem("admins");
  const result = JSON.parse(admin);

  return (
    <div className={styles.panelAdmin}>
      <nav className={styles.containerNav}>
        <h2>Panel Administrador</h2>
        <h3>Bienvenido {result.user}</h3>
        <PositionedMenu />
      </nav>
      
    </div>
  );
}

export default Admin;
