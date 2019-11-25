import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    color: "#ECc968",
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 2),
    fontSize: "24px",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  loginButton: {
    marginLeft: "32px",
    backgroundColor: "#EC9120",
    border: "1px solid #EC9120",
    borderRadius: "24px",
    color: "white"
  },
  footer: {
    marginTop: "40px",
    backgroundColor: "#3F51B5",
    padding: theme.spacing(6),
    height: "300px",
    display: "flex",
    alignContent: "space-between",
    justifyContent: "space-between"
  },
  image: {
    width: "100%"
  },
  footerContainer: {
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
    color: "whitesmoke"
  },
  footerTitle: {
    color: "#ECc968",
    marginBottom: "20px",
    textAlign: "center"
  }
}));

export default useStyles;
