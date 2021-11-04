import { useEffect, useContext, useState } from "react";
import StudContext from "../../../context/student/studContext";
import M from "materialize-css/dist/js/materialize.min.js";
import AlertContext from "../../../context/alert/alertContext";
import Preloader from "../../layout/Preloader/Preloader";
import StudMess from "../../layout/Student/Chat/StudMess";
import StudUsers from "../../layout/Student/Chat/StudUsers";

const StudChat = ({ tabKey }) => {
  const studContext = useContext(StudContext);
  const alertContext = useContext(AlertContext);

  const { loadMessages, messages, error, counsellors, loadCounsellors } =
    studContext;
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
    if (tabKey === "studchat") {
      loadCounsellors();
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
  if (!counsellors) {
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
      <StudUsers
        setActive={setActive}
        setAlert={setAlert}
        users={counsellors}
      />
      <StudMess setAlert={setAlert} messages={messages} active={active} />
    </div>
  );
};

export default StudChat;
