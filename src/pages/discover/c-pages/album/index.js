import { Button, Result } from "antd";
import React, { memo } from "react";
import { useHistory } from "react-router";

export default memo(function Album() {
  const history = useHistory();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={(e) => {
              history.push("/");
            }}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
});
