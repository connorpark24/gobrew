import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#0E8FFF",
  secondary: "#071F28",
  gray: "#83829A",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  medium: 24,
  large: 28,
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
    padding: 20,
    flexDirection: "column",
  },
  header: {
    fontSize: 35,
    color: "black",
    fontWeight: "300",
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 0.25,
    borderBottomWidth: 0.25,
    borderRadius: 8,
    borderColor: "grey",
    padding: 10,
    width: "90%",
  },
  authButton: {
    backgroundColor: COLORS.primary,
    width: 320,
    height: 50,
    borderRadius: 12,
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
    fontWeight: "300",
  },
  regular: {
    fontSize: 16,
    fontWeight: "300",
  },
  medium: {
    fontSize: 22,
    fontWeight: "300",
  },
  large: {
    fontSize: 30,
    fontWeight: "300",
  },
});

export { COLORS, FONT, SIZES, SHADOWS, STYLES, FONTSTYLES };
