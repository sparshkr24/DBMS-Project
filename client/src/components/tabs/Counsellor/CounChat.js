import { useEffect, useContext, useState } from "react";
import CounContext from "../../../context/counsellor/counContext";
import M from "materialize-css/dist/js/materialize.min.js";
import AlertContext from "../../../context/alert/alertContext";
import Preloader from "../../layout/Preloader/Preloader";
import CounMess from "../../layout/Counsellor/Chat/CounMess";
import CounUsers from "../../layout/Counsellor/Chat/CounUsers";

const CounChat = ({ tabKey }) => {
  const counContext = useContext(CounContext);
  const alertContext = useContext(AlertContext);

  const { loadMessages, messages, error, students, loadStudents } = counContext;
  const { setAlert } = alertContext;

  const [active, setActive] = useState(0);

  // Load the user when dashboard is rendered
  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();

    if (error) {
      setAlert(error, "danger");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (tabKey === "chat") {
      loadStudents();
      loadMessages();
    }
    // eslint-disable-next-line
  }, [tabKey]);

  if (!messages) {
    return (
      <div style={{ marginTop: "3.5em" }}>
        <Preloader />
      </div>
    );
  }
  if (!students) {
    return (
      <div style={{ marginTop: "3.5em" }}>
        <Preloader />
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "5em",
        width: "80%",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        border: "3px solid black",
        marginLeft: "10%",
        height: "600px",
      }}
    >
      <CounUsers setActive={setActive} setAlert={setAlert} users={students} />
      <CounMess setAlert={setAlert} messages={messages} active={active} />
    </div>
  );
};

export default CounChat;
