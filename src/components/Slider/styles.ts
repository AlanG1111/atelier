import styled from "@emotion/styled";
// eslint-disable-next-line no-empty-pattern
export const PriceBlock = styled("div")(({}) => ({
  minHeight: "300px",
}));
// eslint-disable-next-line no-empty-pattern
export const PriceElement = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5px",
  gap: "10px",
  "& > span": {
    fontSize: "0.875rem",
    lineHeight: "1.43",
    color: "rgba(0, 0, 0, 0.6)",
  },
}));
// eslint-disable-next-line no-empty-pattern
export const Price = styled("span")(({}) => ({
  width: "70px",
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
// eslint-disable-next-line no-empty-pattern
export const ArrowContainer = styled("div")(({}) => ({
  cursor: "pointer",
  "& svg": {
    fill: "rgba(188, 133, 133, 0.5)",
  },
}));
// eslint-disable-next-line no-empty-pattern
export const Controls = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  marginTop: "10px",
}));
