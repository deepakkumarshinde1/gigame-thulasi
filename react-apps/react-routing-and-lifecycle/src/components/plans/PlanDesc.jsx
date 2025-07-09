import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function PlanDesc() {
  let { planId } = useParams();
  useEffect(() => {
    console.log(planId);
  }, [planId]);
  return <div>PlanDesc </div>;
}

export default PlanDesc;
