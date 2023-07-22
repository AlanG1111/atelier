import styled from "@emotion/styled";
// eslint-disable-next-line no-empty-pattern
export const TelLink = styled("a")(({}) => ({
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "inherit",
}));
// eslint-disable-next-line no-empty-pattern
export const PriceBlock = styled("div")(({}) => ({}));
// eslint-disable-next-line no-empty-pattern
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
// eslint-disable-next-line no-empty-pattern
export const Price = styled("span")(({}) => ({
  width: "50px",
}));
// eslint-disable-next-line no-empty-pattern
export const PriceTitle = styled("span")(({}) => ({
  width: "250px",
}));
// eslint-disable-next-line no-empty-pattern
export const PriceContainer = styled("div")(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));
