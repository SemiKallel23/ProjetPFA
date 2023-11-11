import React, { useEffect, useState } from "react";
import { verifConfirmEmailTokenApi } from "../../Api/Auth";
import { Rings } from "react-loader-spinner";

export default function ConfirmEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isNotAuthorized, setIsNotAuthorized] = useState(false);
  const verifToken = async () => {
    setIsLoading(true);
    const resp = await verifConfirmEmailTokenApi();
    if (resp && resp?.statusCode === 200) {
      setIsEmailVerified(true);
    } else {
      setIsNotAuthorized(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    verifToken();
  }, []);
  return (
    <div className="flex justify-center items-center w-100 h-100">
      {isLoading && (
        <Rings
          height="200"
          width="200"
          color="#7A00E6"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      )}
    </div>
  );
}
