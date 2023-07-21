import styled from "@emotion/styled";

export const TelLink = styled("a")(({}) => ({
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "inherit",
}));

export const PriceBlock = styled("div")(({}) => ({}));

export const PriceElement = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5px",
  "& > span": {
    fontSize: "0.875rem",
    lineHeight: "1.43",
    color: "rgba(0, 0, 0, 0.6)",
  },
}));

export const Price = styled("span")(({}) => ({
  width: "50px",
}));

export const PriceTitle = styled("span")(({}) => ({
  width: "250px",
}));

export const PriceContainer = styled("div")(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));
