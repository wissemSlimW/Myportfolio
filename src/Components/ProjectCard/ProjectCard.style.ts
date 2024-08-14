import { createUseStyles } from "react-jss";

export const useProjectCardStyles = createUseStyles((theme: AppTheme) => ({
  cardContainer: {
    width: 320,
    height: 425,
    padding: 5,
    position: "relative",
    cursor: "pointer",
    "&:hover $cardBlockContent": {
      transform: "rotateY(180deg)",
    },
  },
  cardBlockContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "all .8s",
    transformStyle: "preserve-3d",
  },
  cardThumbnailBack: {
    transform: "rotateY(180deg)",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 25,
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  cardThumbnail: {
    boxShadow: "inset 0 0 7px #00000040",
    padding: 4,
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 25,
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  thumbContent: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  thumbTitleContainer: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    padding: 20,
    boxShadow: "inset #00000052 -8px -8px 20px 10px",
    "&>span": {
      fontSize: 28,
      fontWeight: 700,
      color: theme.colorPrimary,
      background: "#00000052",
      borderRadius: 20,
      padding: 10,
    },
  },
  thumbnailImg: {
    filter: "brightness(0.8)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
  },
  cardBlock: {
    padding: 4,
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: 25,
  },
  hoverAnimationDark: {
    "&:hover $animationContainer": { display: "flex" },
  },
  hoverAnimationLight: {
    "&:hover": {
      "&>div>:last-child": {
        backgroundColor: theme.colorPrimaryLight,
      },
    },
  },
  card: {
    backgroundColor: theme.colorWhite,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 15,
    gap: 10,
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 15,
    overflow: "hidden",
    objectPosition: "center",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  },
  buttonStyle: {
    marginBlockStart: "auto ",
    paddingBlock: 10,
    paddingInline: 20,
    "&&&": {
      textTransform: "none",
      borderRadius: 25,
      fontWeight: 600,
      backgroundColor: theme.colorPrimary,
    },
  },
  animationContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    display: "none",
  },
  cardAnimation: {
    aspectRatio: 1,
    height: "150%",
    animation: " $rotate  8s infinite linear",
    borderRadius: 15,
    background: `conic-gradient( ${theme.colorPrimary} 0deg ,
        transparent 80deg , transparent 180deg ,
        ${theme.colorPrimary} 180deg ,
        transparent 260deg , transparent 360deg )`,
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(-360deg)",
    },
  },
  descriptionContainer: {
    flex: 1,
    overflow: "hidden",
    display: "flex",

    "&>div": {
      fontSize: 14,
      fontWeight: 400,
      maxHeight: 106,
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 4,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.colorPrimary,
  },
  FlipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-30",
    boxShadow: "8 4px 8px 0 rgba(B, 8, 8, 8.7)",
  },
  flipCard: {
    "&:hover $FlipCardInner": {
      transform: "rotateY(180deg)",
    },
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  backThumbImgContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    width: "100%",
    borderRadius: 15,
  },
}));
