import { useAccess } from "@umijs/max";
import { Navigate } from "@umijs/max";
import { Access } from "@umijs/max";
import { useModel} from "@umijs/max";

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  
  const access = useAccess();

  return (
    <div>
      <Access accessible={!access.canUser}>
        <Navigate to="/" />
      </Access>
      <Access accessible={access.canUser}>
        <h1>Secret page</h1>
      </Access>
    </div>
  );
};