import { useAccount, useIsAuthenticated, useMsal } from "@azure/msal-react";

export const Navbar = (props: any) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const isAuthenticated = useIsAuthenticated();

  // PLEASE NOTE : getActiveAccount not working for some reason, So used useAccounts hook
  // const [name, setName] = useState(null);
  // useEffect(() => {
  //   const currentAccount = instance.getActiveAccount();

  //   if (currentAccount) {
  //     setName(currentAccount.name);
  //   }
  // }, [instance]);

  return (
    <>
      <div>
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? (
          <>
            <span>Signed In as , </span>
          </>
        ) : (
          <span>Signout </span>
        )}
      </div>

      {props.children}
    </>
  );
};
