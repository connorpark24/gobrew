import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#0E8FFF",
  secondary: "#071F28",
  gray: "#83829A",
};

const SHADOWS = {
  main: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const STYLES = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
  },
  header: {
    fontSize: 35,
    color: "black",
    fontWeight: "600",
    marginBottom: 20,
  },
  authInputContainer: {
    borderWidth: 0.25,
    borderBottomWidth: 0.25,
    borderRadius: 8,
    borderColor: "grey",
    padding: 10,
    width: "100%",
    height: 52,
  },
  authButton: {
    backgroundColor: COLORS.primary,
    width: 320,
    height: 40,
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileInputContainer: {
    borderWidth: 0.25,
    borderBottomWidth: 0.25,
    borderRadius: 8,
    borderColor: "grey",
    padding: 10,
    width: "100%",
    height: 40,
  },
  authButton: {
    backgroundColor: COLORS.primary,
    width: "90%",
    height: 45,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    columnGap: 8,
    rowGap: 6,
  },
});

const FONTSTYLES = StyleSheet.create({
  small: {
    fontSize: 12,
    fontWeight: "400",
  },
  regular: {
    fontSize: 16,
    fontWeight: "400",
  },
  medium: {
    fontSize: 22,
    fontWeight: "400",
  },
  large: {
    fontSize: 30,
    fontWeight: "400",
  },
});

export { COLORS, SHADOWS, STYLES, FONTSTYLES };
