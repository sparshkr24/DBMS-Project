import { Fragment } from "react";
import { Card, Row, Col, Icon } from "react-materialize";

const StudCard = ({ user }) => {
  const {
    stud_name,
    stud_gender,
    stud_phone,
    stud_dept,
    stud_branch,
    roll_no,
  } = user;

  return (
    <Row style={{ margin: "0" }}>
      <Col m={6} s={12} style={{ width: "400px" }}>
        <Card
          actions={[]}
          className='z-depth-1'
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName='white-text'
          title={stud_name}
        >
          <Fragment>
            <strong>{roll_no}</strong>
            <br />
            {stud_branch}
            <br />
            {stud_dept}
            <br />
            {stud_gender}
            <br />
            {stud_phone}
          </Fragment>
        </Card>
      </Col>
    </Row>
  );
};

export default StudCard;
